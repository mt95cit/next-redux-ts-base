import type { ReactNode } from 'react'
import { StoreProvider } from '~/StoreProvider'
import { HeaderUser } from '~/components/layouts/user/headerUser'
import { FooterUser } from '~/components/layouts/user/footerUser'

import '~/styles/globals.css'
import styles from '~/styles/layout.module.css'

interface Props {
  readonly children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang='en' suppressHydrationWarning={true}>
        <body>
          <section className='bodyContent'>
            <HeaderUser />
            <main className={styles.main}>{children}</main>
            <FooterUser />
          </section>
        </body>
      </html>
    </StoreProvider>
  )
}
