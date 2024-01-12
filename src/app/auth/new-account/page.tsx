import { titleFont } from '@/config/fonts';
import { RegisterForm } from './ui/RegisterForm';

export default function NewAccountPage() {
	return (
		<>
			<h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva Cuenta</h1>
			<RegisterForm />
		</>
	);
}
