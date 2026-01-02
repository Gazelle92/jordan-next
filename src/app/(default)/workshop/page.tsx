import { HistoryBack } from "@/ui/components/history-back";

import ChoreoGraphyWorkshop from "@/ui/svg/choreo_graphy_workshop.svg";
import Logo from "@/ui/svg/logo.svg";

import BasicInformation from "@/ui/components/basic-information";
import { Event } from "@/ui/components/event";
import Videos from "@/ui/components/videos";

export default function Workshop() {
  return (
    <div className="flex flex-col">
      <HistoryBack />
      <div className="flex flex-col gap-10 px-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7">
          <Logo className="w-20" />
          <ChoreoGraphyWorkshop width={239} className="mx-auto" />
        </div>
        <div className="flex flex-col gap-2">
          <hr className="border-2" />
          <BasicInformation />
          <Event />
        </div>
        <Videos />
      </div>
    </div>
  );
}
