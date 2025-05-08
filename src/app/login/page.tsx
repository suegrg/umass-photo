"use client";

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // authentication here
    console.log("Logging in with:", { email, password });

    setError("");
    setTimeout(() => {
      router.push("/dashboard"); 
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50">
        <section className="bg-[#8E122A] text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Sign in to access your account and manage your photography
              portfolio
            </p>
          </div>
        </section>

        {/* login form */}
        <section className="container mx-auto py-12 px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E122A]"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E122A]"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8E122A] text-white py-3 px-4 rounded-md hover:bg-[#6A0D20] transition font-bold text-lg"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <a
                href="/forgot-password"
                className="text-[#8E122A] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-[#8E122A] font-semibold hover:underline"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
