import React from 'react';
import { Product, NavItem } from './types';

export const Logo = ({ className }: { className?: string }) => (
    <div className={`flex items-center gap-1 ${className}`}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 14.24V19.93C16.95 19.44 20 16.08 20 12H13V14.24ZM11 14.24V19.93C7.05 19.44 4 16.08 4 12H11V14.24ZM11 4.07V9.76H4C4.56 6.42 7.58 4.07 11 4.07ZM13 4.07C16.42 4.07 19.44 6.42 20 9.76H13V4.07Z" fill="currentColor"/>
        </svg>
        <div className="text-white text-center">
            <span className="font-bold text-lg tracking-tighter leading-tight">EDET</span>
            <p className="text-xs tracking-tighter leading-tight -mt-1">MAREME</p>
        </div>
    </div>
);


export const MenuIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

export const PhoneIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const ShopIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

export const UserIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const SearchIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const CartIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'AIRCULES',
        imageUrl: 'https://picsum.photos/seed/aircules/400/400',
        description: 'A powerful performance enhancing syrup designed to boost stamina and vitality. Made with a blend of natural herbs, AIRCULES helps you go the distance when it matters most. Experience renewed energy and confidence.'
    },
    {
        id: 2,
        name: 'SPB Honey Syrup',
        imageUrl: 'https://surukang.com/wp-content/uploads/2023/07/SPB-600x600.jpeg',
        description: `Unlock the power of nature with SPB Honey Syrup, a potent and traditionally formulated natural supplement designed to support men’s hormone health, stamina, and overall well-being. This powerful syrup is crafted from a synergistic blend of 100% natural ingredients known for their long-standing benefits in traditional medicine.

Powerful Natural Ingredients (Composition)
Pure honey (50%)
Ginseng (15%)
Lepidium meyenii (13%)
Bitter leaf extract (12%)
Garcinia kola (10%)
Each ingredient is carefully selected to support healthy testosterone levels, promote natural energy production, and improve sexual performance while enhancing overall male health.

Whether you’re looking to combat fatigue, improve mood, support immune function, or enhance performance in the bedroom, SPB offers a holistic solution. Its unique blend works to balance hormones naturally, improving libido, strength, and vitality over time—without synthetic additives or harmful side effects.

✅ Key Benefits:
Supports healthy testosterone & hormone regulation
Boosts sexual stamina and performance
Enhances energy, focus, and endurance
Promotes long-term male vitality and wellness
Made with pure, herbal ingredients and traditionally trusted`
    },
    {
        id: 3,
        name: 'Tulip Vibrator',
        imageUrl: 'https://picsum.photos/seed/tulip/400/400',
        description: 'Discover new heights of pleasure with the Tulip Vibrator. Ergonomically designed for comfort and powerful enough for intense sensations, its elegant shape and smooth silicone finish make it a luxurious addition to your collection.'
    },
    {
        id: 4,
        name: 'Organic Honey',
        imageUrl: 'https://picsum.photos/seed/honey/400/400',
        description: 'Sourced from the finest apiaries, our Organic Honey is a natural sweetener and a potent aphrodisiac. Rich in antioxidants and nutrients, it provides a healthy energy boost and adds a touch of sweetness to your intimate moments.'
    }
];

export const NAV_ITEMS: NavItem[] = [
    { name: 'Shop', icon: ShopIcon },
    { name: 'My Account', icon: UserIcon },
    { name: 'Search', icon: SearchIcon },
    { name: 'Cart', icon: CartIcon },
];