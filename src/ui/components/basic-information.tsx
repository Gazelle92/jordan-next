import { jordan } from "@/ui/font";
import clsx from "clsx";

export default function BasicInformation() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col gap-1 text-center font-black pb-2 relative">
          <h1 className="text-[24px] font-black leading-[1]">HOUSE OF GREATNESS</h1>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-1 border_el ani_order_6"></div>
        </div>
        <div className="flex flex-col gap-2 text-center font-black pt-[15px] pb-[20px] relative">
          <span className="text-[15px] leading-[1]">일시</span>
          <h1 className="text-[24px] font-black leading-[1]">2026.02.07</h1>
          <span className="text-[15px] leading-[1]">장소</span>
          <h1 className="text-[24px] font-black leading-[1]">앤더슨씨 성수</h1>
          <span className="text-[15px] leading-[1]">서울특별시 성동구 성수일로6길 36</span>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-1 border_el ani_order_9"></div>
        </div>
      </div>
      <div className="py-8 text-[13px] font-semibold whitespace-pre-wrap break-keep text-center ani">
        <div className=" ">
          THE INFRARED ERA는 춤을 중심으로 에너지가 생성되고 교류되며, 새로운
          위대함이 축적되는 하나의 플랫폼입니다. 이곳에서 댄스는 단일 퍼포먼스가
          아니라, 경험과 리듬의 교류를 통해 끊임없이 확장되는 언어로 작동합니다.
        </div>
        <br />
        <div className=" ">
          이 곳에서 위대함은 완성된 결과가 아니라 지속적으로 만들어지는
          과정입니다. 댄서들은 각자의 움직임으로 이 공간의 에너지를 쌓아 올리고,
          그 축적된 힘은 다음 움직임과 다음 세대를 자극하는 신호로 남습니다.{" "}
        </div>

        <br />
        <div className=" ">
          이 ERA는 춤이라는 언어로 현재를 드러냅니다. 하우스 안에 들어오는
          순간, 우리는 이미 그 시대 한가운데에 서게 됩니다.
        </div>
      </div>
    </div>
  );
}
