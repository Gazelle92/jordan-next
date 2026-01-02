import { HistoryBack } from "@/ui/components/history-back";

import InfraredIrlInfo from "@/ui/svg/infrared_irl_info.svg";
import Logo from "@/ui/svg/logo.svg";

import { Button } from "@/ui/components/button";
import { Link } from "next-view-transitions";
import BasicInformation from "@/ui/components/basic-information";
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
    <div className="flex flex-col">
      <HistoryBack />
      <div className="flex flex-col gap-10 px-3 pb-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7">
          <Logo className="w-20" />
          <InfraredIrlInfo width={256} className="mx-auto" />
        </div>
        <div className="flex flex-col gap-2">
          <hr className="border-2" />
          <BasicInformation />
          <hr className="border-2" />
          <div className="flex flex-col gap-5">
            <h2 className="text-[24px] font-black text-center">
              프로그램 구성
            </h2>
            <div className="flex flex-col">
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
