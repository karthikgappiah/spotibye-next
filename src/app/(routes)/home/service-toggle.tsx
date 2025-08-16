"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/app/_components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/app/_components/ui/sidebar";

import {
  SpotifyLogoIcon,
  YoutubeLogoIcon,
  AppleLogoIcon
} from "@phosphor-icons/react/dist/ssr";

const service_icons: Record<string, React.ElementType> = {
  // TODO: selected_service needs to be capitalized properly,
  // otherwise, service_icons won't recognize the right key.
  Spotify: SpotifyLogoIcon,
  YouTube: YoutubeLogoIcon,
  Apple: AppleLogoIcon
};

export function ServiceToggle({
  services: services,
  defaultService: defaultService
}: {
  services: string[];
  defaultService: string;
}) {
  const [selected_service, setSelectedService] = React.useState(defaultService);
  const SelectedIcon = service_icons[selected_service];

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-accent text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <SelectedIcon size={24} />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="">{selected_service}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {services.map((service) => (
              <DropdownMenuItem
                key={service}
                onSelect={() => setSelectedService(service)}
              >
                {service}
                {service === selected_service && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
