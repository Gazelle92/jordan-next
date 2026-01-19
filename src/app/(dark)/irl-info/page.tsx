import { HistoryBack } from "@/ui/components/history-back";

import InfraredIrlInfo from "@/ui/svg/infrared_irl_info_3.svg";
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
      <div className="flex flex-col gap-[35px] px-3 pb-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7">
          <Logo className="w-20" />
          <InfraredIrlInfo width={224} height={59} className="mx-auto filled-color" />
        </div>
        <div className="flex flex-col gap-2">
          <hr className="border-2" />
          <IrlInformation />
          <hr className="border-2" />
          <div className="flex flex-col gap-2">
            <h2 className="text-[24px] font-black text-center pb-2 border-b-1">
              프로그램
            </h2>

            <div className="py-[15px] text-[13px] font-semibold whitespace-pre-wrap break-keep leading-[1.5] px-4">
              <h4 className="text-[24px] font-black leading-[1] mb-[6px]">
                01<br />
                2:2 WOMEN&apos;S<br />
                OPEN STYLE BATTLE
              </h4>
              <p>
                여성 댄서만을 위한 2:2 오픈 스타일 배틀. 하우스 DJ의 랜덤 플레이 속에서, 64팀 중 단 한 팀을 가리기 위해 맞붙는 변칙 토너먼트가 펼쳐집니다.
              </p>
              <h4 className="text-[24px] font-black leading-[1]  mb-[6px] mt-[22px]">
                02<br />
                CHOREOGRAPHY<br />
                WORKSHOP
              </h4>
              <p>
                메인 디렉터 ‘바다’와 3인의 스페셜 인스트럭터가 함께하는 코레오그래피 워크숍. ‘바다’가 직접 설계한 시그니처 코레오그래피를 통해 하나의 집단 퍼포먼스를 완성합니다.
              </p>

              <h4 className="text-[24px] font-black leading-[1]  mb-[6px] mt-[22px]">
                03<br />
                TALK SESSION
              </h4>
              <p>
                메인 호스트 ‘바다’, 서브 호스트 ‘왁씨’ 그리고 MC 킹키가 참여하는 토크 세션. 각자의 경험과 이야기를 통해 새로운 영감을 발견해 보세요.
              </p>
            </div>
            <hr className="border-2" />
            <h2 className="text-[24px] font-black text-center pb-2 border-b-1">
              타임테이블
            </h2>
            <div className="flex flex-col py-2">
              {programs.map((program) => (
                <div
                  className={clsx("flex gap-6 px-4 py-1 text-[15px] items-center", jordan.className)}
                  key={program.id}
                >
                  <div className="font-medium">0{program.id}</div>
                  <div className="flex-grow-1 leading-[1] font-black text-balance w-[180px] pr-[calc(100%-320px)] break-keep">{program.name}</div>
                  <div className="font-medium text-[13px]">{program.times}</div>
                </div>
              ))}
            </div>
            <Link href="/battles">
              <Button reverse className="flex justify-center items-center pretendard">
                배틀 신청하기
              </Button>
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
