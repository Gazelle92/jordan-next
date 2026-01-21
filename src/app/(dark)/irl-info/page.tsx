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
  //{ id: 4, name: "STYLING WORKSHOP", times: "11:00 - 18:00" },
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
                여성 댄서들만을 위해 마련된 2:2 오픈 스타일 배틀입니다. DJ의 랜덤 플레이에 맞춰 진행됩니다.
              </p>
              <h4 className="text-[24px] font-black leading-[1]  mb-[6px] mt-[22px]">
                02<br />
                CHOREOGRAPHY<br />
                WORKSHOP
              </h4>
              <p>
                댄서 ‘바다’가 선택한 60명의 참여자는 2월 7일, 〈HOUSE OF GREATNESS〉 코레오그래피 워크숍에 초대됩니다. 댄서 ‘바다’ 그리고 ‘베베 멤버들’과 함께 완성된 퍼포먼스는 영상으로 제작되어, 소장용으로 전달됩니다.
              </p>

              <h4 className="text-[24px] font-black leading-[1]  mb-[6px] mt-[22px]">
                03<br />
                TALK SESSION
              </h4>
              <p>
                댄서 ‘바다’, ‘왁씨’의 각자의 경험을 바탕으로 MC ‘킹키’와 춤에 대해 이야기하는 토크 세션입니다.
              </p>
            </div>
            <hr className="border-2" />
            <h2 className="text-[24px] font-black text-center pb-2 border-b-1">
              타임 테이블
            </h2>
            <div className="flex flex-col py-2">
              {programs.map((program) => (
                <div
                  className={clsx("flex gap-6 px-4 py-1 text-[15px] items-center", jordan.className)}
                  key={program.id}
                >
                  <div className="font-medium">0{program.id}</div>
                  <div className="flex-grow-1 leading-[1] font-black text-balance w-[180px] pr-[calc(100%-320px)] break-keep">{program.name}</div>
                  <div className="whitespace-nowrap font-medium text-[13px]">{program.times}</div>
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
