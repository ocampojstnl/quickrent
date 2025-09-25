import { getRentals, deleteRental } from "./rental.actions";
import { Rental } from "@prisma/client";
import Link from "next/link";
import Navigation from "@/components/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Bed, Bath, RulerDimensionLine, MapPin } from "lucide-react";

export default async function RentalsPage() {
  const rentals: Rental[] = await getRentals();

  return (
    <>
      <Navigation />
      <div className="flex py-20 items-center justify-center">
        <div className="max-w-(--breakpoint-xl) w-full mx-auto">
          <div className="flex flex-wrap">
            {rentals.map((r: Rental) => (
              <Card key={r.id} className="w-full gap-0 md:w-[23%] p-4 mx-2">
                <CardHeader className="pb-1 px-0">
                  {r.imageUrls && r.imageUrls.length > 0 ? (
                    <div className="img-container relative">
                      <img
                        src={r.imageUrls[0]}
                        alt={`${r.name} image`}
                        className="w-full h-80 object-cover rounded-xl"
                      />
                      
                      <div className="max-w-{100%} absolute text-center bottom-5 left-0 right-0">
                        <div className="price mx-auto py-2 text-white px-10 rounded-xl text-md bg-white/30 backdrop-blur-xl overflow-hidden inline-flex flex-col">
                          <div className="title-price font-bold">
                            Price
                          </div>
                          <span className="text text-white">
                            ₱ {r.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-muted rounded flex items-center justify-center text-sm text-muted-foreground">
                      No image
                    </div>
                  )}
                  <CardTitle className="text-lg text-left">{r.name}</CardTitle>
                  <CardDescription className="capitalize flex-col flex text-sm text-muted-foreground">
                    {/* <span className="description ">{r.description}</span> */}
                  </CardDescription>
                </CardHeader>
                  <span className="category  w-[100%] text-sm text-left mb-4 inline-flex items-start"><MapPin className="mt-1 w-4 h-4 mr-2" strokeWidth={1.25} /> {r.address}</span>
                  
                <CardContent className="px-0 mt-auto">
                  <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center justify-center text-base font-bold w-[33%]">
                         
                        <div className="rounded-full p-2 rounded-full bg-cyan-500 mr-2">
                            <Bed color="#ffffff" className="w-3 h-3"/>
                        </div>
                        {r.bedroom}
                      </span>
                      <span className="inline-flex items-center justify-center text-base font-bold w-[33%]">
                        <div className="rounded-full p-2 rounded-full bg-cyan-500 mr-2">
                            <Bath color="#ffffff" className="w-3 h-3"/> 
                        </div>
                        {r.bathroom}
                        </span>
                      <span className="inline-flex items-center justify-center text-base font-bold w-[33%]">
                        <div className="rounded-full p-2 rounded-full bg-cyan-500 mr-2">
                            <RulerDimensionLine color="#ffffff" className="w-3 h-3" />
                        </div>
                        {r.size}
                        </span>
                    </div>

                </CardContent>

                {/* <CardFooter className="flex justify-between items-center">
                    <Link href={`/rentals/${r.id}/edit`} className="text-blue-600 text-sm hover:underline">
                      Edit
                    </Link>

                    <form
                      action={async () => {
                        "use server";
                        await deleteRental(r.id);
                      }}
                    >
                      <button
                        type="submit"
                        className="text-red-500 text-sm hover:underline"
                      >
                        Delete
                      </button>
                    </form>
                  </CardFooter> */}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
