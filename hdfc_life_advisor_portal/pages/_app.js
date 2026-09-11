import "@/styles/globals.css";
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <h1>HDFC Life Advisor Portal</h1>
        <nav>
          <Link href="/">Home</Link>{" | "}
          <Link href="/policies">Policies</Link>{" | "}
          <Link href="/claims">Claims</Link>{" | "}
          <Link href="/claims/new">File Claims</Link>{" | "}
          <Link href="/desk">Desk</Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  )
}
