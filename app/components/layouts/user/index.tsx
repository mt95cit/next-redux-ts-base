import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "~/StoreProvider";
import { HeaderUser } from "~/components/layouts/user/headerUser";
import { FooterUser } from "~/components/layouts/user/footerUser";

import "~/styles/globals.css";
import styles from "~/styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function UserLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en"  suppressHydrationWarning={true}>
        <body>
            <HeaderUser />        
                <main className={styles.main}>{children}</main>
            <FooterUser />
        </body>
      </html>
    </StoreProvider>
  );
}
