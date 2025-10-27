import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBackground } from "../Components/StarBackground"
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutMe } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";

export const Home = () => {
  console.log("Home component is rendering.");
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground /> 

        {/* Navbar */}
        <Navbar /> 

        {/* Main Content */}
        <main>  
          <HeroSection />
          <AboutMe />
          <SkillsSection />
          <ProjectsSection />
        </main>
    </div>
  )
}

export default Home