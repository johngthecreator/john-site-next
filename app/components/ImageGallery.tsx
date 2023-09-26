import Image from "next/image"
export default function ImageGallery(){
    return(
        <div>
            <img className="w-[500px] rounded-2xl shadow-2xl" src="./john_profile.webp" 
            alt="profile" />
        </div>
    )
}