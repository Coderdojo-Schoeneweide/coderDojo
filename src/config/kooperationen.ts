export interface Partner {
    src: string;
    alt: string;
}

export interface KooperationenPageData {
    hero: {
        title: string;
        content: string[];
        background: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'dark' | 'light';
    };
    partners: {
        title: string;
        items: Partner[];
    };
}

export const kooperationenPageData: KooperationenPageData = {
    hero: {
        title: "Kooperationen",
        content: [
            "Sie sind bei einer Schule oder einer anderen Bildungseinrichtung und wollen mit uns kooperieren?",
            'Schreiben Sie uns eine Mail an <a href="mailto:hallo@coderdojo-schoeneweide.de" class="text-blue-700 underline dark:text-blue-300">hallo@coderdojo-schoeneweide.de</a><br />oder füllen Sie unser <a href="#" class="text-blue-700 underline dark:text-blue-300">Kontaktformular</a> aus.',
            'Sie möchten wissen, was genau wir anbieten?<br />Sehen Sie unsere <a href="#" class="text-blue-700 underline dark:text-blue-300">Workshop Konzepte</a>'
        ],
        background: 'light'
    },
    partners: {
        title: "Unsere Partner",
        items: [
            { src: "/partners/partner1.png", alt: "Partner 1" },
            { src: "/partners/partner2.png", alt: "Partner 2" },
            { src: "/partners/partner3.png", alt: "Partner 3" },
            { src: "/partners/partner4.png", alt: "Partner 4" },
            { src: "/partners/partner5.png", alt: "Partner 5" },
            { src: "/partners/partner6.png", alt: "Partner 6" },
            { src: "/partners/partner7.png", alt: "Partner 7" },
            { src: "/partners/partner8.png", alt: "Partner 8" },
            { src: "/partners/partner9.png", alt: "Partner 9" },
        ]
    }
};
