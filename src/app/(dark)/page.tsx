"use client";

import { useTransitionRouter } from "next-view-transitions";
import { useEffect, useState } from "react";

import AllOrEverything from "@/ui/svg/all_or_everything.svg";
import Logo from "@/ui/svg/logo.svg";
import WhatDoYouWant from "@/ui/svg/what_do_you_want.svg";

export default function Home() {
  const [transitionState, setTransitionState] = useState<number>(0);
  const router = useTransitionRouter();

  const [fadeOut, setFadeOut] = useState(false);
  const [pushed, setPushed] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      router.replace("/menu");
      return;
    }

    const interval = setInterval(() => {
      setTransitionState((prev) => {
        if (prev === 2) {
          clearInterval(interval);
          return 2;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV === "development") {
    return null;
  }

  switch (transitionState) {
    case 0:
      return (
        <div className="flex flex-grow-1 items-center justify-center">
          <Logo width={100} height={100} />
        </div>
      );
    case 1:
      return (
        <div className="flex flex-grow-1 items-center justify-center">
          <WhatDoYouWant width={180} height={104} className="mx-auto" />
        </div>
      );
    case 2:
      return (
        <div className="flex flex-grow-1 items-center justify-center relative">
          <div className="absolute top-0 right-0 p-5">
            <Logo width={40} />
          </div>
          <video
            src="/video/bada_sample.mp4"
            autoPlay
            muted
            playsInline
            className={`w-dvw h-dvh object-cover transition-opacity duration-500 ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"
              }`}
            onTimeUpdate={(e) => {
              const video = e.currentTarget;

              if (
                !pushed &&
                video.duration &&
                video.currentTime >= video.duration - 2
              ) {
                setFadeOut(true);
                setPushed(true);
                setTimeout(() => {
                  router.push("/menu");
                }, 500);
              }
            }}
          />
          <div className="absolute bottom-15 left-0 right-0">
            <AllOrEverything className="w-full" />
          </div>
        </div>
      );
  }
}
