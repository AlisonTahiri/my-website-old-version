import Image from "next/image";
import LangCase from "./LangCase";
import { Language } from "./types";

type IProps = {
  langData: Language[];
  techData: Language[];
};

const Personal: React.FC<IProps> = ({ langData, techData }) => {
  return (
    <section
      id="personal"
      className="py-6 min-h-screen-2rem bg-customlight dark:bg-darkgray"
    >
      <div className="container grid items-center content-center mx-auto md:gap-10 md:px-4 xl:grid-cols-2">
        <div className="hidden lg:block">
          <Image
            data-aos="flip-up"
            height={160}
            width={220}
            layout="responsive"
            alt="Illustration of me working on laptop"
            src="/personal-info.svg"
          />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay={150}
          className="p-6 mx-6 mt-6 bg-white rounded-lg dark:bg-lightgray text-text sm:mt-0 sm:mx-0"
        >
          <div>
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Personal Information
            </h2>
            <p className="mb-4">
              Hi, I&apos;m Alison. I&apos;m a Frontend Developer from Tirana,
              currently working as a freelancer.
            </p>
            <p className="mb-4">
              I&#39;ve studied Business Management at SUNY (Empire State
              College). I have always been attracted from computers and
              technology and ultimately decided to switch my career during the
              Covid-19 pandemic.
            </p>
            <p className="mb-4">
              My path in web dev started with an online course from Codecademy,
              the “Web Development Path”. After that, I continued to develop my
              skills by learning from many other online resources such as
              youtube channels, dev blogs, Stack Overflow etc.
            </p>
            <p>
              For more info about my skills, you can have a look at my CV{" "}
              <a
                className="underline transition-colors duration-300 hover:text-primary"
                href="/AlisonTahiriCV.pdf"
                target="_blank"
                rel="noopener"
              >
                here
              </a>
              or just keep scrolling below to some of my projects.
            </p>
          </div>
        </div>
      </div>
      <div className="container flex justify-around mx-auto lg:justify-between ">
        <LangCase
          title="Tech I use:"
          lang={techData}
          aosDirection="flip-down"
        />
        <LangCase
          title="Languages I know:"
          lang={langData}
          aosDelay={150}
          aosDirection="flip-down"
        />
      </div>
    </section>
  );
};

export default Personal;
