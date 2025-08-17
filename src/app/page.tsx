"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router=useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    const fullNumber = `${countryCode}${phoneNumber}`;
    console.log("Mobile number:", fullNumber);

    // TODO: Later add Firebase signInWithPhoneNumber here 
    router.push(`/verify-otp?mobile=${countryCode}-${phoneNumber}`)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-[358px] h-[343px] px-1">
        <div className="flex items-center">
          {/* Brand */}
          <Image
            src="/logo.svg"
            alt="ONUS EATS"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="text-black font-bold text-xl">ONUS EATS</span>
        </div>

        {/* Heading */}
        <h1 className="text-gray-600 text-2xl font-semibold mb-5">
          Get Started
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Login using your mobile number
        </p>

        {/* Form */}
        <div className="mb-4">
          <p className="font-bold mb-3">Enter your mobile number</p>

          <div className="flex">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="border border-gray-300 rounded-l-md px-2 py-3 outline-none mr-2"
            >
              <option value="+91">+91</option>
              <option value="+12">+12</option>
              <option value="+34">+34</option>
            </select>

            <input
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 9876543210"
              className="flex-1 border border-gray-300 rounded-r-md px-2 py-3 outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-400 hover:bg-orange-600 text-white py-3 rounded-md font-medium mb-4"
        >
          Send OTP
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center">
          By continuing, you agree to our{" "}
          <a href="#" className="text-yellow-500">
            Terms & Conditions
          </a>
        </p>
      </div>
    </div>
  );
}
