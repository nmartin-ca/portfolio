"use client";

import { decodeEmailAddress } from "@/utils/emailObfuscation";
import { useEffect } from "react";

export function EmailLinkObfuscator() {
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>("a[data-email-obfuscated]");

    for (const link of links) {
      const encodedEmail = link.dataset.emailObfuscated;

      if (!encodedEmail) {
        continue;
      }

      link.href = `mailto:${decodeEmailAddress(encodedEmail)}`;
      link.removeAttribute("rel");
    }
  }, []);

  return null;
}
