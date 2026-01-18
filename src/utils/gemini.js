import { GoogleGenAI } from '@google/genai';
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });