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
        <div className="aspect-[9/16] h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.instagram.com/reel/DTBUZmqjKLe/embed"
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
        <div className="flex justify-end items-center video_btn_w text-[12px]">
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
            //const src = `https://picsum.photos/id/${index + 500}/300/400`;
            const src = "https://scontent-ssn1-1.cdninstagram.com/v/t51.71878-15/609208731_1208110991422894_6604862857071378500_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=1&ig_cache_key=MzgwMTQwOTI4MDkxMDU5ODg3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=synQXUV28VwQ7kNvwEk0If_&_nc_oc=AdnlXr8IeVLnTPFOWje5hV7j8kYny9u2PCXYH6RA-mw0lFJEKEuFntRLGMld9ZP-83M&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_gid=u8nMgpTlhogUrQNzPx2B6A&oh=00_Afoy7j5K2TcdxlPzuupOK96V-82jFeHe60TxenBbNlRlcA&oe=6962451B";
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
