import Link from 'next/link';
import { Form } from 'app/form';
import { redirect } from 'next/navigation';
import { createUser, getUser } from 'app/db';
import { SubmitButton } from 'app/submit-button';

export default function Login() {
  async function register(formData: FormData) {
    'use server';
    let email = formData.get('email') as string;
    let password = formData.get('password') as string;
    let user = await getUser(email);

    if (user.length > 0) {
      return 'El usuario ya existe'; // TODO: Handle errors with useFormStatus
    } else {
      await createUser(email, password);
      redirect('/login');
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Registro</h3>
          <p className="text-sm text-gray-500">
            Crea una cuenta con tu correo y contraseña
          </p>
        </div>
        <Form action={register}>
          <SubmitButton>Registrarse</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {'¿Ya tienes una cuenta?'}
            <Link href="/login" className="font-semibold text-gray-800">
              Inicia Sesión
            </Link>
            {' en cambio.'}
          </p>
        </Form>
      </div>
    </div>
  );
}
