import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBackground } from "../Components/StarBackground"

export const Home = () => {
  console.log("Home component is rendering.");
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <h1>- HOME PAGE IS WORKING -</h1>
        <ThemeToggle />
        <StarBackground /> 
    </div>
  )
}

export default Home