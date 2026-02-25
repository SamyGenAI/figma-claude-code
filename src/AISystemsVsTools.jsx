import AIToolsCard from './sections/AIToolsCard';
import AISystemsCard from './sections/AISystemsCard';
import AIComparison from './sections/AIComparison';
import WhenToUse from './sections/WhenToUse';
import Footer from './sections/Footer';
import { imgClaudeIcon } from './assets/figma-assets';

function Hero() {
  return (
    <section className="relative h-[195px] overflow-hidden">
      <div className="h-full flex flex-col justify-center pl-[59px] pr-[160px]">
        <h1 className="font-heading font-bold text-navy text-[66px] leading-none tracking-[-2px] whitespace-nowrap">
          AI Systems vs AI Tools
        </h1>
        <p className="font-heading font-medium italic text-navy text-[27px] tracking-[-0.81px] mt-2">
          Understanding the key differences in 5 minutes
        </p>
      </div>

      {/* Claude icon top-right */}
      <div className="absolute top-[56px] right-[59px] flex items-center justify-center size-[139px]">
        <div className="-rotate-[30deg]">
          <img
            src={imgClaudeIcon}
            alt="Claude icon"
            className="size-[102px] object-contain shadow-[0px_4px_15px_4px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}

export default function AISystemsVsTools() {
  return (
    <div className="grid-bg w-[1080px] h-[1350px] overflow-hidden mx-auto">
      {/* Hero — 195px */}
      <Hero />

      {/* Sections — gap-[25px] × 3 = 75px */}
      <div className="px-[59px] flex flex-col gap-[25px]">
        {/* Row 1: AI Tools | AI Systems — h=470px */}
        <div className="flex gap-[26px]">
          <AIToolsCard />
          <AISystemsCard />
        </div>

        {/* Comparison table — h=280px */}
        <AIComparison />

        {/* When to use — h=248px (two cards inside) */}
        <WhenToUse />
      </div>

      {/* Footer — mt=12px, h=70px → total=1350px */}
      <div className="mt-[12px] px-[59px]">
        <Footer />
      </div>
    </div>
  );
}
