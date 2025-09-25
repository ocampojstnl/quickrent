"use client"

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

// import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
// import { useState } from 'react';

export default function Page() {
  
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
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <h1>Create Rental</h1>
                  <form action={createRental}>
                    <Input name="name" placeholder="Name" required />
                    <Textarea name="description" placeholder="Description" />
                    <Input name="category" placeholder="Category" required />
                    <Input name="address" placeholder="Address" required />
                    <Input name="size" type="number" placeholder="Size" required />
                    <Input name="bathroom" type="number" placeholder="Bathrooms" required />
                    <Input name="bedroom" type="number" placeholder="Bedrooms" required />
                    <Input name="price" type="number" placeholder="Price" required />
                    <input type="file" name="images" multiple accept="image/*" required />
                    <Button type="submit">Create</Button>
                </form>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
