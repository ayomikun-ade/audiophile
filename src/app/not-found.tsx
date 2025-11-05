"use client";
import { Button } from "@/components/ui/button";
import { PackageX } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-366px)] flex items-center justify-center bg-brand-neutral-200">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="brand-width mx-auto px-6 py-[120px] text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="bg-white p-8 rounded-full shadow-lg">
            <PackageX size={80} className="text-brand-primary" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          className="mb-4"
        >
          404
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          className="mb-4"
        >
          Page Not Found
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="max-w-[540px] mx-auto opacity-50 mb-10"
        >
          Sorry, the page you are looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back to exploring our premium audio
          equipment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
          <Link href="/headphones">
            <Button variant="outline">Browse Headphones</Button>
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
