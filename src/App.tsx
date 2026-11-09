import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Play,
  X,
  Maximize2,
  Disc,
  Music,
  Share2,
  ArrowUpRight,
  Menu
} from 'lucide-react';

interface Track {
  id: string;
  number: string;
  title: string;
  artists: string[];
  featured?: string;
  note?: string;
}

const TRACKS: Track[] = [
  {
    id: 'stove-on',
    number: '01',
    title: 'Stove On',
    artists: ['Ahmer', 'Rishab Raino', 'Arif Mir'],
    featured: 'Arif Mir',
    note: 'Opening track featuring Arif Mir alongside Ahmer and Rishab Raino.'
  },
  {
    id: 'golden-era',
    number: '02',
    title: 'Golden Era',
    artists: ['Ahmer', 'Rishab Raino'],
    note: 'Title track by Ahmer and Rishab Raino.'
  },
  {
    id: 'say-yes',
    number: '03',
    title: 'Say Yes',
    artists: ['Ahmer', 'Rishab Raino'],
    note: 'Third track on the EP by Ahmer and Rishab Raino.'
  },
  {
    id: 'boss-shii',
    number: '04',
    title: 'Boss Shii',
    artists: ['Ahmer', 'Rishab Raino'],
    note: 'Fourth track by Ahmer and Rishab Raino.'
  },
  {
    id: 'ghum',
    number: '05',
    title: 'Ghum',
    artists: ['Ahmer', 'Rishab Raino', 'Arif Mir'],
    featured: 'Arif Mir',
    note: 'Closing track featuring Arif Mir alongside Ahmer and Rishab Raino.'
  }
];

interface Collaborator {
  name: string;
  isPrimary?: boolean;
  highlight?: string;
  links: {
    label: string;
    url: string;
    type: 'instagram' | 'spotify' | 'apple' | 'youtube' | 'facebook' | 'web';
  }[];
}

const PRIMARY_ARTISTS: Collaborator[] = [
  {
    name: 'Ahmer',
    isPrimary: true,
    highlight: 'Primary Artist',
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/0EAfS9gQe5SCtQp1R6hJqG', type: 'spotify' },
      { label: 'Apple Music', url: 'https://music.apple.com/in/artist/ahmer/921260135', type: 'apple' },
      { label: 'YouTube', url: 'https://www.youtube.com/@Ahmerkashmir', type: 'youtube' },
      { label: 'Instagram', url: 'https://www.instagram.com/ahmermusic/', type: 'instagram' },
      { label: 'Facebook', url: 'https://www.facebook.com/ahmermusic', type: 'facebook' }
    ]
  },
  {
    name: 'Rishab Raino',
    isPrimary: true,
    highlight: 'Primary Artist',
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/0JS3L5h6W8ZsB8qpJVE8os', type: 'spotify' },
      { label: 'Apple Music', url: 'https://music.apple.com/in/artist/rishab-raino/1434887681', type: 'apple' },
      { label: 'YouTube', url: 'https://www.youtube.com/@rishabraino', type: 'youtube' },
      { label: 'Instagram', url: 'https://www.instagram.com/raino_music/', type: 'instagram' }
    ]
  }
];

const COLLABORATORS: Collaborator[] = [
  {
    name: 'Arif Mir',
    highlight: 'Featured Artist on “Stove On” & “Ghum”',
    links: [
      { label: 'Spotify', url: 'https://open.spotify.com/artist/6U0ILIjvQqqumKYlW0Jwsx', type: 'spotify' },
      { label: 'Apple Music', url: 'https://music.apple.com/in/artist/arif-mir/921257281', type: 'apple' },
      { label: 'Instagram', url: 'https://www.instagram.com/arifmirmusic/', type: 'instagram' }
    ]
  },
  {
    name: 'Ednit World',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/ednitworld_/', type: 'instagram' }
    ]
  },
  {
    name: 'Tabish Wani',
    links: [
      { label: 'Instagram (@tabishfl)', url: 'https://www.instagram.com/tabishfl/', type: 'instagram' },
      { label: 'Instagram (@dirtabish)', url: 'https://www.instagram.com/dirtabish/', type: 'instagram' },
      { label: 'Spotify', url: 'https://open.spotify.com/artist/1N0fhNXKSD62MUjFxqyLVi', type: 'spotify' },
      { label: 'Apple Music', url: 'https://music.apple.com/us/artist/tabish-wani/1544439950', type: 'apple' }
    ]
  },
  {
    name: 'Sheikh Abdul Wahid',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/sheikh_abdul_wahid/', type: 'instagram' }
    ]
  },
  {
    name: 'Musa (@from.musa)',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/from.musa/ ', type: 'instagram' }
    ]
  },
  {
    name: 'Mir Fahiem',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/mir.fahiem/', type: 'instagram' }
    ]
  },
  {
    name: 'Faizaan Bhat',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/faizaanhbhat/', type: 'instagram' }
    ]
  },
  {
    name: '@akid__inher20s',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/akid__inher20s/', type: 'instagram' }
    ]
  },
  {
    name: 'Yoosh Art',
    highlight: 'Official Artwork Design',
    links: [
      { label: 'Instagram (@yoosh.art)', url: 'https://www.instagram.com/yoosh.art/', type: 'instagram' }
    ]
  },
  {
    name: 'VX Anarchy',
    highlight: 'Alternate Artwork Design & Website',
    links: [
      { label: 'Alternate Art Post', url: 'https://www.instagram.com/p/DegyI-Nzx3U/', type: 'instagram' },
      { label: 'Instagram Profile', url: 'https://www.instagram.com/designerr.jpeg', type: 'instagram' }
    ]
  }
];

