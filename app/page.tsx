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
         Idaho. Lately, I've been experimenting with local LLMs, NLPs, and <Link className="underline" href={"https://www.inkandswitch.com/local-first"}>"Local-First"</Link> web architecture.
         As cheesy as it sounds, I often feel like I'm an artist and software is my medium. I love applying new and novel concepts to the engineering that I do, so I&apos;m always exploring new things.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-10 md:p-24">
        <h2 className="text-[40px] text-center font-bold mb-3"><span className="text-indigo-600 underline">Dev</span> ToolKit</h2>
        <p className="text-md text-center md:text-xl md:w-3/4">
        Here are a few of my favorite tools and frameworks that help me develop my projects crazy fast.
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center p-5 gap-5 md:gap-10">
          <ImageLink linkURL="https://huggingface.co" imageURL="./hf-logo.svg" />
          <ImageLink linkURL="https://nextjs.org" imageURL="./next.svg" />
          <ImageLink linkURL="https://www.databricks.com" imageURL="./dblogo.png" />
          <ImageLink linkURL="https://tailwindcss.com" imageURL="./twlogo.png" />
          <ImageLink linkURL="https://code.visualstudio.com" imageURL="./vs.png" />
          <ImageLink linkURL="https://neovim.io" imageURL="./Vim.png" />
          <ImageLink linkURL="https://www.warp.dev" imageURL="./warp.png" />
        </div>
        <div className="flex flex-col p-10 md:p-24 mb-10">
          <h2 className="text-[40px] text-center font-bold mb-3">Featured Projects</h2>
          <div className="flex flex-wrap flex-row justify-center gap-5 md:gap-10">
            <SiteLink text="Munchy" href="https://munchy-murex.vercel.app"/>
            <SiteLink text="UnBinged" href="https://unbingedtv.com/" />
            <SiteLink text="WellWritten" href="https://wellwritten.joinpageturn.com/"/>
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
