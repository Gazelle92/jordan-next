import { HistoryBack } from "@/ui/components/history-back";

import ChoreoGraphyWorkshop from "@/ui/svg/choreo_graphy_workshop.svg";
import InfraredBattle from "@/ui/svg/infrared_battle.svg";
import Logo from "@/ui/svg/logo.svg";

import SelectedDancer from "@/ui/svg/selected_dancer.svg";
import ChoreoGraphyWorkshop2 from "@/ui/svg/choreo_graphy_workshop_2.svg";
import WomenBattle from "@/ui/svg/women_battle.svg";
import type { User } from "@/types/users";
import { Link } from "next-view-transitions";
import { Button } from "@/ui/components/button";

const users: User[] = Array.from({ length: 10 }, (_, index) => ({
  name: `이름${index + 1}`,
  instagram: `instagram${index + 1}`,
  phone: `5678`,
}));

type UsersTableProps = {
  items: User[];
  children: React.ReactNode;
};

const UsersTable = ({ items, children }: UsersTableProps) => {
  return (
    <div className="flex flex-col gap-5 pb-4">
      {children}
      <table className="text-center text-[13px]">
        <thead>
          <tr className="border-t-1 border-b-1">
            <th className="py-2">이름</th>
            <th className="py-2">인스타그램</th>
            <th className="py-2">휴대폰 뒷자리</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {items.map((user) => (
            <tr key={`${user.name}_${user.instagram}_${user.phone}`}>
              <td className="py-0.5">{user.name}</td>
              <td className="py-0.5">@{user.instagram}</td>
              <td className="py-0.5">{user.phone}</td>
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
          <SelectedDancer className="w-[184px]" />
        </div>
        <hr className="border-2" />
        <div className="flex flex-col gap-3">
          <UsersTable items={users}>
            <WomenBattle width={239} className="mx-auto filled-color" />
          </UsersTable>
        </div>
        <hr className="border-2" />
        <div className="flex flex-col gap-3">
          <UsersTable items={users}>
            <ChoreoGraphyWorkshop2 width={321} className="mx-auto filled-color" />
          </UsersTable>
        </div>
        <Link href="/menu">
          <Button>메뉴로 돌아가기</Button>
        </Link>
      </div>
    </div>
  );
}
