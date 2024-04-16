import type { ReactNode } from 'react'
import { StoreProvider } from '~/StoreProvider'
import '~/styles/globals.css'
import styles from '~/styles/layout.module.css'

interface Props {
  readonly children: ReactNode
}

export default function BlankLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang='en' suppressHydrationWarning={true}>
        <body>
          <section className='bodyContent'>
            <main className={styles.main}>{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  )
}
