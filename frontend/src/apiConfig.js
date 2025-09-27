// API configuration for frontend/backend integration
export const API_BASE_URL =
  import.meta.env.MODE === "production" ? "/api" : "http://localhost:8000";
export const api_key = import.meta.env.VITE_API_KEY;
