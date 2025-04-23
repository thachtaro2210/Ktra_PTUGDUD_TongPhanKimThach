import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

function Header() {
  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag size={24} />
            <h1 className="text-xl font-bold">Quản Lý Sản Phẩm</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-indigo-200 transition-colors">Trang chủ</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Sản phẩm</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Thống kê</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Liên hệ</a>
          </nav>
          <button className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;