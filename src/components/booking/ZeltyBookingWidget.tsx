"use client";

import React, { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Loader2 } from "lucide-react";

interface ZeltyBookingWidgetProps {
  zkey?: string;
  primaryColor?: string;
  restaurantName?: string;
  className?: string;
}

let scriptPromise: Promise<void> | null = null;

function loadZeltyScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (customElements.get("zelty-booking-widget")) {
    return Promise.resolve();
  }

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      if (customElements.get("zelty-booking-widget")) {
        resolve();
        return;
      }
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src="https://booking.zelty.fr/v2/widget.js"]'
      );
      if (existingScript) {
        existingScript.addEventListener("load", () => resolve(), { once: true });
        existingScript.addEventListener("error", (e) => reject(e), { once: true });
        if (customElements.get("zelty-booking-widget")) {
          resolve();
        }
        return;
      }

      const script = document.createElement("script");
      script.src = "https://booking.zelty.fr/v2/widget.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = (e) => reject(e);
      document.body.appendChild(script);
    });
  }

  return scriptPromise;
}

export function ZeltyBookingWidget({
  zkey,
  primaryColor = "b74120",
  restaurantName,
  className = "",
}: ZeltyBookingWidgetProps) {
  const { language } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Fallback to env key if not provided directly
  const activeZkey =
    zkey || process.env.NEXT_PUBLIC_ZELTY_ZKEY || "MjY0OlFb5gTeuhhW/O8MJbx3NJ29oiZG";

  // Zelty natively supports: "fr", "en", "de", "es".
  // Map site language ("fr" | "en" | "vi"):
  const targetLang = language === "en" ? "en" : "fr";

  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);
    setHasError(false);

    loadZeltyScript()
      .then(() => {
        if (isCancelled || !containerRef.current) return;

        // Clean any previously mounted widget
        containerRef.current.innerHTML = "";

        // Create the web component element
        const widget = document.createElement("zelty-booking-widget");
        widget.setAttribute("zkey", activeZkey);
        widget.setAttribute("mode", "embed");
        widget.setAttribute("primary-color", primaryColor.replace("#", ""));
        widget.setAttribute("lang", targetLang);
        if (restaurantName) {
          widget.setAttribute("restaurant-name", restaurantName);
        }

        containerRef.current.appendChild(widget);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load Zelty booking widget:", err);
        if (!isCancelled) {
          setHasError(true);
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [activeZkey, primaryColor, targetLang, restaurantName]);

  return (
    <div className={`relative w-full ${className}`}>
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-16 text-[#6D5A50] space-y-3">
          <Loader2 className="w-6 h-6 animate-spin text-[#BF4227]" />
          <span className="text-xs uppercase tracking-wider font-medium">
            {language === "vi"
              ? "Đang tải hệ thống đặt bàn trực tuyến..."
              : language === "en"
              ? "Loading booking system..."
              : "Chargement de la réservation..."}
          </span>
        </div>
      )}

      {hasError && (
        <div className="p-6 rounded-md bg-[#BF4227]/10 border border-[#BF4227]/30 text-center space-y-2">
          <p className="text-sm font-medium text-[#BF4227]">
            {language === "vi"
              ? "Không thể tải hệ thống đặt bàn trực tuyến."
              : language === "en"
              ? "Unable to load online booking."
              : "Impossible de charger le module de réservation."}
          </p>
          <p className="text-xs text-[#5C4B42]">
            {language === "vi"
              ? "Vui lòng liên hệ trực tiếp hotline để được hỗ trợ đặt bàn."
              : language === "en"
              ? "Please call us directly to book your table."
              : "Veuillez nous contacter par téléphone."}
          </p>
        </div>
      )}

      <div
        ref={containerRef}
        className={`w-full min-h-[460px] ${isLoading ? "hidden" : "block"}`}
      />
    </div>
  );
}
