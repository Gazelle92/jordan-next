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
      <Button onClick={() => setOpen(true)}>
        월드오브플라이트 참여시 혜택
      </Button>
      <FullDialog open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-5 h-full relative">
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

          <div className="flex flex-col">
            <hr className="border-2" />
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-col gap-2 text-center font-black pt-[15px] pb-[20px] relative">
                <span className="text-[15px] leading-[1]">일시</span>
                <h1 className="text-[24px] font-black leading-[1]">2026.02.07</h1>
                <span className="text-[15px] leading-[1]">장소</span>
                <h1 className="text-[24px] font-black leading-[1]">앤더슨씨 성수</h1>
                <span className="text-[15px] leading-[1]">서울특별시 성동구 성수일로6길 36</span>
                <div className="absolute left-0 bottom-0 h-[1px] border-b-1 border_el ani_order_9"></div>
              </div>
            </div>
            <div className="py-8 text-[13px] font-semibold whitespace-pre-wrap break-keep ani">
              <div>조던 월드 오브 플라이트 서울 홍대에 마련된 INFRARED를 표현한 무대 위에서 INFRARED CHOREO 챌린지에 참여해보세요.</div>
              <br />
              <div>
                메인 디렉터 바다가 직접 설계한 시그니처 코레오그래피를 따라 각자의 움직임을 현장에서
                퍼포먼스로 기록할 수 있습니다. 이 과정은 단순한 기록을 넘어 CHOREOGRAPHY WORKSHOP
                신청으로 이어지며, 즉각적인 리워드 혜택도 함께 제공됩니다.
              </div>

              <br />

              <div>[REGISTRATION]</div>
              <div className="dot-sp-1">참여 대상: 조던 월드 오브 플라이트 홍대 방문 여성 댄서 누구나</div>
              <div className="dot-sp-1">참여 기간: 1월 21일(수)~1월 27일(화)</div>
              <div className="dot-sp-1">
                참여 방법: 매장 내 셋업을 활용해 챌린지 영상 촬영 후 인스타그램 ‘게시물’ 또는 ‘릴스’ 형태로 업로드
              </div>
              <div>※ 현장 챌린지 참여 시 CHOREOGRAPHY WORKSHOP 신청 자동 연동</div>
              <div className="dot-sp-1">선정 방식: 촬영된 챌린지 영상 중 메인 디렉터 바다 직접 선정</div>
              <div className="dot-sp-1">결과 발표: 나이키 서울 채널을 통해 추후 일정 및 상세 스케줄 공지</div>
              <div>※ 비공개 계정은 참여 및 선정 대상에서 제외됩니다.</div>
              <div>※ 1인당 1회 참여가 가능합니다.</div>

              <br />

              <div>[SET UP]</div>
              <div className="dot-sp-1">스탠바이미</div>
              <div className="dot-sp-1">촬영 조명</div>
              <div className="dot-sp-1">삼각대</div>

              <br />

              <div>[REWARDS]</div>
              <div className="dot-sp-1">인스타그램 업로드 완료 시 조던 브랜드 굿즈 증정</div>

              <br />

              <div>[NOTICE]</div>
              <div>- 2:2 OPEN STYLE BATTLE과 중복 참여가 제한됩니다.</div>
              <div>
                - choreography workshop 참가자로 선정되지 않더라도 본 행사 관람을 원하시는 경우,
                반드시 일반 관람 신청을 별도로 진행해 주시기 바랍니다.
              </div>
              <div>
                - 본 행사는 조던 브랜드 행사로, 타 브랜드 로고가 과도하게 노출되는 착장은 지양해 주시길 부탁드립니다.
              </div>
              <div>- 리워드는 한정 수량으로 조기 소진될 수 있습니다.</div>
              <div>- 원활한 운영을 위해 개인정보 수집 및 이용 동의가 필요합니다.</div>
              <div>- 현장 상황에 따라 운영 내용 및 장비 구성은 일부 변경될 수 있습니다.</div>

            </div>
          </div>
        </div>
      </FullDialog>
    </>
  );
};
