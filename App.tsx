
import React, { useState } from 'react';
import type { Product, NavItem } from './types';
import { PRODUCTS, NAV_ITEMS, MenuIcon, PhoneIcon, Logo } from './constants';

const Header = () => (
    <header className="bg-black p-4 flex justify-between items-center sticky top-0 z-20">
        <button className="text-white">
            <MenuIcon className="h-6 w-6" />
        </button>
        <Logo />
        <button className="text-white">
            <PhoneIcon className="h-6 w-6" />
        </button>
    </header>
);

const Banner = () => (
    <div className="relative h-64 bg-gray-800 text-white flex flex-col items-center justify-center p-4 text-center">
        <img src="https://picsum.photos/seed/naturebanner/800/400" alt="Promotional banner" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10">
            <p className="text-sm font-bold text-green-400">NO MORE 40 SECONDS</p>
            <h1 className="text-3xl sm:text-4xl font-extrabold my-2 leading-tight">PERFORMANCE <br/> ENHANCER SYRUP</h1>
            <button className="bg-white text-green-600 font-bold py-2 px-6 rounded-lg text-sm shadow-lg mt-3">ORDER YOURS NOW</button>
            <p className="text-xs mt-1">T&C Apply</p>
        </div>
    </div>
);

interface ProductCardProps {
    product: Product;
    onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => (
    <button onClick={() => onProductClick(product)} className="text-center group w-full focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg">
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <h3 className="mt-2 font-semibold text-gray-800">{product.name}</h3>
    </button>
);

interface ProductGridProps {
    onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => (
    <main className="bg-white py-8 px-4">
        <div className="text-center mb-8">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-16 rounded-md text-lg transition-colors">
                PRODUCTS
            </button>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4">
            {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
            ))}
        </div>
    </main>
);


interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => (
    <div className="bg-white animate-fade-in">
        <div className="p-4 border-b">
            <button onClick={onBack} className="flex items-center gap-2 text-gray-600 hover:text-black font-semibold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Back to Products</span>
            </button>
        </div>
        <div className="p-4 sm:p-6 md:grid md:grid-cols-2 md:gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center shadow-lg">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 md:mt-0">
                <h1 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
                <p className="mt-4 text-gray-700 text-base leading-relaxed whitespace-pre-wrap">{product.description}</p>
                <div className="mt-8">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-md text-lg transition-colors shadow-md hover:shadow-lg">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
);

interface BottomNavProps {
    activeItem: string;
    setActiveItem: (name: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeItem, setActiveItem }) => (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-start p-2 z-20">
        {NAV_ITEMS.map((item) => {
            const isActive = item.name === activeItem;
            return (
                <button
                    key={item.name}
                    onClick={() => setActiveItem(item.name)}
                    className={`flex flex-col items-center w-20 transition-colors duration-200 ${isActive ? 'text-gray-900' : 'text-gray-500'}`}
                >
                    <div className="relative w-full flex flex-col items-center">
                        <item.icon className={`h-6 w-6 mb-1 ${isActive ? 'text-pink-500' : ''}`} />
                        <span className="text-xs font-medium">{item.name}</span>
                        {isActive && <div className="absolute -bottom-2 w-full h-1 bg-pink-500 rounded-full"></div>}
                    </div>
                </button>
            );
        })}
    </footer>
);

function App() {
    const [activeItem, setActiveItem] = useState('Shop');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductSelect = (product: Product) => {
        window.scrollTo(0, 0);
        setSelectedProduct(product);
    };

    const handleBackToList = () => {
        setSelectedProduct(null);
    };
    
    return (
        <div className="min-h-screen font-sans bg-white">
            <Header />
            <div className="pb-24">
                {selectedProduct ? (
                    <ProductDetail product={selectedProduct} onBack={handleBackToList} />
                ) : (
                    <>
                        <Banner />
                        <ProductGrid onProductClick={handleProductSelect} />
                    </>
                )}
            </div>
            {!selectedProduct && <BottomNav activeItem={activeItem} setActiveItem={setActiveItem} />}
        </div>
    );
}

export default App;