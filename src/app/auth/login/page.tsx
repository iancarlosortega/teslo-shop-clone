import { titleFont } from '@/config/fonts';
import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
	return (
		<>
			<h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>
			<LoginForm />
		</>
	);
}
