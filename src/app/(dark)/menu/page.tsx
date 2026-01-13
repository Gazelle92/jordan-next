import { Link } from "next-view-transitions";

import Title from "@/ui/svg/house_of_greatness.svg";
import ChoreoGraphyWorkshop2 from "@/ui/svg/choreo_graphy_workshop_2.svg";
import WomenBattle from "@/ui/svg/women_battle.svg";
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
      <div className="flex flex-col flex-grow-1 items-center justify-center gap-[4px] pt-10">
        <Logo className="w-[33px]" />
        <Title width={300} height={46} />
      </div>
      <div className="flex flex-col items-stretch gap-3 logo_wrap ani">
        {/*<Link href="/selected-users">
          <MenuButton>
            <span className="text-2xl font-black">선정자 명단 보기</span>
          </MenuButton>
        </Link>*/}
        <Link href="/irl-info">
          <MenuButton>
            <IrlInfo width={168} height={18} className="mx-auto" />
          </MenuButton>
        </Link>
        <Link href="/battles">
          <MenuButton>
            <WomenBattle width={239} height={59} className="mx-auto" />
          </MenuButton>
        </Link>
        <Link href="/workshop">
          <MenuButton>
            <ChoreoGraphyWorkshop2 width={321} height={37} className="mx-auto" />
          </MenuButton>
        </Link>
        <Link href="/line-up" className="opacity-0 pointer-events-none">
          <MenuButton>
            <ViewInfrared width={171} height={38} className="mx-auto" />
          </MenuButton>
        </Link>
      </div>
    </div>
  );
}
