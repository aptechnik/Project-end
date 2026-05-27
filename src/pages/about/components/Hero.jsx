function Hero() {
  return (
    <section className="flex bg-[url('/image/about/building.png')] bg-center min-h-screen">
      <div className="flex flex-col flex-1 justify-center items-center gap-16 bg-[#97979780] dark:bg-black/75 backdrop-blur-xs dark:backdrop-blur-sm py-12 text-black dark:text-white">
        <div className="flex gap-16 container">
          <div className="flex-2 gap-4 grid grid-cols-2">
            <div className="flex flex-col gap-8 col-span-2 p-4 border rounded-xl">
              <span className="font-medium text-5xl">
                Профессиональное обучение (по отраслям)
              </span>
              <span className="font-extralight text-3xl">
                Программа ЮФУ, которая готовит специалистов для ключевых
                секторов экономики. Наша специализация — подготовка
                <u>логистов</u>: управление перевозками, складская логистика,
                организация цепей поставок.
              </span>
              <span className="font-extralight text-3xl">
                Программа ориентирована на логистику: студенты работают с
                реальными кейсами партнёров и проходят стажировки. Второй
                профиль — педагогический — даёт возможность работать в
                профобразовании, но ядро подготовки — компетенции логиста.
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-4xl">
                Ключевые преимущества
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-4">
                  <img
                    src="/image/about/advantage/advantage1.svg"
                    alt="advantage1"
                    width={70}
                    className="mt-2"
                  />
                  <span className="font-extralight text-3xl">
                    Практика у лидеров отрасли: стажировки в логистических
                    компаниях и колледжах
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <img
                    src="/image/about/advantage/advantage2.svg"
                    alt="advantage2"
                    width={70}
                    className="mt-2"
                  />
                  <span className="font-extralight text-3xl">
                    Двойная компетенция: профиль «Логистика» «Педагогика» с
                    навыками под реальный бизнес
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <img
                    src="/image/about/advantage/advantage3.svg"
                    alt="advantage3"
                    width={70}
                    className="mt-2"
                  />
                  <span className="font-extralight text-3xl">
                    Гибкий график: очная форма, но с возможностью совмещать с
                    работой
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <img
                    src="/image/about/advantage/advantage4.svg"
                    alt="advantage4"
                    width={70}
                    className="mt-2"
                  />
                  <span className="font-extralight text-3xl">
                    Современные инструменты: доступ к программам для логистики и
                    электронным ресурсам
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 p-4 border rounded-xl">
              <span className="font-medium text-5xl">
                Какие будут результаты
              </span>
              <span className="font-extralight text-3xl">
                Выпускники получают диплом ЮФУ и уходят в логистические компании
                (транспорт, склады, снабжение) или в педагогику (колледжи,
                корпоративные университеты). Карьерный центр помогает с
                трудоустройством, а сопровождение длится 6 месяцев после
                выпуска.
              </span>
              <div className="flex justify-center gap-8">
                <a href="https://sfedu.ru" target="_blank">
                  <button className="bg-black hover:bg-gray-900 px-8 py-2 rounded-xl font-extralight text-white text-xl tracking-wider transition-colors cursor-pointer">
                    Узнать больше
                  </button>
                </a>
                <a href="https://sfedu.ru" target="_blank">
                  <button className="bg-white hover:bg-gray-300 px-8 py-2 rounded-xl font-extralight text-black text-xl tracking-wider transition-colors cursor-pointer">
                    Записаться
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <img
              src="/image/about/course.png"
              alt="course"
              width="100%"
              className="rounded-2xl"
            />
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 rounded-full size-2.5"></div>
              <span className="font-extralight text-2xl">
                Форма обучения: Очная
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-lime-500 rounded-full size-2.5"></div>
              <span className="font-extralight text-2xl">
                Длительность обучения: 4 года (Бакалавриат)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-cyan-500 rounded-full size-2.5"></div>
              <span className="font-extralight text-2xl">
                Бюджетные места: 18 мест
              </span>
            </div>
            <a href="https://sfedu.ru" target="_blank">
              <button className="bg-black hover:bg-gray-900 mt-8 p-8 rounded-xl w-full font-normal text-white text-4xl tracking-wider transition-colors cursor-pointer">
                Записаться на курс
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
