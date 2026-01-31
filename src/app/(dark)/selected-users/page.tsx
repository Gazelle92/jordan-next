import { HistoryBack } from "@/ui/components/history-back";

import ChoreoGraphyWorkshop from "@/ui/svg/choreo_graphy_workshop.svg";
import InfraredBattle from "@/ui/svg/infrared_battle.svg";
import Logo from "@/ui/svg/logo.svg";

import SelectedDancer from "@/ui/svg/selected_dancer_3.svg";
import ChoreoGraphyWorkshop2 from "@/ui/svg/choreo_graphy_workshop_2.svg";
import WomenBattle from "@/ui/svg/women_battle.svg";
import type { User } from "@/types/users";
import { Link } from "next-view-transitions";
import { Button } from "@/ui/components/button";

type BattleUser = {
  name1: string;
  instagram1: string;
  phone1: string;
  name2: string;
  instagram2: string;
  phone2: string;
};

type WorkshopUser = {
  name: string;
  instagram: string; // @ 제거한 원본
  phone: string;     // 전체 번호
};


const battleUsers: BattleUser[] = [
  {
    name1: "조예은",
    instagram1: "yeni_cho",
    phone1: "01030252772",
    name2: "전지예",
    instagram2: "sbz_freshbella",
    phone2: "01036213197",
  },
  {
    name1: "주예은(Joo)",
    instagram1: "joo2fresh",
    phone1: "01043944355",
    name2: "최정빈(Mel)",
    instagram2: "melt2ngogo",
    phone2: "01046528382",
  },
  {
    name1: "권예진",
    instagram1: "yejin__ladytoe",
    phone1: "01039312575",
    name2: "조가영",
    instagram2: "iamchocol",
    phone2: "01039367153",
  },
  {
    name1: "김예원",
    instagram1: "_yhixn",
    phone1: "01020797478",
    name2: "김규린",
    instagram2: "xesxuy",
    phone2: "01094525994",
  },
  {
    name1: "안지현",
    instagram1: "an_g525",
    phone1: "01020115297",
    name2: "김영선",
    instagram2: "e.u_phoria_",
    phone2: "01021692100",
  },
  {
    name1: "백수빈",
    instagram1: "back_to_been",
    phone1: "01087430993",
    name2: "백서현",
    instagram2: "seohyunbaek_",
    phone2: "01051850780",
  },
  {
    name1: "이단비",
    instagram1: "Honeypop",
    phone1: "01075685942",
    name2: "박아현",
    instagram2: "lockingammi",
    phone2: "01041454028",
  },
  {
    name1: "이수민",
    instagram1: "__kabaway",
    phone1: "01073442796",
    name2: "구건희",
    instagram2: "goodgun___",
    phone2: "01049180209",
  },
  {
    name1: "전은솜",
    instagram1: "lils0m____",
    phone1: "01082825762",
    name2: "신은휘",
    instagram2: "acid_dove",
    phone2: "01088661271",
  },
  {
    name1: "이선화",
    instagram1: "lipfunk_sunnylock",
    phone1: "01092284583",
    name2: "정근지",
    instagram2: "lipfunk_geunzi",
    phone2: "01030021367",
  },
  {
    name1: "배혜린",
    instagram1: "kuro_isblack",
    phone1: "01029274717",
    name2: "일리아나",
    instagram2: "iliana_kopa",
    phone2: "01084606713",
  },
  {
    name1: "홍옥현",
    instagram1: "lipfunk_kyoni",
    phone1: "01065551875",
    name2: "정다혜",
    instagram2: "lipfunk_dabong",
    phone2: "01094194388",
  },
  {
    name1: "김주영",
    instagram1: "jooya.kr",
    phone1: "01093584075",
    name2: "최정은",
    instagram2: "libby._.world",
    phone2: "01081077567",
  },
  {
    name1: "김민선",
    instagram1: "______toi______",
    phone1: "01046548026",
    name2: "임지민",
    instagram2: "do1ro8thy",
    phone2: "01083227541",
  },
  {
    name1: "윤수빈",
    instagram1: "_rika_kr__vb_",
    phone1: "01076132987",
    name2: "이혜린",
    instagram2: "Lockpupurin",
    phone2: "01027661176",
  },
  {
    name1: "함단하",
    instagram1: "centralnerv0ussystem_of_l",
    phone1: "01050941092",
    name2: "주수빈",
    instagram2: "suxviin",
    phone2: "01033993798",
  },
  {
    name1: "김민해",
    instagram1: "kimminhae_dw",
    phone1: "01087395531",
    name2: "문현주",
    instagram2: "_beadj",
    phone2: "01039107883",
  },
  {
    name1: "배윤지",
    instagram1: "YOONJYAMI",
    phone1: "01076163126",
    name2: "김진아",
    instagram2: "LEMONIZED.ANAK",
    phone2: "01050085939",
  },
  {
    name1: "박근주",
    instagram1: "banan.p___",
    phone1: "01031649402",
    name2: "곽혜인",
    instagram2: "__.hyein.__",
    phone2: "01088440484",
  },
  {
    name1: "채민희",
    instagram1: "dancer_mini",
    phone1: "01076664780",
    name2: "김정선",
    instagram2: "Dorocyyyyyyy",
    phone2: "01082941995",
  },
  {
    name1: "이선지",
    instagram1: "thesunxxi",
    phone1: "01047798565",
    name2: "안수빈",
    instagram2: "Subinapril22",
    phone2: "01048500422",
  },
  {
    name1: "배혜빈",
    instagram1: "heavy_lock_",
    phone1: "01086395585",
    name2: "조수미",
    instagram2: "locking_jo_sumi",
    phone2: "01053256238",
  },
  {
    name1: "이가연",
    instagram1: "gaonthemob",
    phone1: "01056209070",
    name2: "김미소",
    instagram2: "comelymiso_",
    phone2: "01082627488",
  },
  {
    name1: "최유진",
    instagram1: "pop_cho.e",
    phone1: "01022945265",
    name2: "김은빈",
    instagram2: "flyeb2_",
    phone2: "01076508264",
  },
  {
    name1: "강보민",
    instagram1: "blissin_toma",
    phone1: "01021848841",
    name2: "김선경",
    instagram2: "yoshi.ksk",
    phone2: "01028643590",
  },
  {
    name1: "박유미",
    instagram1: "youmepark_",
    phone1: "01050294019",
    name2: "류예빈",
    instagram2: "buni___",
    phone2: "01040305538",
  },
  {
    name1: "이아라",
    instagram1: "arathewoods",
    phone1: "01033766953",
    name2: "김진주",
    instagram2: "perdyclam",
    phone2: "01024310048",
  },
  {
    name1: "박지유",
    instagram1: "jiyuupark_",
    phone1: "01020742739",
    name2: "정수진",
    instagram2: "n_su_____",
    phone2: "01058597573",
  },
  {
    name1: "한소연",
    instagram1: "yeonnei",
    phone1: "01029703914",
    name2: "박혜린",
    instagram2: "hellahyelin",
    phone2: "01054306563",
  },
  {
    name1: "이 솜겨리/ HELLA",
    instagram1: "hella_rt",
    phone1: "01031222934",
    name2: "윤희라 / 희라",
    instagram2: "huira_inthevortex",
    phone2: "01027051588",
  },
  {
    name1: "육미선",
    instagram1: "summer___six",
    phone1: "01075325945",
    name2: "송예림",
    instagram2: "rim____uuu",
    phone2: "01040169096",
  },
  {
    name1: "KISA",
    instagram1: "kisa_24kay",
    phone1: "01077283060",
    name2: "ANJU",
    instagram2: "anju0426",
    phone2: "01025143060",
  },
  {
    name1: "박민주",
    instagram1: "deli_min_ju",
    phone1: "01064702214",
    name2: "정유진",
    instagram2: "y0u0jin_",
    phone2: "01054312836",
  },
  {
    name1: "Tamaki",
    instagram1: "tmk3n",
    phone1: "01044946645",
    name2: "Shuru",
    instagram2: "shuru_japan_official",
    phone2: "01044946643",
  },
  {
    name1: "이유진",
    instagram1: "rollinghands_zineww.w",
    phone1: "01086850177",
    name2: "정윤영",
    instagram2: "Rollinghands_yuny",
    phone2: "01050752216",
  },
  {
    name1: "정민주",
    instagram1: "miziworld__",
    phone1: "01044009297",
    name2: "김다인",
    instagram2: "tomiikim",
    phone2: "01065644667",
  },
  {
    name1: "이은서",
    instagram1: "coo___ni",
    phone1: "01087233619",
    name2: "임규림",
    instagram2: "gyur2meee",
    phone2: "01094005986",
  },
  {
    name1: "이승연",
    instagram1: "yunny_2leesx",
    phone1: "01039670454",
    name2: "허석양",
    instagram2: "itsssunset",
    phone2: "01096676059",
  },
  {
    name1: "박세연",
    instagram1: "satokatogashi_",
    phone1: "01021100263",
    name2: "김유민",
    instagram2: "tooth1sss",
    phone2: "01048982270",
  },
  {
    name1: "이유정",
    instagram1: "lockcat_",
    phone1: "01052314350",
    name2: "박채연",
    instagram2: "p0p_tofu",
    phone2: "01033270348",
  },
  {
    name1: "장유진",
    instagram1: "halo_jang",
    phone1: "01038939647",
    name2: "윤소미",
    instagram2: "yooon_417",
    phone2: "01072990366",
  },
  {
    name1: "이도연",
    instagram1: "popburn",
    phone1: "01042118926",
    name2: "김주리",
    instagram2: "juridancer",
    phone2: "01035083935",
  },
  {
    name1: "남상아",
    instagram1: "kido_p.ka",
    phone1: "01025779333",
    name2: "정민진",
    instagram2: "amber_mnjn",
    phone2: "01027999718",
  },
  {
    name1: "정신영",
    instagram1: "tatolock",
    phone1: "01039528640",
    name2: "신가영",
    instagram2: "9owyz_",
    phone2: "01040498194",
  },
  {
    name1: "성수민",
    instagram1: "botb_trai_angle",
    phone1: "01071371317",
    name2: "맹유진",
    instagram2: "m9_ujin",
    phone2: "01033537687",
  },
  {
    name1: "김예진",
    instagram1: "mejin.kim",
    phone1: "01076808837",
    name2: "최성희",
    instagram2: "se0ng_hee_",
    phone2: "01043249910",
  },
  {
    name1: "윤소은",
    instagram1: "greenofsoap",
    phone1: "01085474620",
    name2: "이정현",
    instagram2: "lee.zeh__",
    phone2: "01082748598",
  },
  {
    name1: "김채은",
    instagram1: "chaeeun_spark_kim",
    phone1: "01022953022",
    name2: "정유림",
    instagram2: "unusual_queen__",
    phone2: "01048047813",
  },
  {
    name1: "황정선",
    instagram1: "dev_hjs",
    phone1: "01082681090",
    name2: "김소현",
    instagram2: "ssohyeonss",
    phone2: "01020507207",
  },
  {
    name1: "김예리",
    instagram1: "yell_yeri_kim",
    phone1: "01055913070",
    name2: "손혜연",
    instagram2: "hyeyeon_49",
    phone2: "01037238623",
  },
  {
    name1: "양하은",
    instagram1: "hachi_y_",
    phone1: "01071499760",
    name2: "김예주",
    instagram2: "yyyyeju_bld",
    phone2: "01094351699",
  },
  {
    name1: "이정은",
    instagram1: "_Kaon___",
    phone1: "01064940494",
    name2: "변자효",
    instagram2: "__jahyo__b",
    phone2: "01029301749",
  },
  {
    name1: "김예린",
    instagram1: "yeeerin_p",
    phone1: "01025654315",
    name2: "박주희",
    instagram2: "hello__juhee",
    phone2: "01054249809",
  },
];

