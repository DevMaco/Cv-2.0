import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BackgroundCircles from "../components/BackgroundCircles";

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
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        {/* About */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}
      </div>
    </div>
  );
};

export default Home;
