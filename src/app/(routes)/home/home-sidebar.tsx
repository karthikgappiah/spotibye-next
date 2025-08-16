import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/app/_components/ui/sidebar";
import { ServiceToggle } from "./service-toggle";
import { SearchForm } from "./search-form";

export function HomeSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <ServiceToggle
          services={["Spotify", "Apple", "YouTube"]}
          defaultService={"Spotify"}
        />
        <SearchForm />
      </SidebarHeader>
    </Sidebar>
  );
}