const workshopUser: WorkshopUser[] = [
  { name: "이혜란", instagram: "im1byul._", phone: "01041110031" },
  { name: "김민주", instagram: "_pm_minju_", phone: "01050688748" },
  { name: "황민하", instagram: "minareeee_", phone: "01096015460" },
  { name: "김별", instagram: "byeolkim_", phone: "01051152160" },
  { name: "이지연", instagram: "izee__kr", phone: "01033648811" },
  { name: "송나리", instagram: "narisongis", phone: "01051912135" },
  { name: "안수빈", instagram: "soopreme.store", phone: "01033887396" },
  { name: "이다혜", instagram: "_daa.bby_", phone: "01096986709" },
  { name: "이세현", instagram: "_calla.__", phone: "01040454130" },
  { name: "호해동", instagram: "h_haitong", phone: "01076237831" },
  { name: "김보미", instagram: "o.asi_s_0", phone: "01039197434" },
  { name: "박서연", instagram: "pxxeon", phone: "01027026676" },
  { name: "임가은", instagram: "limgaeun_0730", phone: "01092240592" },
  { name: "강양미", instagram: "imnay__03", phone: "01039299952" },
  { name: "오정연", instagram: "jxxg_lia", phone: "01028626578" },
  { name: "나유", instagram: "n2a1y7u", phone: "01068147654" },
  { name: "김지현", instagram: "yumnoii", phone: "01093610271" },
  { name: "김미주", instagram: "thisis.mj__", phone: "01055306619" },
  { name: "박소희", instagram: "husleedpnce", phone: "01065666720" },
  { name: "고유라", instagram: "_rahel__05", phone: "01030985630" },
  { name: "유승주", instagram: "_j00.__", phone: "01064449958" },
  { name: "박지연", instagram: "yeonii_pp", phone: "01041805122" },
  { name: "정수아", instagram: "sllua__", phone: "01076360279" },
  { name: "김수민", instagram: "sumin__o0", phone: "01094657948" },
  { name: "Winnie", instagram: "winnie.0103", phone: "01039071206" },
  { name: "홍윤지", instagram: "beviigw", phone: "01036142593" },
  { name: "윤한별", instagram: "bxxl__ll", phone: "01099285336" },
  { name: "손미주", instagram: "mijuson__", phone: "01053155615" },
  { name: "조연서", instagram: "08_yeonseo_", phone: "01057626541" },
  { name: "박시후", instagram: "sihu_831", phone: "01083814868" },
  { name: "박서연", instagram: "seoyeon.o8", phone: "01050297166" },
  { name: "배소울", instagram: "sowoolbae", phone: "01057952434" },
  { name: "김예원", instagram: "yewon.k__", phone: "01082896303" },
  { name: "석신화", instagram: "shx_h11", phone: "01036705553" },
  { name: "이서연", instagram: "s.ye0x1_", phone: "01036819856" },
  { name: "김건희", instagram: "gexnhxe_9", phone: "01031690900" },
  { name: "이수빈", instagram: "su.xb9", phone: "01057192152" },
  { name: "유민서", instagram: "minseo___yoo", phone: "01037840962" },
  { name: "이태린", instagram: "taerin.l_", phone: "01081080388" },
  { name: "박민지", instagram: "minji.mg", phone: "01097222099" },
  { name: "임주아", instagram: "_juxa.3", phone: "01092952398" },
  { name: "최가을", instagram: "choigaeul._", phone: "01073707481" },
  { name: "우준희", instagram: "uzhgkl", phone: "01045866553" },
  { name: "김시하", instagram: "shasha_move", phone: "01047310922" },
  { name: "문다현", instagram: "dahyhyhyunnn", phone: "01071445073" },
  { name: "신서연", instagram: "sin___ce_", phone: "01053300794" },
  { name: "김나윤", instagram: "nx0ynu", phone: "01048247688" },
  { name: "최서원", instagram: "choiseowon_", phone: "01076117983" },
  { name: "장소연", instagram: "malt_soyeon11", phone: "01067055878" },
];



