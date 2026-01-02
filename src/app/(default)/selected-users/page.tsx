import { HistoryBack } from "@/ui/components/history-back";

import ChoreoGraphyWorkshop from "@/ui/svg/choreo_graphy_workshop.svg";
import InfraredBattle from "@/ui/svg/infrared_battle.svg";
import Logo from "@/ui/svg/logo.svg";

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
    <div className="flex flex-col gap-5 pb-10">
      {children}
      <table className="text-center text-[13px]">
        <thead>
          <tr className="border-t-1 border-b-1">
            <th className="py-2">이름</th>
            <th className="py-2">인스타그램</th>
            <th className="py-2">휴대폰 뒷자리</th>
          </tr>
        </thead>
        <tbody>
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
    <div className="flex flex-col">
      <HistoryBack />
      <div className="flex flex-col gap-5 px-3 pb-3">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7">
          <Logo className="w-20" />
          <h2 className="text-[32px] font-black">선정자 명단 보기</h2>
        </div>
        <hr className="border-2" />
        <div className="flex flex-col gap-3">
          <UsersTable items={users}>
            <InfraredBattle width={171} className="mx-auto" />
          </UsersTable>
        </div>
        <hr className="border-2" />
        <div className="flex flex-col gap-3">
          <UsersTable items={users}>
            <ChoreoGraphyWorkshop width={217} className="mx-auto" />
          </UsersTable>
        </div>
        <Link href="/menu">
          <Button>HOME</Button>
        </Link>
      </div>
    </div>
  );
}
