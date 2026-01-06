"use client";

import { useState } from "react";
import { Button } from "@/ui/components/button";
import { Input } from "@/ui/components/input";
import { Textarea } from "@/ui/components/textarea";
import { Link } from "next-view-transitions";
import Logo from "@/ui/svg/logo.svg";
import clsx from "clsx";
import { jordan } from "@/ui/font";

type Step = "verify" | "edit" | "doneEdit" | "doneDelete";

export default function RegistrationEditPage() {
  const [step, setStep] = useState<Step>("verify");

  return (
    <div className="min-h-dvh bg-black text-red-500 flex flex-col">
      {step === "verify" && (
        <StepVerify onNext={() => setStep("edit")} />
      )}

      {step === "edit" && (
        <StepEdit
          onSubmit={() => setStep("doneEdit")}
          onDelete={() => setStep("doneDelete")}
        />
      )}

      {step === "doneEdit" && (
        <StepDone
          text="신청이 수정되었습니다."
        />
      )}

      {step === "doneDelete" && (
        <StepDone
          text="신청이 취소되었습니다."
        />
      )}
    </div>
  );
}

/* ===============================
   STEP 1 – 본인 확인
=============================== */
function StepVerify({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col gap-5 flex-grow mt-10 px-5 pb-5">
      <h4 className="font-black text-[24px] text-center">
        신청서 수정
      </h4>

      <div className="flex items-center justify-center mt-[120px] text-center">
        <strong>
          이름과 휴대폰 뒷자리를 입력해 주세요.
        </strong>
      </div>

      <div className="flex flex-col border-1 mt-[20px]">
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
            휴대폰 중간 4자리
          </div>
          <Input
            type="text"
            placeholder="휴대폰을 입력해주세요."
          />
        </div>
      </div>

      <span className="text-[12px]">
        잘못 입력하였습니다.
      </span>

      <div className="flex-grow-1" />
      <Button className="py-3" onClick={onNext}>
        확인
      </Button>
    </div>
  );
}

/* ===============================
   STEP 2 – 신청서 수정
=============================== */
function StepEdit({
  onSubmit,
  onDelete,
}: {
  onSubmit: () => void;
  onDelete: () => void;
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="flex flex-col gap-5 flex-grow mt-10 px-5 pb-5">
      <h4 className="font-black text-[24px] text-center">
        신청서 수정
      </h4>

      {/* 입력 폼 (항상 유지) */}
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
        <div className="border-b-1 flex flex-col px-1.5 py-1">
          <div className={clsx("font-black text-[20px] whitespace-nowrap", jordan.className)}>
            인스타그램 영상 링크
          </div>
          <Textarea className="resize-none" placeholder="인스타그램 영상 링크" />
        </div>

        <div className="border-b-1 flex flex-col px-1.5 py-1">
          <div className={clsx("font-black text-[20px] whitespace-nowrap", jordan.className)}>
            WHAT DO YOU WANT
          </div>
          <Textarea placeholder="WHAT DO YOU WANT" />
        </div>

      </div>
      <span className="text-[12px]">
        필수 항목을 모두 입력해 주세요.
      </span>







      <div className="flex-grow-1 flex items-center justify-center">
        {confirmDelete && (
          <strong className="text-center">
            취소하면 모든 입력 내용이 사라집니다.
            <br />
            계속하시겠습니까?
          </strong>
        )}
      </div>

      {!confirmDelete ? (

        <div className="flex flex-col gap-2">
          <Button
            reverse
            onClick={() => setConfirmDelete(true)}
          >
            신청내역 삭제
          </Button>

          <Button onClick={onSubmit}>
            수정하기
          </Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button
            reverse
            className="flex-1"
            onClick={onDelete}
          >
            예
          </Button>
          <Button
            className="flex-1"
            onClick={() => setConfirmDelete(false)}
          >
            아니오
          </Button>
        </div>
      )}
    </div>
  );
}

/* ===============================
   STEP 3 – 완료
=============================== */
function StepDone({ text }: { text: string }) {
  return (
    <div className="flex flex-col flex-grow items-center justify-center gap-6 px-5 pb-5">
      <div className="flex flex-col flex-grow items-center justify-center">
        <Logo width={120} height={120} />
        <strong>{text}</strong>
      </div>
      <Link href="/" className="mt-10 w-full">
        <Button>
          웹사이트로 이동
        </Button>
      </Link>
    </div>
  );
}

/* ===============================
   FIELD
=============================== */
function Field({
  label,
  children,
  font,
}: {
  label: string;
  children: React.ReactNode;
  font?: boolean;
}) {
  return (
    <div className="border-b-1 px-1.5 py-1">
      <div
        className={clsx(
          "font-black text-[20px]",
          font && jordan.className
        )}
      >
        {label}
      </div>
      {children}
    </div>
  );
}
