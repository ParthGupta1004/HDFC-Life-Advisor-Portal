import "@/styles/globals.css";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Link from "next/link";

function Layout({ Component, pageProps }) {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-red-700">
            HDFC Life Advisor Portal
          </h1>

          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
            <Link href="/" className="rounded-lg px-3 py-2 hover:bg-red-50 hover:text-red-700">
              Home
            </Link>

            <Link href="/policies" className="rounded-lg px-3 py-2 hover:bg-red-50 hover:text-red-700">
              Policies
            </Link>

            <Link href="/claims" className="rounded-lg px-3 py-2 hover:bg-red-50 hover:text-red-700">
              Claims
            </Link>

            <Link href="/claims/new" className="rounded-lg px-3 py-2 hover:bg-red-50 hover:text-red-700">
              File Claim
            </Link>

            <Link href="/desk" className="rounded-lg bg-red-700 px-4 py-2 text-white hover:bg-red-800">
              Advisor Desk
            </Link>

            {session && (
              <button
                onClick={() => signOut()}
                className="rounded-lg px-4 py-2 text-red-700 hover:bg-red-50"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Layout Component={Component} pageProps={pageProps} />
    </SessionProvider>
  );
}