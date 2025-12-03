import { Youtube, Video } from "lucide-react";

export default function SocialSection() {
    return (
        <section className="py-16 bg-red-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-secondary mb-6">Connect With Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    Stay updated with our daily programs, live streams, and community events through our social media channels.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {/* YouTube Live Stream CTA */}
                    <a
                        href="https://www.youtube.com/@GurdwaraGuruManeyoGranth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-[#FF0000] text-white rounded-full font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
                    >
                        <Youtube size={28} />
                        <span>Watch Live Stream</span>
                    </a>

                    {/* TikTok CTA */}
                    <a
                        href="https://www.tiktok.com/@gurumaneyogranth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
                    >
                        <Video size={28} />
                        <span>Follow on TikTok</span>
                    </a>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                    Join our Sangat online for Kirtan, Katha, and daily prayers.
                </p>
            </div>
        </section>
    );
}
