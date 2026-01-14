import { HistoryBack } from "@/ui/components/history-back";
import WomenBattle from "@/ui/svg/women_battle.svg";
import Logo from "@/ui/svg/logo.svg";

import BattleInformation from "@/ui/components/battle-information";
import Image from "next/image";
import clsx from "clsx";
import { Link } from "next-view-transitions";
import { Button } from "@/ui/components/button";
import { ApplicateBattle } from "@/ui/components/applicate-battle";

type AvatarProps = {
  src: string;
  alt?: string;
  size?: number;
};
const Avatar = ({ src, alt = "avatar", size = 60 }: AvatarProps) => {
  return (
    <div
      className="flex flex-col gap-5 overflow-hidden rounded-full items-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <Image src={src} alt={alt} width={size} height={size} className="object-cover h-full w-full" />
    </div>
  );
};

type ProfileProps = {
  name: string;
  instagram: string;
  avatarProps: AvatarProps;
  small?: boolean;
};
const Profile = ({ name, instagram, avatarProps, small }: ProfileProps) => {
  return (
    <div className="flex flex-col items-center gap-4 leading-[1]">
      <Avatar {...avatarProps} />
      <div className="flex flex-col gap-1 text-center">
        <p className={clsx("font-black", small ? "text-[12px]" : "text-[16px]")}>{name}</p>
        <p className={clsx(small ? "text-[8px]" : "text-[12px]")}>
          @{instagram}
        </p>
      </div>
    </div>
  );
};

const judges: ProfileProps[] = [
  {
    name: "EUN.G",
    instagram: "@eun.g_popping",
    avatarProps: { src: "/images/judge_1.png", size: 60 },
  },
  {
    name: "WAACKXXXY",
    instagram: "@waackxx_xy",
    avatarProps: { src: "/images/judge_2.png", size: 60 },
  },
  {
    name: "BABYSLEEK",
    instagram: "@babysleek",
    avatarProps: { src: "/images/judge_3.png", size: 60 },
  },
];







const MCs: ProfileProps[] = [
  {
    name: "DU LOCK",
    instagram: "@dulock87",
    avatarProps: { src: "/images/mc_1.png", size: 60 },
  },
];

const DJs: ProfileProps[] = Array.from({ length: 1 }, (_, index) => ({
  name: "MARCIA",
  instagram: "@dj_marcia",
  avatarProps: { src: "/images/dj_1.png", size: 60 },
}));


const guests: ProfileProps[] = [
  {
    name: "LEESE",
    instagram: "@leese_lee",
    avatarProps: { src: "/images/guest_1.png", size: 60 },
  },
  {
    name: "RIHA",
    instagram: "@riha_rtist",
    avatarProps: { src: "/images/guest_2.png", size: 60 },
  },
  {
    name: "SIMMON",
    instagram: "@simmon__03",
    avatarProps: { src: "/images/guest_3.png", size: 60 },
  },
  {
    name: "CELINE",
    instagram: "@ff_celine_",
    avatarProps: { src: "/images/guest_4.png", size: 60 },
  },
  {
    name: "YUJIN",
    instagram: "@yujin_dancer",
    avatarProps: { src: "/images/guest_5.png", size: 60 },
  },
  {
    name: "RYU",
    instagram: "@l_like__ryu",
    avatarProps: { src: "/images/guest_6.png", size: 60 },
  },
  {
    name: "CERA",
    instagram: "@cera___",
    avatarProps: { src: "/images/guest_7.png", size: 60 },
  },
  {
    name: "LEEVER",
    instagram: "@likealeever",
    avatarProps: { src: "/images/guest_8.png", size: 60 },
  },
];


const matches = [
  { label: "Opening", time: "12:00 - 12:10" },
  { label: "Round 64 (2 Circle)", time: "12:10 - 13:40" },
  { label: "Judge Show", time: "14:20 - 14:50" },
  { label: "Round 12", time: "14:50 - 15:30" },
  { label: "Round 6", time: "15:30 - 16:00" },
  { label: "Wild Card", time: "16:00 - 16:20" },
  { label: "Semifinals", time: "16:20 - 16:50" },
  { label: "Final", time: "16:50 - 17:10" },
  { label: "Awards", time: "17:10 - 17:30" },
];


export default function IrlInfo() {
  return (
    <div className="flex flex-col">
      <HistoryBack />
      <div className="flex flex-col gap-10 px-3 pb-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7">
          <Logo className="w-20" />
          <WomenBattle width={239} className="mx-auto filled-color" />
        </div>
        <div className="flex flex-col gap-2">
          <hr className="border-2 border_el border-l-0 border-r-0" />
          <BattleInformation />

          <div className="flex flex-col">
            <div className="border-t-4 py-1">
              <h2 className="text-[24px] font-black text-center ">
                MC
              </h2>
            </div>
            <div className="py-5 flex gap-x-16 justify-center items-center">
              {MCs.map((judge) => (
                <Profile key={judge.name} {...judge} />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="border-t-4 py-1">
              <h2 className="text-[24px] font-black text-center ">
                JUDGE
              </h2>
            </div>
            <div className="py-5 flex gap-x-2 justify-center ">
              {judges.map((judge) => (
                <Profile key={judge.name} {...judge} />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="border-t-4 py-1">
              <h2 className="text-[24px] font-black text-center ">
                DJ
              </h2>
            </div>
            <div className="py-5 flex gap-x-16 justify-center ">
              {DJs.map((judge) => (
                <Profile key={judge.name} {...judge} />
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="border-t-4 py-1">
              <h2 className="text-[24px] font-black text-center ">
                BATTLE GUEST
              </h2>
            </div>

            <div className="py-5 grid grid-cols-4 gap-5 gap-x-4 gap-y-[26px] justify-center px-6">
              {guests.map((judge) => (
                <Profile key={judge.name} {...judge} small />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 ani">

            <div className="fade-cw border-t-4 border-b-1 py-1">
              <h2 className="fadeCover-1 text-[24px] font-black text-center ">
                배틀 타임 테이블
              </h2>
            </div>
            <div className="py-5 grid grid-cols-1 gap-5 pl-[18px] pr-[14px] pb-0 fadeCover-0-2">
              {matches.map((match, i) => (
                <div className="flex items-start leading-[1] justify-center" key={match.label}>
                  <p className="w-[46px] font-medium text-[15px]">{String(i + 1).padStart(2, "0")}</p>
                  <p className="w-[calc(100%-126px)] font-black uppercase text-[15px]">{match.label}</p>
                  <p className="w-[80px] font-medium text-[13px]">{match.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 overflow-visible">
          <Link href="/workshop">
            <Button reverse>
              CHOREOGRAPHY
              <br />
              WORKSHOP
            </Button>
          </Link>
        </div>
      </div>
      <div className="sticky bottom-3 mt-3 mx-3">
        <ApplicateBattle />
      </div>
    </div>
  );
}
