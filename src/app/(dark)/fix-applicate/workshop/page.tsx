"use client";

import { useState } from "react";
import { Button } from "@/ui/components/button";
import { Input } from "@/ui/components/input";
import { Textarea } from "@/ui/components/textarea";
import { Link } from "next-view-transitions";
import Logo from "@/ui/svg/logo.svg";
import clsx from "clsx";
import { jordan } from "@/ui/font";
import {
  deleteWorkshopByAuth,
  getWorkshopByAuth,
  updateWorkshopByAuth,
} from "@/lib/api-client";

type Step = "verify" | "edit" | "doneEdit" | "doneDelete";
type VerifyForm = {
  name: string;
  phoneMiddle: string;
};
type WorkshopForm = {
  id: number;
  name: string;
  birth_date: string;
  phone_number: string;
  battle_genre: string;
  instagram_video_url: string;
  what_do_you_want: string;
};

export default function WorkshopEditPage() {
  const [step, setStep] = useState<Step>("verify");
  const [verifyForm, setVerifyForm] = useState<VerifyForm>({
    name: "",
    phoneMiddle: "",
  });
  const [workshopForm, setWorkshopForm] = useState<WorkshopForm | null>(null);
  const [authInfo, setAuthInfo] = useState<VerifyForm | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVerify = async () => {
    if (!verifyForm.name || !verifyForm.phoneMiddle) {
      setError("이름과 휴대폰 뒷자리를 입력해 주세요.");
      return;
    }
    setIsVerifying(true);
    setError(null);
    try {
      const match = await getWorkshopByAuth(
        verifyForm.name,
        verifyForm.phoneMiddle
      );
      setWorkshopForm({
        id: match.id,
        name: match.name,
        birth_date: match.birth_date,
        phone_number: match.phone_number,
        battle_genre: match.battle_genre ?? "",
        instagram_video_url: match.instagram_video_url,
        what_do_you_want: match.what_do_you_want,
      });
      setAuthInfo(verifyForm);
      setStep("edit");
    } catch (err) {
      setError(err instanceof Error ? err.message : "조회에 실패했습니다.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleUpdate = async () => {
    if (!workshopForm || !authInfo) {
      return;
    }
    if (
      !workshopForm.name ||
      !workshopForm.birth_date ||
      !workshopForm.phone_number ||
      !workshopForm.battle_genre ||
      !workshopForm.instagram_video_url ||
      !workshopForm.what_do_you_want
    ) {
      setError("필수 항목을 모두 입력해 주세요.");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      await updateWorkshopByAuth(authInfo.name, authInfo.phoneMiddle, {
        name: workshopForm.name,
        birth_date: workshopForm.birth_date,
        phone_number: workshopForm.phone_number,
        battle_genre: workshopForm.battle_genre,
        instagram_video_url: workshopForm.instagram_video_url,
        what_do_you_want: workshopForm.what_do_you_want,
      });
      setStep("doneEdit");
    } catch (err) {
      setError(err instanceof Error ? err.message : "수정에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!workshopForm || !authInfo) {
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      await deleteWorkshopByAuth(authInfo.name, authInfo.phoneMiddle);
      setStep("doneDelete");
    } catch (err) {
      setError(err instanceof Error ? err.message : "삭제에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-dvh bg-black text-red-500 flex flex-col">
      {step === "verify" && (
        <StepVerify
          form={verifyForm}
          error={error}
          isLoading={isVerifying}
          onChange={setVerifyForm}
          onNext={handleVerify}
        />
      )}

      {step === "edit" && (
        <StepEdit
          form={workshopForm}
          error={error}
          isLoading={isSubmitting}
          onChange={setWorkshopForm}
          onSubmit={handleUpdate}
          onDelete={handleDelete}
        />
      )}

      {step === "doneEdit" && <StepDone text="신청이 수정되었습니다." />}

      {step === "doneDelete" && <StepDone text="신청이 취소되었습니다." />}
    </div>
  );
}

function StepVerify({
  form,
  error,
  isLoading,
  onNext,
  onChange,
}: {
  form: VerifyForm;
  error: string | null;
  isLoading: boolean;
  onNext: () => void;
  onChange: (form: VerifyForm) => void;
}) {
  return (
    <div className="flex flex-col gap-5 flex-grow mt-10 px-5 pb-5">
      <h4 className="font-black text-[24px] text-center">워크샵 신청서 수정</h4>

      <div className="flex items-center justify-center mt-[120px] text-center">
        <strong>이름과 휴대폰 뒷자리를 입력해 주세요.</strong>
      </div>

      <div className="flex flex-col border-1 mt-[20px]">
        <div className="border-b-1 flex justify-between px-1.5 py-1">
          <div className="font-black text-[20px] whitespace-nowrap">이름</div>
          <Input
            type="text"
            placeholder="이름을 입력해주세요."
            value={form.name}
            onChange={(event) =>
              onChange({ ...form, name: event.target.value })
            }
          />
        </div>
        <div className="border-b-1 flex justify-between px-1.5 py-1">
          <div className="font-black text-[20px] whitespace-nowrap">
            휴대폰 중간 4자리
          </div>
          <Input
            type="text"
            placeholder="휴대폰을 입력해주세요."
            value={form.phoneMiddle}
            onChange={(event) =>
              onChange({ ...form, phoneMiddle: event.target.value })
            }
          />
        </div>
      </div>

      <span className="text-[12px]">{error ?? ""}</span>

      <div className="flex-grow-1" />
      <Button className="py-3" disabled={isLoading} onClick={onNext}>
        {isLoading ? "확인 중..." : "확인"}
      </Button>
    </div>
  );
}

function StepEdit({
  form,
  error,
  isLoading,
  onChange,
  onSubmit,
  onDelete,
}: {
  form: WorkshopForm | null;
  error: string | null;
  isLoading: boolean;
  onChange: (form: WorkshopForm | null) => void;
  onSubmit: () => void;
  onDelete: () => void;
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const formValue = form ?? {
    id: 0,
    name: "",
    birth_date: "",
    phone_number: "",
    battle_genre: "",
    instagram_video_url: "",
    what_do_you_want: "",
  };

  return (
    <div className="flex flex-col gap-5 flex-grow mt-10 px-5 pb-5">
      <h4 className="font-black text-[24px] text-center">워크샵 신청서 수정</h4>

      <div className="flex flex-col border-1">
        <div className="border-b-1 flex justify-between px-1.5 py-1">
          <div className="font-black text-[20px] whitespace-nowrap">이름</div>
          <Input
            type="text"
            placeholder="이름을 입력해주세요."
            value={formValue.name}
            onChange={(event) =>
              onChange({ ...formValue, name: event.target.value })
            }
          />
        </div>

        <div className="border-b-1 flex justify-between px-1.5 py-1">
          <div className="font-black text-[20px] whitespace-nowrap">
            생년월일
          </div>
          <Input
            type="text"
            placeholder="생년월일을 입력해주세요."
            value={formValue.birth_date}
            onChange={(event) =>
              onChange({ ...formValue, birth_date: event.target.value })
            }
          />
        </div>
        <div className="border-b-1 flex justify-between px-1.5 py-1">
          <div className="font-black text-[20px] whitespace-nowrap">휴대폰</div>
          <Input
            type="text"
            placeholder="휴대폰을 입력해주세요."
            value={formValue.phone_number}
            onChange={(event) =>
              onChange({ ...formValue, phone_number: event.target.value })
            }
          />
        </div>
        <div className="border-b-1 flex justify-between px-1.5 py-1">
          <div className="font-black text-[20px] whitespace-nowrap">
            배틀 장르
          </div>
          <Input
            type="text"
            placeholder="배틀 장르를 입력해주세요."
            value={formValue.battle_genre}
            onChange={(event) =>
              onChange({ ...formValue, battle_genre: event.target.value })
            }
          />
        </div>
        <div className="border-b-1 flex flex-col px-1.5 py-1">
          <div className={clsx("font-black text-[20px] whitespace-nowrap", jordan.className)}>
            인스타그램 영상 링크
          </div>
          <Textarea
            className="resize-none"
            placeholder="인스타그램 영상 링크"
            value={formValue.instagram_video_url}
            onChange={(event) =>
              onChange({ ...formValue, instagram_video_url: event.target.value })
            }
          />
        </div>

        <div className="border-b-1 flex flex-col px-1.5 py-1">
          <div className={clsx("font-black text-[20px] whitespace-nowrap", jordan.className)}>
            WHAT DO YOU WANT
          </div>
          <Textarea
            placeholder="WHAT DO YOU WANT"
            value={formValue.what_do_you_want}
            onChange={(event) =>
              onChange({ ...formValue, what_do_you_want: event.target.value })
            }
          />
        </div>
      </div>
      <span className="text-[12px]">
        {error ?? "필수 항목을 모두 입력해 주세요."}
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
            disabled={isLoading}
          >
            신청내역 삭제
          </Button>

          <Button onClick={onSubmit} disabled={isLoading}>
            {isLoading ? "수정 중..." : "수정하기"}
          </Button>
        </div>
      ) : (
        <div className="flex gap-2">
          <Button
            reverse
            className="flex-1"
            onClick={onDelete}
            disabled={isLoading}
          >
            {isLoading ? "처리 중..." : "예"}
          </Button>
          <Button
            className="flex-1"
            onClick={() => setConfirmDelete(false)}
            disabled={isLoading}
          >
            아니오
          </Button>
        </div>
      )}
    </div>
  );
}

function StepDone({ text }: { text: string }) {
  return (
    <div className="flex flex-col flex-grow items-center justify-center gap-6 px-5 pb-5">
      <div className="flex flex-col flex-grow items-center justify-center">
        <Logo width={120} height={120} />
        <strong>{text}</strong>
      </div>
      <Link href="/" className="mt-10 w-full">
        <Button>웹사이트로 이동</Button>
      </Link>
    </div>
  );
}
