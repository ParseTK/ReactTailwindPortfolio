import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBackground } from "../Components/StarBackground"
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutMe } from "../Components/AboutSection";

export const Home = () => {
  console.log("Home component is rendering.");
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <h1>- HOME PAGE IS WORKING -</h1>

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
        </main>
    </div>
  )
}

export default Home