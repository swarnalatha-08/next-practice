import NextAuth from "next-auth/next";
import Providers from `next-auth/providers`;

export default NextAuth({
    Providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
})