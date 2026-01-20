import { jordan } from "@/ui/font";
import clsx from "clsx";

export default function BasicInformation() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1.5">
        {/*<div className="flex flex-col gap-1 text-center font-black pb-2 relative">
          <h1 className="text-[24px] font-black leading-[1]">HOUSE OF GREATNESS</h1>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-1 border_el ani_order_6"></div>
        </div>*/}
        <div className="flex flex-col gap-2 text-center font-black pt-[19px] pb-[27px] relative">
          <span className="text-[15px] leading-[1]">일시</span>
          <h1 className="text-[24px] font-black leading-[1]">2026.02.07</h1>
          <span className="text-[15px] leading-[1]">장소</span>
          <h1 className="text-[24px] font-black leading-[1]">앤더슨씨 성수</h1>
          <span className="text-[15px] leading-[1]">서울특별시 성동구 성수일로6길 36</span>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-4 border_el ani_order_9"></div>
        </div>
      </div>
      <div className="py-[22px] text-[13px] font-medium whitespace-pre-wrap break-keep ani px-4 ">
        여성 댄서들만을 위해 마련된 2:2 오픈 스타일 배틀입니다. DJ의 랜덤 플레이에 맞춰 진행됩니다.
      </div>

    </div>
  );
}
