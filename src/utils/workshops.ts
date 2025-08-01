// Workshop data parser utility
import fs from 'fs';
import path from 'path';

export interface Workshop {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    duration: string;
    age: string;
    knowledge: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    folder: string; // Added for island compatibility
}export function getWorkshops(): Workshop[] {
    const workshopsDir = path.join(process.cwd(), 'public', 'workshops');

    try {
        const dirs = fs.readdirSync(workshopsDir, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        const workshops: Workshop[] = [];

        for (const dir of dirs) {
            try {
                const indexPath = path.join(workshopsDir, dir, 'index.html');
                if (fs.existsSync(indexPath)) {
                    const htmlContent = fs.readFileSync(indexPath, 'utf-8');
                    const workshop = parseWorkshopHTML(dir, htmlContent);
                    if (workshop) {
                        workshops.push(workshop);
                    }
                }
            } catch (error) {
                console.warn(`Failed to parse workshop ${dir}:`, error);
            }
        }

        return workshops;
    } catch (error) {
        console.error('Failed to read workshops directory:', error);
        return [];
    }
}

function parseWorkshopHTML(id: string, html: string): Workshop | null {
    try {
        // Extract title from h1
        const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/s);
        const title = titleMatch ? cleanText(titleMatch[1]) : id;

        // Extract description from meta description
        const descMatch = html.match(/<meta name=description content="([^"]*)">/);
        const description = descMatch ? cleanText(descMatch[1]) : '';

        // Find image - look for pattern in img src within the workshop content
        const imgMatch = html.match(/<img src=([^>\s]*?) alt="workshop thumbnail">/);
        let image = `/workshops/${id}/${id}.jpg`; // default fallback
        if (imgMatch) {
            let imgPath = imgMatch[1];
            // Convert absolute path to relative path for static assets
            if (imgPath.startsWith('/de/workshops/')) {
                imgPath = imgPath.replace('/de/workshops/', '/workshops/');
            }
            image = imgPath;
        } else {
            // Try to find image by checking common extensions
            const workshopsDir = path.join(process.cwd(), 'public', 'workshops', id);
            if (fs.existsSync(workshopsDir)) {
                const files = fs.readdirSync(workshopsDir);
                const imageFile = files.find(file =>
                    file.toLowerCase().endsWith('.jpg') ||
                    file.toLowerCase().endsWith('.png') ||
                    file.toLowerCase().endsWith('.jpeg')
                );
                if (imageFile) {
                    image = `/workshops/${id}/${imageFile}`;
                }
            }
        }

        // Extract tags from span elements with class tag
        const tagMatches = html.matchAll(/<span class=tag>#([^<]*)<\/span>/g);
        const tags = Array.from(tagMatches).map(match => match[1]); // Remove the # symbol        // Extract duration from clock icon section
        const durationMatch = html.match(/<img class=icon src=\/images\/clock\.svg[^>]*>\s*([^<]*)/);
        const duration = durationMatch ? cleanText(durationMatch[1]) : '';

        // Extract age from user icon section
        const ageMatch = html.match(/<img class=icon src=\/images\/user\.svg[^>]*>\s*([^<]*)/);
        const age = ageMatch ? cleanText(ageMatch[1]) : '';

        // Extract knowledge from knowledge icon section
        const knowledgeMatch = html.match(/<img class=icon src=\/images\/knowledge\.svg[^>]*>\s*([^<]*)/);
        const knowledge = knowledgeMatch ? cleanText(knowledgeMatch[1]) : '';

        // Determine difficulty based on knowledge requirements
        let difficulty: "Beginner" | "Intermediate" | "Advanced" = "Beginner";
        if (knowledge.toLowerCase().includes('keine') || knowledge.toLowerCase().includes('no')) {
            difficulty = "Beginner";
        } else if (knowledge.toLowerCase().includes('grundkenntnisse') || knowledge.toLowerCase().includes('basic')) {
            difficulty = "Intermediate";
        } else if (knowledge.toLowerCase().includes('fortgeschritten') || knowledge.toLowerCase().includes('advanced')) {
            difficulty = "Advanced";
        }

        return {
            id,
            title,
            description,
            image,
            tags,
            duration,
            age,
            knowledge,
            difficulty,
            folder: id // Use id as folder name for island compatibility
        };
    } catch (error) {
        console.error(`Error parsing workshop ${id}:`, error);
        return null;
    }
}

function cleanText(text: string): string {
    return text
        .replace(/\s+/g, ' ')
        .replace(/&ldquo;/g, '"')
        .replace(/&rdquo;/g, '"')
        .replace(/&nbsp;/g, ' ')
        .trim();
}
