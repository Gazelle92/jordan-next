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
  { id: 1, name: "2:2 WOMEN'S OPEN STYLE BATTLE", times: "12:00 - 18:30" },
  { id: 2, name: "CHOREOGRAPHY WORKSHOP", times: "14:00 - 18:30" },
  { id: 3, name: "TALK SESSION", times: "19:00 - 20:00" },
  { id: 4, name: "STYLING WORKSHOP", times: "11:00 - 18:00" },
];

export default function IrlInfo() {
  return (
    <div className="flex flex-col">
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
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] font-black text-center pb-2 border-b-1">
              프로그램
            </h2>

            <div className="py-[15px] text-[13px] font-semibold whitespace-pre-wrap break-keep leading-[1.5]">
              <h4 className="text-[16px] font-black">
                01. 2:2 WOMEN&apos;S OPEN STYLE BATTLE
              </h4>
              <p>
                여성 댄서만을 위한 2대2 오픈 스타일 INFRARED BATTLE은 하우스 DJ의 랜덤 플레이 속에서
                INFRARED 에너지가 충돌·증폭되며, 64팀 예선부터 변칙 토너먼트까지 흐름으로
                GREATNESS를 증명하는 배틀입니다.
              </p>
              <br />
              <h4 className="text-[16px] font-black">
                02. CHOREOGRAPHY WORKSHOP
              </h4>
              <p>
                댄서 바다와 스페셜 인스트럭터들과 함께 시그니처 코레오그래피를 배우고 확장하며,
                참여자 전원이 하나의 집단 퍼포먼스로 완성하는 현장 중심 워크숍입니다.
                파트별 안무 습득과 연결을 거쳐, INFRARED의 에너지를 몸으로 체화하는 무대를 만들어갑니다.
              </p>
              <br />
              <h4 className="text-[16px] font-black">
                03. TALK SESSION
              </h4>
              <p>
                바다·왁씨·MC 킹키가 각자의 위치에서 움직임의 기준과 경험을 공유하는 토크 세션은,
                코레오그래피와 배틀 씬을 가로지르는 춤의 스펙트럼을 공유하며
                참여자들이 각자의 다음 스텝을 그려보는 자리입니다.
              </p>
              <br />
              <h4 className="text-[16px] font-black">
                04. STYLING WORKSHOP
              </h4>
              <p>
                Infrared 무드의 티셔츠 커스텀을 통해 댄서 각자의 개성과 자기표현을 확장하는
                스타일링 세션입니다. 무대 안팎에서 움직임과 스타일이 하나의 시그니처로
                완성되는 경험을 제안합니다.
              </p>
            </div>
            <hr className="border-2" />
            <h2 className="text-[24px] font-black text-center pb-2 border-b-1">
              타임테이블
            </h2>
            <div className="flex flex-col py-2">
              {programs.map((program) => (
                <div
                  className={clsx("flex gap-6 px-4 py-2 text-[15px] items-center", jordan.className)}
                  key={program.id}
                >
                  <div className="font-medium">0{program.id}</div>
                  <div className="flex-grow-1 leading-[1] font-black text-balance w-[calc(100%-200px)] break-keep">{program.name}</div>
                  <div className="font-medium text-[13px]">{program.times}</div>
                </div>
              ))}
            </div>
            <ReservateBattle />

          </div>

        </div>

      </div>
      <div className="sticky bottom-3 mt-3 mx-3">
        <Link href="/battles">
          <Button reverse className="flex justify-center items-center">
            BATTLE
          </Button>
        </Link>
      </div>
    </div>
  );
}
