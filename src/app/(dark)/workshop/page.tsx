import { HistoryBack } from "@/ui/components/history-back";

import ChoreoGraphyWorkshop from "@/ui/svg/choreo_graphy_workshop_2.svg";
import Logo from "@/ui/svg/logo.svg";
import { PrivacyPolicy } from "@/ui/components/privacy-policy";
import WorkshopInformation from "@/ui/components/workshop-information";
import { Event } from "@/ui/components/event";
import Videos from "@/ui/components/videos";
import { FullDialog2 } from "@/ui/components/full-dialog2";
import { ApplicateWorkshop } from "@/ui/components/applicate-workshop";
export default function Workshop() {
  return (
    <div className="flex flex-col">
      <HistoryBack />
      <div className="flex flex-col gap-10 px-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7">
          <Logo className="w-20 logo_ani" />
          <ChoreoGraphyWorkshop width={322} className="mx-auto workshop_txt" />
        </div>
        <div className="flex flex-col gap-2 ani">
          <hr className="border-2 border_el ani_order_3 border-l-0 border-r-0" />
          <WorkshopInformation />
          <Event />
        </div>

        <Videos />
      </div>
      <ApplicateWorkshop />
    </div>
  );
}
