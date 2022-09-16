import {
  i18nTextProjectsDescrDardha,
  i18nTextProjectsDescrRecipeFinder,
  i18nTextProjectsDescSimpleTask,
  i18nTextProjectsNotesApp,
} from "../messages/i18nMessages";

export const projectsData = [
  {
    url: "https://www.dardha.al/",
    content: i18nTextProjectsDescrDardha,
    logoAlt: "dardha.al",
    src: "/images/portfolio/dardha.png",
    logoWidth: "260",
    tags: [
      "Nextjs",
      "Tailwind",
      "Strapi CMS",
      "Snipcart",
      "Mongo DB",
      "Cloudinary",
    ],
  },
  {
    url: "https://my-awesome-recipe-finder.netlify.app/",
    content: i18nTextProjectsDescrRecipeFinder,
    logoAlt: "Recipe Finder",
    src: "/images/portfolio/recipe-finder.png",
    logoWidth: "200",
    tags: ["React", "CSS"],
  },
  {
    url: "https://the-simple-task.herokuapp.com/signin",
    content: i18nTextProjectsDescSimpleTask,
    logoAlt: "Simple Task",
    src: "/images/portfolio/Simple-Task-App.png",
    logoWidth: "200",
    tags: ["React", "CSS", "Nodejs", "Mongo DB"],
  },
  {
    url: "https://notes-app-roan.vercel.app/",
    content: i18nTextProjectsNotesApp,
    logoAlt: "My notes",
    src: "/images/portfolio/MyNotes.png",
    logoWidth: "200",
    tags: ["React", "Tailwind", "Nodejs", "Mongo DB", "Redux"],
  },
];
