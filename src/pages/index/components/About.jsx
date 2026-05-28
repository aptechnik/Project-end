import { Link } from "react-router-dom";

function About() {
  return (
    <section className="flex justify-center items-center bg-white dark:bg-black px-3 sm:px-4 min-h-screen">
      <Link to="/about" className="w-full container">
        <div className="relative flex md:flex-row flex-col shadow-black hover:shadow-[0_0_64px] dark:shadow-white md:h-125 min-h-75 transition-shadow duration-500">
          <div className="flex-1 bg-[url('/image/index/students.png')] bg-cover bg-center min-h-50 md:min-h-0"></div>
          <div className="flex flex-1 bg-[url('/image/index/building.png')] bg-position-[33%] bg-cover">
            <div className="flex flex-col flex-1 justify-center items-center gap-4 sm:gap-6 lg:gap-8 bg-slate-800/90 p-6 sm:p-8 lg:pr-24 text-white">
              <span className="font-semibold text-3xl sm:text-4xl lg:text-5xl uppercase">
                О нас
              </span>
              <span className="font-light text-lg sm:text-xl lg:text-2xl">
                Наше направление даёт двойную квалификацию: ты станешь
                дипломированным логистом и педагогом. Сможешь работать как в
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
            className="hidden lg:block -top-28 -right-24 z-1 absolute"
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

export default About;
