import Image from "next/image";

export default function ProfilePicture() {
    return (
        <Image src={"/me.png"} alt="Me" width={300} height={300} className="rounded-full aspect-square object-cover p-3 ring-2 ring-blue-600" />
    );
}