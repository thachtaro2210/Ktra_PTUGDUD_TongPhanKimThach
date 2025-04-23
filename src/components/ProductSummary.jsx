import React from 'react';
import { Package, DollarSign } from 'lucide-react';

function ProductSummary({ products }) {
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  const totalValue = products.reduce((sum, product) => sum + (product.price * product.stock), 0);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-full">
          <Package size={24} className="text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Tổng sản phẩm</p>
          <p className="text-xl font-semibold">{totalProducts}</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
        <div className="bg-green-100 p-3 rounded-full">
          <Package size={24} className="text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Tổng tồn kho</p>
          <p className="text-xl font-semibold">{totalStock}</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
        <div className="bg-purple-100 p-3 rounded-full">
          <DollarSign size={24} className="text-purple-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Giá trị kho</p>
          <p className="text-xl font-semibold">{totalValue.toLocaleString('vi-VN')} VNĐ</p>
        </div>
      </div>
    </div>
  );
}

export default ProductSummary;