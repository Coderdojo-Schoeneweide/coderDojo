// Blog Parser - Extract blog posts from public/blog/ HTML files
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

export interface BlogPost {
    folder: string;
    title: string;
    publishDate: string;
    authors: string[];
    readingTime: string;
    description: string;
    keywords: string[];
    content: string;
    tags: string[];
    excerpt: string;
    slug: string;
    url: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const blogDir = join(process.cwd(), "public", "blog");
        const entries = await readdir(blogDir, { withFileTypes: true });

        const blogPosts: BlogPost[] = [];

        for (const entry of entries) {
            if (entry.isDirectory() && entry.name.match(/^\d{4}-\d{2}-\d{2}-/)) {
                const postPath = join(blogDir, entry.name, "index.html");
                try {
                    const html = await readFile(postPath, "utf-8");
                    const post = parseBlogHTML(html, entry.name);
                    if (post) {
                        blogPosts.push(post);
                    }
                } catch (error) {
                    console.warn(`Could not read blog post: ${entry.name}`, error);
                }
            }
        }

        // Sort by date (newest first)
        return blogPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    } catch (error) {
        console.error("Error reading blog posts:", error);
        return [];
    }
}

function parseBlogHTML(html: string, folder: string): BlogPost | null {
    try {
        // Extract title
        const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/s);
        const title = titleMatch ? cleanHtml(titleMatch[1]) : "Untitled";

        // Extract description from meta tag
        const descriptionMatch = html.match(/<meta name=description content="([^"]*)">/);
        const description = descriptionMatch ? descriptionMatch[1] : "";

        // Extract keywords from meta tag
        const keywordsMatch = html.match(/<meta name=keywords content="([^"]*)">/);
        const keywords = keywordsMatch ? keywordsMatch[1].split(",").map(k => k.trim()) : [];

        // Extract publish date
        const dateMatch = html.match(/<span>Veröffentlicht:\s*([^<]+)<\/span>/);
        let publishDate = "";
        if (dateMatch) {
            publishDate = parseGermanDate(dateMatch[1].trim());
        } else {
            // Fallback to folder name date
            const folderDateMatch = folder.match(/^(\d{4}-\d{2}-\d{2})-/);
            publishDate = folderDateMatch ? folderDateMatch[1] : "";
        }

        // Extract authors
        const authorsMatch = html.match(/<span>Verfasst von:\s*(.*?)<\/span>/s);
        let authors: string[] = [];
        if (authorsMatch) {
            const authorsText = cleanHtml(authorsMatch[1]);
            authors = authorsText.split(",").map(a => a.trim()).filter(a => a);
        }

        // Extract reading time
        const readingTimeMatch = html.match(/<span>Lesedauer ca\.\s*([^<]+)<\/span>/);
        const readingTime = readingTimeMatch ? readingTimeMatch[1].trim() : "";

        // Extract main content
        const contentMatch = html.match(/<div id=blog-content>(.*?)<\/div>/s);
        const content = contentMatch ? cleanHtml(contentMatch[1]) : "";

        // Extract tags
        const tagsMatch = html.match(/<ul class=tags>(.*?)<\/ul>/s);
        let tags: string[] = [];
        if (tagsMatch) {
            const tagMatches = tagsMatch[1].match(/<li>#([^<]+)<\/li>/g);
            if (tagMatches) {
                tags = tagMatches.map(tag => tag.replace(/<li>#([^<]+)<\/li>/, "$1"));
            }
        }

        // Create excerpt (first paragraph or first 200 chars)
        const firstParagraph = content.match(/<p[^>]*>(.*?)<\/p>/s);
        let excerpt = firstParagraph ? cleanHtml(firstParagraph[1]) : content;
        if (excerpt.length > 200) {
            excerpt = excerpt.substring(0, 200) + "...";
        }

        // Generate slug and URL
        const slug = folder;
        const url = `/blog/${slug}`;

        return {
            folder,
            title,
            publishDate,
            authors,
            readingTime,
            description,
            keywords,
            content,
            tags,
            excerpt,
            slug,
            url
        };
    } catch (error) {
        console.error(`Error parsing blog post ${folder}:`, error);
        return null;
    }
}

function cleanHtml(html: string): string {
    return html
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, " ") // Normalize whitespace
        .trim();
}

function parseGermanDate(dateStr: string): string {
    // Convert German date format "25.01.2023" to ISO format "2023-01-25"
    const match = dateStr.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);
    if (match) {
        const [, day, month, year] = match;
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
    return dateStr;
}
