"use client";

import { useState } from "react";
import clsx from "clsx";
import { Button } from "./button";
import Image from "next/image";
export default function WorkshopInformation() {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const toggle = (idx: number) => {
    setOpenMap(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1.5">
        <div className="flex flex-col gap-2 text-center font-black pt-[19px] pb-[27px] relative">
          <span className="text-[15px] leading-[1]">일시</span>
          <h1 className="text-[24px] font-black leading-[1]">2026.02.07</h1>
          <span className="text-[15px] leading-[1]">장소</span>
          <h1 className="text-[24px] font-black leading-[1]">앤더슨씨 성수</h1>
          <span className="text-[15px] leading-[1]">서울특별시 성동구 성수일로6길 36</span>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-4 border_el ani_order_9"></div>
        </div>
      </div>
      <div className="py-[22px] text-[13px] font-medium whitespace-pre-wrap break-keep ani px-4 ">
        <div>댄서 ‘바다’가 선택한 60명의 참여자는 2월 7일, 〈HOUSE OF GREATNESS〉 코레오그래피 워크숍에 초대됩니다. 댄서 ‘바다’ 그리고 ‘베베 멤버들’과 함께 완성된 퍼포먼스는 영상으로 제작되어, 소장용으로 전달됩니다.</div>
      </div>

      <div className="text-[13px] font-semibold whitespace-pre-wrap break-keep ani border-t-4">
        <div className="text-[22px] px-4 pt-[12px] font-black text-center">
          {"REGISTRATION 참가 신청"}
        </div>

        <div className={clsx("txt-w ", openMap[0] && "show")}>
          <div className="txt-inner px-4 leading-[1.5]">
            <div className="dot-sp-1 !font-semibold !text-[13px]">
              {"참가 대상 : 만 15세 이상 여성 댄서 누구나"}
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
              {"챌린지 영상 촬영 (조던 월드 오브 플라이트 홍대 / 카시나 성수점 내 스튜디오 또는 춤을 출수 있는 곳 어디든)"}
            </div>

            <div className="font-semibold text-[16px]">
              {"STEP 2."}
            </div>
            <div className="font-semibold text-[13px]">
              {"챌린지 영상을 본인 인스타그램 계정에 ‘릴스’ 업로드 *공개 계정 필수"}
            </div>

            <div className="font-semibold text-[16px]">
              {"STEP 3."}
            </div>
            <div className="font-semibold text-[13px]">
              {"공식 웹사이트 내 신청서에 게시물 링크 등록 후 신청 완료"}
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

        <div className="text-[22px] px-4 pt-[16px] font-black text-center leading-[1]">
          HOW TO CHALLENGE<br />챌린지 참여 방법
        </div>

        <div className="p-4 flex justify-center text-[0px] relative">
          <video
            controls
            playsInline
            preload="metadata"
            className="h-[400px] z-[0] cursor-pointer"
            onPlay={() => setHasStarted(true)}
          >

            <source src="https://customer-y6yfz33adjmztpgx.cloudflarestream.com/eda43045c09ff9f1798d9172fb93ee21/manifest/video.m3u8" />
          </video>
          {!hasStarted && (
            <Image
              src="/images/intro_video_cover.jpg"
              alt="houseofgreatness"
              fill
              className="absolute !top-[16px] !left-[16px] !h-[calc(100%-32px)] !w-[calc(100%-32px)] object-contain z-[1] pointer-events-none"
            />
          )}
          {!hasStarted && (
            <Image
              src="/images/btn_play.png"
              alt="play"
              fill
              className="absolute !h-[40px] !w-[40px] !left-1/2 !top-[45%] -translate-x-1/2 -translate-y-1/2 z-[2] !bottom-auto !right-auto pointer-events-none"
            />
          )}
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

            <br />
            <div className="dot-sp-1 !font-semibold !text-[13px]">
              {"선정 방식: 댄서 ‘바다’가 신청 인원 중 60명 선정"}
            </div>
            <div className="dot-sp-1 !font-semibold !text-[13px]">
              {"참가자 발표: 1월 30일(금), 공식 웹사이트 공지 및 개별 문자 발송"}
            </div>
            <br />
            <div className="!font-semibold !text-[13px]">※ 조던 월드 오브 플라이트 서울 홍대 및 카시나 성수점 내 스튜디오에서 참여 및 접수 완료 시 리워드가 제공됩니다.</div>
            <div className="!font-semibold !text-[13px]">※ 1인 단독 촬영 및 게시물만 인정됩니다. 공동 작업자 참여는 불가합니다.</div>
          </div>

          <a href="https://mp3-audio.mcidiot.workers.dev/" download="FULL_INFRARED.mp3"
          >
            <Button className="mt-4">챌린지 음원 다운로드</Button>
          </a>
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
          {"NOTICE 유의 사항"}
        </div>

        <div className={clsx("txt-w", openMap[2] && "show")}>
          <div className="txt-inner px-4 leading-[1.5]">
            <div className="dot-sp-1 !font-semibold !text-[13px]">
              {"2:2 OPEN STYLE BATTLE과 중복 참여가 불가합니다."}
            </div>
            <div className="dot-sp-1 !font-semibold !text-[13px]">
              {"프로그램 참가자로 선정되지 않더라도 행사 관람을 원하실 경우, 반드시 ‘HOUSE OF GREATNESS 이벤트 관람 신청’을 별도로 신청해 주시기 바랍니다."}
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
            <div className="dot-sp-1 !font-semibold !text-[13px]">
              {"본 음원은 챌린지용으로 제작되었으며, 제3자가 수익 목적이나 상업적 이용을 위해 사용할 수 없습니다."}
            </div>
          </div>

          <div
            className="txt-btn-w w-full flex justify-center mx-auto pb-[30px]"
            onClick={() => toggle(2)}
          >
            <div className="btn_more">
              <div className="bar_w"></div>
              <span className="btn_more_1">더보기</span>
              <span className="btn_more_2">닫기</span>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}
