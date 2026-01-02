"use client";

import ArrowBottom from "@/ui/svg/arrow_bottom.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { VideoDialog } from "./video-dialog";
import { Button } from "./button";
import { ApplicateWorkshop } from "./applicate-workshop";
import { Select } from "./select";

const Thumbnail = ({ src }: { src: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="aspect-[0.64]">
        <Image
          onClick={() => setOpen(true)}
          src={src}
          alt="video"
          className="w-full h-full object-cover"
          width={240}
          height={374}
        />
      </div>
      <VideoDialog open={open} onClose={() => setOpen(false)}>
        <div className="aspect-[320/498]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.instagram.com/reel/DS12_3LkXij/embed"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded"
            style={{ border: "none" }}
          />
        </div>
      </VideoDialog>
    </>
  );
};

export default function Videos() {
  const [value, setValue] = useState({ label: "최신순", value: "1" });
  const [videos, setVideos] = useState<number>(9);


  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-end items-center">
          <Select
            options={[
              { label: "최신순", value: "1" },
              { label: "좋아요 많은 순", value: "2" },
            ]}
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="-mx-3 grid grid-cols-3">
          {Array.from({ length: videos }).map((_, index) => {
            const src = `https://picsum.photos/id/${index + 500}/300/400`;
            return <Thumbnail src={src} key={index} />;
          })}
        </div>
        <div className="py-3 flex justify-center">
          <button onClick={() => setVideos(videos + 9)}>
            <ArrowBottom className="size-4 mx-auto" />
          </button>
        </div>
        <ApplicateWorkshop />
      </div>
    </>
  );
}
