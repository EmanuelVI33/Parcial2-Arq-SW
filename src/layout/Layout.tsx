import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <div className='relative flex min-h-screen flex-col'>
          <SiteHeader />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
        <Toaster richColors />
        <TailwindIndicator />
      </ThemeProvider>
    </div>
  );
}
