"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { FullDialog } from "./full-dialog";
import { Checkbox } from "./checkbox";
import Logo from "@/ui/svg/logo.svg";
import { Link } from "next-view-transitions";
import { Input } from "./input";
import { Textarea } from "./textarea";
import clsx from "clsx";
import { jordan } from "../font";

export const ApplicateBattle = ({ }) => {
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!open) {
      setCompleted(false)
    }
  }, [open]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>배틀 신청하기</Button>
      <FullDialog reverse open={open} onClose={() => setOpen(false)}>
        {completed ? (
          <>
            <div className="flex flex-col flex-grow-1 items-center justify-center gap-6">
              <Logo width={100} height={100} />
              <strong>배틀 신청이 완료되었습니다.</strong>
            </div>
            <Link href="/menu">
              <Button reverse>메뉴로 돌아가기</Button>
            </Link>
          </>
        ) : (
          <div className="flex flex-col gap-5 flex-grow-1">
            <h4 className="font-black text-[24px] text-center">배틀 신청서</h4>
            <div className="flex flex-col border-1">
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  이름
                </div>
                <Input
                  type="text"
                  placeholder="이름을 입력해주세요."
                />
              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  생년월일
                </div>
                <Input
                  type="text"
                  placeholder="생년월일을 입력해주세요."
                />
              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  휴대폰
                </div>
                <Input
                  type="text"
                  placeholder="휴대폰을 입력해주세요."
                />
              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  배틀 장르
                </div>
                <Input
                  type="text"
                  placeholder="배틀 장르를 입력해주세요."
                />
              </div>
              <div className="border-b-1 flex flex-col px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  인스타그램 아이디
                </div>
                <Input
                  placeholder="인스타그램 아이디를 입력해주세요."
                />
              </div>
              <div className="flex flex-col px-1.5 py-1">
                <div className={clsx("font-black text-[20px] whitespace-nowrap", jordan.className)}>
                  WHAT DO YOU WANT
                </div>
                <Textarea placeholder="WHAT DO YOU WANT" />
              </div>
            </div>
            <div className="flex flex-col">
              <Checkbox>
                <a className="underline ">개인정보 수집</a>에 동의합니다.
              </Checkbox>
              <span className="text-[12px]">
                필수 항목을 모두 입력해주세요.
              </span>
            </div>
            <div className="flex-grow-1" />
            <Button reverse onClick={() => setCompleted(true)}>신청하기</Button>
          </div>
        )}
      </FullDialog>
    </>
  );
};
