import { getSession } from "next-auth/react";

export default function Desk({ session }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">
        
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-2xl">
          👤
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Advisor Desk
        </h1>

        <p className="mt-3 text-gray-500">
          Welcome back, HDFC Advisor
        </p>

        <div className="mt-6 rounded-lg bg-gray-50 p-4">
          <p className="text-sm text-gray-500">
            Logged in as
          </p>

          <p className="mt-1 font-semibold text-red-700">
            {session.user.email}
          </p>
        </div>

      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}