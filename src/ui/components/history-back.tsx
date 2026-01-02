"use client";

import BackIcon from "@/ui/svg/back.svg";
import { useTransitionRouter } from "next-view-transitions";

export const HistoryBack = () => {
  const router = useTransitionRouter();

  return (
    <div className="flex p-6">
      <button
        className="text-foreground flex items-center justify-centerh-8 size-10 bg-background/50 rounded-full backdrop-blur-[2px]"
        onClick={() => {
          if (window.history.length <= 1) {
            router.replace("/menu");
            return;
          }
          router.back()
        }}
      >
        <BackIcon className="size-6 mx-auto" />
      </button>
    </div>
  );
};
