"use client";

import { HistoryBack } from "@/ui/components/history-back";
import WomenBattle from "@/ui/svg/women_battle.svg";
import Logo from "@/ui/svg/logo.svg";
import { useState } from "react";
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
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const toggle = (idx: number) => {
    setOpenMap(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="flex flex-col">
      <HistoryBack />
      <div className="flex flex-col gap-[35px] px-3 pb-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7">
          <Logo className="w-20" />
          <WomenBattle width={239} className="mx-auto filled-color" />
        </div>
        <div className="flex flex-col gap-2">
          <hr className="border-2 border_el border-l-0 border-r-0" />
          <BattleInformation />

          <div className="flex flex-col">
            <div className="border-t-4 py-1 border-b-1">
              <h2 className="text-[24px] font-black text-center">
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
            <div className="border-t-4 py-1 border-b-1">
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
            <div className="border-t-4 py-1 border-b-1">
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
            <div className="border-t-4 py-1 border-b-1">
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


          <div className="text-[13px] font-semibold whitespace-pre-wrap break-keep ani  border-t-4">



            <div className="text-[20px] px-4 pt-[12px] font-black">REGISTRATION | 참가 신청</div>

            <div className={clsx("txt-w ", openMap[0] && "show")}>
              <div className="txt-inner px-4 leading-[1.5]">
                <div className="dot-sp-1 !font-semibold !text-[13px]">참가 대상: 여성 댄서 누구나 (2인 1조 팀으로 신청 가능)</div>
                <div className="dot-sp-1 !font-semibold !text-[13px]">신청 기간: 1월 21일(수)~1월 27일(화)</div>
                <div className="dot-sp-1 !font-semibold !text-[13px]">참가자 발표: 1월 30일(금), 공식 웹사이트 공지 및 개별 문자 발송</div>
              </div>
              <div className="txt-btn-w w-full flex justify-center mx-auto pb-[30px] border-b-1 " onClick={() => toggle(0)}>
                <div className="btn_arrow " /></div>
            </div>

            <div className="text-[20px] px-4 pt-[12px] font-black">BATTLE RULES | 배틀 규정</div>
            <div className={clsx("txt-w", openMap[1] && "show")}>
              <div className="txt-inner px-4 leading-[1.5]">
                <div className="dot-sp-1">1차 예선</div>
                <div className="dot-sp-2">3개 서클 동시 진행 / 점수제 (팀당 90초)</div>
                <div className="dot-sp-2">각 서클 점수 상위 10팀 → 2차 예선 진출</div>

                <br />

                <div className="dot-sp-1">2차 예선</div>
                <div className="dot-sp-2">오디션 방식 / 점수제 (팀당 70초)</div>
                <div className="dot-sp-2">점수 상위 8팀 → 본선 진출</div>

                <br />

                <div className="dot-sp-1">본선 (TOP12)</div>
                <div className="dot-sp-2">예선 상위 8팀 + 배틀 게스트 4팀</div>
                <br />

                <div className="dot-sp-1">TOP12 &amp; TOP6</div>
                <div className="dot-sp-2">팀당 2라운드 (라운드당 60초) / 루틴 제한 없음</div>
                <br />

                <div className="dot-sp-1">SEMI FINAL</div>
                <div className="dot-sp-2">팀당 2라운드 (라운드당 60초) / 루틴 제한 없음</div>
                <br />

                <div className="dot-sp-1">WILD CARD</div>
                <div className="dot-sp-2">TOP6 배틀에서 승리한 3팀을 제외한 9팀 중, JUDGE가 각 1팀씩 총 3팀 선발</div>
                <div className="dot-sp-2">콘테스트를 통해 최종 1팀이 WILD CARD로 SEMI FINAL 진출</div>

                <br />

                <div className="dot-sp-1">FINAL BATTLE</div>
                <div className="dot-sp-2">팀당 3라운드 (라운드당 60초) / 루틴 제한 없음</div>
                <div className="dot-sp-2">연장 시: 각 팀에서 루틴 없이 솔로 / (40초)</div>

                <br />

                <div className="dot-sp-1">심사 방식</div>
                <div className="dot-sp-2">예선 ~ TOP6: JUDGE ONLY</div>
                <div className="dot-sp-2">SEMI FINAL ~ FINAL: JUDGE + 관객 심사</div>
                <div className="dot-sp-2">JUDGE 거수 3포인트 + 관객 심사 1포인트 (총 4포인트)로 승패 결정</div>



              </div>
              <div className="txt-btn-w w-full flex justify-center mx-auto pb-[30px] border-b-1" onClick={() => toggle(1)}>
                <div className="btn_arrow " /></div>
            </div>


            <br />

            <div className="text-[20px] px-4 pt-[12px] font-black">BATTLE REWARDS | 우승 혜택</div>
            <div className={clsx("txt-w", openMap[2] && "show")}>
              <div className="txt-inner  px-4 leading-[1.5]">
                <div className="dot-sp-1 !font-semibold !text-[13px]"><b>1등</b> : 1,000만 원 상당의 조던 브랜드 스폰서십+젬 신발 트로피</div>

                <div className="dot-sp-1 !font-semibold !text-[13px]"><b>2등</b> : 500만 원 상당의 조던 브랜드 스폰서십</div>
                <div className="dot-sp-1 !font-semibold !text-[13px]"><b>공동 3등 (2팀)</b> : 각 200만 원 상당의 조던 브랜드 스폰서십</div>
                <div className="dot-sp-1 !font-semibold !text-[13px]"><b>HOUSE OF GREATNESS상 </b> : Air Jordan 6 'Infrared'+캠페인 어셋 출연권</div>
                <br />
                <div>※ 리워드는 지급일로부터 1년간 유효하며, 재고 상황에 따라 제품 선택이 제한될 수 있습니다.</div>
              </div>
              <div className="txt-btn-w w-full flex justify-center mx-auto pb-[30px] border-b-1" onClick={() => toggle(2)}>
                <div className="btn_arrow " /></div>
            </div>


            <br />
            <div className="text-[20px] px-4 pt-[12px] font-black">NOTICE | 유의 사항</div>
            <div className={clsx("txt-w", openMap[3] && "show")}>
              <div className="txt-inner px-4 leading-[1.5]">
                <div className="dot-sp-1 !font-semibold !text-[13px]">코레오그래피 워크샵과 중복 참여가 제한됩니다.</div>
                <div className="dot-sp-1 !font-semibold !text-[13px]">프로그램 참가자로 선정되지 않더라도 행사 관람을 원하실 경우, 반드시 일반 관람 신청을 별도로 진행해 주시기 바랍니다.</div>
                <div className="dot-sp-1 !font-semibold !text-[13px]">본 행사는 조던 브랜드 이벤트로, 타 브랜드 로고가 과도하게 노출되는 착장은 자제를 부탁드립니다.</div>
                <div className="dot-sp-1 !font-semibold !text-[13px]">원활한 운영을 위해 신청 시 개인정보 수집·이용 및 콘텐츠 활용 동의가 필요합니다.</div>
                <div className="dot-sp-1 !font-semibold !text-[13px]">현장 상황에 따라 운영 내용은 일부 변동될 수 있습니다.</div>
              </div>
              <div className="txt-btn-w w-full flex justify-center mx-auto pb-[30px]" onClick={() => toggle(3)}>
                <div className="btn_arrow " /></div>
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
