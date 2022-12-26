import useTranslation from "next-translate/useTranslation";
import {
  i18nTextProjectsCv,
  i18nTextProjectsMessage,
  i18nTextProjectsTitle,
} from "../messages/i18nMessages";
import Case from "./Case";
import { ProjectsData } from "./types";

const Projects: React.FC<{ projectsData: ProjectsData[] }> = ({
  projectsData,
}) => {
  const { t } = useTranslation("projects");
  return (
    <section id="portfolio" className="dark:bg-lightgray text-text">
      <div className="container items-center content-center py-12 mx-auto ">
        <h2
          data-aos="fade-up"
          className="mb-6 text-3xl font-bold text-center text-primary md:mb-12"
        >
          {t(i18nTextProjectsTitle)}
        </h2>
        <h3 className="text-lg">
          {t(i18nTextProjectsMessage)}{" "}
          <a
            className="underline transition-colors duration-300 hover:text-primary"
            href="/alison-tahiri-cv.pdf"
            target="_blank"
            rel="noopener"
          >
            {t(i18nTextProjectsCv)}
          </a>
          .
        </h3>
        {/* <div className="grid grid-cols-1 gap-6 mx-6 sm:mx-1 md:grid-cols-2 md:gap-12">
          {projectsData.map((project, i) => {
            const { url, content, logoAlt, src, logoWidth, tags } = project;
            return (
              <Case
                aosDelay={i * 150}
                key={i}
                url={url}
                logoAlt={logoAlt}
                src={src}
                logoWidth={logoWidth}
                tags={tags}
                content={t(content)}
              />
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
