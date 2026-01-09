"use client";

import ArrowBottom from "@/ui/svg/arrow_bottom.svg";
import Script from "next/script";
import { useEffect, useState } from "react";
import { VideoDialog } from "./video-dialog";
import { ApplicateWorkshop } from "./applicate-workshop";
import { Select } from "./select";
import {
  listWorkshops,
  likeWorkshop,
  unlikeWorkshop,
  Workshop,
} from "@/lib/api-client";

const toInstagramEmbedUrl = (url: string) => {
  if (!url) {
    return url;
  }
  try {
    const parsed = new URL(url);
    if (parsed.pathname.includes("/embed")) {
      return parsed.toString();
    }
    const match = parsed.pathname.match(/\/(reel|p|tv)\/([^/]+)/);
    if (match) {
      return `https://www.instagram.com/${match[1]}/${match[2]}/embed`;
    }
    return parsed.origin;
  } catch {
    if (url.includes("/embed")) {
      return url;
    }
    const trimmed = url.replace(/\/$/, "");
    if (trimmed.includes("instagram.com")) {
      return `${trimmed}/embed`;
    }
    return url;
  }
};

const toInstagramPermalinkUrl = (url: string) => {
  if (!url) {
    return url;
  }
  try {
    const parsed = new URL(url);
    const match = parsed.pathname.match(/\/(reel|p|tv)\/([^/]+)/);
    if (match) {
      return `https://www.instagram.com/${match[1]}/${match[2]}/`;
    }
    return parsed.origin;
  } catch {
    return url.replace(/\/embed\/?$/, "/");
  }
};

const listEmbedStyle = {
  //maxWidth: "100%",
  height: "150%",
  width: "170%",
  //minWidth: "170%",
  position: "absolute" as const,
  left: "50%",
  top: "47%",
  //transform: "translate(-50%, -50%) scale(1.26)",
  transform: "translate(-50%, -50%) scale(1.0)",
  transformOrigin: "center",
};

const modalEmbedStyle = {
  maxWidth: "100%",
  height: "100%",
  position: "absolute" as const,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%) scale(1.44)",
  transformOrigin: "center",
};

const Thumbnail = ({ videoUrl }: { videoUrl: string }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const win = window as typeof window & {
      instgrm?: { Embeds?: { process: () => void } };
    };
    win.instgrm?.Embeds?.process();
  }, [videoUrl]);

  useEffect(() => {
    if (!open || typeof window === "undefined") {
      return;
    }
    const win = window as typeof window & {
      instgrm?: { Embeds?: { process: () => void } };
    };
    win.instgrm?.Embeds?.process();
  }, [open]);

  return (
    <>
      <div className="relative aspect-120/180 w-[120%] h-[120%] overflow-hidden  bg-black ">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/35" />
        <blockquote
          className="instagram-media w-full h-full pointer-events-none ig-embed-list !min-w-0"
          data-instgrm-permalink={toInstagramPermalinkUrl(videoUrl)}
          data-instgrm-version="14"
          style={{ ...listEmbedStyle, minWidth: "unset" }}
        />
        <button
          type="button"
          className="absolute inset-0"
          onClick={() => setOpen(true)}
          aria-label="영상 열기"
        />
      </div>
      <VideoDialog open={open} onClose={() => setOpen(false)}>
        <div className="aspect-320/500 w-full h-auto max-w-[400px]">
          <div className="relative w-full h-full overflow-hidden  bg-black">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-transparent to-black/40" />
            <blockquote
              className="instagram-media w-full h-full ig-embed-modal"
              data-instgrm-permalink={toInstagramPermalinkUrl(videoUrl)}
              data-instgrm-version="14"
              style={modalEmbedStyle}
            />
          </div>
        </div>
      </VideoDialog>
    </>
  );
};

export default function Videos() {
  const [value, setValue] = useState({
    label: "최신순",
    value: "latest",
  });
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [likedIds, setLikedIds] = useState<number[]>([]);

  const ordering = value.value === "likes" ? "likes" : undefined;

  const loadWorkshops = async (reset: boolean) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await listWorkshops({
        ordering,
        url: reset ? undefined : nextUrl ?? undefined,
      });
      setWorkshops((prev) =>
        reset ? data.results : [...prev, ...data.results]
      );
      setNextUrl(data.next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "목록을 불러오지 못했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadWorkshops(true);
    setLikedIds([]);
  }, [value.value]);

  const handleToggleLike = async (id: number) => {
    const alreadyLiked = likedIds.includes(id);
    try {
      if (alreadyLiked) {
        await unlikeWorkshop(id);
      } else {
        await likeWorkshop(id);
      }
      setLikedIds((prev) =>
        alreadyLiked ? prev.filter((item) => item !== id) : [...prev, id]
      );
      setWorkshops((prev) =>
        prev.map((workshop) => {
          if (workshop.id !== id) {
            return workshop;
          }
          const nextCount = alreadyLiked
            ? Math.max(0, workshop.like_count - 1)
            : workshop.like_count + 1;
          return { ...workshop, like_count: nextCount };
        })
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "좋아요에 실패했습니다.");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-end items-center video_btn_w text-[12px]">
          <Select
            options={[
              { label: "최신순", value: "latest" },
              { label: "좋아요 많은 순", value: "likes" },
            ]}
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="grid grid-cols-3 mx-[-12px] justify-items-center md:px-0">
          {workshops.map((workshop) => {
            const liked = likedIds.includes(workshop.id);
            return (
              <div className="relative w-full aspect-120/187 flex items-center justify-center group" key={workshop.id}>
                <Thumbnail
                  videoUrl={toInstagramEmbedUrl(workshop.instagram_video_url)}
                />
                <button
                  className="absolute bottom-[4px] left-[6px] md:bottom-[6px] md:left-[8px] text-[10px] md:text-[14px] text-white font-regular flex items-center"
                  onClick={() => handleToggleLike(workshop.id)}
                >

                  <img
                    src={liked ? "/images/heart_2.png" : "/images/heart_1.png"}
                    alt=""
                    className="w-3 mr-[4px] md:w-4 md:mr-[8px]"
                  />
                  {workshop.like_count}
                </button>
                <img className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] opacity-0 group-hover:opacity-100  transition-opacity duration-200" src="/images/btn_play.png" />
              </div>
            );
          })}
        </div>
        <Script
          async
          src="https://www.instagram.com/embed.js"
          onLoad={() => {
            const win = window as typeof window & {
              instgrm?: { Embeds?: { process: () => void } };
            };
            win.instgrm?.Embeds?.process();
          }}
        />
        {error && (
          <div className="py-2 text-center text-[12px]">{error}</div>
        )}
        <div className="py-3 flex justify-center">
          {nextUrl && (
            <button disabled={isLoading} onClick={() => loadWorkshops(false)}>
              <ArrowBottom className="size-4 mx-auto" />
            </button>
          )}
          {!nextUrl && !isLoading && workshops.length === 0 && (
            <span className="text-[12px]">등록된 영상이 없습니다.</span>
          )}
        </div>
        <ApplicateWorkshop />
      </div>
    </>
  );
}
