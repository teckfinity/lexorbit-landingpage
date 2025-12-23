import { motion } from "framer-motion";
import { ArrowLeft, Play, Clock, ChevronRight, Pause, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const playlists = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Everything you need to hit the ground running",
    videos: [
      { id: 1, title: "Welcome to LexOrbit", duration: "2:15", watched: true },
      { id: 2, title: "Setting Up Your Profile", duration: "4:32", watched: true },
      { id: 3, title: "Your First Legal Search", duration: "8:47", watched: false },
      { id: 4, title: "Understanding Search Results", duration: "6:21", watched: false },
    ],
  },
  {
    id: "core-features",
    title: "Core Features",
    description: "Deep dives into every major feature",
    videos: [
      { id: 5, title: "Legal Research Masterclass", duration: "15:32", watched: false },
      { id: 6, title: "Document Summarizer", duration: "7:15", watched: false },
      { id: 7, title: "Judge Analytics Explained", duration: "12:03", watched: false },
      { id: 8, title: "Citation Maps Tutorial", duration: "9:48", watched: false },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Techniques",
    description: "Level up your research game",
    videos: [
      { id: 9, title: "Boolean Search Operators", duration: "11:24", watched: false },
      { id: 10, title: "Custom Alerts & Monitoring", duration: "8:56", watched: false },
      { id: 11, title: "API Integration Guide", duration: "18:32", watched: false },
    ],
  },
];

const featuredVideo = {
  id: 0,
  title: "The Complete LexOrbit Walkthrough",
  description: "A comprehensive 20-minute tour of everything LexOrbit can do for your practice. Perfect for new users or anyone wanting a refresher on our latest features.",
  duration: "20:45",
  thumbnail: "⚖️",
};

export default function VideoTutorials() {
  const [activePlaylist, setActivePlaylist] = useState(playlists[0].id);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentPlaylist = playlists.find(p => p.id === activePlaylist);

  return (
    <div className="min-h-screen bg-navy-dark">
      <Navigation showBanner={true} />
      
      {/* Hero - Featured Video */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link> */}

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Video Player Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-3"
            >
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
                style={{ background: 'linear-gradient(135deg, #1A2332 0%, #2A3542 100%)' }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {/* Video Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">{featuredVideo.thumbnail}</span>
                </div>

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 bg-navy-dark/60 flex items-center justify-center transition-opacity ${isPlaying ? 'opacity-0' : 'group-hover:bg-navy-dark/40'}`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-lg"
                    style={{ boxShadow: '0 0 40px rgba(212, 165, 116, 0.4)' }}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-navy-dark" fill="currentColor" />
                    ) : (
                      <Play className="w-8 h-8 text-navy-dark ml-1" fill="currentColor" />
                    )}
                  </motion.div>
                </div>

                {/* Progress Bar */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "35%" }}
                          transition={{ duration: 2 }}
                          className="h-full bg-gold rounded-full"
                        />
                      </div>
                      <span className="text-white/60 text-sm">7:15 / {featuredVideo.duration}</span>
                      <Volume2 className="w-4 h-4 text-white/60" />
                    </div>
                  </div>
                )}

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-medium backdrop-blur-sm">
                  {featuredVideo.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-6">
                <h1 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                  {featuredVideo.title}
                </h1>
                <p className="text-white/60 leading-relaxed">
                  {featuredVideo.description}
                </p>
              </div>
            </motion.div>

            {/* Playlist Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A2332 0%, #2A3542 100%)' }}>
                {/* Playlist Tabs */}
                <div className="flex border-b border-white/10">
                  {playlists.map((playlist) => (
                    <button
                      key={playlist.id}
                      onClick={() => setActivePlaylist(playlist.id)}
                      className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        activePlaylist === playlist.id
                          ? "text-gold border-b-2 border-gold -mb-px"
                          : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      {playlist.title}
                    </button>
                  ))}
                </div>

                {/* Video List */}
                <div className="p-2 max-h-[400px] overflow-y-auto">
                  {currentPlaylist?.videos.map((video, index) => (
                    <motion.button
                      key={video.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setActiveVideo(activeVideo === video.id ? null : video.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left ${
                        activeVideo === video.id
                          ? "bg-gold/10"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        video.watched ? "bg-sage/20" : "bg-white/10"
                      }`}>
                        {video.watched ? (
                          <span className="text-sage text-xs">✓</span>
                        ) : (
                          <Play className="w-3 h-3 text-white/60" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          activeVideo === video.id ? "text-gold" : "text-white"
                        }`}>
                          {video.title}
                        </p>
                        <p className="text-xs text-white/40">{video.duration}</p>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-white/30 transition-transform ${
                        activeVideo === video.id ? "rotate-90" : ""
                      }`} />
                    </motion.button>
                  ))}
                </div>

                {/* Playlist Info */}
                <div className="p-4 border-t border-white/10">
                  <p className="text-sm text-white/40">{currentPlaylist?.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Playlists Grid */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(212, 165, 116, 0.03) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">All Playlists</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {playlists.map((playlist, index) => (
              <motion.button
                key={playlist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActivePlaylist(playlist.id)}
                className={`text-left p-6 rounded-2xl border-2 transition-all ${
                  activePlaylist === playlist.id
                    ? "border-gold bg-gold/5"
                    : "border-white/10 hover:border-white/20 bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Play className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-white/40 text-sm">{playlist.videos.length} videos</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{playlist.title}</h3>
                <p className="text-sm text-white/50">{playlist.description}</p>
                
                {/* Progress */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/40 mb-2">
                    <span>{playlist.videos.filter(v => v.watched).length} of {playlist.videos.length} completed</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gold rounded-full transition-all"
                      style={{ width: `${(playlist.videos.filter(v => v.watched).length / playlist.videos.length) * 100}%` }}
                    />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
