import NewsItem from "./NewsItem";

function News() {
  return (
    <section className="flex bg-[url('/image/index/ufu.png')] bg-cover bg-center min-h-screen">
      <div className="flex flex-col flex-1 justify-center items-center gap-8 sm:gap-12 lg:gap-16 bg-black/50 backdrop-blur-xs px-3 sm:px-4 lg:px-6 py-12 text-white">
        <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-7xl">
          <div className="flex flex-col gap-4 sm:gap-8">
            <span className="w-full font-bold text-3xl sm:text-4xl lg:text-5xl">
              Новости ЮФУ
            </span>
            <span className="w-full font-light text-2xl sm:text-3xl lg:text-4xl tracking-wider">
              Узнавай что-то новое и будь на связи с институтом!
            </span>
          </div>
          <div className="gap-6 sm:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
            <div className="sm:col-span-2">
              <NewsItem
                colSpan={2}
                imageUrl="/image/index/news/news1.png"
                text="Анонс событий Южного федерального университета"
              />
            </div>
            <NewsItem
              imageUrl="/image/index/news/news2.png"
              text="Защищай Родину в новых Войсках беспилотных систем"
            />
            <NewsItem
              imageUrl="/image/index/news/news3.png"
              text="ЮФУ присоединился к Пилотному проекту реформы высшего образования"
            />
            <NewsItem
              imageUrl="/image/index/news/news4.png"
              text="Южный федеральный университет исследовательского типа"
            />
            <NewsItem
              imageUrl="/image/index/news/news5.png"
              text="Студенческая весна Южного федерального университета в 2026 году пройдёт под девизом «Сила притяжения»"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
