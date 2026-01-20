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
import { PrivacyPolicy } from "@/ui/components/privacy-policy";

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
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    if (!open) setPrivacyOpen(false);
  }, [open]);

  useEffect(() => {
    if (!open) {
      setCompleted(false);
      setForm(initialForm);
      setError(null);
      setIsSubmitting(false);
    }
  }, [open]);

  const birthDateRegex = /^\d{8}$/;
  const phoneRegex = /^010\d{8}$/;
  const instagramRegex = /^@[A-Za-z0-9._]+$/;

  const handleSubmit = async () => {
    if (!form.privacy_policy_agreed) {
      setError("개인정보 수집에 동의 해주시기 바랍니다.");
      return;
    }
    if (!birthDateRegex.test(form.birth_date)) {
      setError("생년월일 날짜 형식이 올바르지 않습니다.\n예시) 20260207");
      return;
    }
    if (!phoneRegex.test(form.phone_number)) {
      setError("휴대폰 번호 형식이 올바르지 않습니다.\n예시) 01012345678");
      return;
    }
    if (
      !form.name ||
      !form.phone_number ||
      !form.birth_date
      //!form.what_do_you_want
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
              <strong className="text-center">배틀 관람 및 토크 세션<br />참여 신청이 완료되었습니다.</strong>
            </div>
            <Link href="/menu">
              <Button>메뉴로 돌아가기</Button>
            </Link>
          </>
        ) : (
          <div className="flex flex-col gap-5 flex-grow-1 h-full">
            <h4 className="font-black text-[24px] text-center leading-[1]">배틀 관람 및 토크 세션<br />참여 신청서</h4>
            <div className="flex flex-col border-1">
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  이름*
                </div>
                <Input
                  type="text"
                  placeholder="한글"
                  value={form.name}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px] resize-none"
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                />
              </div>
              <div className="border-b-0 flex justify-between px-1.5 py-1 pb-0">
                <div className="font-black text-[20px] whitespace-nowrap">
                  생년월일*
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
              <div className="text-right text-[12px] border-b-1 pb-1 px-1.5">만 15세 이상만 신청이 가능합니다.</div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  휴대폰*
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
                <div className="font-black text-[20px]">
                  댄서 ‘바다’, ‘왁씨’에게 묻고 싶은 질문
                </div>
                <Textarea
                  placeholder=""
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
            <div className="flex flex-col justify-center text-center gap-[8px]">
              <div className="flex justify-center gap-[20px] text-[16px] leading-[1.2] chbx_wrap">
                <Checkbox
                  checked={form.privacy_policy_agreed}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      privacy_policy_agreed: event.target.checked,
                    }))
                  }
                >
                  <div className=" text-[20px] font-black">배틀 관람</div>
                </Checkbox>


                <Checkbox
                  checked={form.privacy_policy_agreed}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      privacy_policy_agreed: event.target.checked,
                    }))
                  }
                >
                  <div className="text-[20px] font-black">토크 세션 관람</div>
                </Checkbox>
              </div>
              <span className="text-[12px]">* 두 프로그램은 중복 신청이 가능합니다.</span>
            </div>
            <div className="flex flex-col gap-1">
              <Checkbox
                checked={form.privacy_policy_agreed}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    privacy_policy_agreed: event.target.checked,
                  }))
                }
              >
                <div>
                  [필수]&nbsp;

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPrivacyOpen(true);
                    }}
                    className="underline"
                  >
                    개인정보 수집・이용
                  </button>
                  &nbsp;및 콘텐츠 활용에 동의합니다.
                </div>
              </Checkbox>
              {error && <span className="text-[12px]">{error}</span>}

              <Checkbox
                checked={form.privacy_policy_agreed}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    privacy_policy_agreed: event.target.checked,
                  }))
                }
              >
                <div>
                  [필수]&nbsp;
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPrivacyOpen(true);
                    }}
                    className="underline"
                  >
                    개인정보 제3자 제공/처리위탁
                  </button>
                  &nbsp;동의
                </div>
              </Checkbox>
              {error && <span className="text-[12px]">{error}</span>}
            </div>


            <div className="flex-grow-1" />
            <Button disabled={isSubmitting} className="pretendard" onClick={handleSubmit}>
              {isSubmitting ? "신청 중..." : "신청하기"}
            </Button>
          </div>
        )}
      </FullDialog>
      <PrivacyPolicy
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </>
  );
};
