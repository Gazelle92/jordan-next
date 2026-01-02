import { Link } from "next-view-transitions";

import Category from "@/ui/svg/category.svg";
import ChoreoGraphyWorkshop from "@/ui/svg/choreo_graphy_workshop.svg";
import InfraredBattle from "@/ui/svg/infrared_battle.svg";
import IrlInfo from "@/ui/svg/infrared_irl_info.svg";
import Logo from "@/ui/svg/logo.svg";
import ViewInfrared from "@/ui/svg/view_infrared.svg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
const MenuButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-foreground text-background p-2 w-full h-24"
      {...props}
    >
      {children}
    </button>
  );
};

export default function Menu() {
  return (
    <div className="flex flex-col flex-grow-1 justify-center gap-12.5 p-3">
      <div className="flex flex-col flex-grow-1 items-center justify-center gap-7 pt-10">
        <Logo className="w-20" />
        <Category width={300} height={26} />
      </div>
      <div className="flex flex-col items-stretch gap-3">
        <Link href="/selected-users">
          <MenuButton>
            <span className="text-2xl font-black">선정자 명단 보기</span>
          </MenuButton>
        </Link>
        <Link href="/irl-info">
          <MenuButton>
            <IrlInfo width={168} height={38} className="mx-auto" />
          </MenuButton>
        </Link>
        <Link href="/battles">
          <MenuButton>
            <InfraredBattle width={171} height={38} className="mx-auto" />
          </MenuButton>
        </Link>
        <Link href="/workshop">
          <MenuButton>
            <ChoreoGraphyWorkshop width={217} height={60} className="mx-auto" />
          </MenuButton>
        </Link>
        <Link href="/line-up">
          <MenuButton>
            <ViewInfrared width={171} height={38} className="mx-auto" />
          </MenuButton>
        </Link>
      </div>
    </div>
  );
}
