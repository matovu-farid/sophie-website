"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "src/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Abia Cleaning
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="/"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-foreground/70 transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <Button asChild className="hidden md:inline-flex">
          <Link href="/quote">Get a Quote</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="z-50 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-0 top-0 z-40 flex h-screen w-full flex-col bg-background px-6 pt-24 md:hidden"
            >
              <nav className="flex flex-col gap-6">
                <Link
                  href="/"
                  className="text-lg text-foreground/70 transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-lg text-foreground/70 transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-lg text-foreground/70 transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/quote" onClick={() => setIsOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
