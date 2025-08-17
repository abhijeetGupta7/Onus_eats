'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [countryCode, setCountryCode] = useState<string | undefined>();
  const [mobileNumber, setMobileNumber] = useState<string | undefined>();
  const fullNumber = searchParams.get('mobile') || '+91-9876543210';

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Extract country code + mobile number from query
  useEffect(() => {
    const [code, number] = fullNumber.split('-');
    setCountryCode(code);
    setMobileNumber(number);
    inputRefs.current[0]?.focus();
  }, [fullNumber]);

  // Countdown timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  // Handle OTP input change
  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Submit OTP
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Verifying OTP:", enteredOtp);

    // TODO: Replace with Firebase OTP verification
    router.push('/explore'); 
  };

  // Resend OTP
  const handleResendOtp = () => {
    setTimer(30);
    setIsResendDisabled(true);
    console.log("Resending OTP...");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center text-sm text-gray-600 hover:text-gray-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Change number
        </Link>

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Verify OTP</h1>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;ve sent a 6-digit code to {countryCode} XXXXX
            {mobileNumber?.slice(-5)}
          </p>
        </div>

        {/* OTP Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* OTP Inputs */}
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={(e) => e.target.select()}
                ref={(el) => { inputRefs.current[index] = el; }}
                className="w-12 h-14 text-center text-2xl border border-gray-300 rounded-md 
                           focus:border-yellow-400 focus:ring focus:ring-yellow-200 outline-none"
              />
            ))}
          </div>

          {/* Resend OTP */}
          <div className="text-sm text-gray-500">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={isResendDisabled}
              className="disabled:cursor-not-allowed disabled:text-gray-400 text-yellow-500 font-medium hover:underline"
            >
              Resend OTP
            </button>
            {isResendDisabled && (
              <span> in 00:{timer.toString().padStart(2, '0')}</span>
            )}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md font-medium text-lg transition"
          >
            Verify & Continue
          </button>
        </form>
      </div>
    </div>
  );
}
