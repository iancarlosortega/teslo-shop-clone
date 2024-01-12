import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { validateUser } from './actions';

const protectedRoutes = ['/checkout'];

export const authConfig: NextAuthConfig = {
	pages: {
		signIn: '/auth/login',
		newUser: '/auth/new-account',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isProtected = protectedRoutes.some(route =>
				nextUrl.pathname.startsWith(route)
			);
			if (isProtected) {
				if (isLoggedIn) return true;
				return false; // Redirect unauthenticated users to login page
			} else if (isLoggedIn) {
				return true; // If authenticated, return true
			}
			return true;
		},
		jwt({ token, user }) {
			if (user) token.data = user;
			return token;
		},
		session({ session, token }) {
			session.user = token.data as any;
			return session;
		},
	},
	providers: [
		Credentials({
			async authorize(credentials) {
				const parsedCredentials = z
					.object({ email: z.string().email(), password: z.string().min(6) })
					.safeParse(credentials);

				if (!parsedCredentials.success) return null;

				const { email, password } = parsedCredentials.data;

				const result = await validateUser(email, password);
				return result;
			},
		}),
	],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
