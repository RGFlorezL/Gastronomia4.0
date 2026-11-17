/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import type { BonusItem, PagePreviewItem } from './data/manualContent';
import { getCheckoutUrl } from './config/salesConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoleSelector } from './components/RoleSelector';
import { InteractivePromptProof } from './components/InteractivePromptProof';
import { ModulesAndPages } from './components/ModulesAndPages';
import { BonusesShowcase } from './components/BonusesShowcase';
import { AuthorAndHonesty } from './components/AuthorAndHonesty';
import { OfferSection } from './components/OfferSection';
import { FaqAndFooter } from './components/FaqAndFooter';
import { Modals } from './components/Modals';

export default function App() {
  const [selectedPage, setSelectedPage] = useState<PagePreviewItem | null>(null);
  const [selectedBonus, setSelectedBonus] = useState<BonusItem | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  function handleBuyClick() {
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.location.assign(checkoutUrl.toString());
      return;
    }
    setCheckoutModalOpen(true);
  }

  return (
    <div className="min-h-screen bg-[#0B0A08] text-[#F7F4EC] antialiased selection:bg-[#D6B160] selection:text-[#14120E]">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[#D6B160] focus:text-[#14120E] focus:text-sm focus:font-bold"
      >
        Ir al contenido principal
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <RoleSelector />
        <InteractivePromptProof />
        <ModulesAndPages onSelectPage={setSelectedPage} />
        <BonusesShowcase onSelectBonus={setSelectedBonus} />
        <AuthorAndHonesty />
        <OfferSection onBuyClick={handleBuyClick} />
        <FaqAndFooter onBuyClick={handleBuyClick} />
      </main>

      <Modals
        selectedPage={selectedPage}
        onClosePage={() => setSelectedPage(null)}
        selectedBonus={selectedBonus}
        onCloseBonus={() => setSelectedBonus(null)}
        checkoutModalOpen={checkoutModalOpen}
        onCloseCheckoutModal={() => setCheckoutModalOpen(false)}
      />
    </div>
  );
}
