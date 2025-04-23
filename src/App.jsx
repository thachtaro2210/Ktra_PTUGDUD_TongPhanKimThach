

// src/App.jsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductFilter from './components/ProductFilter';
import ProductSummary from './components/ProductSummary';
import './App.css';

function App() {
  const [products, setProducts] = useState(() => {
    // Lấy dữ liệu từ localStorage khi khởi tạo
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      return JSON.parse(savedProducts);
    } else {
      return [
        { id: 1, name: 'Áo thun nam', price: 150000, category: 'Thời trang', stock: 20 },
        { id: 2, name: 'Laptop Dell XPS', price: 25000000, category: 'Công nghệ', stock: 5 },
        { id: 3, name: 'Nồi cơm điện Sunhouse', price: 800000, category: 'Gia dụng', stock: 12 },
        { id: 4, name: 'Điện thoại iPhone 13', price: 18000000, category: 'Công nghệ', stock: 8 },
        { id: 5, name: 'Quần jeans nữ', price: 350000, category: 'Thời trang', stock: 15 },
      ];
    }
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState(products);

  // Lưu vào localStorage mỗi khi products thay đổi
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Lấy danh sách danh mục duy nhất
  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    let filteredProducts = products;
    
    // Lọc theo tên sản phẩm
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Lọc theo danh mục
    if (categoryFilter) {
      filteredProducts = filteredProducts.filter(product => 
        product.category === categoryFilter
      );
    }
    
    setDisplayedProducts(filteredProducts);
  }, [products, searchTerm, categoryFilter]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryFilter = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h2>
          <p className="text-gray-600">Quản lý danh sách sản phẩm của bạn</p>
        </div>
        
        <ProductSummary products={products} />
        <ProductForm onAddProduct={handleAddProduct} />
        <ProductFilter 
          searchTerm={searchTerm}
          onSearchChange={handleSearch}
          categoryFilter={categoryFilter}
          onCategoryChange={handleCategoryFilter}
          categories={categories}
        />
        <ProductList products={displayedProducts} onDelete={handleDeleteProduct} />
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2025 Hệ thống Quản lý Sản phẩm</p>
        </div>
      </footer>
    </div>
  );
}

export default App;