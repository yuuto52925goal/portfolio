interface workType{
    title: string;
    place: string;
    time: string;
    description: string[];
}

export const WORKS:workType[] = [
    {
        title: "Degital Strategist", 
        place:"Remote",
        time: "Intenship Jan 2024 - Present",
        description:[
            "Managed a global online community, achieving a 239% increase in Instagram engagement",
            "Focused on key performance indicators including 6% follower conversion, 50% account reach, and 3% save rate",
            "Optimized content strategy through data analysis, leading to 890 followers"
        ]

    },
    {
        title: "Computer Science and Math Tutor",
        place: "Ensign College Salt Lake City USA",
        time: "Part Time Nov 2023 - Apr 2024",
        description: [
            "Tutored 50+ college students in Math (Algebra, Discrete Math, Calculus) and Computer Science (OOP and React), enhancing understanding and problem-solving skills",
            "Coordinated sessions and tailored teaching strategies to optimize individual learning outcomes"
    ]
    },
    {
        title: "Math and English Tutor", 
        place:"Denshin Tokyo Japan",
        time: "Part Time Jun 2022 - Aug 2023",
        description:[
            "Tutored 15+ junior high students in Japan with understanding mathematical concepts such as algebra, geometry, and fractions boosting students success",
            "Instructed 10+ junior high school students in Japan learn using English tools such as grammar and pronunciation to enhance English-speaking skills",
            "Taught students test preparation techniques increasing student success by 8 %"
        ]

    }
]