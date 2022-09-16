import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { i18nTextHeroHi } from "../messages/i18nMessages";

const Hero = () => {
  const { t } = useTranslation("hero");
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen-without-nav dark:bg-light text-text"
    >
      <div className="absolute left-0 flex flex-col justify-start w-full rotate-180 -top-0.5 -lg:mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-current text-customlight dark:text-darkgray"
            fillOpacity="1"
            d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container grid items-center content-center gap-8 mx-6 lg:-mt-16 md:gap-0 sm:mx-auto md:grid-cols-2 justify-items-center">
        <div className="lg:self-end">
          <h1
            data-aos="zoom-out"
            data-aos-delay="100"
            className="mb-6 text-3xl font-semibold text-center text-text lg:text-7xl md:text-5xl"
          >
            {t(i18nTextHeroHi)}
          </h1>
          <h2
            data-aos="zoom-out"
            data-aos-delay="100"
            className="hidden text-3xl font-semibold text-center text-primary lg:text-7xl md:text-5xl md:block"
          >
            Welcome to my website!
          </h2>
        </div>
        <div data-aos="zoom-in" className="w-60 md:w-80 lg:w-6/12 xl:-mt-16">
          <Image
            className="rounded-full dark:remove-colors"
            priority
            alt="Profile picture"
            src="/alison-pic.png"
            width="240px"
            height="240px"
            layout="responsive"
          />
        </div>
        <h2
          data-aos="zoom-out"
          data-aos-delay="100"
          data-aos-offset="-200"
          className="text-3xl font-semibold text-center text-primary lg:text-7xl md:text-5xl md:hidden"
        >
          Welcome to my website!
        </h2>
      </div>

      <div className="absolute bottom-0 left-0 flex flex-col justify-start w-full lg:-mt-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-current text-customlight dark:text-darkgray"
            fillOpacity="1"
            d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
