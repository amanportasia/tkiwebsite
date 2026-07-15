"use client";

import { useEffect } from "react";

export default function BrowserTitle() {
  useEffect(() => {
    document.title = "Informasi Lowongan Kerja Luar negri";
  }, []);

  return null;
}
