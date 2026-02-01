
export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  goal: string;
  tools: string[];
  result: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
