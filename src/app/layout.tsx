import { ThemeProvider } from 'next-themes';
import './globals.css';
import Header from '@/components/customComponents/layout/header';
import UpperNavbar from '@/components/customComponents/layout/upper-navbar';
import LowerNavbar from '@/components/customComponents/layout/lower-navbar';
import Footer from '@/components/customComponents/layout/footer';
import { CartProvider } from '@/components/customComponents/cart/cartContext';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className='w-full min-h-screen overflow-x-hidden'>
        <CartProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header title='Need help? Call us: (+55)4321-1234' />
            <UpperNavbar />
            <LowerNavbar />
            {children}
            <Toaster position='top-center' richColors />
            <Footer />
          </ThemeProvider>
        </CartProvider>
      </body>
    </html>
  );
}
