import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();

	if (session) return redirect('/');

	return (
		<main className='flex justify-center pt-32 sm:pt-52 min-h-screen'>
			<div className='w-full sm:w-[500px] px-10'>{children}</div>
		</main>
	);
}
