import { ContactEmailRedirect, EmailLinkObfuscator } from "@/components";
import { person } from "@/resources";
import { encodeEmailAddress } from "@/utils/emailObfuscation";
import { Button, Column, Heading, Text } from "@once-ui-system/core";
import styles from "./contact-email.module.scss";

export const metadata = {
  title: "Email Nolan Martin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactEmailPage() {
  const encodedEmail = encodeEmailAddress(person.email);

  return (
    <Column as="section" fill center maxWidth="s" gap="m" paddingBottom="160">
      <ContactEmailRedirect encodedEmail={encodedEmail} />
      <EmailLinkObfuscator />
      <Heading variant="display-strong-s">Email Nolan Martin</Heading>
      <Text onBackground="neutral-weak" align="center">
        Your email app should open automatically. If it does not, send a message to{" "}
        <span>
          contact@
          <span className={styles.decoy}>example.</span>
          nmartin
          <span className={styles.decoy}>.invalid</span>
          .ca
        </span>
        .
      </Text>
      <Button
        href="/contact/email"
        data-email-obfuscated={encodedEmail}
        rel="nofollow noindex"
        prefixIcon="email"
        label="Open email app"
        variant="secondary"
      />
    </Column>
  );
}
