function Hero() {
  return (
    <section className="bg-[url('/image/index/building.png')] bg-cover bg-center h-screen">
      <div className="flex flex-col justify-center items-center gap-16 bg-black/50 size-full text-white">
        <img src="/image/logo.svg" alt="logo" width={200} />
        <span className="font-light text-5xl tracking-wider">
          Профессиональное обучение технологии
          <br />
          транспортно-логистических процессов
        </span>
      </div>
    </section>
  );
}

export default Hero;
