import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

function ProductForm({ onAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: ''
  });

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.stock) {
      alert('Vui lòng điền đầy đủ thông tin sản phẩm!');
      return;
    }

    const productToAdd = {
      id: Date.now(),
      name: newProduct.name,
      price: Number(newProduct.price),
      category: newProduct.category,
      stock: Number(newProduct.stock)
    };

    onAddProduct(productToAdd);
    
    // Reset form
    setNewProduct({
      name: '',
      price: '',
      category: '',
      stock: ''
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
      <div 
        className="flex items-center justify-between bg-indigo-600 text-white px-6 py-3 cursor-pointer"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        <h2 className="text-lg font-semibold">Thêm sản phẩm mới</h2>
        <PlusCircle size={20} className={`transform transition-transform ${isFormOpen ? 'rotate-45' : ''}`} />
      </div>
      
      {isFormOpen && (
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Tên sản phẩm:</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  value={newProduct.name} 
                  onChange={handleInputChange} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Giá:</label>
                <input 
                  type="number" 
                  id="price"
                  name="price" 
                  value={newProduct.price} 
                  onChange={handleInputChange} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Danh mục:</label>
                <input 
                  type="text" 
                  id="category"
                  name="category" 
                  value={newProduct.category} 
                  onChange={handleInputChange} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">Tồn kho:</label>
                <input 
                  type="number" 
                  id="stock"
                  name="stock" 
                  value={newProduct.stock} 
                  onChange={handleInputChange} 
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Thêm sản phẩm
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductForm;