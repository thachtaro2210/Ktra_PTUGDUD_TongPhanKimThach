import React from 'react';
import { Trash2, Edit } from 'lucide-react';

function ProductItem({ product, onDelete }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-4">{product.name}</td>
      <td className="py-3 px-4">{product.price.toLocaleString('vi-VN')} VNĐ</td>
      <td className="py-3 px-4">
        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {product.category}
        </span>
      </td>
      <td className="py-3 px-4">{product.stock}</td>
      <td className="py-3 px-4">
        <div className="flex space-x-2">
          <button 
            className="text-gray-500 hover:text-indigo-600 transition-colors"
            title="Chỉnh sửa"
          >
            <Edit size={18} />
          </button>
          <button 
            className="text-gray-500 hover:text-red-600 transition-colors"
            onClick={() => onDelete(product.id)}
            title="Xóa"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default ProductItem;