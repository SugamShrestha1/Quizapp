import axios from 'axios';

const BASE_URL = 'https://opentdb.com';

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/api_category.php`);
  return response.data.trivia_categories;
};

export const fetchQuestions = async (categoryId, amount = 10) => {
    
    const response = await axios.get(
    `${BASE_URL}/api.php?amount=${amount}&category=${categoryId}&type=multiple`
  );
  return response.data.results;
};

