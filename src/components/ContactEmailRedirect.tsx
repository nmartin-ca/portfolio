"use client";

import { decodeEmailAddress } from "@/utils/emailObfuscation";
import { useEffect } from "react";

type ContactEmailRedirectProps = {
  encodedEmail: string;
};

export function ContactEmailRedirect({ encodedEmail }: ContactEmailRedirectProps) {
  useEffect(() => {
    window.location.href = `mailto:${decodeEmailAddress(encodedEmail)}`;
  }, [encodedEmail]);

  return null;
}
