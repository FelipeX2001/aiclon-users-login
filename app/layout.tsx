import './globals.css';

import { GeistSans } from 'geist/font/sans';

let title = 'AICLON Login';
let description =
  'Inicio de Sesión para Usuarios de AICLON. Ingresa tus credenciales para acceder a la plataforma.';

export const metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}
