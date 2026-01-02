import { HistoryBack } from "@/ui/components/history-back";
import ViewInfrared from "@/ui/svg/view_infrared.svg";
import Logo from "@/ui/svg/logo.svg";
import Image from "next/image";

const images = Array.from({ length: 6 }, (_, index) => `/images/lineup_${index + 1}.png`);

export default function LineUp() {

  return (
    <div className="flex flex-col top-0">
      <HistoryBack />
      <div className="flex flex-col gap-15">
        <div className="flex flex-col flex-grow-1 items-center justify-center gap-7">
          <Logo className="w-20" />
          <ViewInfrared width={257} className="mx-auto" />
        </div>
        <div className="flex flex-col">
          {images.map((image) => (
            <Image
              key={image}
              src={image}
              alt="reward"
              className="w-full"
              width={640}
              height={1000}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
