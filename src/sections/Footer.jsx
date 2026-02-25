import { imgProfile } from '../assets/figma-assets';

export default function Footer() {
  return (
    <footer className="bg-navy rounded-[25px] h-[70px] flex items-center justify-center gap-4">
      <span className="font-heading font-semibold text-[24px] text-white tracking-[-0.72px]">
        Follow for more
      </span>

      <img
        src={imgProfile}
        alt="Samy Chouaf"
        className="size-[44px] rounded-full border-2 border-white shadow-card object-cover"
      />

      <span className="font-heading font-semibold text-[24px] text-white tracking-[-0.72px]">
        Samy Chouaf
      </span>
    </footer>
  );
}
