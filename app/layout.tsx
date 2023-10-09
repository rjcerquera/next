/* Components */
import CustomNavbar from "./components/CustomNavbar"
import Footer from "./components/Footer"

import { Providers } from "@/lib/providers"

/* Instruments */
import styles from "./styles/layout.module.css"
import "./styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <CustomNavbar />
            <main className={styles.main}>{props.children}</main>
            <Footer />
          </section>
        </body>
      </html>
    </Providers>
  )
}
