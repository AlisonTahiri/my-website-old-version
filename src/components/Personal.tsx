import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import {
  i18nTextPersonalLink,
  i18nTextPersonalParagraph1,
  i18nTextPersonalParagraph2,
  i18nTextPersonalParagraph3,
  i18nTextPersonalParagraph4,
  i18nTextPersonalParagraph5,
  i18nTextPersonalTitle,
} from "../messages/i18nMessages";
import LangCase from "./LangCase";
import { Language } from "./types";

type IProps = {
  langData: Language[];
  techData: Language[];
};

const Personal: React.FC<IProps> = ({ langData, techData }) => {
  const { t } = useTranslation("personal");
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
              {t(i18nTextPersonalTitle)}
            </h2>
            <p className="mb-4">{t(i18nTextPersonalParagraph1)}</p>
            <p className="mb-4">{t(i18nTextPersonalParagraph2)}</p>
            <p className="mb-4">{t(i18nTextPersonalParagraph3)}</p>
            <p>
              {t(i18nTextPersonalParagraph4)}
              <a
                className="underline transition-colors duration-300 hover:text-primary"
                href="/alison-tahiri-resume.pdf"
                target="_blank"
                rel="noopener"
              >
                {" "}
                {t(i18nTextPersonalLink)}{" "}
              </a>
              {t(i18nTextPersonalParagraph5)}
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
