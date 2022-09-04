import { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

import { projectsData } from "../lib/projects-data";
import { lang, tech } from "../lib/lang-data";
import { Language, ProjectsData, TechData } from "../components/types";

type IProps = {
  projectsData: ProjectsData[];
  lang: Language[];
  techData: TechData[];
};

export default function Home({ projectsData }: IProps) {
  return (
    <Layout>
      <Head>
        <title>Alison Tahiri&apos; Portfolio - Home</title>
      </Head>
      <Hero />
      <Personal langData={lang} techData={tech} />
      <Projects projectsData={projectsData} />
      <Contact />
      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {
      projectsData,
      lang,
      tech,
    }, // will be passed to the page component as props
  };
};
