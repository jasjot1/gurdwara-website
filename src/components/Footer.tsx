import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Video } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">Gurdwara Guru Maneyo Granth</h3>
                        <p className="text-gray-300 mb-6">
                            A place of worship, learning, and community service. We welcome everyone to join us in prayer and sewa.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.youtube.com/@GurdwaraGuruManeyoGranth"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#FF0000] transition-colors"
                                aria-label="YouTube Channel"
                            >
                                <Youtube size={24} />
                            </a>
                            <a
                                href="https://www.tiktok.com/@gurumaneyogranth"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="TikTok Profile"
                            >
                                <Video size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-primary transition-colors">
                                    Services & Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-300">
                                    9882 Garden Hwy,<br />
                                    Yuba City, CA 95991
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="tel:530-812-6075" className="text-gray-300 hover:text-primary transition-colors">
                                    530-812-6075
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Gurdwara Guru Maneyo Granth. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
