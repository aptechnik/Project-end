function Hero() {
  return (
    <section className="flex bg-[url('/image/index/building.png')] bg-cover bg-center min-h-screen">
      <div className="flex flex-col flex-1 justify-center items-center gap-16 bg-black/50 text-white">
        <img src="/image/logo.svg" alt="logo" width={200} />
        <span className="font-light text-debug text-5xl tracking-wider">
          Профессиональное обучение технологии
          <br />
          транспортно-логистических процессов
        </span>
      </div>
    </section>
  );
}

export default Hero;
