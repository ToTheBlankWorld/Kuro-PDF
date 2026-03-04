import React from "react";
import { Cover } from "@/components/ui/cover";

export default function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-400">
        Your Files. Your Privacy. <br /> <Cover>Zero Compromise.</Cover>
      </h1>
    </div>
  );
}
