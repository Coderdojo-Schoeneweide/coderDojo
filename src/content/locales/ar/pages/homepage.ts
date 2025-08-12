// Arabic homepage content
export interface HomepageContent {
    hero: {
        title: string
        subtitle: string
        content: string[]
        background: 'light' | 'dark' | 'accent'
        primaryButton: { text: string; url: string; external?: boolean }
        secondaryButton: { text: string; url: string; external?: boolean }
    }
    sections: Array<{
        id: string
        title: string
        content: string[]
        background?: 'light' | 'dark' | 'accent'
        imagePosition?: 'left' | 'right'
        buttons?: Array<{
            text: string
            url: string
            style: 'primary' | 'secondary' | 'outline'
            external?: boolean
        }>
    }>
    partners: {
        title: string
        description: string[]
        logos: Array<{
            image: string
            name: string
        }>
    }
}

export const homepageContent: HomepageContent = {
    hero: {
        title: "CoderDojo Schöneweide",
        subtitle: "ورش عمل ملهمة في تكنولوجيا المعلومات للأطفال والمراهقين",
        content: [
            "ورش عمل مجانية في علوم الحاسوب/التكنولوجيا",
            "كل سبت ثاني من الساعة 11 صباحاً إلى 1 ظهراً",
            "للأطفال والمراهقين من عمر 7-17 سنة"
        ],
        background: "light",
        primaryButton: {
            text: "احجز تذكرة",
            url: "https://pretix.eu/dojosw/",
            external: true
        },
        secondaryButton: {
            text: "تبرع",
            url: "/ar/donate"
        }
    },
    sections: [
        {
            id: "workshops",
            title: "ورش العمل",
            background: "dark",
            content: [
                "ورش عمل مجانية في علوم الحاسوب/التكنولوجيا",
                'متى: كل سبت ثاني من الساعة 11 صباحاً إلى 1 ظهراً<br />أين: في <a href="#" class="text-primary-300 underline">المكتبة المركزية "Alte Feuerwache"</a>',
                "للأطفال والمراهقين من عمر 7-17 سنة",
                "لا حاجة لمعرفة مسبقة!",
                "تريد أن تبقى على اطلاع بورش العمل الحالية؟<br />اشترك في نشرتنا الإخبارية!"
            ],
            buttons: [
                { text: "احجز تذكرة", url: "https://pretix.eu/dojosw/", style: "primary", external: true },
                { text: "جميع ورش العمل", url: "/ar/workshops", style: "outline" },
                { text: "اشترك في النشرة", url: "/ar/newsletter", style: "primary" }
            ]
        },
        {
            id: "mentoring",
            title: "الإرشاد",
            background: "light",
            imagePosition: "left",
            content: [
                'تريد التطوع معنا؟<br />رائع! أرسل لنا بريداً إلكترونياً إلى<br /><span class="break-all">hallo@coderdojo-schoeneweide.de</span>',
                "ما يمكن توقعه:",
                '<ul class="mb-2 list-inside list-disc space-y-1 text-lg text-slate-800 dark:text-slate-200"><li>مشاركة المعرفة / تشكيل المجتمع</li><li>فريق بفرح والتزام</li><li>المساهمة بأفكارك الخاصة حول التعليم</li></ul>'
            ],
            buttons: [
                { text: "مزيد من المعلومات", url: "#mentoring", style: "primary" }
            ]
        },
        {
            id: "verein",
            title: "الجمعية",
            background: "dark",
            content: [
                "CoderDojo Schöneweide هي جمعية مسجلة<br />غير ربحية.",
                'تريد أن تصبح عضواً؟<br />اعثر على المعلومات في → <a href="#mentoring" class="text-primary-300 underline">قسم "الإرشاد"</a>',
                "تريد دعمنا بتبرع أو تصبح عضواً داعماً؟<br />معلومات حول التبرعات..."
            ],
            buttons: [
                { text: "ادعمنا بتبرع", url: "/ar/donate", style: "primary" },
                { text: "النظام الأساسي", url: "/satzung.pdf", style: "outline", external: true },
                { text: "التقارير السنوية", url: "/ar/annual-reports", style: "outline" }
            ]
        }
    ],
    partners: {
        title: "الشراكات",
        description: [
            "هل أنت في مدرسة أو مؤسسة تعليمية أخرى<br />وتريد التعاون معنا؟",
            'اكتب لنا بريداً إلكترونياً إلى <a href="mailto:hallo@coderdojo-schoeneweide.de" class="text-primary-600 underline dark:text-primary-300">hallo@coderdojo-schoeneweide.de</a><br />أو املأ <a href="/ar/contact" class="text-primary-600 underline dark:text-primary-300">نموذج الاتصال</a> الخاص بنا.',
            'تريد أن تعرف بالضبط ما نقدمه؟<br />انظر <a href="/ar/workshops" class="text-primary-600 underline dark:text-primary-300">مفاهيم ورش العمل</a> الخاصة بنا'
        ],
        logos: [
            { image: "/partners/partner1.png", name: "Partner 1" },
            { image: "/partners/partner2.png", name: "Partner 2" },
            { image: "/partners/partner3.png", name: "Partner 3" },
            { image: "/partners/partner4.png", name: "Partner 4" },
            { image: "/partners/partner5.png", name: "Partner 5" },
            { image: "/partners/partner6.png", name: "Partner 6" },
            { image: "/partners/partner7.png", name: "Partner 7" },
            { image: "/partners/partner8.png", name: "Partner 8" },
            { image: "/partners/partner9.png", name: "Partner 9" }
        ]
    }
}
