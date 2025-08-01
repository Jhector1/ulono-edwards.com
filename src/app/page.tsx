
'use client';

import React from "react";
// import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
// import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-[#E85E2D]">Uloño GPS</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Empowering the world through intergenerational knowledge. 
          Book Dr. Davis for consulting, lectures, and heritiage program development.
          <br/>
<br/>
          Among the Ovimbundu people of Angola, Uloño refers to both intergenerational knowledge and the source from which tributaries of a river originate. 
        </motion.p>



        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
  <div className="relative w-[32vw] h-[32vw]">
    <Image
      src="/images/ulono_gps.png"
      alt="Ulono Gps Logo"
      fill
      className="object-contain"
    />
  </div>          {/* <Link href="/videos">
            <button className="px-6 py-3 text-lg rounded-xl bg-rose-500 hover:bg-rose-600 transition shadow-md">
              Watch Preview
            </button>
          </Link>
          <Link href="/book">
            <button className="px-6 py-3 text-lg rounded-xl bg-white text-black hover:bg-gray-200 transition shadow-md">
              Book Dr. Davis
            </button>
          </Link> */}
        </motion.div>
      </section>

      <motion.section
        className="py-20 bg-gray-950 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-800 rounded-2xl shadow"
          >
            <h3 className="text-xl font-semibold mb-2">
              Keynote Presentations
            </h3>
            <p className="text-gray-400 text-sm">
              Experience dynamic keynotes that make anthropological analysis releavant to daily life.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-800 rounded-2xl shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Mentorship, Curriculum Development, and Consulting</h3>
            <p className="text-gray-400 text-sm">
              Develop youth mentorship and educator coaching for systems-level change
            
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gray-800 rounded-2xl shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Partner With Us</h3>
            <p className="text-gray-400 text-sm">
              Promote your mission with Uloño GPS, Inc. to reach a global audience.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
