import { jordan } from "@/ui/font";
import clsx from "clsx";

export default function BasicInformation() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col gap-1 text-center font-black border-b-1 pb-2">
          <span className="text-[15px] leading-[1]">일시</span>
          <span className={clsx("text-[30px] leading-[29px]", jordan.className)}>2026.2.7</span>
        </div>
        <div className="flex flex-col gap-1 text-center font-black border-b-1 pb-2">
          <span className="text-[15px] leading-[1]">장소</span>
          <span className={clsx("text-[30px] leading-[29px]", jordan.className)}>FUTURA SEOUL</span>
        </div>
      </div>
      <p className="py-8 text-[13px] font-semibold whitespace-pre-wrap break-keep text-center">
        THE INFRARED ERA는 춤을 중심으로 에너지가 생성되고 교류되며, 새로운
        위대함이 축적되는 하나의 플랫폼입니다. 이곳에서 댄스는 단일 퍼포먼스가
        아니라, 경험과 리듬의 교류를 통해 끊임없이 확장되는 언어로 작동합니다.
        <br />
        <br />이 곳에서 위대함은 완성된 결과가 아니라 지속적으로 만들어지는
        과정입니다. 댄서들은 각자의 움직임으로 이 공간의 에너지를 쌓아 올리고,
        그 축적된 힘은 다음 움직임과 다음 세대를 자극하는 신호로 남습니다.{" "}
        <br />
        <br />이 ERA는 춤이라는 언어로 현재를 드러냅니다. 하우스 안에 들어오는
        순간, 우리는 이미 그 시대 한가운데에 서게 됩니다.
      </p>
    </div>
  );
}
