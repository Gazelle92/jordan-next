"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { VideoDialog } from "./video-dialog";
import { ApplicateWorkshop } from "./applicate-workshop";
import { Select } from "./select";
import clsx from "clsx";
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
  top: "48%",
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

const Thumbnail = ({
  videoUrl,
  embedReady,
}: {
  videoUrl: string;
  embedReady: boolean;
}) => {
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
          className={`instagram-media w-full h-full pointer-events-none ig-embed-list !min-w-0 transition-opacity duration-300 ${embedReady ? "opacity-100" : "opacity-0"}`}
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
        <div className="aspect-320/500 w-full h-auto max-w-[400px] here_test">
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
  const [embedReady, setEmbedReady] = useState(false);
  const [freshIds, setFreshIds] = useState<number[]>([]);
  const [freshOrder, setFreshOrder] = useState<Record<number, number>>({});
  const [visible, setVisible] = useState(false);
  const ordering = value.value === "likes" ? "likes" : undefined;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const win = window as typeof window & {
      instgrm?: { Embeds?: { process: () => void } };
    };
    if (win.instgrm?.Embeds) {
      setEmbedReady(true);
    }
  }, []);


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
      if (reset) {
        setFreshIds([]);
        setFreshOrder({});
      } else {
        const ids = data.results.map((item) => item.id);
        setFreshIds(ids);
        const orderMap = ids.reduce<Record<number, number>>((acc, id, index) => {
          acc[id] = index;
          return acc;
        }, {});
        setFreshOrder(orderMap);
      }
      setNextUrl(data.next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "목록을 불러오지 못했습니다.");
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    setVisible(false);
    loadWorkshops(true).finally(() => {
      setTimeout(() => setVisible(true), 2000);
    });
  }, [value.value]);


  useEffect(() => {
    if (freshIds.length === 0) {
      return;
    }
    const timeout = setTimeout(() => {
      setFreshIds([]);
      setFreshOrder({});
    }, 1000 + freshIds.length * 300);
    return () => clearTimeout(timeout);
  }, [freshIds]);

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
      <div className="flex flex-col gap-2 ani">
        <h1 className="pt-[8px] pb-[12px] text-[24px] border-t-4 text-center leading-[1] font-black">참여자 영상 아카이빙</h1>
        <div className="flex justify-end items-center video_btn_w text-[12px] fadeCover-0 ani_order_11 pb-2">
          <Select
            options={[
              { label: "최신순", value: "latest" },
              { label: "좋아요 많은 순", value: "likes" },
            ]}
            value={value}
            onChange={setValue}
          />
        </div>
        <div
          className={clsx(
            "grid grid-cols-3 mx-[-12px] justify-items-center md:px-0 video_w transition-opacity duration-500",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          {workshops.map((workshop) => {
            const liked = likedIds.includes(workshop.id);
            const isFresh = freshIds.includes(workshop.id);
            const freshIndex = freshOrder[workshop.id] ?? 0;
            return (
              <div
                className={`relative w-full aspect-120/180 flex items-center justify-center hover_el ${isFresh ? "fade-in" : ""}`}
                style={isFresh ? { animationDelay: `${freshIndex * 300}ms` } : undefined}
                key={workshop.id}
              >
                <Thumbnail
                  videoUrl={toInstagramEmbedUrl(workshop.instagram_video_url)}
                  embedReady={embedReady}
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
                <img className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] opacity-0 transition-opacity duration-200 hover_target" src="/images/btn_play.png" />
              </div>
            );
          })}
        </div>

        {nextUrl && (
          <div
            className="loading_btn relative flex items-center justify-center mt-[4px] flex-col h-[60px] cursor-pointer"
            onClick={() => {
              if (!isLoading) {
                loadWorkshops(false);
              }
            }}
          >
            <div className={`btn_arrow ${isLoading ? "hidden" : "block"}`} />
            <div className={`loader mx-auto ${isLoading ? "block" : "hidden"}`} />
          </div>
        )}

        <Script
          async
          src="https://www.instagram.com/embed.js"
          strategy="afterInteractive"
          onLoad={() => {
            const win = window as typeof window & {
              instgrm?: { Embeds?: { process: () => void } };
            };
            win.instgrm?.Embeds?.process();
            setEmbedReady(true);
          }}
        />
        {error && (
          <div className="py-2 text-center text-[12px]">{error}</div>
        )}
        <div className="py-3 flex justify-center">
          {!nextUrl && !isLoading && workshops.length === 0 && (
            <span className="text-[12px]">등록된 영상이 없습니다.</span>
          )}
        </div>
        <ApplicateWorkshop />

      </div>
    </>
  );
}
