import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, project, Skill, Social } from "../typings";
import { fetchexperience } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchsocials } from "../utils/fetchSocials";

type Props ={
  PageInfo: PageInfo;
  experiences: Experience[];
  skills:Skill[];
  projects: project [];
  socials: Social[]

}

const Home = ({PageInfo, experiences, projects, skills,}: Props) => {
  return (
    <div className="bg-slate-800  text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden  z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A/80]">
      <div>
        <Head>
          <title>Jean-Marc Portfolio</title>
        </Head>
        {/* Header */}
        <Header/>

        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero/>
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        {/* Skills */}
        <section id="Skills" className="snap-start">
          <Skills />
        </section>
        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        {/* Contact Me */}
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
        <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"src="https://zupimages.net/up/22/39/uwpu.jpg" alt="" />
          </div>

        </footer>
        
        
        </Link>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
const experiences: Experience [] = await fetchexperience();
const Skills: Skill [] = await fetchSkills();
const projects: project [] = await fetchProjects();
const socials: Social [] = await fetchsocials();

return{
  props: {
    experiences,
    Skills,
    projects,
    socials,
  },
};
};
