import { HistoryBack } from "@/ui/components/history-back";

import Title from "@/ui/svg/house_of_greatness.svg";
import Logo from "@/ui/svg/logo.svg";
import Image from "next/image";
import { GuideInfo1 } from "@/ui/components/guide-info-1";
import { GuideInfo2 } from "@/ui/components/guide-info-2";
import { GuideInfo3 } from "@/ui/components/guide-info-3";

export default function GuideMap() {
  return (
    <div className="flex flex-col pb-3">
      <HistoryBack />
      <div className="flex flex-col px-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7 mb-[74px]">
          <Logo className="w-[33px]" />
          <Title width={300} height={46} />
        </div>
        <div className="flex flex-col ">
          <hr className="border-2 border_el ani_order_3 border-l-0 border-r-0" />
          <div className="flex flex-col text-center font-black py-2 relative">

            <h1 className="text-[24px] font-black leading-[1.2]">HOUSE OF GREATNESS<br />가이드 맵</h1>
            <div className="absolute left-0 bottom-0 h-[1px] border-b-1 border_el ani_order_6"></div>
          </div>

          <Image
            src="/images/guide_0.png"
            alt="reward"
            className="mx-auto mt-[30px] mb-[20px]"
            width={400}
            height={140}
          />

          <div className="flex flex-col gap-3">
            <GuideInfo1 />
            <GuideInfo2 />
            <GuideInfo3 />
          </div>
        </div>


      </div>

    </div>


  );
}
