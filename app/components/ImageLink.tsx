import Link from "next/link";

export default function ImageLink(props: {imageURL: string, linkURL: string}){
    return(
        <Link href={props.linkURL}>
            <img className="max-w-[75px] w-[75px] min-w-[75px] h-auto" src={props.imageURL} />
        </Link>
    )
}