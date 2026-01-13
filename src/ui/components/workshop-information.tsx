import { jordan } from "@/ui/font";
import clsx from "clsx";

export default function WorkshopInformation() {
  return (
    <div className="flex flex-col">
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

        <div>INFRARED의 에너지를 움직임의 언어로 풀어내며, 몸으로 직접 체화하는 코레오그래피 여정이 펼쳐집니다.</div>
        <br />
        <div>메인 디렉터 ‘바다’가 직접 설계한 시그니처 코레오그래피를 중심으로, 3인의 스페셜 인스트럭터와 함께 무브의 출발점과 흐름을 익히며 움직임을 확장해 나갑니다.</div>
        <br />
        <div>파트별 안무를 연결해 모두가 하나의 집단 퍼포먼스로 완성하고, 이 퍼포먼스는 비주얼 필름으로 기록되어 INFRARED의 에너지가 무대 밖까지 이어지는 순간을 직접 경험해보세요.</div>
        <br />
        <div>[REGISTRATION]</div>

        <div className="dot-sp-1">참가 대상: 여성 댄서 누구나</div>
        <div className="dot-sp-1">신청 기간: 1월 21일(수)~1월 27일(화)</div>
        <div className="dot-sp-1">신청 방법: 인스타그램 챌린지 참여 후 공식 웹사이트 접수</div>
        <div className="dot-sp-2">STEP 1. 조던 월드 오브 플라이트 홍대 혹은 카시나 성수점 내 별도 셋업 공간 또는 개인 공간에서 챌린지 영상 촬영</div>
        <div className="dot-sp-2">STEP 2. 본인 인스타그램 계정에 ‘게시물’ 또는 ‘릴스’ 형태로 업로드</div>
        <div className="dot-sp-2">STEP 3. 공식 웹사이트에서 해당 게시물 링크 제출 및 최종 신청서 작성</div>
        <div className="dot-sp-1">선정 방식: 메인 디렉터 ‘바다’가 신청 인원 중 총 60명 직접 선정</div>
        <div className="dot-sp-1">참가자 발표: 나이키 서울 채널 및 공식 웹사이트를 통해 추후 공지</div>
        <div className="dot-sp-1">신청하신 영상은 홈페이지 내 ‘참여자 아카이빙 영상’에서 확인하실 수 있습니다.</div>
        <div>※ 비공개 계정은 참여 및 선정 대상에서 제외됩니다.</div>

        <br /><br />

        <div>[NOTICE]</div>
        <div>- 2:2 OPEN STYLE BATTLE과 중복 참여가 제한됩니다.</div>
        <div>- choreography workshop 참가자로 선정되지 않더라도 본 행사 관람을 원하시는 경우, 반드시 일반 관람 신청을 별도로 진행해 주시기 바랍니다.</div>
        <div>- 본 행사는 조던 브랜드 행사로, 타 브랜드 로고가 과도하게 노출되는 착장은 지양해 주시길 부탁드립니다.</div>
        <div>- 선정자에게는 발매 제품과 연계된 특별한 리테일 혜택이 제공됩니다.</div>
        <div>- 원활한 운영을 위해 신청 시 개인정보 수집 및 이용 동의가 필요합니다.</div>
        <div>- 현장 상황에 따라 운영 내용이 일부 변경될 수 있습니다.</div>

      </div>
    </div>
  );
}
