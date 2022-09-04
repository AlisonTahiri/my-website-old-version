import Image from "next/image";
import { ProjectsData } from "./types";

interface IProps extends ProjectsData {
  aosDelay: number;
}

const Case: React.FC<IProps> = ({
  url,
  logoAlt,
  src,
  tags,
  content,
  aosDelay,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="h-96  ease-in-out rounded-lg group shadow-case hover:shadow-case-hover bg-gray-100  overflow-hidden"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full items-end mt-2"
        href={url}
      >
        <div className="absolute mt-2 w-full h-full  z-20">
          <Image
            placeholder="blur"
            blurDataURL={src}
            layout="fill"
            objectFit="scale-down"
            objectPosition="top"
            alt={`Logo ${logoAlt}`}
            src={src}
          />
        </div>
        <div className="flex flex-col w-full justify-center z-30 p-2 bg-gray-100 bg-opacity-90 text-gray-800">
          {content}
          <ul className="flex flex-wrap 2xl:dark:grayscale-100 dark:group-hover:filter-none">
            {tags.map((tag, i) => (
              <li
                className="px-4 py-1 my-1 mr-2 text-sm text-white rounded-md bg-primary"
                key={i}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  );
};

export default Case;
