import { MapPin, Clock, Phone } from "lucide-react";

export default function InfoSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Location */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary mb-2">Visit Us</h3>
                        <p className="text-gray-600 mb-4">
                            9882 Garden Hwy,<br />
                            Yuba City, CA 95991
                        </p>
                        <a
                            href="https://maps.google.com/?q=9882+Garden+Hwy,+Yuba+City,+CA+95991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline"
                        >
                            Get Directions
                        </a>
                    </div>

                    {/* Hours */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary mb-2">Opening Hours</h3>
                        <p className="text-gray-600">
                            Daily: 4:30 AM - 9:00 PM
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            Open to all, everyday.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary mb-2">Contact Us</h3>
                        <p className="text-gray-600 mb-4">
                            Have questions? Reach out to us.
                        </p>
                        <a
                            href="tel:530-812-6075"
                            className="text-2xl font-bold text-secondary hover:text-primary transition-colors"
                        >
                            530-812-6075
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
