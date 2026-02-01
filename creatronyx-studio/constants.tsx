
import React from 'react';
import { 
  Video, 
  PenTool, 
  Share2, 
  Mic2, 
  BarChart3, 
  Code2, 
  TrendingUp 
} from 'lucide-react';
import { Service, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'video-editing',
    title: 'Professional Video Editing',
    icon: 'Video',
    description: 'Cinematic storytelling and high-impact visual effects for your brand.'
  },
  {
    id: 'script-writing',
    title: 'Script Writing',
    icon: 'PenTool',
    description: 'Compelling narratives that capture attention and drive conversions.'
  },
  {
    id: 'social-media-expert',
    title: 'Social Media Expert',
    icon: 'Share2',
    description: 'Strategic growth and positioning for all major social platforms.'
  },
  {
    id: 'voiceover',
    title: 'Voiceover Artist',
    icon: 'Mic2',
    description: 'Professional voice talent to bring personality to your content.'
  },
  {
    id: 'social-management',
    title: 'Social Media Management',
    icon: 'BarChart3',
    description: 'Full-service management including posting, engagement, and analytics.'
  },
  {
    id: 'web-developer',
    title: 'Web Developer',
    icon: 'Code2',
    description: 'High-performance, conversion-focused websites built with modern tech.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: 'TrendingUp',
    description: 'Data-driven campaigns that scale your business ROI.'
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: 1,
    title: "EcoTech Brand Transformation",
    category: "Full Service",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    goal: "Rebrand a legacy solar company for a millennial audience.",
    tools: ["Adobe Premiere", "Next.js", "Facebook Ads"],
    result: "300% increase in organic lead generation within 3 months."
  },
  {
    id: 2,
    title: "Global SaaS Launch",
    category: "Video & Web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    goal: "Create a viral explainer video and a landing page for a new AI tool.",
    tools: ["After Effects", "Webflow", "Copywriting"],
    result: "50,000+ waitlist signups in the first 30 days."
  },
  {
    id: 3,
    title: "Influencer Content Machine",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    goal: "Scale a fitness influencer's TikTok and Instagram Reels presence.",
    tools: ["CapCut Pro", "Trend Analysis", "Growth Hacking"],
    result: "Grew following from 10k to 250k in 6 months."
  },
  {
    id: 4,
    title: "Luxury Real Estate Reel",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    goal: "Showcase a $10M property with cinematic flair.",
    tools: ["DaVinci Resolve", "Drone Footage", "Color Grading"],
    result: "Property sold within 14 days of video release."
  },
  {
    id: 5,
    title: "E-commerce Growth Engine",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    goal: "Optimize ad spend for a boutique jewelry brand.",
    tools: ["Google Ads", "Shopify", "Analytics"],
    result: "Reduced CAC by 45% while maintaining revenue."
  },
  {
    id: 6,
    title: "Corporate Identity Suite",
    category: "Design & Web",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    goal: "Establish a cohesive digital identity for a law firm.",
    tools: ["Figma", "React", "Illustrator"],
    result: "Client reported a 20% increase in high-ticket consultations."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, InnovateX",
    content: "Creatronyx Studio delivered beyond my expectations. Their Top Rated status on Upwork is well-deserved. Highly professional!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Mark Tuan",
    role: "Marketing Director",
    content: "The video editing quality is industry-leading. Our campaign engagement tripled after we started working with them.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=mark"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder, Bloom Digital",
    content: "Communication was seamless, and the results were instant. Truly a premium agency experience.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const CONTACT_INFO = {
  whatsapp: "01304921238",
  emailPrimary: "fsharia29@gmail.com",
  emailSecondary: "fazlyrabby3dart@gmail.com",
  socials: {
    facebook: "https://www.facebook.com/Shariafahim12",
    instagram: "https://www.instagram.com/shariafahim.2/?hl=en",
    tiktok: "https://tiktok.com/@shariafahim.1"
  }
};
