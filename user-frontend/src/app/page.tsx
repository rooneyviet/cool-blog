import NavHeader from "@/components/headerNav/NavHeader";
import articles from "@/utils/dummydata";
import Article from "@/components/Article";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      {/* <NavHeader /> */}
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto w-full max-w-6xl gap-8">
          <div className="grid grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <Article
                key={index}
                image={article.image}
                title={article.title}
                description={article.description}
                date={article.date}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
