'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

/* ---------------------------------------
 * fade-slice 원본문 저장
 * --------------------------------------- */
const fadeSliceOriginalTexts = new WeakMap<HTMLElement, string>();

/* ---------------------------------------
 * 단일 요소 fade-slice 적용
 * --------------------------------------- */
function applyFadeSlice(el: HTMLElement, description?: string) {
  if (!el) return;

  const rawText =
    (description || el.innerText || '')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  if (!rawText) return;

  el.innerHTML = '';

  const words = rawText.split(' ');
  const maxWidth = el.clientWidth;

  const style = getComputedStyle(el);

  const measure = document.createElement('span');
  Object.assign(measure.style, {
    position: 'absolute',
    visibility: 'hidden',
    whiteSpace: 'nowrap',
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    letterSpacing: style.letterSpacing,
  });
  document.body.appendChild(measure);

  const lines: string[][] = [];
  let current: string[] = [];

  const measureWidth = (arr: string[]) => {
    measure.textContent = arr.join(' ');
    return measure.offsetWidth;
  };

  words.forEach((word) => {
    const test = [...current, word];
    if (measureWidth(test) > maxWidth && current.length) {
      lines.push(current);
      current = [word];
    } else {
      current.push(word);
    }
  });

  if (current.length) lines.push(current);
  document.body.removeChild(measure);

  /* DOM 생성 */
  lines.forEach((lineWords) => {
    const line = document.createElement('div');
    line.className = 'line';

    const inner = document.createElement('div');
    inner.className = 'inner';

    lineWords.forEach((w, i) => {
      const span = document.createElement('span');
      span.textContent = w;
      inner.appendChild(span);
      if (i < lineWords.length - 1) inner.appendChild(document.createTextNode(' '));
    });

    line.appendChild(inner);
    el.appendChild(line);
  });
}

/* ---------------------------------------
 * 전체 fade-slice 초기화
 * --------------------------------------- */
function initFadeSliceAll() {
  document.querySelectorAll<HTMLElement>('.fade-slice').forEach((el) => {
    const original = el.dataset.description || el.innerText || '';
    fadeSliceOriginalTexts.set(el, original);
    applyFadeSlice(el, original);
  });
}

/* ---------------------------------------
 * 전체 fade-slice 업데이트
 * --------------------------------------- */
function updateFadeSliceAll() {
  document.querySelectorAll<HTMLElement>('.fade-slice').forEach((el) => {
    const original = fadeSliceOriginalTexts.get(el) || el.innerText;
    applyFadeSlice(el, original);
  });
}

/* ---------------------------------------
 * ✅ PageEnterAni (통합 버전)
 * --------------------------------------- */
export default function PageEnterAni() {
  const pathname = usePathname();

  /* 페이지 진입 애니 */
  useEffect(() => {
    document.querySelectorAll('.ani').forEach((el) => {
      el.classList.remove('active');
      requestAnimationFrame(() => {
        //setTimeout(initFadeSliceAll, 100);
        setTimeout(() => {
          el.classList.add('active');
        }, 500);
      });
    });
  }, [pathname]);

  /* fade-slice 처리 */
  useLayoutEffect(() => {
    const t1 = setTimeout(initFadeSliceAll, 100);
    const t2 = setTimeout(updateFadeSliceAll, 300);

    window.addEventListener('resize', updateFadeSliceAll);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', updateFadeSliceAll);
    };
  }, [pathname]);

  return null;
}
