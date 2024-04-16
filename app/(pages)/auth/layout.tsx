import type { ReactNode } from 'react'
import { StoreProvider } from '~/StoreProvider'
import { HeaderAuth } from '~/components/layouts/auth/headerAuth'
import { FooterAuth } from '~/components/layouts/auth/footerAuth'
import { SideBarAuth } from '~/components/layouts/auth/siderbar'

import '~/styles/globals.css'
import styles from '~/styles/layout.module.css'

interface Props {
  readonly children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang='en' suppressHydrationWarning={true}>
        <body>
          <section className='bodyContent'>
            <HeaderAuth />
            <SideBarAuth />
            <main className={styles.main}>{children}</main>
            <FooterAuth />
          </section>
        </body>
      </html>
    </StoreProvider>
  )
}
