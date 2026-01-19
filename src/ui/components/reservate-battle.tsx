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
import { createPreRegistration } from "@/lib/api-client";

const initialForm = {
  name: "",
  phone_number: "",
  birth_date: "",
  what_do_you_want: "",
  privacy_policy_agreed: false,
};

export const ReservateBattle = ({ }) => {
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!open) {
      setCompleted(false);
      setForm(initialForm);
      setError(null);
      setIsSubmitting(false);
    }
  }, [open]);

  const handleSubmit = async () => {
    if (!form.privacy_policy_agreed) {
      setError("개인정보 수집에 동의 해주시기 바랍니다.");
      return;
    }
    if (
      !form.name ||
      !form.phone_number ||
      !form.birth_date ||
      !form.what_do_you_want
    ) {
      setError("필수 항목 누락되었습니다.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      await createPreRegistration(form);
      setCompleted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "신청에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <span className="text-[24px] pretendard">{/*HOUSE OF GREATNESS 이벤트 예약하기*/}배틀 관람 및 토크 세션 신청하기</span>
      </Button>
      <FullDialog open={open} onClose={() => setOpen(false)}>
        {completed ? (
          <>
            <div className="flex flex-col flex-grow-1 items-center justify-center gap-6">
              <Logo width={100} height={100} />
              <strong>배틀 관람 및 토크세션<br />참여 신청이 완료되었습니다.</strong>
            </div>
            <Link href="/menu">
              <Button>메뉴로 돌아가기</Button>
            </Link>
          </>
        ) : (
          <div className="flex flex-col gap-5 flex-grow-1 h-full">
            <h4 className="font-black text-[24px] text-center leading-[1]">배틀 관람 및 토크세션<br />참여 신청서</h4>
            <div className="flex flex-col border-1">
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  이름
                </div>
                <Input
                  type="text"
                  placeholder="한글/영문"
                  value={form.name}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px] resize-none"
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                />
              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  생년월일
                </div>
                <Input
                  type="text"
                  placeholder="ex) YYYYMMDD"
                  value={form.birth_date}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px] resize-none"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      birth_date: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  휴대폰
                </div>
                <Input
                  type="text"
                  placeholder="ex) 01012345678"
                  value={form.phone_number}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px] resize-none"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      phone_number: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col px-1.5 py-1">
                <div className={clsx("font-black text-[20px]", jordan.className)}>
                  토크세션 호스트<br />‘바다’와 ‘왁씨’에게 묻고 싶은 질문
                </div>
                <Textarea
                  placeholder=" ‘바다’와 ‘왁씨’에게 묻고 싶은 질문이 있다면 적어주세요."
                  value={form.what_do_you_want}
                  className="placeholder:text-[#ff3b49] font-extralight text-[12px] resize-none h-[100px]"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      what_do_you_want: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex flex-col">
              <Checkbox
                checked={form.privacy_policy_agreed}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    privacy_policy_agreed: event.target.checked,
                  }))
                }
              >
                <a className="underline ">개인정보 수집・이용 및 콘텐츠 활용</a>에 동의합니다.
              </Checkbox>
              {error && <span className="text-[12px]">{error}</span>}
            </div>
            <div className="flex-grow-1" />
            <Button disabled={isSubmitting} onClick={handleSubmit}>
              {isSubmitting ? "신청 중..." : "신청하기"}
            </Button>
          </div>
        )}
      </FullDialog>
    </>
  );
};
