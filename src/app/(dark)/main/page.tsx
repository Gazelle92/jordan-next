"use client";

import { useTransitionRouter } from "next-view-transitions";
import { useEffect, useState } from "react";
import Image from "next/image";
import AllOrEverything from "@/ui/svg/all_or_everything.svg";
import Logo from "@/ui/svg/logo.svg";
import VideoLogo from "@/ui/svg/video_logo.svg";
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
        if (prev === 1) {
          clearInterval(interval);
          return 1;
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

        <div className="flex flex-grow-1 items-center justify-center opacity-0">
          <Logo width={100} height={100} />
        </div>
      );
    case 0:
      return (
        <div className="flex flex-grow-1 items-center justify-center">
          <WhatDoYouWant width={180} height={104} className="mx-auto" />
          <Logo width={40} className={`main_logo absolute left-1/2 -translate-x-1/2 top-[26px] left- transition-opacity duration-500 ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"}`} />
        </div>
      );
    case 1:
      return (
        <div className="flex flex-grow-1 items-center justify-center relative">
          <div className="absolute top-[27px] left-1/2 main_logo_w">
            <VideoLogo width={218} className={`main_logo transition-opacity duration-500 ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"}`} />

          </div>
          <div className="absolute top-0 left-[22px] w-[60px] h-full">
            {/*<Image src="/images/intro_tag.jpg" alt="houseofgreatness" fill sizes="100vh" className={`h-full main_tag transition-opacity duration-500 ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"}`} />*/}

          </div>

          <video
            src="https://customer-y6yfz33adjmztpgx.cloudflarestream.com/2fc2a1c6537b8aa74562e193cb398a29/manifest/video.m3u8"
            autoPlay
            muted
            playsInline
            className={`w-dvw h-dvh object-cover transition-opacity duration-500 ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"
              }`}
            onClick={() => {
              setFadeOut(true);
              setPushed(true);
              setTimeout(() => {
                router.push("/menu");
              }, 500);
            }}

            onTimeUpdate={(e) => {
              const video = e.currentTarget;

              if (
                !pushed &&
                video.duration &&
                video.currentTime >= video.duration - 0
              ) {
                setFadeOut(true);
                setPushed(true);
                setTimeout(() => {
                  router.push("/menu");
                }, 500);
              }
            }}
          />
          {/*<div className="absolute bottom-15 left-0 right-0">
            <AllOrEverything className="w-full" />
          </div>*/}
        </div>
      );
  }
}
