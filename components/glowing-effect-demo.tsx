"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useNavigate } from "react-router-dom";

export default function GlowingEffectDemo() {
  const navigate = useNavigate();

  const features = [
    {
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Merge PDF",
      description: "Combine multiple PDF files into a single document seamlessly.",
      path: "/tools"
    },
    {
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "PDF Tools",
      description: "Complete suite of PDF manipulation and conversion tools.",
      path: "/tools"
    },
    {
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
      icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Secure & Private",
      description: "100% client-side processing. Your files never leave your device.",
      path: "/tools"
    },
    {
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Fast Processing",
      description: "Lightning-fast conversions powered by advanced algorithms.",
      path: "/tools"
    },
    {
      area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
      icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Multiple Formats",
      description: "Support for PDF, Word, Images, and more file formats.",
      path: "/tools"
    }
  ];

  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {features.map((feature, index) => (
        <GridItem
          key={index}
          area={feature.area}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          path={feature.path}
        />
      ))}
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  path: string;
}

const GridItem = ({ area, icon, title, description, path }: GridItemProps) => {
  const navigate = useNavigate();

  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <button
        onClick={() => navigate(path)}
        className="w-full h-full relative rounded-2xl border p-2 md:rounded-3xl md:p-3 text-left bg-transparent hover:bg-transparent focus:outline-none cursor-pointer group"
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 group-hover:border-gray-500 group-hover:bg-gray-700/20 transition-colors">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white group-hover:text-cyan-300 transition-colors">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold group-hover:text-neutral-300 transition-colors">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </button>
    </li>
  );
};
