import React from 'react';

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

export interface NavItem {
    name: string;
    // FIX: The type React.ComponentType was used without importing React.
    icon: React.ComponentType<{ className?: string }>;
}