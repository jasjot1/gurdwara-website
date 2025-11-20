import { Calendar, Users, Clock } from "lucide-react";
import Image from "next/image";

const services = [
    {
        title: "Daily Nitnem",
        description: "Morning and evening prayers are recited daily. Join us for a peaceful start and end to your day.",
        icon: Clock,
        image: "/images/nitnem.jpg",
    },
    {
        title: "Sunday Diwan",
        description: "Weekly congregation with Kirtan, Katha, and community Langar. Everyone is welcome.",
        icon: Users,
        image: "/images/kirtan.jpg",
    },
    {
        title: "Langar Seva",
        description: "Free community kitchen serving fresh vegetarian meals to all, regardless of background.",
        icon: Calendar,
        image: "/images/langar.jpg",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We offer various religious and community services to foster spiritual growth and serve humanity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-secondary mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
