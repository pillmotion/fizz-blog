"use client";
import { config } from "@/config";
import { Rss } from "lucide-react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { Button } from "./ui/button";
import Image from "next/image";
export const Footer: FunctionComponent = () => {
  return (
    <section className="mt-8 md:mt-16 mb-12">
      <div className="flex items-center justify-center">
        <div>
          <Image src="/images/fizzdragon-logo.png" alt="logo" width={600} height={200} />
        </div>
      </div>
    </section>
  );
};
