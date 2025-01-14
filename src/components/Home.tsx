import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import useUser from "@/hooks/useUser";
import GridPattern from "./ui/grid-pattern";
import AnimatedGradientText from "./ui/animated-gradient-text";
import TypingAnimation from "./ui/typing-animation";
import { BorderBeam } from "./ui/border-beam";
export default function Home() {
  const { currentUser } = useAuth();



  const { user, loading } = useUser();

  return (
    <div className="space-y-8 p-14">
      <GridPattern className="fixed top-0 left-0 w-full h-full z-0" />
      <div className="flex flex-col gap-6 justify-center items-center z-10">
        <AnimatedGradientText>
          Lorem, ipsum.
        </AnimatedGradientText>
        <h1 >
          <TypingAnimation className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:text-8xl font-bold text-center">   Lorem ipsum dolor sit.</TypingAnimation>
        </h1>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ipsam facere eaque exercitationem est dolorum unde explicabo blanditiis!
        </span>
        {currentUser ? (<Button asChild className="w-max">
          <Link to="/suggestions">Suggestion</Link>
        </Button>) : (<Button asChild className="w-max">
          <Link to="/signup">Get Started</Link>
        </Button>)}

      </div>
      <div className="mx-auto max-w-screen-lg w-full p-6">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-6">
          <span className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam in repellendus eaque sapiente corporis soluta iste, ipsum illo nobis ea minus saepe ex cupiditate natus consequuntur accusamus non. Hic.
          </span>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </div>
    </div>
  )
}

