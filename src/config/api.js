// Base URL for the Laravel API
export const BASE_URL = 'https://e-learning.test/api'; // Replace with your actual API base URL

// Define all your API routes here
export const API_ROUTES = {
    LOGIN: `${BASE_URL}/v1/login`,
    USERLIST : `${BASE_URL}/users/list_user`,
    USER_REPORT : `${BASE_URL}/reports/userReport`,
};
