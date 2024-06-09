"use client";

import React, { useState, MouseEventHandler } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ModeToggle } from "./ui/dark-mode-toggle";

type Theme = "light" | "dark" | "system";

type Link = {
  name: string;
  theme: Theme;
};

const links: Link[] = [
  { name: "/jo1.jpeg", theme: "dark" },
  { name: "/jo2.jpeg", theme: "light" },
  { name: "/jo3.jpeg", theme: "system" },
];

const ButtonVariant = {
  closed: {
    height: "1.6rem",
    transition: { duration: 0.4 },
  },
  open: {
    height: "3.7rem",
    transition: { when: "beforeChildren", duration: 0.4 },
  },
};

const textVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const HeaderPage: React.FC = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverTheme, setHoverTheme] = useState<Theme | null>(null);
  const { theme, systemTheme, setTheme } = useTheme();

  const handleClick = () => {
    setIsOpen(!isOpen);
    cycleOpen(Number(!open)); // Fix: Convert boolean to number
  };

  const handleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    cycleOpen(Number(!open)); // Fix: Convert boolean to number
    setHoverTheme(
      newTheme === "system" ? ("System Theme" as Theme | null) : newTheme
    );
  };

  return (
    <div className="">
      <nav className="flex justify-between items-center w-full px-4 pt-10 max-w-6xl mx-auto">
        <div className="flex gap-x-3 items-center">
          <Image
            width={200}
            height={200}
            className="w-10 h-10 rounded-full object-cover"
            src="/jo3.jpeg"
            alt="Profile Picture"
          />
          <div>
            <h4 className="text-xs">Sulav Baral</h4>
            <p className="text-[#828282] text-xs">Frontend Developer</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex w-fit items-center justify-between border border-neutral-600 rounded-full p-1 px-5">
            <span className="text-xs">Let&apos;s talk</span>
          </button>

          <ModeToggle />
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[1120px] mt-4 flex justify-center relative">
        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7"></div>
      </div>
    </div>
  );
};

export default HeaderPage;
