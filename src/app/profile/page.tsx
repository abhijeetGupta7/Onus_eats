'use client';

import { ArrowLeft, Phone } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProfilePage() {
  const router = useRouter();

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
          <h1 className="text-xl text-gray-800 ml-2">Profile</h1>
        </header>

        {/* Main */}
        <main className="px-4 py-12 flex flex-col items-center">
          
          <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6">
            <Image
              src="https://placehold.co/150x150.png"
              alt="User Avatar"
              width={144}
              height={144}
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Sarah Anderson</h2>

          <div className="flex items-center text-gray-500 mt-2 mb-6">
            <Phone className="h-4 w-4 mr-2 text-yellow-500" />
            <span>+91 9910564550</span>
          </div>

          <Link href="/profile/edit">
            <Button
              variant="outline"
              className="rounded-full border-yellow-400 text-yellow-500 hover:bg-yellow-50 hover:text-yellow-600 px-8 py-3 text-base"
            >
              Edit Profile
            </Button>
          </Link>

        </main>

      </div>
    </div>
  );
}
