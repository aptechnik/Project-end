import NewsItem from "./NewsItem";

function News() {
  return (
    <section className="flex bg-[url('/image/index/ufu.png')] bg-cover bg-center min-h-screen">
      <div className="flex flex-col flex-1 justify-center items-center gap-16 bg-black/50 backdrop-blur-xs text-white">
        <div className="flex flex-col gap-8 container">
          <div className="flex flex-col gap-8">
            <span className="w-full font-bold text-5xl">Новости ЮФУ</span>
            <span className="w-full font-light text-4xl tracking-wider">
              Узнавай что-то новое и будь на связи с институтом!
            </span>
          </div>
          <div className="flex gap-8">
            <div className="gap-8 grid grid-cols-3 w-full">
              <NewsItem
                colSpan={2}
                imageUrl="/image/index/news/news1.png"
                text="Анонс событий Южного федерального университета"
              />
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
      </div>
    </section>
  );
}

export default News;
