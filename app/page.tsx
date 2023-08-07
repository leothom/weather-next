"use client";
import Image from "next/image";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
        layout="fill"
        alt="gradient background"
        className="object-cover"
      />
      {/* Search */}
      <Search />
    </main>
  );
}
