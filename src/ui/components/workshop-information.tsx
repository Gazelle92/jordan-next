"use client";

import { useState } from "react";
import clsx from "clsx";

export default function WorkshopInformation() {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const toggle = (idx: number) => {
    setOpenMap(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col gap-2 text-center font-black pt-[19px] pb-[27px] relative">
          <span className="text-[15px] leading-[1]">일시</span>
          <h1 className="text-[24px] font-black leading-[1]">2026.02.07</h1>
          <span className="text-[15px] leading-[1]">장소</span>
          <h1 className="text-[24px] font-black leading-[1]">앤더슨씨 성수</h1>
          <span className="text-[15px] leading-[1]">서울특별시 성동구 성수일로6길 36</span>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-4 border_el ani_order_9"></div>
        </div>
      </div>
      <div className="py-[22px] text-[13px] font-semibold whitespace-pre-wrap break-keep ani px-4 ">
        <div>메인 디렉터 바다가 직접 선보이는 시그니처 코레오그래피를 경험할 수 있는 특별한 워크숍입니다. 3인의 스페셜 인스트럭터와 함께 안무를 익히고, 하나의 거대한 집단 퍼포먼스를 완성합니다. 완성된 퍼포먼스는 감각적인 비주얼 필름으로 기록됩니다.</div>
      </div>


    </div>
  );
}
