import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { createRental } from "@/app/rentals/rental.actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FormComboBox from "@/components/form-combo";
import CreateRentalForm from "@/components/CreateRentalForm";
import { getUserStatus } from "@/app/landlord/register/userStatus.action";
import { notFound } from "next/navigation";

// import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
// import { useState } from 'react';

export default async function Page() {
  // Check user authentication and landlord status
  const userStatus = await getUserStatus();
  
  // If user is not logged in or not a landlord, redirect to 404
  if (!userStatus || userStatus !== "LANDLORD") {
    notFound();
  }
  
//   const [files, setFiles] = useState<File[] | undefined>();
//   const handleDrop = (files: File[]) => {
//     console.log(files);
//     setFiles(files);
//   };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min">
            <CreateRentalForm/>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
