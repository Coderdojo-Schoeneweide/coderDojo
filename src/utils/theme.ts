export interface ThemeVariants {
    backgrounds: Record<string, string>
    textColors: Record<string, string>
}

export const themeVariants: ThemeVariants = {
    backgrounds: {
        dark: "bg-[#463d5c] dark:bg-[#23212b]",
        light: "bg-[#a5c7c0] dark:bg-[#2d2a38]",
        header: "bg-white dark:bg-gray-800",
        footer: "bg-[#47405a]",
        accent: "bg-gradient-to-br from-orange-100 via-white to-orange-200 dark:from-[#23212b] dark:via-[#2d2a38] dark:to-[#463d5c]",
        primary: "bg-gradient-to-br from-blue-500 to-purple-600",
        secondary: "bg-gray-100 dark:bg-gray-800",
        transparent: "bg-transparent",
    },
    textColors: {
        white: "text-white",
        gray: "text-gray-800 dark:text-white",
        dark: "text-gray-900",
        light: "text-gray-100",
        primary: "text-blue-600 dark:text-blue-400",
        secondary: "text-gray-600 dark:text-gray-400",
    }
}

export function getBackgroundClasses(variant: string): string {
    return themeVariants.backgrounds[variant] || themeVariants.backgrounds.dark
}

export function getTextClasses(variant: string): string {
    return themeVariants.textColors[variant] || themeVariants.textColors.white
}

export type BackgroundVariant = keyof typeof themeVariants.backgrounds
export type TextColorVariant = keyof typeof themeVariants.textColors
