import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Join us for Daily Nitnem, Sunday Diwan, Langar Seva, and Punjabi School at Gurdwara Guru Maneyo Granth.",
};

export default function ServicesPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl font-bold text-secondary mb-6">Our Services</h1>
            <div className="prose max-w-none text-gray-600">
                <p className="text-lg mb-4">
                    We offer a variety of religious and community services.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Daily Nitnem (Morning and Evening Prayers)</li>
                    <li>Sunday Diwan (Kirtan and Katha)</li>
                    <li>Langar (Community Kitchen)</li>

                    <li>Akhand Path Sahib bookings</li>
                </ul>
            </div>
        </div>
    );
}
