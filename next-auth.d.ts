
import NextAuth, {type DefaultSession} from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
    id: string;
    name: string;
    email: string | null;
    phone: string
    password: string | null;
    isTwoFactorEnabled: boolean
    isOAuth: boolean
    image: string | null
    emailVerified: Date | null;
}

declare module 'next-auth' {
    interface Session {
        user: ExtendedUser
    }
}