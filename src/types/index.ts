import type { BackgroundVariant, TextColorVariant } from '../utils/theme'

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    href?: string
    target?: string
    class?: string
    disabled?: boolean
}

export interface SectionProps {
    id?: string
    class?: string
}

export type IconName = 'calendar' | 'arrow' | 'external' | 'mail' | 'heart' | 'users' | 'home'

export interface HeroData {
    title: string
    subtitle: string
    primaryButton?: {
        text: string
        href: string
        target?: string
        icon?: IconName
    }
    secondaryButton?: {
        text: string
        href: string
        icon?: IconName
    }
}

export interface FeatureSectionData {
    title: string
    content: string[]
    buttons?: Array<{
        text: string
        href: string
        variant?: 'primary' | 'secondary' | 'outline'
        target?: string
        icon?: IconName
    }>
    imagePosition?: 'left' | 'right'
    backgroundColor?: BackgroundVariant
    textColor?: TextColorVariant
    image?: string
    imageAlt?: string
}

export interface PartnerData {
    src: string
    alt: string
    href?: string
}

export interface PartnersSectionData {
    title: string
    subtitle?: string
    description?: string[]
    partners: PartnerData[]
    backgroundColor?: BackgroundVariant
    textColor?: TextColorVariant
}

export interface SectionConfig {
    id: string
    type: 'hero' | 'feature' | 'partners'
    data: HeroData | FeatureSectionData | PartnersSectionData
}