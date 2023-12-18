export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className='flex justify-center pt-32 sm:pt-52 min-h-screen'>
			<div className='w-full sm:w-[500px] px-10'>{children}</div>
		</main>
	);
}
