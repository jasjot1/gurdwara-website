import { Youtube, Video, Play } from "lucide-react";

async function getLatestVideos() {
    try {
        const res = await fetch("https://www.youtube.com/feeds/videos.xml?channel_id=UC2QyeFCBWPGMknhTzixWiPQ", {
            next: { revalidate: 3600 },
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
        });

        if (!res.ok) return [];

        const xml = await res.text();
        const entries = xml.split('<entry>').slice(1).map(e => e.split('</entry>')[0]);

        return entries.slice(0, 3).map((entry) => {
            const videoIdMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
            const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
            return {
                id: videoIdMatch ? videoIdMatch[1] : '',
                title: titleMatch ? titleMatch[1] : ''
            };
        }).filter(v => v.id);
    } catch (error) {
        console.error("Failed to fetch YouTube streams:", error);
        return [];
    }
}

export default async function SocialSection() {
    const videos = await getLatestVideos();

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

                {videos.length > 0 && (
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-secondary mb-8">Latest Streams</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {videos.map((video) => (
                                <a
                                    key={video.id}
                                    href={`https://www.youtube.com/watch?v=${video.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100"
                                >
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                                            alt={video.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform shadow-lg">
                                                <Play size={24} fill="currentColor" className="ml-1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 text-left bg-white">
                                        <h4 className="font-semibold text-gray-800 line-clamp-2 text-sm mb-2 group-hover:text-red-600 transition-colors">
                                            {video.title.replace('Gurdwara Guru Maneyo Granth Sikh Temple', 'GGMG')}
                                        </h4>
                                        <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-md mb-2 inline-block">Watch on YouTube</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                <p className="mt-12 text-sm text-gray-500 font-medium">
                    Join our Sangat online for Kirtan, Katha, and daily prayers.
                </p>
            </div>
        </section>
    );
}
