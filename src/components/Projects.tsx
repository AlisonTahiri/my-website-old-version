import Case from "./Case";
import { ProjectsData } from "./types";

const Projects: React.FC<{ projectsData: ProjectsData[] }> = ({
  projectsData,
}) => {
  return (
    <section id="portfolio" className="dark:bg-lightgray text-text">
      <div className="container items-center content-center py-12 mx-auto min-h-screen-2rem">
        <h2
          data-aos="fade-up"
          className="mb-6 text-3xl font-bold text-center text-primary md:mb-12"
        >
          Some of my work
        </h2>
        <div className="grid grid-cols-1 gap-6 mx-6 sm:mx-1 md:grid-cols-2 md:gap-12">
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
                content={content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
