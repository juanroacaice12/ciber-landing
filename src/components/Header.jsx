import { useState } from 'react';
import Nav from './Nav';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <Nav setMobileMenuOpen={setMobileMenuOpen} />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </header>
  );
}

