import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import GridPattern from "./ui/grid-pattern";
import AnimatedGradientText from "./ui/animated-gradient-text";
import TypingAnimation from "./ui/typing-animation";
export default function Home() {
  const authContext = useAuth();
  const currentUser = authContext ? authContext.currentUser : null;
  return (
    <div className="space-y-8 p-14">
      <GridPattern className="fixed top-0 left-0 w-full h-full z-0" />
      <div className="flex flex-col gap-28 justify-around items-center z-10">
        <AnimatedGradientText>
          From surplus to scarcity, we've got you covered!
        </AnimatedGradientText>
        <h1 >
          <TypingAnimation className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:text-8xl -mt-10 font-bold text-center">  Smart Food Price Stabilization &
            Transport Platform</TypingAnimation>
        </h1>
        <span>
          Our platform helps stabilize food prices by moving excess food from surplus areas to places where it's in short supply. This ensures that consumers get fair prices, while farmers can sell their produce at better rates. By reducing price fluctuations and ensuring efficient distribution, we make sure everyone in the supply chain benefits.
        </span>
        {currentUser ? (<Button asChild className="w-max">
          <Link to="/suggestions">Suggestion</Link>
        </Button>) : (<Button asChild className="w-max">
          <Link to="/signup">Get Started</Link>
        </Button>)}
      </div>
    </div>
  )
}

