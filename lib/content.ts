export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  src: string;
  title: string;
  category: 'Hotel Bars' | 'Custom Cabinetry' | 'Retail/Displays' | 'Built-ins' | 'Architectural Millwork' | 'Installation';
  location?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface Material {
  name: string;
  description: string;
}

export const businessInfo = {
  name: 'CaribeCraft',
  tagline: 'Custom Millwork Crafted for Island Living',
  location: 'St. Thomas, USVI',
  phone: '(340) 555-0100',
  email: 'hello@caribecraft.com',
  hours: 'Monday - Friday: 8:00 AM - 5:00 PM EST',
  socialLinks: {
    instagram: 'https://instagram.com/caribecraft',
    facebook: 'https://facebook.com/caribecraft',
  },
};

export const services: Service[] = [
  {
    id: '1',
    title: 'Design Consultation',
    description: 'Custom designs tailored to your vision and space.',
    longDescription:
      'Our design team works closely with you to understand your vision, space constraints, and aesthetic preferences. We create detailed 3D renderings and specifications to ensure every project is precisely planned before construction begins. Whether you\'re building from scratch or reimagining an existing space, we bring expertise in both residential and hospitality design.',
    image: '/img/design.jpg',
  },
  {
    id: '2',
    title: 'Custom Cabinetry',
    description: 'Premium hardwood cabinets built to last.',
    longDescription:
      'From kitchen cabinets to built-in storage, we craft custom cabinetry using the finest hardwoods and hardware. Each cabinet is carefully constructed to maximize functionality while maintaining timeless elegance. Our attention to detail ensures that every drawer glides smoothly and every door closes perfectly.',
    image: '/img/cabinetry.jpg',
  },
  {
    id: '3',
    title: 'Hotel & Bar Builds',
    description: 'Sophisticated millwork for hospitality spaces.',
    longDescription:
      'We specialize in high-end bar installations, reception desks, and hospitality furniture. Our bar builds feature robust construction designed for daily commercial use, complete with integrated beverage stations, shelving, and lighting. Each project reflects the unique character of the establishment while meeting stringent durability standards.',
    image: '/img/hotel-bar.jpg',
  },
  {
    id: '4',
    title: 'Retail Displays',
    description: 'Eye-catching displays that showcase your products.',
    longDescription:
      'Custom retail solutions designed to elevate your brand and maximize product visibility. From display shelving and product stands to checkout counters, we create functional, beautiful retail environments. Our displays are engineered for durability and aesthetic impact, whether you\'re opening a boutique or refreshing an existing storefront.',
    image: '/img/retail-display.jpg',
  },
  {
    id: '5',
    title: 'Built-ins & Architectural Millwork',
    description: 'Seamless integration into your living space.',
    longDescription:
      'We design and build architectural features that become part of your home\'s structure: built-in bookcases, window seats, crown molding, and custom trim work. These elements add elegance and functionality while creating a polished, high-end appearance that increases property value.',
    image: '/img/builtins.jpg',
  },
  {
    id: '6',
    title: 'Professional Installation',
    description: 'Precise, on-time installation with minimal disruption.',
    longDescription:
      'Our experienced installation team handles every project with care and professionalism. We manage on-site logistics, coordinate with other trades, and ensure clean, efficient work. From wall prep to final finishing touches, we maintain rigorous jobsite standards and respect for your space.',
    image: '/img/installation.jpg',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    src: '/img/portfolio-1.jpg',
    title: 'Sunset Bar & Lounge',
    category: 'Hotel Bars',
    location: 'St. Thomas, USVI',
    description: 'Custom walnut and mahogany bar with integrated beverage station and shelving.',
  },
  {
    id: '2',
    src: '/img/portfolio-2.jpg',
    title: 'Caribbean Kitchen',
    category: 'Custom Cabinetry',
    location: 'St. Thomas, USVI',
    description: 'Full kitchen cabinet suite in oak with marble countertops and custom hardware.',
  },
  {
    id: '3',
    src: '/img/portfolio-3.jpg',
    title: 'Island Boutique',
    category: 'Retail/Displays',
    location: 'St. Croix, USVI',
    description: 'Teak display shelving and product stands for luxury retail environment.',
  },
  {
    id: '4',
    src: '/img/portfolio-4.jpg',
    title: 'Master Bedroom Built-ins',
    category: 'Built-ins',
    location: 'Water Island, USVI',
    description: 'Mahogany built-in cabinetry with floating shelves and accent lighting.',
  },
  {
    id: '5',
    src: '/img/portfolio-5.jpg',
    title: 'Executive Office Installation',
    category: 'Installation',
    location: 'St. Thomas, USVI',
    description: 'Complete office millwork installation with precision alignment and finishing.',
  },
  {
    id: '6',
    src: '/img/portfolio-6.jpg',
    title: 'Coastal Resort Architectural Elements',
    category: 'Architectural Millwork',
    location: 'St. John, USVI',
    description: 'Custom trim, crown molding, and architectural details throughout luxury residence.',
  },
  {
    id: '7',
    src: '/img/portfolio-7.jpg',
    title: 'Restaurant Bar Installation',
    category: 'Hotel Bars',
    location: 'Charlotte Amalie, USVI',
    description: 'Custom curved bar front in walnut with backlit shelving system.',
  },
  {
    id: '8',
    src: '/img/portfolio-8.jpg',
    title: 'Luxury Bathroom Vanities',
    category: 'Custom Cabinetry',
    location: 'St. Thomas, USVI',
    description: 'Teak vanities with integrated storage and marine-grade finish.',
  },
  {
    id: '9',
    src: '/img/portfolio-9.jpg',
    title: 'Gallery Display System',
    category: 'Retail/Displays',
    location: 'St. Croix, USVI',
    description: 'Modular art gallery display system in white oak and steel.',
  },
  {
    id: '10',
    src: '/img/portfolio-10.jpg',
    title: 'Home Library Wall',
    category: 'Built-ins',
    location: 'Water Island, USVI',
    description: 'Floor-to-ceiling mahogany bookcase with ladder and reading nook.',
  },
  {
    id: '11',
    src: '/img/portfolio-11.jpg',
    title: 'Retail Store Renovation',
    category: 'Installation',
    location: 'St. Thomas, USVI',
    description: 'Complete retail space millwork installation and finishing.',
  },
  {
    id: '12',
    src: '/img/portfolio-12.jpg',
    title: 'Luxury Penthouse Finishes',
    category: 'Architectural Millwork',
    location: 'Charlotte Amalie, USVI',
    description: 'Custom wainscoting, ceiling treatments, and decorative moldings.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'CaribeCraft transformed our vision into reality. Their attention to detail, craftsmanship, and professionalism exceeded our expectations. The bar installation is absolutely stunning and our guests comment on it constantly.',
    author: 'Michael Torres',
    role: 'Hotel Manager',
    location: 'St. Thomas, USVI',
  },
  {
    id: '2',
    quote:
      'From design through installation, CaribeCraft was a pleasure to work with. They understood the challenges of island living and delivered cabinetry that is both beautiful and built to last. Highly recommended.',
    author: 'Sarah Mitchell',
    role: 'Interior Designer',
    location: 'St. John, USVI',
  },
  {
    id: '3',
    quote:
      'We needed a custom retail display that could handle high traffic while maintaining an upscale aesthetic. CaribeCraft delivered exactly what we needed. Their installation was clean, professional, and on schedule.',
    author: 'James Patterson',
    role: 'Retail Store Owner',
    location: 'Charlotte Amalie, USVI',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Design',
    description: 'Collaborate with you to create custom designs tailored to your space and vision.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Craft your project with premium materials and meticulous attention to detail.',
  },
  {
    number: '03',
    title: 'Install',
    description: 'Professional installation with precision, care, and respect for your space.',
  },
];

