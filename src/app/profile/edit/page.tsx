'use client';

import { ArrowLeft, Camera } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function EditProfilePage() {
  const router = useRouter();
  const [bio, setBio] = useState('');
  const maxBioLength = 150;

  return (
    <div className="flex justify-center min-h-screen bg-white px-4">
      
      <div className="w-[358px]">
        
        {/* Header */}
        <header className="mt-7 flex items-center">
          <button
            onClick={() => router.back()}
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-xl text-gray-800 ml-2">Edit Profile</h1>
        </header>

        {/* Main */}
        <main className="px-4 py-12">
          
          {/* Avatar */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="https://placehold.co/150x150.png"
                alt="User Avatar"
                width={128}
                height={128}
                className="object-cover"
              />
              <button className="absolute bottom-1 right-1 bg-yellow-400 text-white rounded-full p-2 hover:bg-yellow-500">
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-gray-600">Change Photo</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <Label htmlFor="full-name" className="text-sm font-medium text-gray-700">
                Full Name
              </Label>
              <Input
                id="full-name"
                type="text"
                defaultValue="Sarah Johnson"
                className="mt-1 bg-white"
              />
            </div>
            <div>
              <Label htmlFor="phone-number" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone-number"
                type="tel"
                defaultValue="+91 9910564550"
                className="mt-1 bg-white"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email ID
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email ID"
                className="mt-1 bg-white"
              />
            </div>
            <div>
              <Label htmlFor="short-bio" className="text-sm font-medium text-gray-700">
                Short Bio
              </Label>
              <div className="relative mt-1">
                <Textarea
                  id="short-bio"
                  placeholder="Please add short bio"
                  className="bg-white pr-16"
                  maxLength={maxBioLength}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <span className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {bio.length}/{maxBioLength}
                </span>
              </div>
            </div>
          </form>
          
          <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 mt-12 text-lg py-6">
            Save Changes
          </Button>

        </main>

      </div>
    </div>
  );
}
