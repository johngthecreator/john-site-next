import ImageGallery from "./components/ImageGallery";
import ImageLink from "./components/ImageLink";
import SiteLink from "./components/SiteLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col gap-10 md:flex-row justify-between items-center mb-5 p-10 md:p-24">
        <div>
          <h1 className="text-[50px] font-bold">Hi I'm <span className="text-indigo-600">John</span></h1>
          <p className="text-2xl">I edit fancy text files for fun.</p>
        </div>
        <ImageGallery />
      </div>
      <div className="flex flex-col mb-5 p-10 md:p-24 bg-indigo-600 text-white">
        <h2 className="text-[40px] text-center md:text-left font-bold">About Me</h2>
        <p className="text-md text-center md:text-xl md:text-left">
        I’m a passionate developer and designer studying at Brigham Young University -
         Idaho. My primary mission is to create open-source products that make a positive impact in society. 
         I believe that technology should be a force for good, and by embracing the open-source philosophy, 
         I'm able to channel my energy and skills into projects that benefit people from all walks of life. 
         Whether it's developing software that enhances accessibility, improves education, or promotes community engagement,
          my dedication lies in harnessing the power of code to empower and uplift individuals.
        </p>
      </div>
      <div className="flex flex-col p-10 md:p-24 mb-10">
        <h2 className="text-[40px] text-center font-bold mb-3"><span className="text-indigo-600 underline">Open-Source</span> ToolKit</h2>
        <p className="text-md text-center md:text-xl">
        Recently, I've embraced the open-source ethos wholeheartedly. 
        One of the most significant steps I've taken in this journey is transitioning all of my development tools to open-source products. 
        Here are a few of my favorite tools.
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-10 p-10">
          <ImageLink linkURL="https://brave.com/" imageURL="./Brave.png" />
          <ImageLink linkURL="https://vscodium.com/" imageURL="./Vscodium.png" />
          <ImageLink linkURL="https://neovim.io/" imageURL="./Vim.png" />
          <ImageLink linkURL="https://insomnia.rest/" imageURL="./Insomnia.png" />
        </div>
        <div>
          <h2 className="text-[40px] text-center font-bold mb-3">Featured Projects</h2>
          <div className="flex flex-wrap flex-row flex-wrap justify-center gap-5 md:gap-10">
            <SiteLink text="Ari." href="https://learnari.com/"/>
            <SiteLink text="Celeste" href="https://thecelesteproject.vercel.app/" />
            <SiteLink text="CometNotes" href="https://cometnotes.netlify.app/"/>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-10 p-10">
        <a href="./John_Gorriceta_Resume_2023.pdf" className="w-[400px] h-[100px] flex justify-center items-center text-white font-bold text-2xl bg-indigo-600 border-solid border-indigo-600 border-4 rounded-xl hover:bg-white hover:text-indigo-600 hover:text-[50px] ease-in-out duration-300 ">
          My Résumé
        </a>
      </div>
    </main>
  )
}
