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
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const toggle = (idx: number) => {
    setOpenMap(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <>
      <div className="text-[22px] px-4 border-t-1 py-[18px] font-black text-center leading-[1]">스토어 챌린지 참여 안내</div>
      <Button className="pretendard" onClick={() => setOpen(true)}>
        조던 월드 오브 플라이트 서울 홍대<br />& 카시나 성수점
      </Button>
      {/*<Button className="pretendard" reverse>챌린지 음원 다운로드</Button>*/}
      <FullDialog open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col h-full relative">
          <h4 className="font-black text-[24px] text-center leading-[1.3] pb-6">
            조던 월드 오브 플라이트 서울<br />홍대 & 카시나 성수점<br />스토어 챌린지 참여 안내
          </h4>
          <div className="border-t-4 text-center font-black text-[15px] py-6">
            <div className="flex flex-col leading-[1] ">
              <span className="text-[15px] pb-1 font-semibold">리워드</span>
              <h1 className="text-[18px] font-black">휴대폰 흡착패드 & 클립형 라이트</h1>

              <Image
                src="/images/event_2.png"
                alt="reward"
                className="mx-auto mt-[19px]"
                width={270}
                height={140}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <hr className="border-2" />
            <div className="flex flex-col gap-1.5">
              <div className="flex flex-col gap-2 text-center font-black py-6 relative">
                {/*
                <span className="text-[15px] leading-[1]">일시</span>
                <h1 className="text-[24px] font-black leading-[1] pb-2">2026.01.21 - 01.27</h1>
                */}
                <span className="text-[15px] leading-[1]">장소</span>
                <h1 className="text-[24px] font-black leading-[1] break-keep">조던 월드 오브 플라이트 서울 홍대</h1>
                <span className="text-[15px] leading-[1]">서울 마포구 양화로 161 1층 / 11:00 - 22:00</span>
                <h1 className="text-[24px] font-black leading-[1]">카시나 성수점</h1>
                <span className="text-[15px] leading-[1]">서울 성동구 성수이로7길 41 / 11:00 - 20:00</span>
                <div className="absolute left-0 bottom-0 h-[1px] border-b-4 border_el ani_order_9"></div>
              </div>
            </div>



            <div className="text-[13px] font-semibold whitespace-pre-wrap break-keep ani border-t-0">
              <div className="text-[22px] px-4 pt-[12px] font-black text-center">
                {"REGISTRATION 참가 신청"}
              </div>

              <div className={clsx("txt-w ", openMap[0] && "show")}>
                <div className="txt-inner px-4 leading-[1.5]">
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"참가 대상: 만 15세 이상 여성 댄서 누구나"}
                  </div>
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"신청 기간 : 1월 21일(수) 12:00~ 1월 27일(화) 23:59"}
                  </div>
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"선정 방식 : 댄서 ‘바다’가 신청자 중 60명을 선정"}
                  </div>
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"참가자 발표 : 1월 30일(금), 공식 웹사이트 공지 및 개별 문자 발송"}
                  </div>
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"신청 방법 : 인스타그램 챌린지 참여 후 공식 웹사이트 접수"}
                  </div>

                  <br />

                  <div className="font-semibold text-[16px]">
                    {"STEP 1."}
                  </div>
                  <div className="font-semibold text-[13px]">
                    {"스튜디오에서 챌린지 영상 촬영"}
                  </div>

                  <div className="font-semibold text-[16px]">
                    {"STEP 2."}
                  </div>
                  <div className="font-semibold text-[13px]">
                    {"본인 인스타그램 계정에 ‘릴스’로 업로드 (공개 계정 필수)"}
                  </div>

                  <div className="font-semibold text-[16px]">
                    {"STEP 3."}
                  </div>
                  <div className="font-semibold text-[13px]">
                    {"공식 웹사이트 내 신청서에 해당 게시물 링크를 제출하면 신청 완료"}
                  </div>

                  <br />

                  <div className="font-semibold text-[13px]">
                    {"※ 신청 영상은 홈페이지 내 ‘참여자 아카이빙 영상’에서 확인 가능하며, 1인 1회 참여 가능합니다."}
                  </div>
                </div>

                <div
                  className="txt-btn-w w-full flex justify-center mx-auto pb-[30px] border-b-1"
                  onClick={() => toggle(0)}
                >
                  <div className="btn_more">
                    <div className="bar_w"></div>
                    <span className="btn_more_1">더보기</span>
                    <span className="btn_more_2">닫기</span>
                  </div>
                </div>
              </div>

              <div className="text-[22px] px-4 pt-[12px] font-black text-center">
                HOW TO CHALLENGE <br />챌린지 참여 방법
              </div>

              <div className={clsx("txt-w", openMap[1] && "show")}>
                <div className="txt-inner px-4 leading-[1.5]">
                  <div className="font-black text-[16px]">
                    {"STEP 1."}
                  </div>
                  <div className="font-semibold text-[13px] whitespace-pre-wrap">
                    {"댄서 ‘바다(@badalee__)’의 챌린지 영상 내 아이디 하단 음원 클릭\n*챌린지 음원은 공식 웹사이트에서 다운로드할 수 있습니다."}
                  </div>

                  <br />

                  <div className="font-black text-[16px]">
                    {"STEP 2."}
                  </div>
                  <div className="font-semibold text-[13px]">
                    {"촬영한 영상을 선택"}
                  </div>

                  <br />

                  <div className="font-black text-[16px]">
                    {"STEP 3."}
                  </div>
                  <div className="font-semibold text-[13px]">
                    {"화면 하단 스티커 아이콘 클릭 후, ‘HOUSEOFGREATNESS’ 검색"}
                  </div>

                  <br />

                  <div className="font-black text-[16px]">
                    {"STEP 4."}
                  </div>
                  <div className="font-semibold text-[13px] whitespace-pre-wrap">
                    {"스티커 선택 후 크기 및 위치 조정\n* 댄서 ‘바다’의 챌린지 영상을 참고하여, 스티커가 잘리지 않도록 화면 상단에 배치합니다."}
                  </div>

                  <br />

                  <div className="font-black text-[16px]">
                    {"STEP 5."}
                  </div>
                  <div className="font-semibold text-[13px]">
                    {"‘릴스’로 업로드"}
                  </div>
                </div>


                <div
                  className="txt-btn-w w-full flex justify-center mx-auto pb-[30px] border-b-1"
                  onClick={() => toggle(1)}
                >
                  <div className="btn_more">
                    <div className="bar_w"></div>
                    <span className="btn_more_1">더보기</span>
                    <span className="btn_more_2">닫기</span>
                  </div>
                </div>
              </div>

              <div className="text-[22px] px-4 pt-[12px] font-black text-center">
                {"REWARDS 현장 참여 혜택"}
              </div>

              <div className={clsx("txt-w", openMap[2] && "show")}>
                <div className="txt-inner px-4 leading-[1.5]">
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"스튜디오에서 인스타그램 업로드 및 공식 웹사이트 신청 완료 시 리워드 증정"}
                  </div>
                  <div className="dot-sp-2 !font-semibold !text-[13px]">
                    {"휴대폰 흡착 패드 & 클립형 라이트 세트"}
                  </div>
                  <div className=" !font-semibold !text-[13px] pl-[12px]">
                    {"※ 리워드는 한정 수량으로 조기 소진될 수 있습니다."}
                  </div>
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"2월 7일 행사 당일, 워크숍 참가자에게 스크래치 쿠폰이 제공되며 당첨자에 한해 인프라레드 제품이 증정됩니다."}
                  </div>



                </div>

                <div
                  className="txt-btn-w w-full flex justify-center mx-auto pb-[30px] border-b-1"
                  onClick={() => toggle(2)}
                >
                  <div className="btn_more">
                    <div className="bar_w"></div>
                    <span className="btn_more_1">더보기</span>
                    <span className="btn_more_2">닫기</span>
                  </div>
                </div>
              </div>

              <div className="text-[22px] px-4 pt-[12px] font-black text-center">
                {"NOTICE 유의 사항"}
              </div>

              <div className={clsx("txt-w", openMap[3] && "show")}>
                <div className="txt-inner px-4 leading-[1.5]">
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"2:2 OPEN STYLE BATTLE과 중복 참여가 불가합니다."}
                  </div>
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"프로그램 참가자로 선정되지 않더라도 행사 관람을 원하실 경우, 반드시 ‘배틀 & 코레오그래피 워크샵 관람’ 신청을 별도로 진행해 주시기 바랍니다."}
                  </div>
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"본 행사는 조던 브랜드 이벤트로, 타 브랜드 로고가 과도하게 노출되는 착장은 자제를 부탁드립니다."}
                  </div>
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"현장 상황에 따라 운영 내용은 일부 변동될 수 있습니다."}
                  </div>
                  <div className="dot-sp-1 !font-semibold !text-[13px]">
                    {"가이드라인에 위반되거나 선정적인 내용은 업로드 및 선정이 제한될 수 있습니다."}
                  </div>
                </div>

                <div
                  className="txt-btn-w w-full flex justify-center mx-auto pb-[30px]"
                  onClick={() => toggle(3)}
                >
                  <div className="btn_more">
                    <div className="bar_w"></div>
                    <span className="btn_more_1">더보기</span>
                    <span className="btn_more_2">닫기</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </FullDialog>
    </>
  );
};
