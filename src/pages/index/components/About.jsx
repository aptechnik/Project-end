import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex justify-center items-center bg-white dark:bg-black min-h-screen">
      <Link to="/about">
        <div className="relative flex shadow-black hover:shadow-[0_0_64px] dark:shadow-white h-125 transition-shadow duration-500 cursor-pointer container">
          <div className="flex-1 bg-[url('/image/index/students.png')] bg-cover bg-center"></div>
          <div className="flex flex-1 bg-[url('/image/index/building.png')] bg-position-[33%] bg-cover">
            <div className="flex flex-col flex-1 justify-center items-center gap-8 bg-slate-800/90 p-8 pr-24 text-white">
              <span className="font-semibold text-5xl uppercase">О нас</span>
              <span className="font-light text-2xl">
                Наше направление даёт двойную квалификацию: ты станешь
                дипломированным логистом и педагогом.Сможешь работать как в
                логистических компаниях, так и преподавать в колледжах,
                корпоративных учебных центрах или вести тренинги.
                <br />С нами ты освоишь современные цепочки поставок — и научишь
                этому других!
              </span>
            </div>
          </div>
          <svg
            width="148"
            height="993"
            viewBox="0 0 148 993"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="-top-28 -right-24 z-1 absolute"
          >
            <path
              d="M148 990.204L74.46 817L0 992.368V0H148V990.204Z"
              fill="#5282B5"
            />
          </svg>
        </div>
      </Link>
    </section>
  );
}

export default Hero;