const SONGPORT_URL = 'https://songport.link/t/ahmer-rishab-raino-golden-era-6xk3o0xz';
const COVER_IMAGE_URL = 'https://imgh.in/host/1knutj';
const TRACKLIST_IMAGE_URL = 'https://imgh.in/host/ysq2ub';
const ALTERNATE_IMAGE_URL = 'https://imgh.in/host/f0oqsd';
const ALTERNATE_POST_URL = 'https://www.instagram.com/p/DegyI-Nzx3U/';
const YOOSH_ART_INSTAGRAM = 'https://www.instagram.com/yoosh.art/';
const GENIUS_LYRICS_URL = 'https://genius.com/albums/Ahmer-and-rishab-raino/Golden-era';

const MUSIC_LABEL = {
  name: 'Mass Appeal India',
  role: 'Music Label',
  links: [
    { label: 'Instagram', url: 'https://www.instagram.com/massappealindia/' },
    { label: 'Facebook', url: 'https://www.facebook.com/massappealindia/' },
    { label: 'YouTube', url: 'https://www.youtube.com/massappealindia' },
    { label: 'Spotify', url: 'https://open.spotify.com/user/massappealrecs' },
    { label: 'Apple Music', url: 'https://music.apple.com/in/label/mass-appeal/1557554875' }
  ]
};

