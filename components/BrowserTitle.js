"use client";

import { useEffect } from "react";

export default function BrowserTitle() {
  useEffect(() => {
    document.title = "Amanportasia";
  }, []);

  return null;
}
