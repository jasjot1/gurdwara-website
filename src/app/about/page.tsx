import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Gurdwara Guru Maneyo Granth, our mission, and our dedication to the teachings of the Guru Granth Sahib.",
};

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-4xl font-bold text-secondary mb-6">About Us</h1>
            <p className="text-lg text-gray-600 mb-4">
                Gurdwara Guru Maneyo Granth is a Sikh Temple dedicated to the teachings of the Guru Granth Sahib.
                We strive to serve the community of Yuba City and beyond through prayer, education, and selfless service (Sewa).
            </p>
            <p className="text-lg text-gray-600">
                (More content coming soon...)
            </p>
        </div>
    );
}
