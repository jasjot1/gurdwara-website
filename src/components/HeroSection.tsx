"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-secondary">
            {/* Background Pattern / Overlay */}
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/main.jpg"
                    alt="Gurdwara Guru Maneyo Granth"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary font-medium text-lg md:text-xl mb-4 tracking-wide uppercase">
                        Welcome to
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Gurdwara Guru Maneyo Granth
                        <span className="block text-2xl md:text-4xl mt-2 font-light text-gray-300">
                            Sikh Temple, Yuba City
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10">
                        Where Sangat gathers, Seva thrives, and the light of Naam guides us.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-amber-600 transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            Visit Us
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all transform hover:scale-105"
                        >
                            Learn More
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
