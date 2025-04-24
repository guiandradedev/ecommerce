'use client'

import { useState } from 'react'
import DesktopHeader from './desktop'
import MobileHeader from './mobile'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <DesktopHeader setMobileMenuOpen={setMobileMenuOpen}/>
      <MobileHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
      
    </div>
  )
}
