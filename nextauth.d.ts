import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: {
			id: string;
			fullName: string;
			email: string;
			isActive: boolean;
			roles: string[];
		} & DefaultSession['user'];
	}
}
