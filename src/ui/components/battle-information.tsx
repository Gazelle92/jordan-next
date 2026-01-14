import { jordan } from "@/ui/font";
import clsx from "clsx";

export default function BasicInformation() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1.5">
        {/*<div className="flex flex-col gap-1 text-center font-black pb-2 relative">
          <h1 className="text-[24px] font-black leading-[1]">HOUSE OF GREATNESS</h1>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-1 border_el ani_order_6"></div>
        </div>*/}
        <div className="flex flex-col gap-2 text-center font-black pt-[15px] pb-[20px] relative">
          <span className="text-[15px] leading-[1]">일시</span>
          <h1 className="text-[24px] font-black leading-[1]">2026.02.07</h1>
          <span className="text-[15px] leading-[1]">장소</span>
          <h1 className="text-[24px] font-black leading-[1]">앤더슨씨 성수</h1>
          <span className="text-[15px] leading-[1]">서울특별시 성동구 성수일로6길 36</span>
          <div className="absolute left-0 bottom-0 h-[1px] border-b-1 border_el ani_order_9"></div>
        </div>
      </div>
      <div className="py-8 text-[13px] font-semibold whitespace-pre-wrap break-keep ani px-4">
        <div>
          여성 댄서만을 위한 2대2 오픈 스타일 배틀에 참여해보세요. 하우스 DJ의 랜덤 플레이 속에서
          순간의 선택과 반응으로, 당신만의 에너지를 무대 위에 드러낼 수 있습니다.
        </div>
        <br />

        <div>
          64팀이 함께하는 대규모 예선부터 배틀 게스트가 합류하는 TOP12 변칙 토너먼트까지.
          WILD CARD 시스템을 통해 탈락의 순간에도 다시 한 번 무대에 설 기회가 열립니다.
        </div>
        <br />
        <div>
          이 BATTLE에서 단순한 승패를 넘어, 움직임과 에너지가 부딪히며 만들어지는 지금 이 순간의
          GREATNESS를 직접 경험해보세요.
        </div>

        <br />

        <div className="text-[16px] font-black">[REGISTRATION]</div>
        <div className="dot-sp-1">참가 대상: 여성 댄서 누구나 (2인 1조 팀으로 신청 가능)</div>
        <div className="dot-sp-1">신청 기간: 1월 21일(수)~1월 27일(화)</div>
        <div className="dot-sp-1">참가자 발표: 1월 30일(금), 공식 웹사이트 공지 및 개별 문자 발송</div>

        <br />

        <div className="text-[16px] font-black">[BATTLE RULES]</div>

        <div className="dot-sp-1">1차 예선</div>
        <div className="dot-sp-2">3개 서클 동시 진행 / 점수제</div>
        <div className="dot-sp-2">팀당 90초</div>
        <div className="dot-sp-2">각 서클 점수 상위 10팀 → 2차 예선 진출</div>

        <br />

        <div className="dot-sp-1">2차 예선</div>
        <div className="dot-sp-2">오디션 방식 / 점수제</div>
        <div className="dot-sp-2">팀당 70초</div>
        <div className="dot-sp-2">점수 상위 8팀 → 본선 진출</div>

        <br />

        <div className="dot-sp-1">본선 (TOP12)</div>
        <div className="dot-sp-2">예선 상위 8팀 + 배틀 게스트 4팀</div>

        <br />

        <div className="dot-sp-1">TOP12 &amp; TOP6</div>
        <div className="dot-sp-2">팀당 2라운드 / 루틴 제한 없음</div>
        <div className="dot-sp-2">라운드당 60초</div>

        <br />

        <div className="dot-sp-1">SEMI FINAL</div>
        <div className="dot-sp-2">팀당 2라운드 / 루틴 제한 없음</div>
        <div className="dot-sp-2">라운드당 60초</div>

        <br />

        <div className="dot-sp-1">WILD CARD</div>
        <div className="dot-sp-2">TOP6 배틀에서 승리한 3팀을 제외한 9팀 중 JUDGE가 각 1팀씩 총 3팀 선발</div>
        <div className="dot-sp-2">콘테스트를 통해 최종 1팀이 WILD CARD로 SEMI FINAL 진출</div>

        <br />

        <div className="dot-sp-1">FINAL BATTLE</div>
        <div className="dot-sp-2">팀당 3라운드 / 루틴 제한 없음</div>
        <div className="dot-sp-2">라운드당 60초</div>
        <div className="dot-sp-2">연장 시: 각 팀에서 루틴 없이 솔로 / 40초</div>

        <br />

        <div className="dot-sp-1">심사 방식</div>
        <div className="dot-sp-2">예선 ~ TOP6: JUDGE ONLY</div>
        <div className="dot-sp-2">SEMI FINAL ~ FINAL: JUDGE + 관객 심사</div>
        <div className="dot-sp-2">JUDGE 거수 3포인트 + 관객 심사 1포인트 (총 4포인트)로 승패 결정</div>

        <br />

        <div className="text-[16px] font-black">[BATTLE REWARDS]</div>
        <div className="dot-sp-1">1등: 1,000만 원 상당의 조던 브랜드 스폰서십 + 젬 신발 트로피</div>
        <div className="dot-sp-1">2등: 500만 원 상당의 조던 브랜드 스폰서십</div>
        <div className="dot-sp-1">공동 3등 (2팀): 각 200만 원 상당의 조던 브랜드 스폰서십</div>
        <div className="dot-sp-1">HOUSE OF GREATNESS 상: Air Jordan 6 &lsquo;Infrared&rsquo; + 캠페인 어셋 출연권</div>
        <div>※ 리워드는 1년간 유효하며, 재고 상황에 따라 일부 제품 선택이 제한될 수 있습니다.</div>

        <br />

        <div className="text-[16px] font-black">[NOTICE]</div>
        <div>- CHOREOGRAPHY WORKSHOP과 중복 참여가 제한됩니다.</div>
        <div>
          - 2:2 women&apos;s open style battle 참가자로 선정되지 않더라도 본 행사 관람을
          원하시는 경우, 반드시 일반 관람 신청을 별도로 진행해 주시기 바랍니다.
        </div>
        <div>
          - 본 행사는 조던 브랜드 행사로, 타 브랜드 로고가 과도하게 노출되는 착장은
          지양해 주시길 부탁드립니다.
        </div>
        <div>
          - 원활한 운영 및 안내를 위해 신청 시 개인정보 수집 및 이용 동의가 필요합니다.
        </div>
        <div>- 현장 상황에 따라 운영 내용이 일부 변동될 수 있습니다.</div>
      </div>
    </div>
  );
}
