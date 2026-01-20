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
import { createBattle } from "@/lib/api-client";
import { PrivacyPolicy } from "@/ui/components/privacy-policy";

const initialForm = {
  name: "",
  phone_number: "",
  birth_date: "",
  battle_genre: "",
  instagram_id: "",
  member2_name: "",
  member2_birth_date: "",
  member2_battle_genre: "",
  member2_phone_number: "",
  member2_instagram_id: "",
  what_do_you_want: "",
  privacy_policy_agreed: false,
};

export const ApplicateBattle = ({ }) => {
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

  const handleSubmit = async () => {
    if (!form.privacy_policy_agreed) {
      setError("개인정보 수집에 동의 해주시기 바랍니다.");
      return;
    }
    if (
      !form.name ||
      !form.phone_number ||
      !form.birth_date ||
      !form.battle_genre ||
      !form.instagram_id ||
      !form.member2_name ||
      !form.member2_birth_date ||
      !form.member2_battle_genre ||
      !form.member2_phone_number ||
      !form.member2_instagram_id ||
      !form.what_do_you_want
    ) {
      setError("필수 항목 누락되었습니다.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      await createBattle(form);
      setCompleted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "신청에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)} className="pretendard">배틀 신청하기</Button>
      <FullDialog open={open} onClose={() => setOpen(false)}>
        {completed ? (
          <>
            <div className="flex flex-col flex-grow-1 items-center justify-center gap-6">
              <Logo width={100} height={100} />
              <strong>배틀 신청이 완료되었습니다.</strong>
            </div>
            <Link href="/menu">
              <Button>메뉴로 돌아가기</Button>
            </Link>
          </>
        ) : (
          <div className="flex flex-col gap-5 flex-grow-1 h-full">
            <h4 className="font-black text-[24px] text-center">배틀 신청서</h4>
            <div className="flex flex-col border-1">
              <div className="border-b-1 flex justify-between px-1.5 py-1 justify-center">
                <div className="text-[20px] font-black whitespace-nowrap">
                  멤버1
                </div>
              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1 text-[20px] ">
                <div className="whitespace-nowrap">
                  이름
                </div>
                <Input
                  type="text"
                  placeholder="한글"
                  value={form.name}
                  className="placeholder:text-[#ff3b49] font-extralight"
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, name: event.target.value }))
                  }
                />
              </div>
              <div className="border-b-0 flex justify-between px-1.5 py-1 pb-0">
                <div className="text-[20px] whitespace-nowrap">
                  생년월일
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
                <div className="text-[20px] whitespace-nowrap">
                  장르
                </div>
                <Input
                  type="text"
                  placeholder="ex) 왁킹"
                  value={form.battle_genre}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      battle_genre: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className=" text-[20px] whitespace-nowrap">
                  휴대폰
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

              <div className="border-b-1 text-[20px] flex flex-col px-1.5 py-1">
                <div className=" whitespace-nowrap">
                  인스타그램 아이디
                </div>
                <Input
                  placeholder="ex) @JORDAN"
                  value={form.instagram_id}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      instagram_id: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1 justify-center">
                <div className="text-[20px] font-black whitespace-nowrap">
                  멤버2
                </div>

              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="text-[20px] whitespace-nowrap">
                  이름
                </div>
                <Input
                  type="text"
                  placeholder="한글"
                  value={form.member2_name}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, member2_name: event.target.value }))
                  }
                />
              </div>
              <div className="border-b-0 flex justify-between px-1.5 py-1 pb-0">
                <div className="text-[20px] whitespace-nowrap">
                  생년월일
                </div>
                <Input
                  type="text"
                  placeholder="ex) YYYYMMDD"
                  value={form.member2_birth_date}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      member2_birth_date: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="text-right text-[12px] border-b-1 pb-1 px-1.5">만 15세 이상만 신청이 가능합니다.</div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className="text-[20px] whitespace-nowrap">
                  장르
                </div>
                <Input
                  type="text"
                  placeholder="ex) 왁킹"
                  value={form.member2_battle_genre}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      member2_battle_genre: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="border-b-1 flex justify-between px-1.5 py-1">
                <div className=" text-[20px] whitespace-nowrap">
                  휴대폰
                </div>
                <Input
                  type="text"
                  placeholder="ex) 01012345678"
                  value={form.member2_phone_number}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      member2_phone_number: event.target.value,
                    }))
                  }
                />
              </div>

              <div className="border-b-1 flex flex-col px-1.5 py-1">
                <div className="text-[20px] whitespace-nowrap">
                  인스타그램 아이디
                </div>
                <Input
                  placeholder="ex) @JORDAN"
                  value={form.member2_instagram_id}
                  className="placeholder:text-[#ff3b49] font-extralight text-[20px]"
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      member2_instagram_id: event.target.value,
                    }))
                  }
                />
              </div>

            </div>
            <div className="flex flex-col px-1.5 py-1 border-1">
              <div className={clsx("font-black text-[20px] whitespace-nowrap", jordan.className)}>
                토크세션 호스트<br />댄서 ‘바다’와 ‘왁씨’에게 묻고 싶은 질문
              </div>
              <Textarea
                placeholder=""
                value={form.what_do_you_want}

                onChange={(event) =>
                  setForm((prev) => ({
                    ...prev,
                    what_do_you_want: event.target.value,
                  }))
                }
                className="placeholder:text-[#ff3b49] font-extralight text-[12px] resize-none h-[100px]"
              />
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
                <div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPrivacyOpen(true);
                    }}
                    className="underline"
                  >
                    개인정보 수집・이용&nbsp;
                  </button>
                  및 콘텐츠 활용에 동의합니다.
                </div>
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
      <PrivacyPolicy
        open={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </>
  );
};
