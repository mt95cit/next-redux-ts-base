import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "~/StoreProvider";
import { HeaderAuth } from "~/components/layouts/auth/headerAuth";
import { FooterAuth } from "~/components/layouts/auth/footerAuth";

import "~/styles/globals.css";
import styles from "~/styles/layout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
            <HeaderAuth />        
            <main className={styles.main}>{children}</main>
            <FooterAuth />
    </StoreProvider>
  );
}