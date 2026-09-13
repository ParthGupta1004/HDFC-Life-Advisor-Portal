import { signIn } from "next-auth/react";

export default function SignIn() {
    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const result = await signIn("credentials", {
            email,
            password,
            callbackUrl: "/desk",
        });

        console.log(result);
    };

    return (
        <div className="flex min-h-[65vh] items-center justify-center">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-red-700">
                        Advisor Login
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Sign in to access your HDFC Life Advisor Portal
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input
                            name="email"
                            type="email"
                            placeholder="advisor@hdfclife.com"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-red-700 py-3 font-semibold text-white transition hover:bg-red-800"
                    >
                        Sign In
                    </button>
                </form>

                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200"></div>
                    <span className="text-sm text-gray-400">OR</span>
                    <div className="h-px flex-1 bg-gray-200"></div>
                </div>

                <button
                    type="button"
                    onClick={() => signIn("google")}
                    className="w-full rounded-lg border border-gray-300 bg-white py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                    Sign in with Google
                </button>

            </div>
        </div>
    );
}