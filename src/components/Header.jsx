import { useState } from "react";
import { TWITCH_URL } from "../data/event";
const links = [["#creation","Le défi"],["#coulisses","Les coulisses"],["#experience","L’expérience"],["#principe","Le concept"],["#programme","Programme"]];
export default function Header() {
  const [open,setOpen]=useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-pink/25 bg-background/95 backdrop-blur-xl">
    <div className="flex h-14 items-center gap-3 px-4 md:h-16 md:px-8">
      <a href="#home" onClick={()=>setOpen(false)} className="inline-flex shrink-0 items-center [&_img]:w-[68px] md:[&_img]:w-[78px]" aria-label="Nuit MMI, accueil"><img src={`${import.meta.env.BASE_URL}logo-nuit-mmi.svg`} alt="" /></a>
      <nav aria-label="Navigation principale" className="ml-auto hidden items-center gap-4 font-semibold text-white lg:flex xl:gap-6">{links.map(([href,label])=><a key={href} href={href} className="transition-colors hover:text-pink">{label}</a>)}</nav>
      <a href={TWITCH_URL} target="_blank" rel="noopener noreferrer" className="ml-auto bg-pink px-4 py-2 font-archivo text-sm font-black uppercase text-background transition-transform hover:-rotate-2 lg:ml-2">Twitch ↗</a>
      <button type="button" className="flex size-10 shrink-0 flex-col items-center justify-center gap-1.5 border border-white/40 text-white lg:hidden" aria-label={open?"Fermer le menu":"Ouvrir le menu"} aria-controls="mobile-navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><span className={`h-0.5 w-5 bg-current transition-transform ${open?"translate-y-1 rotate-45":""}`}/><span className={`h-0.5 w-5 bg-current transition-transform ${open?"-translate-y-1 -rotate-45":""}`}/></button>
    </div>
    <nav id="mobile-navigation" aria-label="Navigation mobile" className={`${open?"flex":"hidden"} flex-col border-t border-white/20 bg-background px-5 py-3 lg:hidden`}>{links.map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)} className="border-b border-white/10 py-3 font-archivo text-lg font-bold uppercase last:border-0">{label}</a>)}</nav>
  </header>;
}
