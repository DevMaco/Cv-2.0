import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-800  text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <div>
        <Head>
          <title>Jean-Marc Portfolio</title>
        </Head>
        {/* Header */}
        <Header />

        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* About */}
<section id="about" className="snap-center">
  <About />
</section>
        {/* Experience */}
        <section id="experience" className="snap-center">
        <WorkExperience/>
        </section>

        {/* Skills */}
<section id="Skills" className="snap-start">
 <Skills/>
</section>
        {/* Projects */}
<section id='projects' className="snap-start">
  <Projects/>
</section>
        {/* Contact Me */}
      </div>
    </div>
  );
};

export default Home;
