export interface Car {
    id: string;
    name: string;
    brand: string;
    category: 'economy' | 'luxury' | 'suv' | 'sports';
    pricePerDay: number;
    seats: number;
    doors: number;
    transmission: 'Automatic' | 'Manual';
    fuel: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
    image: string;
    available: boolean;
    rating: number;
    reviews: number;
    features: string[];
    description: string;
    year: number;
    color: string;
}

export const carsData: Car[] = [
    {
        id: '1',
        name: 'Camry',
        brand: 'Toyota',
        category: 'economy',
        pricePerDay: 150,
        seats: 5,
        doors: 4,
        transmission: 'Automatic',
        fuel: 'Petrol',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
        available: true,
        rating: 4.8,
        reviews: 124,
        features: ['Bluetooth', 'Backup Camera', 'Apple CarPlay', 'Cruise Control'],
        description: 'The perfect blend of comfort and efficiency for city driving in Dubai.',
        year: 2024,
        color: 'White',
    },
    {
        id: '2',
        name: 'G-Class',
        brand: 'Mercedes-Benz',
        category: 'luxury',
        pricePerDay: 1200,
        seats: 5,
        doors: 4,
        transmission: 'Automatic',
        fuel: 'Petrol',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
        available: true,
        rating: 5.0,
        reviews: 89,
        features: ['360° Camera', 'Massage Seats', 'Harman Kardon', 'Night Vision'],
        description: 'Iconic luxury meets off-road capability. Turn heads on every Dubai street.',
        year: 2024,
        color: 'Black',
    },
    {
        id: '3',
        name: 'Urus',
        brand: 'Lamborghini',
        category: 'suv',
        pricePerDay: 2500,
        seats: 5,
        doors: 4,
        transmission: 'Automatic',
        fuel: 'Petrol',
        image: 'https://images.unsplash.com/photo-1627454822466-53e59e783f93?w=800&q=80',
        available: true,
        rating: 5.0,
        reviews: 56,
        features: ['Sport Mode', 'Carbon Fiber Interior', 'Bang & Olufsen', 'ADAS'],
        description: 'The super-SUV that redefined what\'s possible. Pure Lamborghini DNA.',
        year: 2024,
        color: 'Yellow',
    },
    {
        id: '4',
        name: '911 Carrera',
        brand: 'Porsche',
        category: 'sports',
        pricePerDay: 1800,
        seats: 4,
        doors: 2,
        transmission: 'Automatic',
        fuel: 'Petrol',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
        available: true,
        rating: 4.9,
        reviews: 72,
        features: ['Sport Chrono', 'PASM', 'Bose Sound', 'Launch Control'],
        description: 'Experience the thrill of Stuttgart\'s finest sports car on Dubai\'s highways.',
        year: 2024,
        color: 'Guards Red',
    },
    {
        id: '5',
        name: 'Model S',
        brand: 'Tesla',
        category: 'luxury',
        pricePerDay: 950,
        seats: 5,
        doors: 4,
        transmission: 'Automatic',
        fuel: 'Electric',
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
        available: true,
        rating: 4.9,
        reviews: 103,
        features: ['Autopilot', '17" Screen', 'Over-the-Air Updates', '400+ mile range'],
        description: 'The future of driving. Zero emissions, infinite thrills.',
        year: 2024,
        color: 'Pearl White',
    },
    {
        id: '6',
        name: 'Range Rover Sport',
        brand: 'Land Rover',
        category: 'suv',
        pricePerDay: 850,
        seats: 5,
        doors: 4,
        transmission: 'Automatic',
        fuel: 'Hybrid',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
        available: false,
        rating: 4.7,
        reviews: 88,
        features: ['Terrain Response', 'Meridian Sound', 'Head-Up Display', 'Air Suspension'],
        description: 'Uncompromising luxury and capability for the UAE terrain.',
        year: 2024,
        color: 'Santorini Black',
    },
];
