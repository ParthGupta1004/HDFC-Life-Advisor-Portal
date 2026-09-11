export default function Home() {
  return (
    <div className="space-y-10">

      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-r from-red-700 to-red-500 px-8 py-12 text-white shadow-lg">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-100">
            Advisor Portal
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Welcome to {process.env.NEXT_PUBLIC_COMPANY_NAME}
          </h2>

          <p className="mt-4 text-lg text-red-50">
            Manage policies, review claims, and access your advisor workspace
            from one centralized portal.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/policies"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-red-700 shadow-sm transition hover:bg-red-50"
            >
              View Policies
            </a>

            <a
              href="/claims"
              className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Claims
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <h3 className="text-2xl font-bold">
          Portal Services
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-xl">
              📋
            </div>

            <h4 className="text-lg font-semibold">
              Policy Catalogue
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Browse available insurance policies and view detailed policy
              information.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-xl">
              📝
            </div>

            <h4 className="text-lg font-semibold">
              Claims Management
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Review existing claims and submit new claims through the portal.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-xl">
              👤
            </div>

            <h4 className="text-lg font-semibold">
              Advisor Desk
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Access your protected advisor workspace and account information.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}