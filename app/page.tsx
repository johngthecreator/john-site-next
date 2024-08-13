import Link from "next/link";
import ImageGallery from "./components/ImageGallery";
import ImageLink from "./components/ImageLink";
import SiteLink from "./components/SiteLink";
import { AiFillLinkedin, AiOutlineMail, AiFillGithub, AiFillFileText, AiFillMail} from "react-icons/ai"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col gap-10 md:flex-row justify-center items-center mb-5 p-10 md:p-24">
        <ImageGallery />
        <div>
          <h1 className="text-[50px] md:text-[100px] font-bold">Hi I&apos;m <span className="text-indigo-600">John</span></h1>
          <p className="text-3xl">I really like AI, ML, and Web.</p>
        </div>
      </div>
      <div className="flex flex-col mb-5 p-10 md:p-24 bg-indigo-600 text-white">
        <h2 className="text-[40px] text-center md:text-left font-bold">About Me</h2>
        <p className="text-md text-center md:text-xl md:text-left">
        I&apos;m a passionate web engineer and AI/ML enthusiast studying at Brigham Young University -
         Idaho. My primary mission is to create web AI/ML products that make a positive impact in society. 
         I believe that technology should be a force for good, and by utilizing AI/ML, 
         I&apos;m able to channel my energy and skills into projects that benefit people from all walks of life. 
         Whether it&apos;s developing software that enhances accessibility, improves education, or promotes community engagement,
          my dedication lies in harnessing the power of code to empower and uplift individuals.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-10 md:p-24">
        <h2 className="text-[40px] text-center font-bold mb-3"><span className="text-indigo-600 underline">Dev</span> ToolKit</h2>
        <p className="text-md text-center md:text-xl md:w-3/4">
        Here are a few of my favorite tools that help me develop my projects supafast.
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center p-5 gap-5 md:gap-10">
          <ImageLink linkURL="https://arc.net/" imageURL="./arc.png" />
          <ImageLink linkURL="https://code.visualstudio.com/" imageURL="./vs.png" />
          <ImageLink linkURL="https://neovim.io/" imageURL="./Vim.png" />
          <ImageLink linkURL="https://insomnia.rest/" imageURL="./Insomnia.png" />
          <ImageLink linkURL="https://www.langchain.com/" imageURL="./lang.png" />
          <ImageLink linkURL="https://www.warp.dev/" imageURL="./warp.png" />
          <ImageLink linkURL="https://www.jetbrains.com/webstorm/" imageURL="./webstorm.png" />
        </div>
        <div className="flex flex-col p-10 md:p-24 mb-10">
          <h2 className="text-[40px] text-center font-bold mb-3">Featured Projects</h2>
          <div className="flex flex-wrap flex-row justify-center gap-5 md:gap-10">
            <SiteLink text="Ari." href="https://learnari.com/"/>
            <SiteLink text="Celeste" href="https://thecelesteproject.vercel.app/" />
            <SiteLink text="Alto" href="https://alto-dating.pages.dev/"/>
            <SiteLink text="Conn Academy" href="https://connect-academy.vercel.app/"/>
          </div>
        </div>
      </div>
        <div className="flex flex-row justify-center gap-10 bg-indigo-600 p-10">
          <Link href="https://github.com/johngthecreator">
            <AiFillGithub className="text-[40px] text-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/john-gorriceta-9a0918253/">
            <AiFillLinkedin className="text-[40px] text-white" />
          </Link>
          <Link href="mailto:johngorriceta1@gmail.com">
            <AiFillMail className="text-[40px] text-white" />
          </Link>
          <Link href="./resume.pdf">
            <AiFillFileText className="text-[40px] text-white" />
          </Link>
        </div>
    </main>
  )
}
