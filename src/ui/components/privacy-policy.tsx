"use client";

import clsx from "clsx";

type PrivacyPolicyProps = {
  open: boolean;
  onClose: () => void;
};

export const PrivacyPolicy = ({ open, onClose }: PrivacyPolicyProps) => {

  return (
    <>

      <div
        className={clsx(
          "fixed inset-0 z-51 flex justify-center items-center transition-all duration-400 flex-col fixed max-w-md mx-auto p-5 inset-0  bottom-[00px] top-[00px]",
          open
            ? "pointer-events-auto bg-black/100  opacity-100"
            : "pointer-events-none bg-black/0 backdrop-blur-0 opacity-0"
        )}
      >

        <div className="flex flex-col gap-5 flex-grow-1 h-[calc(100%-106px)]">
          <h4 className="font-black text-[24px] text-center leading-[1]">개인정보 처리방침</h4>
          <hr className="border-2"></hr>
          <div className="flex flex-col scroll_el h-[calc(100% - 80px)] overflow-y-scroll scrollbar text-[12px] policy-page">
            {/*<span>
              주식회사 텔레포트(이하 “회사”)는 본 웹사이트를 통해 진행되는 이벤트 및 프로그램 운영과 관련하여 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 안전하게 처리합니다. 본 개인정보 처리방침은 신청 유형과 관계없이 본 웹사이트를 통해 수집·이용되는 개인정보의 처리 기준을 안내합니다.<br />
            </span>
            <br />
            <span>1. 수집하는 개인정보 항목</span>
            <span className="">회사는 이벤트 및 프로그램 신청 유형에 따라 아래 개인정보 항목 중 일부를 수집할 수 있습니다.</span>
            <span className="dot-sp-1">이름</span>
            <span className="dot-sp-1">생년월일</span>
            <span className="dot-sp-1">전화번호</span>
            <span className="dot-sp-1">인스타그램 계정 정보</span>
            <span className="dot-sp-1">챌린지 영상 링크</span>
            <span className="">※ 챌린지 영상에는 얼굴, 음성 등 개인을 식별할 수 있는 정보가 포함될 수 있습니다.</span>
            <br />

            <span className="">2. 개인정보의 수집 및 이용 목적</span>
            <span className="">회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다.</span>
            <span className="dot-sp-1">이벤트 및 프로그램 참여 신청 접수 및 참가자 확인</span>
            <span className="dot-sp-1">참가자 선정, 일정 안내, 결과 공지 및 관련 커뮤니케이션</span>
            <span className="dot-sp-1">배틀 및 워크샵 등 프로그램 운영 및 참가자 관리</span>
            <span className="dot-sp-1">챌린지 영상의 확인, 저장, 인코딩 및 웹페이지 노출(아카이빙)</span>
            <span className="dot-sp-1">서비스 운영 및 시스템 관리, 문의 대응 및 분쟁 처리</span>
            <br />

            <span className="">3. 개인정보의 보유 및 이용 기간</span>
            <span className="">회사는 개인정보 수집 및 이용 목적이 달성된 후 해당 개인정보를 지체 없이 파기합니다.</span>
            <span className="">다만, 이벤트 및 프로그램 운영과 정산, 검수 등 사후 업무 처리를 위하여 프로젝트 종료일로부터 최대 3개월간 개인정보를 보관할 수 있으며, 해당 기간 경과 후에는 삭제합니다.</span>
            <span className="">단, 관련 법령에 따라 보존할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안 보관할 수 있습니다.</span>
            <br />

            <span className="">4. 개인정보의 처리위탁</span>
            <span className="">회사는 서비스 운영을 위하여 개인정보 처리 업무의 일부를 외부 전문업체에 위탁할 수 있습니다.</span>
            <span className="dot-sp-1">수탁자: 휴먼(Hummman)</span>
            <span className="dot-sp-1">위탁 업무 내용:</span>
            <span className="dot-sp-2">마이크로사이트 개발 및 운영</span>
            <span className="dot-sp-2">신청 접수 데이터(이름, 생년월일, 전화번호, 인스타그램 계정 정보, 챌린지 영상 링크 등) 관리 및 운영 지원</span>
            <span className="dot-sp-2">신청자 정보 확인/검수 등 운영상 필요한 관리 업무(어드민 운영 포함)</span>
            <span className="dot-sp-2">챌린지 영상의 저장, 인코딩, 웹페이지 노출(아카이빙) 및 관련 시스템 운영</span>
            <span className="dot-sp-3">처리 장소: 국내 클라우드 인프라(Cloudflare 등)</span>
            <br />

            <span className="">회사는 위탁 계약을 통해 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하며, 수탁자는 위탁받은 목적 범위를 초과하여 개인정보를 이용하거나 제3자에게 제공하지 않습니다.</span>
            <br />

            <span className="">5. 개인정보의 국외 이전</span>
            <span className="">회사는 이용자의 개인정보를 국외로 이전하지 않습니다.</span>
            <br />

            <span className="">6. 개인정보의 제3자 제공</span>
            <span className="">회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.</span>
            <span className="">다만, 이용자의 사전 동의가 있거나 관련 법령에 따라 제공이 요구되는 경우에는 예외로 합니다.</span>
            <br />

            <span className="">7. 개인정보의 파기 절차 및 방법</span>
            <span className="">회사는 개인정보 보유 기간의 경과 또는 처리 목적 달성 시 다음과 같은 방법으로 개인정보를 파기합니다.</span>
            <span className="dot-sp-1">전자적 파일 형태의 개인정보: 복구가 불가능한 방법으로 삭제</span>
            <span className="dot-sp-1">출력물 형태의 개인정보: 분쇄 또는 소각</span>
            <br />

            <span className="">8. 이용자의 권리 및 행사 방법</span>
            <span className="">이용자는 언제든지 본인의 개인정보에 대해 열람, 정정, 삭제를 요청할 수 있으며, 아래의 개인정보 보호 관련 문의처를 통해 권리 행사를 할 수 있습니다.</span>
            <span className="">회사는 관련 법령에 따라 신속하게 조치합니다.</span>
            <br />

            <span className="">9. 개인정보 보호 관련 문의처</span>
            <span className="dot-sp-1">개인정보 보호책임자: 김종화</span>
            <span className="dot-sp-1">연락처: kimtaco@teleport-online.com</span>
            <br />

            <span className="">10. 개인정보 처리방침의 변경</span>
            <span className="">본 개인정보 처리방침의 내용이 변경되는 경우, 회사는 웹사이트를 통해 사전에 공지합니다.</span>
            <br />

            <span className="">시행일자</span>
            <span className="">본 개인정보 처리방침은 2025년 1월 21일부터 적용됩니다.</span>*/}
            <span>
              주식회사 텔레포트(이하 “회사”)는 본 웹사이트를 통해 진행되는 이벤트 및 프로그램 운영과 관련하여 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 안전하게 처리합니다. 본 개인정보 처리방침은 신청 유형과 관계없이 본 웹사이트를 통해 수집·이용되는 개인정보의 처리 기준을 안내합니다.<br />
            </span>
            <br />

            <span>1. 수집하는 개인정보 항목</span>
            <span>회사는 이벤트 및 프로그램 신청 유형에 따라 아래 개인정보 항목 중 일부를 수집할 수 있습니다.</span>
            <span className="dot-sp-1">이름</span>
            <span className="dot-sp-1">생년월일</span>
            <span className="dot-sp-1">전화번호</span>
            <span className="dot-sp-1">인스타그램 계정 정보</span>
            <span className="dot-sp-1">챌린지 영상 링크</span>
            <span>※ 챌린지 영상에는 얼굴, 음성 등 개인을 식별할 수 있는 정보가 포함될 수 있습니다.</span>
            <br />

            <span>2. 개인정보의 수집 및 이용 목적</span>
            <span>회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다.</span>
            <span className="dot-sp-1">이벤트 및 프로그램 참여 신청 접수 및 참가자 확인</span>
            <span className="dot-sp-1">참가자 선정, 일정 안내, 결과 공지 및 관련 커뮤니케이션</span>
            <span className="dot-sp-1">배틀 및 워크샵 등 프로그램 운영 및 참가자 관리</span>
            <span className="dot-sp-1">챌린지 영상의 확인, 저장, 인코딩 및 웹페이지 노출(아카이빙)</span>
            <span className="dot-sp-1">서비스 운영 및 시스템 관리, 문의 대응 및 분쟁 처리</span>
            <br />

            <span>3. 개인정보의 보유 및 이용 기간</span>
            <span>회사는 개인정보 수집 및 이용 목적이 달성된 후 해당 개인정보를 지체 없이 파기합니다.</span>
            <span>다만, 이벤트 및 프로그램 운영과 정산, 검수 등 사후 업무 처리를 위하여 프로젝트 종료일로부터 최대 3개월간 개인정보를 보관할 수 있으며, 해당 기간 경과 후에는 삭제합니다.</span>
            <span>단, 관련 법령에 따라 보존할 필요가 있는 경우에는 해당 법령에서 정한 기간 동안 보관할 수 있습니다.</span>
            <br />

            <span>4. 개인정보의 처리위탁</span>
            <span>회사는 서비스 운영을 위하여 개인정보 처리 업무의 일부를 외부 전문업체에 위탁할 수 있습니다.</span>
            <span className="dot-sp-1">수탁자: 휴먼(Hummman)</span>
            <span className="dot-sp-1">위탁 업무 내용:</span>
            <span className="dot-sp-2">마이크로사이트 개발 및 운영</span>
            <span className="dot-sp-2">신청 접수 데이터(이름, 생년월일, 전화번호, 인스타그램 계정 정보, 챌린지 영상 링크 등) 관리 및 운영 지원</span>
            <span className="dot-sp-2">신청자 정보 확인/검수 등 운영상 필요한 관리 업무(어드민 운영 포함)</span>
            <span className="dot-sp-2">챌린지 영상의 저장, 인코딩, 웹페이지 노출(아카이빙) 및 관련 시스템 운영</span>
            <span className="dot-sp-1">처리 방법: 웹사이트/플랫폼을 통한 시스템 접근 및 내부 데이터 공유</span>
            <span className="dot-sp-1">처리 장소: 국내 클라우드 인프라(Cloudflare 등)</span>
            <br />

            <span>
              회사는 위탁 계약을 통해 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정하며, 수탁자는 위탁받은 목적 범위를 초과하여 개인정보를 이용하거나 제3자에게 제공하지 않습니다.
            </span>
            <br />

            <span>5. 개인정보의 국외 이전</span>
            <span>회사는 이용자의 개인정보를 국외로 이전하지 않습니다.</span>
            <br />

            <span>6. 개인정보의 제3자 제공</span>
            <span>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.</span>
            <span>다만, 이용자의 사전 동의가 있거나 관련 법령에 따라 제공이 요구되는 경우에는 예외로 합니다.</span>
            <br />

            <span>7. 개인정보의 파기 절차 및 방법</span>
            <span>회사는 개인정보 보유 기간의 경과 또는 처리 목적 달성 시 다음과 같은 방법으로 개인정보를 파기합니다.</span>
            <span className="dot-sp-1">전자적 파일 형태의 개인정보: 복구가 불가능한 방법으로 삭제</span>
            <span className="dot-sp-1">출력물 형태의 개인정보: 분쇄 또는 소각</span>
            <br />

            <span>8. 이용자의 권리 및 행사 방법</span>
            <span>이용자는 언제든지 본인의 개인정보에 대해 열람, 정정, 삭제를 요청할 수 있으며, 아래의 개인정보 보호 관련 문의처를 통해 권리 행사를 할 수 있습니다.</span>
            <span>회사는 관련 법령에 따라 신속하게 조치합니다.</span>
            <br />

            <span>9. 개인정보 보호 관련 문의처</span>
            <span className="dot-sp-1">개인정보 보호책임자: 김종화</span>
            <span className="dot-sp-1">연락처: kimtaco@teleport-online.com</span>
            <br />

            <span>10. 개인정보 처리방침의 변경</span>
            <span>본 개인정보 처리방침의 내용이 변경되는 경우, 회사는 웹사이트를 통해 사전에 공지합니다.</span>
            <br />

            <span>시행일자</span>
            <span>본 개인정보 처리방침은 2025년 1월 21일부터 적용됩니다.</span>


          </div>
        </div>
        <hr className="border-1 mt-2 mb-4 w-full"></hr>
        <div onClick={onClose} className="flex w-full justify-center items-center mx-3 h-[40px] text-center text-[24px] font-black bg-[#FF3B49] text-black h-[40px]">
          <span className="text-[24px] ">확인</span>
        </div>
      </div>

    </>
  );
};