export const hardwoods: Material[] = [
  {
    name: 'Caribbean Mahogany',
    description: 'Rich, warm tones with excellent durability and natural resistance to moisture.',
  },
  {
    name: 'Teak',
    description: 'Naturally weather-resistant with striking grain patterns, ideal for maritime applications.',
  },
  {
    name: 'Walnut',
    description: 'Deep, sophisticated color with smooth grain, perfect for high-end interiors.',
  },
  {
    name: 'Oak',
    description: 'Strong, versatile grain with warm tones, excellent for contemporary and traditional designs.',
  },
  {
    name: 'Ash',
    description: 'Light, fine grain with excellent workability and beautiful natural finish potential.',
  },
];

export const finishes: Material[] = [
  {
    name: 'Lacquer',
    description: 'Durable, high-gloss finish that resists moisture and provides a refined appearance.',
  },
  {
    name: 'Polyurethane',
    description: 'Water-resistant protective coating that maintains natural wood appearance while adding durability.',
  },
  {
    name: 'Marine-Grade Sealant',
    description: 'Professional-grade sealing designed to withstand humid island climates and salt air exposure.',
  },
  {
    name: 'Oil & Wax',
    description: 'Natural finish that highlights wood grain while providing moderate protection and warmth.',
  },
  {
    name: 'Custom Stain',
    description: 'Tailored color selection matched to your design specifications and existing décor.',
  },
];

export const whyCaribeCraft = [
  {
    title: 'Precision Craftsmanship',
    description: 'Every detail matters. We maintain exacting standards in design, construction, and installation.',
  },
  {
    title: 'Reliable Timelines',
    description: 'We respect your schedule and deliver projects on time without compromising quality.',
  },
  {
    title: 'Tailored Design',
    description: 'Custom solutions designed specifically for your space, needs, and aesthetic preferences.',
  },
  {
    title: 'Quality Materials',
    description: 'We use premium hardwoods and hardware from trusted suppliers, ensuring longevity and beauty.',
  },
  {
    title: 'Island Expertise',
    description: 'We understand the unique challenges of USVI climate and building conditions.',
  },
  {
    title: 'Clear Communication',
    description: 'Transparent collaboration from concept through completion keeps you informed every step.',
  },
];
