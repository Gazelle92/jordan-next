"use client";

import { useState } from "react";
import { FullDialog } from "./full-dialog-info-only";
import Image from "next/image";
import clsx from "clsx";

import InfoBtn1 from "@/ui/svg/info_btn_2.svg";

export const GuideInfo2 = ({ }) => {
  const [open, setOpen] = useState(false);
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const toggle = (idx: number) => {
    setOpenMap(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <>
      <div className="bg-foreground text-background flex items-center p-2 w-full h-24" onClick={() => setOpen(true)}>
        <InfoBtn1 width={320} height={55.6} className="mx-auto" />
      </div>
      {/*<Button className="pretendard" reverse>챌린지 음원 다운로드</Button>*/}
      <FullDialog open={open} onClose={() => setOpen(false)}>

        <Image
          src="/images/info_inner_2.svg"
          alt="reward"
          className="mx-auto mt-[30px] mb-[20px]"
          width={400}
          height={140}
        />

        {/*<InfoInner width={360} height={500} className="mx-auto !h-auto" />*/}
      </FullDialog>
    </>
  );
};
