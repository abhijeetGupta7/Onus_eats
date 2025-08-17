"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, ShoppingCart, User, Star, MapPin, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingFoods = [
  { name: "Taco D...", image: "https://placehold.co/100x100.png" },
  { name: "Noodle...", image: "https://placehold.co/100x100.png" },
  { name: "Street BBQ", image: "https://placehold.co/100x100.png" },
  { name: "Taco D...", image: "https://placehold.co/100x100.png" },
  { name: "Noodle...", image: "https://placehold.co/100x100.png" },
  { name: "Street BBQ", image: "https://placehold.co/100x100.png" },
];

const restaurants = [
  {
    id: "resto-1",
    name: "Tasty Corner",
    cuisine: "South Indian",
    rating: 4.3,
    distance: 0.8,
    image: "https://placehold.co/300x200.png",
  },
  {
    id: "resto-2",
    name: "Food Fiesta",
    cuisine: "North Indian",
    rating: 4.7,
    distance: 1.2,
    image: "https://placehold.co/300x200.png",
  },
  {
    id: "resto-1",
    name: "Tasty Corner",
    cuisine: "South Indian",
    rating: 4.3,
    distance: 0.8,
    image: "https://placehold.co/300x200.png",
  },
  {
    id: "resto-2",
    name: "Food Fiesta",
    cuisine: "North Indian",
    rating: 4.7,
    distance: 1.2,
    image: "https://placehold.co/300x200.png",
  },
];

const vendors = [
  {
    id: "vendor-1",
    name: "Sharma's Chaat",
    cuisine: "Street Food",
    rating: 4.5,
    location: "Central Park",
    image: "https://placehold.co/150x150.png",
  },
  {
    id: "vendor-2",
    name: "Gupta's Sweets",
    cuisine: "Desserts",
    rating: 4.8,
    location: "Green Market",
    image: "https://placehold.co/150x150.png",
  },
  {
    id: "vendor-1",
    name: "Sharma's Chaat",
    cuisine: "Street Food",
    rating: 4.5,
    location: "Central Park",
    image: "https://placehold.co/150x150.png",
  },
  {
    id: "vendor-2",
    name: "Gupta's Sweets",
    cuisine: "Desserts",
    rating: 4.8,
    location: "Green Market",
    image: "https://placehold.co/150x150.png",
  },
];

export default function DashboardPage() {
  return (
    <div className="flex justify-center min-h-screen bg-white px-4">
     
      <div className="w-[358px] py-4">
        {/* Header */}
        <header className="bg-white border-b pb-3 mb-4 px-4">
          <div className="flex justify-between items-center">
            {/* Left-Brand */}
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="ONUS"
                width={12}
                height={12}
                className="mr-3"
              />
              <span className="text-lg font-bold tracking-wide">ONUS EATS</span>
            </div>

            {/* Right-Icons */}
            <div className="flex items-center space-x-5">
              <Link href="/dashboard">
                <Home className="text-yellow-500 h-6 w-6" />
              </Link>
              <Link href="/cart">
                <ShoppingCart className="text-gray-500 h-6 w-6" />
              </Link>
              <Link href="/profile">
                <User className="text-gray-500 h-6 w-6" />
              </Link>
            </div>
          </div>
        </header>

        {/* Trending food */}
        <section className="mb-6 px-3">
          <h2 className="text-lg font-bold text-gray-500 mb-3">
            Trending food near me
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {trendingFoods.map((food, i) => (
              <div key={i} className="flex-shrink-0 text-center">
                <Image
                  src={food.image}
                  alt={food.name}
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-yellow-400"
                />
                <p className="mt-2 text-sm">{food.name}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-gray-100 rounded-2xl py-7 px-3">
          {/* Tags */}
          <div className="flex mb-6 space-x-3 overflow-x-auto scrollbar-hide">
            <Button className="bg-yellow-400 text-black rounded-full hover:bg-yellow-500">
              All
            </Button>
            <Button
              variant="outline"
              className="bg-gray-200 text-black rounded-full"
            >
              Nearest
            </Button>
            <Button
              variant="outline"
              className="bg-gray-200 text-black rounded-full"
            >
              Top Rated
            </Button>
            <Button
              variant="outline"
              className="bg-gray-200 text-black rounded-full"
            >
              Only veg
            </Button>
          </div>

          {/* Restaurants */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Restaurants
            </h2>
            <div className="space-y-4">
              {restaurants.map((resto) => (
                <div
                  key={resto.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <Image
                    src={resto.image}
                    alt={resto.name}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-bold">{resto.name}</h3>
                    <p className="text-sm text-gray-500">{resto.cuisine}</p>
                    <div className="flex justify-between items-center mt-2 text-sm">
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 font-bold">{resto.rating}</span>
                      </div>
                      <span className="text-gray-600">{resto.distance} km</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Vendors */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Vendors near you
            </h2>

            <div className="space-y-4">
              {vendors.map((vendor) => (
                <div
                  key={vendor.id}
                  className="bg-white rounded-xl overflow-hidden flex items-center p-3"
                >
                  <Image
                    src={vendor.image}
                    alt={vendor.name}
                    width={100}
                    height={100}
                    className="w-30 h-35 object-cover rounded-l-2xl"
                  />
                  <div className="pl-3 flex-1">
                    <h3 className="font-bold">{vendor.name}</h3>
                    <p className="text-sm text-gray-500">{vendor.cuisine}</p>
                    <div className="flex items-center mt-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-bold ml-1">
                        {vendor.rating}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {vendor.location}
                    </div>

                    {/* Voice Review Button */}
                    <Button
                      className="mt-3 w-full flex items-center justify-center 
                      bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 
                     text-white rounded-md"
                    >
                      <Mic className="w-4 h-4" />
                      <span>Voice Your Review</span>
                    </Button>

                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
