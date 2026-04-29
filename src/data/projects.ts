export interface Project {
  id: number;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'My Shop 3',
    description: 'A modern e-commerce platform with a clean UI, product listings, cart functionality, and seamless checkout experience.',
    liveUrl: 'https://my-shop-3-hf87.vercel.app/',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Tailwind', 'E-Commerce'],
  },
  {
    id: 2,
    title: 'My Shop 2',
    description: 'Second iteration of the shop project with enhanced product management, filters, and a polished shopping experience.',
    liveUrl: 'https://my-shop-2-kohl.vercel.app/',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'CSS', 'E-Commerce'],
  },
  {
    id: 3,
    title: 'School Jet',
    description: 'An educational platform for schools featuring student management, schedules, and an intuitive teacher dashboard.',
    liveUrl: 'https://school-jet-nine.vercel.app/',
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Education', 'Dashboard'],
  },
  {
    id: 4,
    title: 'Abit Solutions Hub',
    description: 'A professional business solutions hub showcasing services, team, and client testimonials with a corporate design.',
    liveUrl: 'https://abit-solutions-hub.vercel.app/',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Business', 'Landing Page'],
  },
  {
    id: 5,
    title: 'Company Website',
    description: 'A full-featured company website with service offerings, team profiles, contact forms, and a modern layout.',
    liveUrl: 'https://our-website-for-company.vercel.app/',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Company', 'Web Design'],
  },
];
