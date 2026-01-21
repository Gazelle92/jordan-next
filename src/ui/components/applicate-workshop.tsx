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
import { createWorkshop } from "@/lib/api-client";
import { PrivacyPolicy } from "@/ui/components/privacy-policy";


const initialForm = {
  name: "",
  phone_number: "",
  birth_date: "",
  instagram_video_url: "",
  what_do_you_want: "",
  privacy_policy_agreed: false,
  third_party_agreed: false,
};

export const ApplicateWorkshop = ({ }) => {
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

  const handleSubmit = async () => {
    if (!form.privacy_policy_agreed || !form.third_party_agreed) {
      if (!form.privacy_policy_agreed && !form.third_party_agreed) {
        setError("개인정보 수집・이용 및 제3자 제공에 동의해 주세요.");
      } else if (!form.privacy_policy_agreed) {
        setError("개인정보 수집・이용 및 콘텐츠 활용에 동의해 주세요.");
      } else {
        setError("개인정보 제3자 제공/처리위탁에 동의해 주세요.");
      }
      return;
    }
    if (!birthDateRegex.test(form.birth_date)) {
      setError("생년월일 형식이 올바르지 않습니다.\n예시) 20260207");
      return;
    }
    if (!phoneRegex.test(form.phone_number)) {
      setError("휴대폰 번호 형식이 올바르지 않습니다.\n예시) 01012345678");
      return;
    }
    if (
      !form.name ||
      !form.phone_number ||
      !form.birth_date ||
      !form.instagram_video_url
      //!form.what_do_you_want
    ) {
      setError("필수 항목 누락되었습니다.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      await createWorkshop(form);
      setCompleted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "신청에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="sticky bottom-3 mt-3 mx-3 z-3">
        <div className="">
          <Button className="border-none text-center pretendard" onClick={() => setOpen(true)}>코레오그래피 워크숍 신청하기</Button>
        </div>
      </div>
      <FullDialog open={open} onClose={() => setOpen(false)}>
        {completed ? (
          <>
            <div className="flex flex-col flex-grow-1 items-center justify-center gap-6">
              <Logo width={100} height={100} />
              <strong className="text-center">코레오그래피 워크숍 신청이<br />완료되었습니다.</strong>
            </div>
            <Link href="/menu">
              <Button>메뉴로 돌아가기</Button>
            </Link>
          </>
        ) : (
          <div className="flex flex-col gap-5 flex-grow-1 h-full">
            <h4 className="font-black text-[24px] text-center">코레오그래피 워크숍 신청서</h4>
            <div className="flex flex-col border-1">
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  이름*
                </div>
                <Input
                  type="text"
                  placeholder="한글"
                  value={form.name}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
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
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
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
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      phone_number: event.target.value,
                    }))
                  }
                />
              </div>


              <div className=" flex flex-col px-1.5 py-1">
                <div className="font-black text-[20px] whitespace-nowrap">
                  인스타그램 영상 링크*
                </div>
                <Textarea
                  placeholder="참여하신 인스타그램 릴스 게시물 링크를 붙여넣어주세요."
                  value={form.instagram_video_url}
                  className="placeholder:text-[#ff3b49] font-extralight text-[12px] resize-none"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      instagram_video_url: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col px-1.5 py-1 hidden border-t-1">
                <div className={clsx("font-black text-[20px] whitespace-nowrap", jordan.className)}>
                  댄서 ‘바다’, ‘왁씨’에게 묻고 싶은 질문
                </div>
                <Textarea
                  placeholder=""
                  value={form.what_do_you_want}
                  className="placeholder:text-[#ff3b49] font-extralight text-[12px] h-[100px]"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      what_do_you_want: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex-grow-1" />
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
                <div className="break-keep">
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

              <Checkbox
                checked={form.third_party_agreed}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    third_party_agreed: event.target.checked,
                  }))
                }
              >
                <div className="break-keep">
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
                  &nbsp;에 동의합니다.
                </div>
              </Checkbox>
              {error && <span className="text-[13px]">{error}</span>}
            </div>


            {/*<div className="flex flex-col">
              <Checkbox
                className="chbx_w"
                checked={form.privacy_policy_agreed}
                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    privacy_policy_agreed: event.target.checked,
                  }))
                }
              >
                <span className="w-[calc(100%-20px)]">본인이 업로드한 릴스 콘텐츠의 HOUSE OF GREATNESS 리캡 영상 및 공식 채널 활용에 동의합니다.</span>
              </Checkbox>
            </div>*/}


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
