import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "~/StoreProvider";

import "~/styles/globals.css";
import styles from "~/styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en"  suppressHydrationWarning={true}>
        <body>
        {children}
        </body>
      </html>
    </StoreProvider>
  );
}
