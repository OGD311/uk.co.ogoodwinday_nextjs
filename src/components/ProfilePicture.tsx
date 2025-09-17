import Image from "next/image";

export default function ProfilePicture() {
    return (
        <Image src={"/me.png"} alt="Me" width={250} height={250} className="rounded-full aspect-square object-cover ring-2 ring-blue-600" />
    );
}