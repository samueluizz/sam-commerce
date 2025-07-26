import { ThemeProvider } from '@/components/customComponents/theme/theme-provider';
// import { SidebarProvider } from '@/components/ui/sidebar';

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {/* <SidebarProvider> */}
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1 p-4 sm:p-6 lg:p-8'>{children}</main>
      </div>
      {/* </SidebarProvider> */}
    </ThemeProvider>
  );
}
