import { HistoryBack } from "@/ui/components/history-back";

import InfraredIrlInfo from "@/ui/svg/infrared_irl_info.svg";
import Logo from "@/ui/svg/logo.svg";

import BasicInformation from "@/ui/components/basic-information";
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
      className="flex flex-col gap-5 overflow-hidden rounded-full"
      style={{
        width: size,
        height: size,
      }}
    >
      <Image src={src} alt={alt} width={size} height={size} />
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
    <div className="flex flex-col items-center gap-5">
      <Avatar {...avatarProps} />
      <div className="flex flex-col gap-0.5 text-center">
        <p className={clsx("font-black", small && "text-[13px]")}>{name}</p>
        <p className={clsx(small ? "text-[8px]" : "text-[12px]")}>
          @{instagram}
        </p>
      </div>
    </div>
  );
};

const judges: ProfileProps[] = [
  {
    name: "judge1",
    instagram: "judge1",
    avatarProps: { src: "https://picsum.photos/id/248/300/400", size: 84 },
  },
  {
    name: "judeg2",
    instagram: "judge2",
    avatarProps: { src: "https://picsum.photos/id/249/300/400", size: 84 },
  },
];

const MCs: ProfileProps[] = [
  {
    name: "mc1",
    instagram: "mc1",
    avatarProps: { src: "https://picsum.photos/id/250/300/400", size: 84 },
  },
];

const guests: ProfileProps[] = Array.from({ length: 8 }, (_, index) => ({
  name: `guest${index + 1}`,
  instagram: `guest${index + 1}`,
  avatarProps: { src: `https://picsum.photos/id/${index + 108}/300/400` },
}));

const matches = [
  { label: "16강", time: "12:00 - 14:00" },
  { label: "8강", time: "14:00 - 16:00" },
  { label: "4강", time: "16:00 - 18:00" },
  { label: "결승", time: "18:00 - 20:00" },
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
          <div className="flex flex-col gap-5">
            <h2 className="text-[24px] font-black text-center border-t-4 border-b-1 py-1">
              저지
            </h2>
            <div className="py-5 flex gap-x-16 justify-center">
              {judges.map((judge) => (
                <Profile key={judge.name} {...judge} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[24px] font-black text-center border-t-4 border-b-1 py-1">
              MC
            </h2>
            <div className="py-5 flex gap-x-16 justify-center">
              {MCs.map((judge) => (
                <Profile key={judge.name} {...judge} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[24px] font-black text-center border-t-4 border-b-1 py-1">
              게스트 배틀러
            </h2>
            <div className="py-5 flex flex-wrap gap-5 justify-center">
              {guests.map((judge) => (
                <Profile key={judge.name} {...judge} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-[24px] font-black text-center border-t-4 border-b-1 py-1">
              타임 테이블
            </h2>
            <div className="py-5 grid grid-cols-2 gap-5 px-3.5">
              {matches.map((match) => (
                <div className="flex flex-col items-start" key={match.label}>
                  <p className="font-black text-[12px]">{match.label}</p>
                  <p className="font-medium text-[20px]">{match.time}</p>
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
