"use client";

import { useState } from "react";
import { Button } from "./button";
import { FullDialog } from "./full-dialog";
import { Checkbox } from "./checkbox";
import Logo from "@/ui/svg/logo.svg";
import { Link } from "next-view-transitions";
import Image from "next/image";
import clsx from "clsx";
import { jordan } from "../font";

export const Event = ({ }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} reverse>
        월드오브플라이트 참여시 혜택
      </Button>
      <FullDialog open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-5">
          <h4 className="font-black text-[24px] text-center leading-[1.3]">
            월드오브플라이트
            <br />
            참여 이벤트
          </h4>
          <div className="border-t-4 text-center font-black text-[15px] pt-2 pb-3">
            <div className="flex flex-col gap-7">
              리워드
              <Image
                src="/images/event.png"
                alt="reward"
                className="mx-auto"
                width={270}
                height={140}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-col gap-1 text-center font-black border-t-4 border-b-1 pb-2 pt-1.5">
              <span className="text-[15px] leading-[1]">일시</span>
              <span className={clsx("text-[24px] leading-[1]", jordan.className)}>2026.1.21-1.27</span>
            </div>
            <div className="flex flex-col gap-1 text-center font-black border-b-1 pb-2">
              <span className="text-[15px] leading-[1]">장소</span>
              <span className={clsx("text-[24px] leading-[1]", jordan.className)}>
                조던 월드오브플라이트 홍대
              </span>
            </div>
          </div>
          <p className="py-8 text-[13px] font-semibold whitespace-pre-wrap break-keep text-center">
            THE INFRARED ERA는 춤을 중심으로 에너지가 생성되고 교류되며, 새로운
            위대함이 축적되는 하나의 플랫폼입니다. <br />
            <br />
            이곳에서 댄스는 단일 퍼포먼스가 아니라, 경험과 리듬의 교류를 통해
            끊임없이 확장되는 언어로 작동합니다. 이 곳에서 위대함은 완성된
            결과가 아니라 지속적으로 만들어지는 과정입니다. 댄서들은 각자의
            움직임으로 이 공간의 에너지를 쌓아 올리고, 그 축적된 힘은 다음
            움직임과 다음 세대를 자극하는 신호로 남습니다. <br />
            <br />이 ERA는 춤이라는 언어로 현재를 드러냅니다. 하우스 안에
            들어오는 순간, 우리는 이미 그 시대 한가운데에 서게 됩니다.
          </p>
        </div>
      </FullDialog>
    </>
  );
};
