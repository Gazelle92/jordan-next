"use client";
import Logo from "@/ui/svg/logo.svg";

export default function Home() {

  return (
    <div className="flex flex-grow-1 items-center justify-center column relative">
      <Logo className="absolute top-[22px] left-1/2 translate-x-[-50%] w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
      <h1 className="font-black text-[20px] md:text-[32px] text-center uppercase leading-none">Website launch<br />
        coming soon</h1>
    </div>
  );

}
