export default function SiteLink(props:{text:string, href: string}){
    return(
        <a href={props.href}>
            <div className="w-[300px] md:w-[400px] h-[200px] flex justify-center items-center text-white font-bold text-2xl bg-indigo-600 border-solid border-indigo-600 border-4 rounded-xl hover:bg-white hover:text-indigo-600 hover:text-[40px] md:hover:text-[50px] ease-in-out duration-300 ">
                <p>{props.text}</p>
            </div>
        </a>
    )
}