import { base } from "@/constants";
// import Image from "next/image";

export default function Logo() {
    return (
        <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{base.company_name}</span>
            <img
                alt={`${base.company_name} logo`}
                src="https://symbl-world.akamaized.net/i/webp/b1/57ccb0a1636fbdb40fec3b6b15631e.webp"
                className="h-8 w-auto"
            />
        </a>
    )
}