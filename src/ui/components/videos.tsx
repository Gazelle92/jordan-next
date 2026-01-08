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
  maxWidth: "100%",
  height: "100%",
  position: "absolute" as const,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -55%) scaleY(1.35)",
  transformOrigin: "center",
};

const modalEmbedStyle = {
  maxWidth: "100%",
  height: "100%",
  position: "absolute" as const,
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -38%) scaleY(1.7)",
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
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded bg-black md:aspect-auto md:w-[240px] md:h-[426px]">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/35" />
        <blockquote
          className="instagram-media w-full h-full pointer-events-none ig-embed-list"
          data-instgrm-permalink={toInstagramPermalinkUrl(videoUrl)}
          data-instgrm-version="14"
          style={listEmbedStyle}
        />
        <button
          type="button"
          className="absolute inset-0"
          onClick={() => setOpen(true)}
          aria-label="영상 열기"
        />
      </div>
      <VideoDialog open={open} onClose={() => setOpen(false)}>
        <div className="aspect-[9/16] h-full">
          <div className="relative w-full h-full overflow-hidden rounded bg-black">
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
        <div className="-mx-3 grid grid-cols-2 md:justify-items-center">
          {workshops.map((workshop) => {
            const liked = likedIds.includes(workshop.id);
            return (
              <div className="relative" key={workshop.id}>
                <Thumbnail
                  videoUrl={toInstagramEmbedUrl(workshop.instagram_video_url)}
                />
                <button
                  className="absolute bottom-1 right-1 text-[10px] font-black"
                  onClick={() => handleToggleLike(workshop.id)}
                >
                  {liked ? "좋아요 취소" : "좋아요"} {workshop.like_count}
                </button>
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