interface LightboxItem {
  src: string;
  title: string;
  desc: string;
  designerLabel?: string;
  designerName?: string;
  designerUrl?: string;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadPct, setLoadPct] = useState(0);
  const [navHidden, setNavHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [lightboxImage, setLightboxImage] = useState<LightboxItem | null>(null);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  // Intro loader counter simulation
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 3;
      if (current >= 100) {
        current = 100;
        setLoadPct(100);
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      } else {
        setLoadPct(current);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Sticky navbar hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScroll = window.pageYOffset;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 120) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="relative min-h-screen bg-[#0b0705] text-[#ecd8a5] overflow-x-hidden selection:bg-[#c87a32] selection:text-[#0b0705]">
      {/* Film grain and warm ambient lighting overlay */}
      <div className="film-grain" aria-hidden="true" />
      <div className="ambient-warmth" aria-hidden="true" />

      {/* Intro Loader */}
      {loading && (
        <div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0705] transition-opacity duration-700 ease-out"
        >
          <div className="text-center px-4">
            <span className="font-editorial text-xs uppercase tracking-[0.3em] text-[#c87a32] block mb-3">
              Official EP Launch
            </span>
            <h1 className="font-sometime text-5xl md:text-8xl tracking-tight text-[#ecd8a5] mb-6">
              GOLDEN ERA
            </h1>
            <div className="font-editorial text-sm tracking-[0.25em] text-[#a89b88]">
              {loadPct}%
            </div>
            <div className="w-32 h-[2px] bg-[#2d1c13] mx-auto mt-4 overflow-hidden rounded-full">
              <div
                className="h-full bg-[#c87a32] transition-all duration-100 ease-out"
                style={{ width: `${loadPct}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <header
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl transition-all duration-500 ${
          navHidden ? '-translate-y-28 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex items-center justify-between gap-6 px-6 py-3.5 bg-[#140c07]/85 backdrop-blur-xl border border-[#ecd8a5]/10 rounded-full shadow-2xl shadow-black/80">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="font-sometime text-xl md:text-2xl font-bold tracking-tight text-[#ecd8a5] hover:text-[#c87a32] transition-colors whitespace-nowrap shrink-0"
          >
            GOLDEN ERA
          </a>

          {/* Zone 2: Concise single-line text links */}
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-editorial text-[#a89b88]">
            <a href="#about" className="hover:text-[#ecd8a5] transition-colors whitespace-nowrap shrink-0">
              Project
            </a>
            <a href="#tracks" className="hover:text-[#ecd8a5] transition-colors whitespace-nowrap shrink-0">
              Tracklist
            </a>
            <a href="#videos" className="hover:text-[#ecd8a5] transition-colors whitespace-nowrap shrink-0">
              Videos
            </a>
            <a href="#collaborators" className="hover:text-[#ecd8a5] transition-colors whitespace-nowrap shrink-0">
              Collaborators
            </a>
            <a href="#gallery" className="hover:text-[#ecd8a5] transition-colors whitespace-nowrap shrink-0">
              Artwork
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SONGPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#ecd8a5] text-[#0b0705] hover:bg-[#c87a32] hover:text-white transition-all text-xs font-semibold tracking-wider uppercase rounded-full shadow-md whitespace-nowrap shrink-0"
            >
              <span>Listen Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#ecd8a5] hover:text-[#c87a32] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 bg-[#140c07]/95 backdrop-blur-2xl border border-[#ecd8a5]/10 rounded-2xl shadow-2xl space-y-3 font-editorial text-xs uppercase tracking-widest text-center">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#a89b88] hover:text-[#ecd8a5]"
            >
              Project
            </a>
            <a
              href="#tracks"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#a89b88] hover:text-[#ecd8a5]"
            >
              Tracklist
            </a>
            <a
              href="#videos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#a89b88] hover:text-[#ecd8a5]"
            >
              Videos
            </a>
            <a
              href="#collaborators"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#a89b88] hover:text-[#ecd8a5]"
            >
              Collaborators
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#a89b88] hover:text-[#ecd8a5]"
            >
              Artwork
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 lg:px-12 overflow-hidden"
        >
          {/* Subtle atmospheric backdrop derived from cover artwork colors */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-radial from-[#351a0e]/40 via-[#120a06]/80 to-[#0b0705] z-10" />
            <img
              src={imageErrorMap['cover_hero_bg'] ? '/images/cover_artwork.jpg' : COVER_IMAGE_URL}
              onError={() => handleImageError('cover_hero_bg')}
              alt=""
              className="w-full h-full object-cover filter blur-3xl opacity-25 scale-110"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typographic hierarchy */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] font-editorial text-[#c87a32] uppercase mb-3">
                <span>Ahmer</span>
                <span aria-hidden="true">·</span>
                <span>Rishab Raino</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#a89b88]">Mass Appeal India</span>
              </div>

              <h1 className="font-sometime text-6xl sm:text-7xl xl:text-8xl text-[#ecd8a5] tracking-tight leading-[0.95] mb-4">
                GOLDEN ERA
              </h1>

              <p className="font-editorial text-lg sm:text-xl text-[#d9bd7e] font-medium tracking-wide mb-6">
                Ahmer & Rishab Raino
              </p>

              <p className="font-sans-clean text-[#a89b88] text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                The official release of the 5-track collaborative EP by Ahmer and Rishab Raino featuring Arif Mir.
                Derived from raw lyricism, rich organic instrumentation, and distinctive visual storytelling.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={SONGPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#ecd8a5] text-[#0b0705] font-editorial font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#c87a32] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-xl shadow-black/60"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Listen Now</span>
                </a>

                <a
                  href="#tracks"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1b110b]/80 border border-[#ecd8a5]/15 text-[#ecd8a5] font-editorial font-semibold text-xs uppercase tracking-widest rounded-full hover:bg-[#2b1b11] hover:border-[#ecd8a5]/30 transition-all transform hover:-translate-y-0.5"
                >
                  <Disc className="w-4 h-4 text-[#c87a32]" />
                  <span>Explore Tracklist</span>
                </a>
              </div>

              {/* Quiet unboxed metadata */}
              <div className="flex items-center gap-3 text-xs text-[#8c7f6f] mt-10 font-editorial uppercase tracking-wider">
                <span>5 Tracks</span>
                <span aria-hidden="true">/</span>
                <span>Collaborative EP</span>
                <span aria-hidden="true">/</span>
                <span>Official Streaming Release</span>
              </div>
            </div>

            {/* Right Column: Official Cover Artwork Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-[#ecd8a5]/15 shadow-2xl shadow-black/80 bg-[#160e09] transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src={imageErrorMap['cover_main'] ? '/images/cover_artwork.jpg' : COVER_IMAGE_URL}
                  onError={() => handleImageError('cover_main')}
                  alt="Official Cover Artwork for GOLDEN ERA EP by Ahmer and Rishab Raino"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0705]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                  <div>
                    <span className="font-editorial text-[10px] text-[#c87a32] tracking-widest uppercase block font-semibold">
                      Official Artwork Design
                    </span>
                    <a
                      href={YOOSH_ART_INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-editorial text-xs text-[#ecd8a5] hover:text-[#c87a32] underline underline-offset-2 decoration-[#c87a32]/60 font-semibold"
                    >
                      Yoosh Art ↗
                    </a>
                  </div>
                  <button
                    onClick={() =>
                      setLightboxImage({
                        src: COVER_IMAGE_URL,
                        title: 'GOLDEN ERA — Cover Artwork',
                        desc: 'Official illustrated cover artwork depicting Ahmer and Rishab Raino in a warm wood-paneled setting with classic vinyl, cassettes, samovar, and the Golden Era archive.',
                        designerLabel: 'Official Artwork Design',
                        designerName: 'Yoosh Art',
                        designerUrl: YOOSH_ART_INSTAGRAM
                      })
                    }
                    className="p-2 bg-[#ecd8a5] text-[#0b0705] rounded-full hover:bg-[#c87a32] hover:text-white transition-colors"
                    aria-label="View larger cover artwork"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / PROJECT STATEMENT SECTION */}
        <section id="about" className="py-24 px-6 lg:px-12 bg-[#120a06] border-y border-[#ecd8a5]/10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 md:sticky md:top-32">
              <span className="font-editorial text-xs uppercase tracking-[0.25em] text-[#c87a32] block mb-3">
                Project Statement
              </span>
              <h2 className="font-sometime text-4xl sm:text-5xl text-[#ecd8a5] tracking-tight leading-none mb-4">
                The Sound & Vision
              </h2>
              <div className="h-0.5 w-16 bg-[#c87a32] mt-4" />
            </div>

            <div className="md:col-span-7 font-sans-clean text-[#c5b8a5] text-base sm:text-lg leading-relaxed space-y-6">
              <p>
                <strong>GOLDEN ERA</strong> marks a pivotal collaborative milestone between Srinagar hip-hop trailblazer{' '}
                <strong>Ahmer</strong> and producer/artist <strong>Rishab Raino</strong>, featuring prominent vocal
                collaborations with <strong>Arif Mir</strong>.
              </p>

              <blockquote className="border-l-2 border-[#c87a32] pl-6 py-2 my-6 font-editorial text-xl sm:text-2xl text-[#ecd8a5] italic leading-snug">
                “Five focused records bridging vintage timelessness with modern sonic weight.”
              </blockquote>

              <p className="text-[#a89b88] text-base leading-relaxed">
                Accompanied by traditional Kashmiri carpet tapestry artwork and visual releases, the EP balances
                introspective lyricism and gritty production. Record-label branding supplied by Mass Appeal India.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={SONGPORT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-editorial font-bold uppercase tracking-widest text-[#ecd8a5] hover:text-[#c87a32] transition-colors"
                >
                  <span>Stream the EP on Songport</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRACKLIST & CARPET ARTWORK SECTION */}
        <section id="tracks" className="py-24 px-6 lg:px-12 bg-[#0b0705] relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <span className="font-editorial text-xs uppercase tracking-[0.25em] text-[#c87a32] block mb-2">
                Official Tracklist
              </span>
              <h2 className="font-sometime text-4xl sm:text-6xl text-[#ecd8a5] tracking-tight">
                EP Tracklist & Tapestry
              </h2>
              <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                <p className="font-sans-clean text-sm text-[#a89b88]">
                  Five tracks written and performed by Ahmer and Rishab Raino, featuring Arif Mir on “Stove On” and “Ghum”.
                </p>
                <a
                  href={GENIUS_LYRICS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#1f130c] hover:bg-[#c87a32] text-[#ecd8a5] hover:text-white border border-[#ecd8a5]/15 rounded-full text-xs font-editorial uppercase tracking-wider font-semibold transition-colors shrink-0"
                >
                  <span>lyrics</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Official Kashmiri Carpet Tapestry Artwork */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="group relative rounded-2xl overflow-hidden border border-[#ecd8a5]/15 bg-[#170e08] shadow-2xl shadow-black/70">
                  <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden bg-black flex items-center justify-center">
                    <img
                      src={imageErrorMap['tracklist_main'] ? '/images/tracklist_artwork.jpg' : TRACKLIST_IMAGE_URL}
                      onError={() => handleImageError('tracklist_main')}
                      alt="Official Tracklist Tapestry Artwork for GOLDEN ERA"
                      className="w-full h-full object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-4 bg-[#140c07] border-t border-[#ecd8a5]/10 flex items-center justify-between">
                    <div>
                      <p className="font-editorial text-xs font-semibold text-[#ecd8a5] uppercase tracking-wider">
                        OFFICIAL TRACKLIST
                      </p>
                      <p className="font-sans-clean text-[11px] text-[#8c7f6f]">
                        Woven Kashmiri rug tracklist design
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setLightboxImage({
                          src: TRACKLIST_IMAGE_URL,
                          title: 'GOLDEN ERA — Tapestry Tracklist Artwork',
                          desc: 'Official woven carpet artwork presenting the five EP tracks: Stove On, Golden Era, Say Yes, Boss Shii, and Ghum, with Mass Appeal branding.'
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ecd8a5]/10 text-[#ecd8a5] hover:bg-[#c87a32] hover:text-white rounded-lg text-xs font-editorial transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Zoom View</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Accessible HTML Tracklist */}
              <div className="lg:col-span-7 space-y-3">
                {TRACKS.map((track) => (
                  <div
                    key={track.id}
                    onClick={() => setSelectedTrack(track)}
                    className="group flex items-center justify-between p-5 bg-[#150d08]/60 hover:bg-[#1f130c] border border-[#ecd8a5]/10 hover:border-[#c87a32]/50 rounded-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <span className="font-editorial text-sm font-bold text-[#c87a32] tabular-nums shrink-0">
                        {track.number}
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-sometime text-2xl text-[#ecd8a5] group-hover:text-white transition-colors truncate">
                            {track.title}
                          </h3>
                          {track.featured && (
                            <span className="font-editorial text-xs text-[#c87a32] uppercase tracking-wider shrink-0">
                              feat. {track.featured}
                            </span>
                          )}
                        </div>

                        <p className="font-sans-clean text-xs text-[#a89b88] truncate mt-1">
                          Artists: {track.artists.join(', ')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTrack(track);
                        }}
                        className="px-3.5 py-1.5 bg-[#ecd8a5]/10 group-hover:bg-[#c87a32] text-[#ecd8a5] group-hover:text-white text-xs font-editorial tracking-wider uppercase rounded-full transition-colors flex items-center gap-1.5"
                      >
                        <Disc className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Additional release notice */}
                <div className="p-6 bg-[#120a06] border border-[#ecd8a5]/10 rounded-xl mt-8">
                  <div className="flex items-start gap-4">
                    <Music className="w-5 h-5 text-[#c87a32] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-editorial text-xs uppercase tracking-widest text-[#ecd8a5] font-bold">
                        Stream on Official Platforms
                      </h4>
                      <p className="font-sans-clean text-xs text-[#a89b88] mt-1 leading-relaxed">
                        The entire 5-track project is available across Spotify, Apple Music, YouTube Music, and all
                        major streaming networks via Songport.
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-3">
                        <a
                          href={SONGPORT_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-editorial text-[#c87a32] hover:text-[#ecd8a5] font-semibold transition-colors"
                        >
                          <span>Open Songport release hub</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <span className="text-[#8c7f6f]" aria-hidden="true">·</span>
                        <a
                          href={GENIUS_LYRICS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-editorial text-[#ecd8a5] hover:text-[#c87a32] font-semibold transition-colors"
                        >
                          <span>lyrics on Genius</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YOUTUBE VIDEO EMBEDS SECTION */}
        <section id="videos" className="py-24 px-6 lg:px-12 bg-[#120a06] border-y border-[#ecd8a5]/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <span className="font-editorial text-xs uppercase tracking-[0.25em] text-[#c87a32] block mb-2">
                Official Visuals
              </span>
              <h2 className="font-sometime text-4xl sm:text-5xl text-[#ecd8a5] tracking-tight">
                Embedded Video Releases
              </h2>
              <p className="font-sans-clean text-sm text-[#a89b88] mt-2">
                Watch official YouTube releases directly. Native playback with 16:9 responsive display.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Video 1: Y2n7iy6vTFw */}
              <div className="bg-[#170e08] border border-[#ecd8a5]/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Y2n7iy6vTFw"
                    title="GOLDEN ERA Visual Release 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-editorial text-[11px] uppercase tracking-widest text-[#c87a32] font-semibold">
                      Official Video 01
                    </span>
                    <h3 className="font-sometime text-2xl text-[#ecd8a5] mt-1 mb-2">
                      STOVE ON
                    </h3>
                    <p className="font-sans-clean text-xs text-[#a89b88]">
                      Ahmer, Rishab Raino, Arif Mir | Dir. EDNITWORLD
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#ecd8a5]/10 flex items-center justify-between">
                    <a
                      href="https://youtu.be/Y2n7iy6vTFw?si=iarrZJEZJoacEqwQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-editorial text-xs text-[#d9bd7e] hover:text-white transition-colors"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Video 2: XFjYIXqWX-4 with start=122 */}
              <div className="bg-[#170e08] border border-[#ecd8a5]/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/XFjYIXqWX-4?si=yawRsBzb71pTfC-a&start=122"
                    title="GOLDEN ERA Visual Release 2 (Starts at 2:02)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-editorial text-[11px] uppercase tracking-widest text-[#c87a32] font-semibold">
                      Official Video 02
                    </span>
                    <h3 className="font-sometime text-2xl text-[#ecd8a5] mt-1 mb-2">
                      GHUM
                    </h3>
                    <p className="font-sans-clean text-xs text-[#a89b88]">
                      Ahmer, Rishab Raino, Arif Mir | Dir. Tabish Wani
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#ecd8a5]/10 flex items-center justify-between">
                    <a
                      href="https://youtu.be/XFjYIXqWX-4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-editorial text-xs text-[#d9bd7e] hover:text-white transition-colors"
                    >
                      <span>Watch on YouTube</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARTISTS AND COLLABORATORS SECTION */}
        <section id="collaborators" className="py-24 px-6 lg:px-12 bg-[#0b0705]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <span className="font-editorial text-xs uppercase tracking-[0.25em] text-[#c87a32] block mb-2">
                Profiles & Contributors
              </span>
              <h2 className="font-sometime text-4xl sm:text-6xl text-[#ecd8a5] tracking-tight">
                Artists & Collaborators
              </h2>
              <p className="font-sans-clean text-sm text-[#a89b88] mt-2">
                Official platforms and verified profiles for Ahmer, Rishab Raino, and collaborators.
              </p>
            </div>

            {/* Primary Artists Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {PRIMARY_ARTISTS.map((artist) => (
                <div
                  key={artist.name}
                  className="p-8 bg-[#160e09] border border-[#ecd8a5]/15 rounded-2xl shadow-xl hover:border-[#c87a32]/60 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-xs uppercase tracking-[0.2em] text-[#c87a32] font-semibold">
                      Primary Artist
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c87a32]" />
                  </div>

                  <h3 className="font-sometime text-4xl text-[#ecd8a5] mb-2">
                    {artist.name}
                  </h3>

                  <p className="font-sans-clean text-xs text-[#a89b88] mb-6">
                    Co-creator and performer of the GOLDEN ERA EP.
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#ecd8a5]/10">
                    {artist.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1f130c] hover:bg-[#c87a32] text-[#ecd8a5] hover:text-white rounded-lg text-xs font-editorial font-medium transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Collaborators & Contributors */}
            <div className="pt-8 border-t border-[#ecd8a5]/10">
              <div className="mb-8">
                <h3 className="font-sometime text-2xl sm:text-3xl text-[#ecd8a5]">
                  Collaborators & Contributors
                </h3>
                <p className="font-sans-clean text-xs text-[#a89b88] mt-1">
                  Profiles credited and associated with the release world.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {COLLABORATORS.map((collab) => (
                  <div
                    key={collab.name}
                    className="p-5 bg-[#130b07] border border-[#ecd8a5]/10 rounded-xl hover:border-[#ecd8a5]/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-sometime text-xl text-[#ecd8a5] mb-1">
                        {collab.name}
                      </h4>
                      {collab.highlight && (
                        <p className="font-sans-clean text-[11px] text-[#c87a32] mb-3 leading-snug">
                          {collab.highlight}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-3 border-t border-[#ecd8a5]/5 mt-3">
                      {collab.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-editorial text-[#d9bd7e] hover:text-white transition-colors"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="w-2.5 h-2.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Music Label Section */}
            <div className="pt-12 border-t border-[#ecd8a5]/10 mt-12">
              <div className="mb-8">
                <h3 className="font-sometime text-2xl sm:text-3xl text-[#ecd8a5]">
                  Music Label
                </h3>
                <p className="font-sans-clean text-xs text-[#a89b88] mt-1">
                  Official music label profiles and streaming platforms for Mass Appeal India.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-[#160e09] border border-[#ecd8a5]/15 rounded-2xl shadow-xl hover:border-[#c87a32]/60 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-xs uppercase tracking-[0.2em] text-[#c87a32] font-semibold">
                      Music Label
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c87a32]" />
                  </div>

                  <h4 className="font-sometime text-4xl text-[#ecd8a5] mb-2">
                    {MUSIC_LABEL.name}
                  </h4>

                  <p className="font-sans-clean text-xs text-[#a89b88] mb-6">
                    Official record label representation and global digital distribution.
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-4 border-t border-[#ecd8a5]/10">
                    {MUSIC_LABEL.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1f130c] hover:bg-[#c87a32] text-[#ecd8a5] hover:text-white rounded-lg text-xs font-editorial font-medium transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY / VISUAL WORLD SECTION */}
        <section id="gallery" className="py-24 px-6 lg:px-12 bg-[#120a06] border-y border-[#ecd8a5]/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <span className="font-editorial text-xs uppercase tracking-[0.25em] text-[#c87a32] block mb-2">
                Visual Archive
              </span>
              <h2 className="font-sometime text-4xl sm:text-5xl text-[#ecd8a5] tracking-tight">
                Artwork & Artifacts
              </h2>
              <p className="font-sans-clean text-sm text-[#a89b88] mt-2">
                Official album art and woven tapestry composition from the GOLDEN ERA release.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 1. Official Artwork Design by Yoosh Art */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#ecd8a5]/15 bg-[#170e08] shadow-2xl flex flex-col justify-between">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: COVER_IMAGE_URL,
                      title: 'GOLDEN ERA — Cover Artwork',
                      desc: 'Official illustrated cover artwork depicting Ahmer and Rishab Raino seated in mahogany quarters surrounded by classic cassettes, Eminem tape, samovar, and the Golden Era archive.',
                      designerLabel: 'Official Artwork Design',
                      designerName: 'Yoosh Art',
                      designerUrl: YOOSH_ART_INSTAGRAM
                    })
                  }
                  className="aspect-square w-full overflow-hidden cursor-pointer relative"
                >
                  <img
                    src={imageErrorMap['gallery_cover'] ? '/images/cover_artwork.jpg' : COVER_IMAGE_URL}
                    onError={() => handleImageError('gallery_cover')}
                    alt="Official EP Cover Artwork designed by Yoosh Art"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b0705]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#ecd8a5]/20 text-[10px] font-editorial uppercase tracking-wider text-[#c87a32] font-semibold">
                    Official Artwork Design
                  </div>
                </div>

                <div className="p-5 bg-[#140c07] border-t border-[#ecd8a5]/10 flex flex-col gap-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-editorial text-[10px] uppercase tracking-wider text-[#c87a32] block font-semibold">
                        Official Artwork Design
                      </span>
                      <h3 className="font-sometime text-xl text-[#ecd8a5]">EP Cover Artwork</h3>
                    </div>
                    <button
                      onClick={() =>
                        setLightboxImage({
                          src: COVER_IMAGE_URL,
                          title: 'GOLDEN ERA — Cover Artwork',
                          desc: 'Official illustrated cover artwork depicting Ahmer and Rishab Raino seated in mahogany quarters surrounded by classic cassettes, Eminem tape, samovar, and the Golden Era archive.',
                          designerLabel: 'Official Artwork Design',
                          designerName: 'Yoosh Art',
                          designerUrl: YOOSH_ART_INSTAGRAM
                        })
                      }
                      className="p-2 bg-[#ecd8a5]/10 hover:bg-[#c87a32] text-[#ecd8a5] hover:text-white rounded-full transition-colors shrink-0"
                      aria-label="View larger official cover artwork"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-[#ecd8a5]/10 text-xs">
                    <span className="text-[#8c7f6f]">Designer:</span>
                    <a
                      href={YOOSH_ART_INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-editorial font-semibold text-[#ecd8a5] hover:text-[#c87a32] underline underline-offset-4 decoration-[#c87a32]/60 hover:decoration-[#c87a32] transition-colors"
                    >
                      <span>Yoosh Art</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. Official Tracklist Tapestry Artifact */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#ecd8a5]/15 bg-[#170e08] shadow-2xl flex flex-col justify-between">
                <div
                  onClick={() =>
                    setLightboxImage({
                      src: TRACKLIST_IMAGE_URL,
                      title: 'Official Tracklist Tapestry',
                      desc: 'Hand-woven carpet artifact with the five tracks woven into the central medallion, stamped with Mass Appeal branding.',
                      designerLabel: 'Official Release Artifact'
                    })
                  }
                  className="aspect-square w-full overflow-hidden bg-black flex items-center justify-center cursor-pointer relative"
                >
                  <img
                    src={imageErrorMap['gallery_tracklist'] ? '/images/tracklist_artwork.jpg' : TRACKLIST_IMAGE_URL}
                    onError={() => handleImageError('gallery_tracklist')}
                    alt="Official Tracklist Tapestry Artwork"
                    className="w-full h-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b0705]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#ecd8a5]/20 text-[10px] font-editorial uppercase tracking-wider text-[#d9bd7e] font-semibold">
                    Official Release Artifact
                  </div>
                </div>

                <div className="p-5 bg-[#140c07] border-t border-[#ecd8a5]/10 flex flex-col gap-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-editorial text-[10px] uppercase tracking-wider text-[#a89b88] block font-semibold">
                        Official Tracklist Artwork
                      </span>
                      <h3 className="font-sometime text-xl text-[#ecd8a5]">EP Tracklist</h3>
                    </div>
                    <button
                      onClick={() =>
                        setLightboxImage({
                          src: TRACKLIST_IMAGE_URL,
                          title: 'Official Tracklist Tapestry',
                          desc: 'Hand-woven carpet artifact with the five tracks woven into the central medallion, stamped with Mass Appeal branding.',
                          designerLabel: 'Official Release Artifact'
                        })
                      }
                      className="p-2 bg-[#ecd8a5]/10 hover:bg-[#c87a32] text-[#ecd8a5] hover:text-white rounded-full transition-colors shrink-0"
                      aria-label="View larger tracklist tapestry"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-[#ecd8a5]/10 text-xs">
                    <span className="text-[#8c7f6f]">Artifact:</span>
                    <span className="font-sans-clean text-[#a89b88]">Woven Kashmiri Medallion</span>
                  </div>
                </div>
              </div>

              {/* 3. Alternate Artwork by VX Anarchy */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#ecd8a5]/15 bg-[#170e08] shadow-2xl flex flex-col justify-between">
                <a
                  href={ALTERNATE_POST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square w-full overflow-hidden bg-black flex items-center justify-center cursor-pointer relative block"
                  aria-label="View Alternate Artwork designed by VX Anarchy on Instagram"
                >
                  <img
                    src={imageErrorMap['gallery_alternate'] ? '/images/alternate_artwork.jpg' : ALTERNATE_IMAGE_URL}
                    onError={() => handleImageError('gallery_alternate')}
                    alt="Alternate Artwork · Designed by VX Anarchy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b0705]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#ecd8a5]/20 text-[10px] font-editorial uppercase tracking-wider text-[#ecd8a5] font-semibold">
                    Alternate Artwork
                  </div>
                  <div className="absolute inset-0 bg-[#0b0705]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="px-4 py-2 bg-[#ecd8a5] text-[#0b0705] font-editorial text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-xl">
                      <span>Open on Instagram</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                <div className="p-5 bg-[#140c07] border-t border-[#ecd8a5]/10 flex flex-col gap-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-editorial text-[10px] uppercase tracking-wider text-[#c87a32] block font-semibold">
                        Alternate Artwork · Designed by VX Anarchy
                      </span>
                      <h3 className="font-sometime text-xl text-[#ecd8a5]">Cassette Edition</h3>
                    </div>
                    <button
                      onClick={() =>
                        setLightboxImage({
                          src: ALTERNATE_IMAGE_URL,
                          title: 'GOLDEN ERA — Alternate Artwork',
                          desc: 'Alternate cassette tape edition artwork concept designed by VX Anarchy for Ahmer and Rishab Raino.',
                          designerLabel: 'Alternate Artwork · Designed by VX Anarchy',
                          designerName: 'VX Anarchy Post',
                          designerUrl: ALTERNATE_POST_URL
                        })
                      }
                      className="p-2 bg-[#ecd8a5]/10 hover:bg-[#c87a32] text-[#ecd8a5] hover:text-white rounded-full transition-colors shrink-0"
                      aria-label="View larger alternate artwork in lightbox"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-[#ecd8a5]/10 text-xs">
                    <span className="text-[#8c7f6f]">Designer:</span>
                    <a
                      href={ALTERNATE_POST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-editorial font-semibold text-[#ecd8a5] hover:text-[#c87a32] underline underline-offset-4 decoration-[#c87a32]/60 hover:decoration-[#c87a32] transition-colors"
                    >
                      <span>VX Anarchy</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STREAMING HUB CALLOUT */}
        <section id="streaming" className="py-24 px-6 lg:px-12 bg-[#0b0705] text-center">
          <div className="max-w-4xl mx-auto">
            <span className="font-editorial text-xs uppercase tracking-[0.3em] text-[#c87a32] block mb-3">
              Official Destination
            </span>
            <h2 className="font-sometime text-4xl sm:text-6xl text-[#ecd8a5] tracking-tight mb-6">
              Stream GOLDEN ERA
            </h2>
            <p className="font-sans-clean text-[#a89b88] text-base max-w-xl mx-auto mb-10">
              Listen to the complete 5-track release on your preferred digital music platform.
            </p>

            <a
              href={SONGPORT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#ecd8a5] text-[#0b0705] font-editorial font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#c87a32] hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-black/80"
            >
              <Disc className="w-4 h-4" />
              <span>Launch Songport Release Hub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>

      {/* TRACK DETAIL MODAL */}

      {/* TRACK DETAIL MODAL */}
      {selectedTrack && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedTrack(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#160e09] border border-[#ecd8a5]/20 rounded-2xl p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTrack(null)}
              className="absolute top-5 right-5 p-2 text-[#a89b88] hover:text-[#ecd8a5] rounded-full transition-colors"
              aria-label="Close track details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-editorial uppercase tracking-widest text-[#c87a32] mb-2">
              <span>Track {selectedTrack.number}</span>
              <span aria-hidden="true">·</span>
              <span>GOLDEN ERA</span>
            </div>

            <h3 className="font-sometime text-4xl text-[#ecd8a5] mb-2">
              {selectedTrack.title}
            </h3>

            {selectedTrack.featured && (
              <p className="font-editorial text-sm text-[#d9bd7e] uppercase tracking-wider mb-4">
                Featuring {selectedTrack.featured}
              </p>
            )}

            <div className="py-4 border-y border-[#ecd8a5]/10 my-4 space-y-2">
              <div className="text-xs text-[#a89b88]">
                <strong className="text-[#ecd8a5] font-editorial uppercase tracking-wider">
                  Credited Artists:
                </strong>{' '}
                {selectedTrack.artists.join(', ')}
              </div>
              {selectedTrack.note && (
                <p className="font-sans-clean text-xs text-[#8c7f6f] leading-relaxed">
                  {selectedTrack.note}
                </p>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={SONGPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-[#ecd8a5] text-[#0b0705] hover:bg-[#c87a32] hover:text-white rounded-full font-editorial text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <span>Listen on Songport</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={GENIUS_LYRICS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#1f130c] border border-[#ecd8a5]/20 text-[#ecd8a5] hover:bg-[#2b1b11] hover:border-[#c87a32] rounded-full font-editorial text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <span>lyrics</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center bg-[#140c07] border border-[#ecd8a5]/20 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 bg-black/60 text-[#ecd8a5] hover:text-white rounded-full transition-colors"
              aria-label="Close artwork lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-full object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 w-full text-left bg-[#140c07] border-t border-[#ecd8a5]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                {lightboxImage.designerLabel && (
                  <span className="font-editorial text-[10px] uppercase tracking-wider text-[#c87a32] block font-semibold mb-1">
                    {lightboxImage.designerLabel}
                  </span>
                )}
                <h3 className="font-sometime text-2xl text-[#ecd8a5] mb-1">
                  {lightboxImage.title}
                </h3>
                <p className="font-sans-clean text-xs text-[#a89b88] leading-relaxed max-w-xl">
                  {lightboxImage.desc}
                </p>
              </div>

              {lightboxImage.designerUrl && lightboxImage.designerName && (
                <div className="shrink-0">
                  <a
                    href={lightboxImage.designerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#ecd8a5] text-[#0b0705] hover:bg-[#c87a32] hover:text-white rounded-full font-editorial text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                  >
                    <span>{lightboxImage.designerName}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#0e0805] border-t border-[#ecd8a5]/10 pt-16 pb-8 px-6 lg:px-12 text-[#a89b88]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#ecd8a5]/10">
          <div className="md:col-span-5">
            <h2 className="font-sometime text-3xl text-[#ecd8a5] tracking-tight">
              GOLDEN ERA
            </h2>
            <p className="font-editorial text-xs tracking-wider uppercase text-[#c87a32] mt-1">
              Ahmer & Rishab Raino
            </p>
            <p className="font-sans-clean text-xs text-[#8c7f6f] mt-4 max-w-sm leading-relaxed">
              Official digital release presentation. Supplied branding: Mass Appeal India.
            </p>
          </div>

          <div className="md:col-span-4 font-editorial text-xs space-y-2.5">
            <h5 className="uppercase tracking-[0.2em] text-[#ecd8a5] font-bold mb-4">
              Navigation
            </h5>
            <div>
              <a href="#about" className="hover:text-[#ecd8a5] transition-colors">
                Project Overview
              </a>
            </div>
            <div>
              <a href="#tracks" className="hover:text-[#ecd8a5] transition-colors">
                Tracklist & Tapestry
              </a>
            </div>
            <div>
              <a href="#videos" className="hover:text-[#ecd8a5] transition-colors">
                Video Embeds
              </a>
            </div>
            <div>
              <a href="#collaborators" className="hover:text-[#ecd8a5] transition-colors">
                Collaborators
              </a>
            </div>
            <div>
              <a href="#gallery" className="hover:text-[#ecd8a5] transition-colors">
                Visual World
              </a>
            </div>
          </div>

          <div className="md:col-span-3 font-editorial text-xs space-y-2.5">
            <h5 className="uppercase tracking-[0.2em] text-[#ecd8a5] font-bold mb-4">
              Streaming & Links
            </h5>
            <div>
              <a
                href={SONGPORT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ecd8a5] transition-colors flex items-center gap-1.5"
              >
                <span>Songport Release</span>
                <ArrowUpRight className="w-3 h-3 text-[#c87a32]" />
              </a>
            </div>
            <div>
              <a
                href="https://open.spotify.com/artist/0EAfS9gQe5SCtQp1R6hJqG"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ecd8a5] transition-colors flex items-center gap-1.5"
              >
                <span>Ahmer on Spotify</span>
                <ArrowUpRight className="w-3 h-3 text-[#c87a32]" />
              </a>
            </div>
            <div>
              <a
                href="https://open.spotify.com/artist/0JS3L5h6W8ZsB8qpJVE8os"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ecd8a5] transition-colors flex items-center gap-1.5"
              >
                <span>Rishab Raino on Spotify</span>
                <ArrowUpRight className="w-3 h-3 text-[#c87a32]" />
              </a>
            </div>
            <div>
              <a
                href={GENIUS_LYRICS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ecd8a5] transition-colors flex items-center gap-1.5"
              >
                <span>lyrics on Genius</span>
                <ArrowUpRight className="w-3 h-3 text-[#c87a32]" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 17 Mandatory Site Credit */}
        <div className="pt-6">
          <p className="site-credit">
            Website created by{' '}
            <a
              href="https://www.instagram.com/designerr.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              VX Anarchy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
