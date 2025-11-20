import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl font-bold text-secondary mb-10 text-center">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-semibold text-secondary mb-6">Get in Touch</h2>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <MapPin className="w-6 h-6 text-primary mt-1" />
                            <div>
                                <h3 className="font-medium text-gray-900">Address</h3>
                                <p className="text-gray-600">
                                    9882 Garden Hwy,<br />
                                    Yuba City, CA 95991
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Phone className="w-6 h-6 text-primary" />
                            <div>
                                <h3 className="font-medium text-gray-900">Phone</h3>
                                <a href="tel:530-812-6075" className="text-gray-600 hover:text-primary">
                                    530-812-6075
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl">
                    <h2 className="text-2xl font-semibold text-secondary mb-4">Send us a Message</h2>
                    <p className="text-gray-600 mb-4">
                        For inquiries about bookings, langar seva, or general questions, please visit us or call the number above.
                    </p>
                    {/* Form placeholder */}
                    <div className="space-y-4">
                        <p className="text-sm text-gray-500 italic">(Contact form coming soon)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
