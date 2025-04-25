import Link from "next/link";
import { navbar_actions } from "../constants";
import { Badge } from "@/components/ui/badge"

export default function Actions() {
    return (
        <div className="flex gap-3">
            {navbar_actions.map(action=>(
                <Link key={action.label} className="relative cursor-pointer" href={action.href}>
                    {
                        action.badge && action.badge.count != 0 && (
                            <Badge className="absolute h-5 w-1 text-sm bg-red-500 -right-2 -top-1">{action.badge.count}</Badge>
                        )
                    }
                    <action.icon className="h-8 text-gray-600 " />
                </Link>
            ))}
        </div>
    )
}