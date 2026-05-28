function Hero() {
  return (
    <section className="flex bg-[url('/image/index/building.png')] bg-cover bg-center min-h-[calc(100dvh-7rem)]">
      <div className="flex flex-col flex-1 justify-center items-center gap-8 sm:gap-12 lg:gap-16 bg-black/50 px-3 sm:px-4 lg:px-6 text-white">
        <img
          src="/image/logo.svg"
          alt="logo"
          className="w-32 sm:w-40 lg:w-50"
        />
        <span className="max-w-7xl font-light text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center tracking-wider">
          Профессиональное обучение технологии
          <br className="hidden sm:block" />
          транспортно-логистических процессов
        </span>
      </div>
    </section>
  );
}

export default Hero;
