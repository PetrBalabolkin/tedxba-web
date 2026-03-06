import CtaSection from "@/sections/CtaSection";
import ArticleCard from "@/components/ui/ArticleCard";
import { getTranslations } from "next-intl/server";

const articles = [
    {
        title: "TEDxBratislava 2023: 10 myšlienok, ktoré nás zaujali",
        date: "15. 9. 2023",
        author: "Jana Nováková",
        description: "TEDxBratislava 2023 prinieslo množstvo inšpiratívnych myšlienok. Tu je 10 z nich, ktoré nás zaujali a ktoré by ste si nemali nechať ujsť.",
        imageUrl: "/images/blog/article1.png",
        slug: "tedxbratislava-2023-10-myslienok"
    },
    {
        title: "TEDxBratislava 2023: 10 myšlienok, ktoré nás zaujali",
        date: "15. 9. 2023",
        author: "Jana Nováková",
        description: "TEDxBratislava 2023 prinieslo množstvo inšpiratívnych myšlienok. Tu je 10 z nich, ktoré nás zaujali a ktoré by ste si nemali nechať ujsť.",
        imageUrl: "/images/blog/article1.png",
        slug: "tedxbratislava-2023-10-myslienok"
    },
    {
        title: "TEDxBratislava 2023: 10 myšlienok, ktoré nás zaujali",
        date: "15. 9. 2023",
        author: "Jana Nováková",
        description: "TEDxBratislava 2023 prinieslo množstvo inšpiratívnych myšlienok. Tu je 10 z nich, ktoré nás zaujali a ktoré by ste si nemali nechať ujsť.",
        imageUrl: "/images/blog/article1.png",
        slug: "tedxbratislava-2023-10-myslienok"
    },
    {
        title: "TEDxBratislava 2023: 10 myšlienok, ktoré nás zaujali",
        date: "15. 9. 2023",
        author: "Jana Nováková",
        description: "TEDxBratislava 2023 prinieslo množstvo inšpiratívnych myšlienok. Tu je 10 z nich, ktoré nás zaujali a ktoré by ste si nemali nechať ujsť.",
        imageUrl: "/images/blog/article1.png",
        slug: "tedxbratislava-2023-10-myslienok"
    },
];

const Blog = async () => {
    const t = await getTranslations('BlogPage');
    return (
        <>
            <section className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto h-full mx-5 flex flex-col gap-4 justify-center mt-20">
                <h2 className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-[40px] text-[32px] leading-tight">
                    {t('podcast.title')}
                </h2>
                <p className="font-light md:text-xl text-lg text-txt-black-sec dark:text-txt-white-sec max-w-[780px]">
                    {t('podcast.description')}
                </p>
                {/* iframe podcast */}
            </section>
            <section className="xl:w-[1180px] lg:w-[940px] lg:mx-auto w-auto h-full mx-5 flex flex-col gap-6 justify-center md:mt-25 mt-15">
                <h2 className="font-medium text-txt-black-prim dark:text-txt-white-prim md:text-[40px] text-[32px] leading-tight">
                    {t('articles.title')}
                </h2>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                    {articles.map((article, index) => (
                        <ArticleCard
                            key={index}
                            title={article.title}
                            date={article.date}
                            author={article.author}
                            description={article.description}
                            imageUrl={article.imageUrl}
                            slug={article.slug}
                        />
                    ))}
                </div>
            </section>
            <CtaSection />
        </>
    );
};

export default Blog;