import { base } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{base.company_name}</span>
            <Image
                alt={`${base.company_name} logo`}
                src="/logo.webp"
                className="w-auto"
                width={40}
                height={40}
            />
        </Link>
    )
}