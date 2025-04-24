import { PopoverGroup, Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Logo from "../../logo"
import { navbar_links } from "../constants"

interface DesktopHeaderProps {
    setMobileMenuOpen: (data: boolean) => void
}


export default function DesktopHeader({ setMobileMenuOpen }: DesktopHeaderProps) {
    return (
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <Logo />
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                {
                    navbar_links.map((link, index) => {
                        if (!link.extends) {
                            return <Link href="#" className="text-sm/6 font-semibold text-gray-900" key={index}>
                                {link.label}
                            </Link>
                        } else {
                            return <Popover className="relative" key={index}>
                                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                                    {link.label}
                                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                </PopoverButton>

                                <PopoverPanel
                                    transition
                                    className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                                >
                                    {link.extends.items && link.extends.items.map((item) => (
                                        <div className="p-4" key={item.label}>
                                            <div
                                                key={item.label}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                            >
                                                {item.icon && (
                                                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <h1>Icone</h1>
                                                        {/* <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" /> */}
                                                    </div>
                                                )}
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-gray-900">
                                                        {item.label}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {
                                        link.extends.cta && (
                                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                                {link.extends.cta.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                                    >
                                                        {item.icon && (
                                                            <h1>Icone</h1>
                                                        )}
                                                        {/* <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" /> */}
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )
                                    }

                                </PopoverPanel>
                            </Popover>
                        }
                    })
                }

            </PopoverGroup>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Log in <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </nav>
    )
}