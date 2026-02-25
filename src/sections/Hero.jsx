import { imgClaudeIcon } from '../assets/figma-assets';

export default function Hero() {
  return (
    <section className="relative h-[195px] overflow-hidden">
      {/* title + subtitle */}
      <div className="h-full flex flex-col justify-center pl-[59px] pr-[160px]">
        <h1 className="font-heading font-bold text-navy text-[72px] leading-none tracking-[-2.19px] whitespace-nowrap">
          The Ultimate Claude Guide
        </h1>
        <p className="font-heading font-medium italic text-navy text-[29px] tracking-[-0.89px] mt-1">
          Master Claude features in 5 minutes
        </p>
      </div>

      {/* rotating Claude icon top-right */}
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
