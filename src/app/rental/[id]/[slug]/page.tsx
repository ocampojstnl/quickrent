import { getRental } from "@/app/rentals/rental.actions";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Bed, 
  Bath, 
  RulerDimensionLine, 
  Calendar,
  Phone,
  Mail,
  Heart,
  Share2,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface RentalPageProps {
  params: {
    id: string;
    slug: string;
  };
}

export default async function RentalPage({ params }: RentalPageProps) {
  const rental = await getRental(params.id);

  if (!rental) {
    notFound();
  }

  // Format the date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative">
          {/* Back Button */}
          <div className="absolute top-4 left-4 z-10">
            <Button variant="outline" size="sm" asChild className="bg-white/90 backdrop-blur-sm">
              <Link href="/rentals">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Rentals
              </Link>
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 h-[400px] md:h-[500px]">
            {rental.imageUrls && rental.imageUrls.length > 0 ? (
              rental.imageUrls.map((url, index) => (
                <div 
                  key={index} 
                  className={`relative overflow-hidden ${
                    index === 0 ? 'md:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  <img
                    src={url}
                    alt={`${rental.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No images available</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Property Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-sm">
                    {rental.category}
                  </Badge>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    Listed on {formatDate(rental.createdAt)}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {rental.name}
                </h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span className="text-lg">{rental.address}</span>
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  ₱{rental.price.toLocaleString()} <span className="text-lg text-gray-500 font-normal">/ month</span>
                </div>
              </div>

              <Separator />

              {/* Property Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Property Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                        <Bed className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{rental.bedroom}</div>
                      <div className="text-sm text-gray-500">Bedrooms</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                        <Bath className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{rental.bathroom}</div>
                      <div className="text-sm text-gray-500">Bathrooms</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                        <RulerDimensionLine className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{rental.size}</div>
                      <div className="text-sm text-gray-500">sq ft</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              {rental.description && (
                <Card>
                  <CardHeader>
                    <CardTitle>About This Property</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {rental.description}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Interested in this property?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Landlord
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Separator />
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">
                      <strong>Property ID:</strong> {rental.id.slice(-8).toUpperCase()}
                    </p>
                    <p>
                      <strong>Last Updated:</strong> {formatDate(rental.updatedAt)}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium">{rental.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size</span>
                    <span className="font-medium">{rental.size} sq ft</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms</span>
                    <span className="font-medium">{rental.bedroom}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bathrooms</span>
                    <span className="font-medium">{rental.bathroom}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Rent</span>
                    <span className="font-medium text-blue-600">₱{rental.price.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: RentalPageProps) {
  const rental = await getRental(params.id);

  if (!rental) {
    return {
      title: 'Property Not Found',
    };
  }

  return {
    title: `${rental.name} - ₱${rental.price.toLocaleString()}/month | Rental Property`,
    description: `${rental.description?.substring(0, 160) || `${rental.bedroom} bedroom, ${rental.bathroom} bathroom ${rental.category.toLowerCase()} for rent in ${rental.address}. Monthly rent: ₱${rental.price.toLocaleString()}.`}`,
    keywords: `rental, ${rental.category}, ${rental.address}, ${rental.bedroom} bedroom, ${rental.bathroom} bathroom, ₱${rental.price}`,
  };
}
