'use client'

import { useState } from 'react'
import DesktopNavbar from './desktop'
import MobileNavbar from './mobile'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <DesktopNavbar setMobileMenuOpen={setMobileMenuOpen}/>
      <MobileNavbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
      
    </div>
  )
}
