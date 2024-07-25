import ProjectCard from "./ProjectCards.js"

import hr from "../assets/curve-hr.svg"
import RadAi from "../assets/certs/RadAi.png"
import portfolio from "../assets/certs/portfolio.jpg"
import arabic from "../assets/certs/arabic.jpg"
import mcode from "../assets/certs/mcode.jpg"
import wordle from "../assets/certs/wordle.webp"
import Ptable from "../assets/certs/Ptable.png"
// import 

export default function Projects(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Academic Projects</h1>
            <p className="font-light text-gray-400">Here are some of my projects</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                 <ProjectCard name="MERN Stack Arabic NLP Platform" img={arabic} issued="Personal Project, Technologies used: React, Express, Node, MongoDB, Flask APIs, LLMs, Generative AI, NLP" date="Feb 2024 - Ongoing" />
                <ProjectCard name="AI Radiology platform" img={RadAi} issued="ENSI PCD, Technologies used: Django, SQL, Image Processing, CNNs" date="Jan-May 2023" />
                <ProjectCard name="Personal Portfolio" img={portfolio} issued="React, TailwindCSS, Firebase" date="Sept - Dec 2023" />
                <ProjectCard name="Language Specific Compiler" img={mcode} issued="Compilation Theory, Lexical Analysis, Syntaxical Analysis, Semantic Analysis, C" date="Nov - Dec 2023" />
                <ProjectCard name="Wordle Clone in Android Studio" img={wordle} issued="Android Studio, Java, OOP" date="June - July 2022" />
                <ProjectCard name="Essence: A chemistry Companion App" img={Ptable} issued="Flutter, Dart, OOP" date="March - May 2022" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
