import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const SocialLinks = () => (
  <ul
    data-aos="fade-up"
    data-aos-offset="-100"
    className="flex items-center justify-center w-20 py-2 space-x-2 border-2 rounded-lg md:py-4 px-14 border-primary"
  >
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="linkedin"
        href="https://www.linkedin.com/in/alison-tahiri-0421b2205/"
      >
        <AiOutlineLinkedin className="transition-colors duration-300 md:h-10 md:w-10 h-9 w-9 md:text-4xl text-primary hover:text-hv" />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="github"
        href="https://github.com/Alonso121"
      >
        <AiOutlineGithub className="transition-colors duration-300 md:h-10 md:w-10 h-9 w-9 md:text-4xl text-primary hover:text-hv" />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