type BattleUsersTableProps = {
  items: BattleUser[];
  children?: React.ReactNode;
};


type SoloUser = {
  name: string;
  instagram: string; // @ 제거한 원본
  phone: string;     // 전체 번호
};

const formatPhone = (phone: string) => {
  // 01055913070 → 5591
  return phone.startsWith("010") ? phone.slice(7, 11) : phone;
};

const maskInstagram = (id: string) => {
  if (id.length <= 4) return `@${id}`;
  return `@${id.slice(0, 2)}${"*".repeat(id.length - 4)}${id.slice(-2)}`;
};

const UsersTable = ({ items, children }: BattleUsersTableProps) => {
  return (
    <div className="flex flex-col gap-5 pb-4">
      {children}
      <table className="text-center text-[13px]">
        <thead>
          <tr className="border-t-1 border-b-1">
            <th className="py-2 w-[120px]">이름</th>
            <th className="py-2">인스타그램</th>
            <th className="py-2 w-[100px]">휴대폰 뒷자리</th>
          </tr>
        </thead>

        <tbody className="table_body">
          {items.map((user, index) => (
            <tr key={index}>
              <td className="py-0.5">
                <div className="flex flex-col my-[4px]">
                  <div>{user.name1}</div>
                  <div>{user.name2}</div>
                </div>
              </td>

              <td className="py-0.5">
                <div className="flex flex-col">
                  <div>{maskInstagram(user.instagram1)}</div>
                  <div>{maskInstagram(user.instagram2)}</div>
                </div>
              </td>

              <td className="py-0.5">
                <div className="flex flex-col">
                  <div>{formatPhone(user.phone1)}</div>
                  <div>{formatPhone(user.phone2)}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

type WorkshopUsersTableProps = {
  items: WorkshopUser[];
  children?: React.ReactNode;
};

const WorkshopUsersTable = ({ items, children }: WorkshopUsersTableProps) => {
  return (
    <div className="flex flex-col gap-5 pb-4">
      {children}
      <table className="text-center text-[13px]">
        <thead>
          <tr className="border-t-1 border-b-1">
            <th className="py-2 w-[120px]">이름</th>
            <th className="py-2">인스타그램</th>
            <th className="py-2 w-[100px]">휴대폰 뒷자리</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user, index) => (
            <tr key={index}>
              <td><div className="my-1">{user.name}</div></td>
              <td><div className="my-1">{maskInstagram(user.instagram)}</div></td>
              <td><div className="my-1">{formatPhone(user.phone)}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default function SelectedUsers() {
  return (
    <div className="flex flex-col font-semibold">
      <HistoryBack />
      <div className="flex flex-col gap-5 px-3 pb-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-[32px]">
          <Logo className="w-20" />
          <SelectedDancer className="w-[253px] filled-color" />
        </div>
        <hr className="border-2" />
        <div className="flex flex-col gap-3">
          <UsersTable items={battleUsers}>
            <WomenBattle width={239} className="mx-auto filled-color" />
          </UsersTable>
        </div>
        <hr className="border-2" />
        <div className="flex flex-col gap-3">
          <WorkshopUsersTable items={workshopUser}>
            <ChoreoGraphyWorkshop2 width={321} className="mx-auto filled-color" />
          </WorkshopUsersTable >
        </div>
        <Link href="/menu">
          <Button>메뉴로 돌아가기</Button>
        </Link>
      </div>
    </div>
  );
}
