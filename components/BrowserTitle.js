"use client";

import { useEffect } from "react";

export default function BrowserTitle() {
  useEffect(() => {
    document.title = "Lowongan Kerja Luar Negeri TKI";
  }, []);

  return null;
}
