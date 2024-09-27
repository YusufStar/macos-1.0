"use client";

import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/background/light_1.jpg')",
        backgroundSize: "cover",
      }}
      className="h-screen max-w-full w-full"
    >
      <Navbar />
    </div>
  );
}
