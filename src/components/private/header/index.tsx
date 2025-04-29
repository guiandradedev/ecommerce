import Navbar from "@/components/public/header/navbar";
import PrivateNavbar from "./navbar";

export default function PrivateHeader() {
    return (
        <div>
            <Navbar />
            <PrivateNavbar />
        </div>
    )
}