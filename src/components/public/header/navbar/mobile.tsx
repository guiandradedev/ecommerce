import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Logo from "../../../logo"
import { navbar_links } from "../constants"
import Actions from "./actions"

interface MobileNavbarProps {
    mobileMenuOpen: boolean,
    setMobileMenuOpen: (data: boolean)=>void
}

export default function MobileNavbar({ mobileMenuOpen, setMobileMenuOpen }: MobileNavbarProps) {
    return (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {
                  navbar_links.map((link, index)=>{
                    if(!link.extends) {
                      return <Link
                              href={link.href}
                              key={index}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                              {link.label}
                            </Link>
                    } else {
                      return <Disclosure as="div" className="-mx-3" key={index}>
                              <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                {link.label}
                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                              </DisclosureButton>
                              <DisclosurePanel className="mt-2 space-y-2">
                                {[
                                  ...(link.extends.items || []), // Garante que seja um array, mesmo que seja undefined
                                  ...(link.extends.cta || []),  // Garante que seja um array, mesmo que seja undefined
                                ].map((item) => (
                                  <DisclosureButton
                                    key={item.label}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                  >
                                    {item.label}
                                  </DisclosureButton>
                                ))}
                              </DisclosurePanel>
                            </Disclosure>
                    }
                  })
                }
                
              </div>
              <div className="py-6">
                <Actions />
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Acesse sua conta
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    )
}