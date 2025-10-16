"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import styles from "./Lightbox.module.css";
import {
  MdOutlineZoomInMap,
  MdOutlineZoomOutMap,
  MdOutlineClose,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos
} from "react-icons/md";

type Img = { src: string; alt?: string };
type Props = { images: Img[]; startIndex: number; onClose: () => void };

export default function Lightbox({ images, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [natural, setNatural] = useState<{ w: number; h: number }>({ w: 800, h: 600 });
  const [frame, setFrame] = useState<{ w: number; h: number }>({ w: 800, h: 600 });
  const drag = useRef<{ x: number; y: number } | null>(null);
  const current = useMemo(() => images[index], [images, index]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key.toLowerCase() === "z") toggleZoom();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, zoom, onClose]);

  const measure = useCallback((nw: number, nh: number) => {
    const vw = Math.max(320, Math.floor(window.innerWidth * 0.92));
    const vh = Math.max(320, Math.floor(window.innerHeight * 0.86));
    const scale = Math.min(vw / nw, vh / nh, 1);
    setFrame({ w: Math.round(nw * scale), h: Math.round(nh * scale) });
  }, []);

  useLayoutEffect(() => {
    measure(natural.w, natural.h);
  }, [natural, measure]);

  useEffect(() => {
    const onResize = () => measure(natural.w, natural.h);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [natural, measure]);

  const next = () => { setIndex(i => (i + 1) % images.length); resetZoom() };
  const prev = () => { setIndex(i => (i - 1 + images.length) % images.length); resetZoom() };
  const resetZoom = () => { setZoom(1); setOffset({ x: 0, y: 0 }) };
  const toggleZoom = () => { if (zoom === 1) setZoom(2); else resetZoom() };

  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom === 1) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current || zoom === 1) return;
    const x = e.clientX - drag.current.x;
    const y = e.clientY - drag.current.y;
    const limit = 300 * (zoom - 1);
    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
    setOffset({ x: clamp(x, limit), y: clamp(y, limit) });
  };
  const onPointerUp = (e: React.PointerEvent) => {
    drag.current = null;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  };
  const onWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      setZoom(z => {
        const nz = Math.min(4, Math.max(1, z - e.deltaY * 0.01));
        if (nz === 1) setOffset({ x: 0, y: 0 });
        return nz;
      });
    }
  };

  const onImageLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const el = e.currentTarget;
    const nw = el.naturalWidth || 800;
    const nh = el.naturalHeight || 600;
    if (nw !== natural.w || nh !== natural.h) setNatural({ w: nw, h: nh });
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.frame} style={{ width: `${frame.w}px`, height: `${frame.h}px` }} onClick={(e) => e.stopPropagation()}>
        <button className={`${styles.btn} ${styles.close}`} onClick={onClose} aria-label="Close">
          <MdOutlineClose size={22} />
        </button>
        <button className={`${styles.btn} ${styles.left}`} onClick={prev} aria-label="Previous">
          <MdOutlineArrowBackIos size={22} />
        </button>
        <button className={`${styles.btn} ${styles.right}`} onClick={next} aria-label="Next">
          <MdOutlineArrowForwardIos size={22} />
        </button>
        <button className={`${styles.btn} ${styles.zoom}`} onClick={toggleZoom} aria-label="Toggle zoom">
          {zoom === 1 ? <MdOutlineZoomInMap size={22} /> : <MdOutlineZoomOutMap size={22} />}
        </button>
        <div
          className={styles.viewport}
          onClick={(e) => e.stopPropagation()}
          onDoubleClick={toggleZoom}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onWheel={onWheel}
          role="img"
          aria-label={current.alt || "Image"}
        >
          <img
            src={current.src}
            alt={current.alt || ""}
            className={styles.image}
            onLoad={onImageLoad}
            style={{
              transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
              cursor: zoom === 1 ? "zoom-in" : (drag.current ? "grabbing" : "grab")
            }}
            draggable={false}
          />
        </div>
        <div className={styles.counter}>{index + 1} / {images.length}</div>
      </div>
    </div>
  );
}
