import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/Background";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pranav Suryawanshi — SDET & Quality Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Pranav Suryawanshi — SDET, automation engineer, and CS graduate '26. Selenium, Java, API testing, JMeter, and premium test craft.",
      },
      { property: "og:title", content: "Pranav Suryawanshi — SDET & Quality Engineer" },
      {
        property: "og:description",
        content:
          "Automation with Selenium + Java, API testing with Rest Assured, and reliable release pipelines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Loader />
      <Background />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
