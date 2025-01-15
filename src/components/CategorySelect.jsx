import React, { useEffect, useState } from 'react';
import { fetchCategories, fetchQuestions } from '../api/Quizapi';

const CategorySelect = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
      setLoading(false);
    };
    getCategories();
  }, []);

  const handleCategoryClick = async (categoryId, categoryName) => {
    const questions = await fetchQuestions(categoryId);
    onCategorySelect({ id: categoryId, name: categoryName }, questions);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <p className="text-2xl font-semibold animate-pulse">Loading categories...</p>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Select a <span className="text-yellow-300">Category</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id, category.name)}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium text-lg rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-2xl"
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
