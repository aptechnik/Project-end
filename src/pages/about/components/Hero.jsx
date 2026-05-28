function Hero() {
  return (
    <section className="flex bg-[url('/image/about/building.png')] bg-cover bg-center min-h-screen">
      <div className="flex flex-col flex-1 justify-center items-center gap-8 sm:gap-12 lg:gap-16 bg-[#97979780] dark:bg-black/75 backdrop-blur-xs dark:backdrop-blur-sm py-8 sm:py-12 text-black dark:text-white">
        <div className="flex lg:flex-row flex-col gap-8 lg:gap-16 px-3 sm:px-4 lg:px-6 w-full container">
          <div className="flex-2 gap-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col gap-4 sm:gap-8 col-span-1 sm:col-span-2 p-3 sm:p-4 border rounded-xl">
              <span className="font-medium text-3xl sm:text-4xl lg:text-5xl">
                Профессиональное обучение (по отраслям)
              </span>
              <span className="font-extralight text-xl sm:text-2xl lg:text-3xl">
                Программа ЮФУ, которая готовит специалистов для ключевых
                секторов экономики. Наша специализация — подготовка{" "}
                <u>логистов</u>: управление перевозками, складская логистика,
                организация цепей поставок.
              </span>
              <span className="font-extralight text-xl sm:text-2xl lg:text-3xl">
                Программа ориентирована на логистику: студенты работают с
                реальными кейсами партнёров и проходят стажировки. Второй
                профиль — педагогический — даёт возможность работать в
                профобразовании, но ядро подготовки — компетенции логиста.
              </span>
            </div>
            <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
              <span className="font-medium text-2xl sm:text-3xl lg:text-4xl">
                Ключевые преимущества
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-3 sm:gap-4">
                  <img
                    src="/image/about/advantage/advantage1.svg"
                    alt="advantage1"
                    width={70}
                    className="mt-2 w-12 sm:w-14 lg:w-17.5 shrink-0"
                  />
                  <span className="font-extralight text-xl sm:text-2xl lg:text-3xl">
                    Практика у лидеров отрасли: стажировки в логистических
                    компаниях и колледжах
                  </span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <img
                    src="/image/about/advantage/advantage2.svg"
                    alt="advantage2"
                    width={70}
                    className="mt-2 w-12 sm:w-14 lg:w-17.5 shrink-0"
                  />
                  <span className="font-extralight text-xl sm:text-2xl lg:text-3xl">
                    Двойная компетенция: профиль «Логистика» «Педагогика» с
                    навыками под реальный бизнес
                  </span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <img
                    src="/image/about/advantage/advantage3.svg"
                    alt="advantage3"
                    width={70}
                    className="mt-2 w-12 sm:w-14 lg:w-17.5 shrink-0"
                  />
                  <span className="font-extralight text-xl sm:text-2xl lg:text-3xl">
                    Гибкий график: очная форма, но с возможностью совмещать с
                    работой
                  </span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <img
                    src="/image/about/advantage/advantage4.svg"
                    alt="advantage4"
                    width={70}
                    className="mt-2 w-12 sm:w-14 lg:w-17.5 shrink-0"
                  />
                  <span className="font-extralight text-xl sm:text-2xl lg:text-3xl">
                    Современные инструменты: доступ к программам для логистики и
                    электронным ресурсам
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-8 sm:col-span-2 lg:col-span-1 p-3 sm:p-4 border rounded-xl">
              <span className="font-medium text-3xl sm:text-4xl lg:text-5xl">
                Какие будут результаты
              </span>
              <span className="font-extralight text-xl sm:text-2xl lg:text-3xl">
                Выпускники получают диплом ЮФУ и уходят в логистические компании
                (транспорт, склады, снабжение) или в педагогику (колледжи,
                корпоративные университеты). Карьерный центр помогает с
                трудоустройством, а сопровождение длится 6 месяцев после
                выпуска.
              </span>
              <div className="flex sm:flex-row flex-col justify-center gap-4 sm:gap-8">
                <a
                  href="https://sfedu.ru"
                  target="_blank"
                  className="inline-flex justify-center bg-black hover:bg-gray-900 px-8 py-2 rounded-xl font-extralight text-white text-lg sm:text-xl tracking-wider transition-colors"
                >
                  Узнать больше
                </a>
                <a
                  href="https://sfedu.ru"
                  target="_blank"
                  className="inline-flex justify-center bg-white hover:bg-gray-300 px-8 py-2 rounded-xl font-extralight text-black text-lg sm:text-xl tracking-wider transition-colors"
                >
                  Записаться
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <img
              src="/image/about/course.png"
              alt="course"
              className="rounded-2xl w-full"
            />
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 rounded-full size-2.5 shrink-0"></div>
              <span className="font-extralight text-lg sm:text-xl lg:text-2xl">
                Форма обучения: Очная
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-lime-500 rounded-full size-2.5 shrink-0"></div>
              <span className="font-extralight text-lg sm:text-xl lg:text-2xl">
                Длительность обучения: 4 года (Бакалавриат)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-cyan-500 rounded-full size-2.5 shrink-0"></div>
              <span className="font-extralight text-lg sm:text-xl lg:text-2xl">
                Бюджетные места: 18 мест
              </span>
            </div>
            <a
              href="https://sfedu.ru"
              target="_blank"
              className="block bg-black hover:bg-gray-900 mt-6 sm:mt-8 p-6 sm:p-8 rounded-xl w-full font-normal text-white text-2xl sm:text-3xl lg:text-4xl text-center tracking-wider transition-colors"
            >
              Записаться на курс
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
