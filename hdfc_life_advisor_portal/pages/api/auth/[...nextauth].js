import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                console.log("RECEIVED:", credentials);

                if (
                    credentials?.email === "advisor@hdfclife.com" &&
                    credentials?.password === "Advisor@123"
                ) {
                    console.log("Matched")
                    return {
                        id: "1",
                        name: "HDFC Advisor",
                        email: "advisor@hdfclife.com",
                    };
                }
                console.log("Credentials did not match");
                return null;
            },
        }),

        ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
            ? [
                GoogleProvider({
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                }),
            ]
            : []),
    ],
    session: {
        strategy: "jwt",
    },
})


