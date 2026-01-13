import { HistoryBack } from "@/ui/components/history-back";

import InfraredIrlInfo from "@/ui/svg/infrared_irl_info_2.svg";
import Logo from "@/ui/svg/logo.svg";

import { Button } from "@/ui/components/button";
import { Link } from "next-view-transitions";
import IrlInformation from "@/ui/components/irl-information";
import clsx from "clsx";
import { jordan } from "@/ui/font";
import { ReservateBattle } from "@/ui/components/reservate-battle";

const programs = [
  { id: 1, name: "배틀", times: "11:00 - 14:30" },
  { id: 2, name: "코레오그래피 워크샵", times: "14:00 - 18:30" },
  { id: 3, name: "토크세션", times: "18:30 - 19:30" },
  { id: 4, name: "퍼블릭 프로그램", times: "11:00 - 20:00" },
];

export default function IrlInfo() {
  return (
    <div className="flex flex-col ani">
      <HistoryBack />
      <div className="flex flex-col gap-16 px-3 pb-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7">
          <Logo className="w-20" />
          <InfraredIrlInfo width={149} className="mx-auto" />
        </div>
        <div className="flex flex-col gap-2">
          <hr className="border-2" />
          <IrlInformation />
          <hr className="border-2" />
          <div className="flex flex-col gap-5">
            <h2 className="text-[24px] font-black text-center">
              프로그램
            </h2>

            <div className="py-[15px] text-[13px] font-semibold whitespace-pre-wrap break-keep ani">
              HOUSE OF GREATNESS는 조던의 정신처럼 멈추지 않는 움직임이 서로를 만나고, 충돌하며, 더 큰 에너지로 확장되는 현장입니다.
              <br />
              이곳에서 GREATNESS는 완성된 결과가 아니라, 지금도 생성 중인 흐름입니다.
              <br /><br />
              여성 댄서들의 주체적인 스텝은 이 흐름의 출발점입니다. 발끝에서 시작된 에너지는 공간을 가로질러 퍼지고, 개인의 움직임은 집단의 리듬이 되어 현장을 채웁니다.
              <br /><br />
              지금, 성수동에서 열리는 HOUSE OF GREATNESS에 들어와 조던이 말하는 움직임의 에너지와 다음 스텝을 향한 순간을 직접 만나보세요.
            </div>
            <div className="flex flex-col fadeCover-0">
              {programs.map((program) => (
                <div
                  className={clsx("border-b flex gap-6 px-4 py-3 text-[15px] items-center", jordan.className)}
                  key={program.id}
                >
                  <div className="font-medium">0{program.id}</div>
                  <div className="flex-grow-1 font-black">{program.name}</div>
                  <div className="font-medium text-[13px]">11:00 - 14:30</div>
                </div>
              ))}
            </div>
            <Link href="/battles">
              <Button>INFRARED BATTLE</Button>
            </Link>

          </div>

        </div>

      </div>
      <div className="sticky bottom-3 mt-3 mx-3">
        <ReservateBattle />
      </div>
    </div>
  );
}
