import { SidebarProvider, SidebarTrigger } from "@/app/_components/ui/sidebar";
import { HomeSidebar } from "@/app/(routes)/home/home-sidebar";

export default function HomePage() {
  return (
    <SidebarProvider>
      <HomeSidebar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  );
}
