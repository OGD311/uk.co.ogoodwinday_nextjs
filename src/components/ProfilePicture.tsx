import Image from "next/image";

export default function ProfilePicture() {
    return (
        <Image src={"/me.png"} alt="Me" width={200} height={200} className="rounded-full aspect-square object-cover ring-3 ring-text" />
    );
}