import { jordan } from "@/ui/font";
import clsx from "clsx";

export default function irlInformation() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-1.5">

        <div className="flex flex-col gap-2 text-center font-black pt-[19px] pb-[27px] relative">
          <span className="text-[15px] leading-[1]">일시</span>
          <h1 className="text-[24px] font-black leading-[1]">2026.02.07</h1>
          <span className="text-[15px] leading-[1]">장소</span>
          <h1 className="text-[24px] font-black leading-[1]">앤더슨씨 성수</h1>
          <span className="text-[15px] leading-[1]">서울특별시 성동구 성수일로6길 36</span>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-4 border_el ani_order_9"></div>
        </div>
        <div className="flex flex-col gap-1 text-center font-black pb-2 relative">
          <h1 className="text-[24px] font-black leading-[1]">HOUSE OF GREATNESS</h1>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-1 border_el ani_order_6"></div>
        </div>
      </div>
      <div className="py-[15px] text-[13px] font-semibold whitespace-pre-wrap break-keep ani px-4">

        {/*HOUSE OF GREATNESS는 조던의 정신처럼 멈추지 않는 움직임이 서로를 만나고, 충돌하며, 더 큰 에너지로 확장되는 현장입니다.
        <br />
        이곳에서 GREATNESS는 완성된 결과가 아니라, 지금도 생성 중인 흐름입니다.
        <br /><br />
        여성 댄서들의 주체적인 스텝은 이 흐름의 출발점입니다. 발끝에서 시작된 에너지는 공간을 가로질러 퍼지고, 개인의 움직임은 집단의 리듬이 되어 현장을 채웁니다.
        <br /><br />
        지금, 성수동에서 열리는 HOUSE OF GREATNESS에 들어와 조던이 말하는 움직임의 에너지와 다음 스텝을 향한 순간을 직접 만나보세요.*/}
        Air Jordan 6 ‘Infrared’와 함께, 자신만의 위대함을 향해 나아가는 이들을 위한 ‘HOUSE OF GREATNESS’를 선보입니다.
      </div>
    </div>
  );
}
