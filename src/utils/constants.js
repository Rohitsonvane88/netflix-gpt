export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_AVTAR = "https://i.pinimg.com/736x/55/1e/94/551e94ae8845df9d455f221c07421dcd.jpg"
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmZkYTg1OTk3ZGZkYjQ4OTllZmMyZmQ3ZTllYzJkOCIsIm5iZiI6MTc2ODYzMzQxOS41OTIsInN1YiI6IjY5NmIzNDRiYzZjNmNkMmYwOGRjYTlhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c4j19X_ExlvCyUEA3XkfiZ6WvxKpuXtWJc_7NbLQ7M8'
    }
};
export const IMAGE_CDN = "https://image.tmdb.org/t/p/w200"
export const BACKGROUND_IMAGE = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
export const SUPPORTED_LANGUAGES = [
    {
        key: "en",
        text: "English",
    },
    {
        key: "hi",
        text: "Hindi",
    },
    {
        key: "es",
        text: "Spanish",
    },
]
export const AI_INSTRUCTION = `
            You are a movie recommendation engine.

            TASK:
            Based on the user's query, suggest 10 relevant movies.

            USER QUERY:
            "userQuery"

            OUTPUT RULES (VERY IMPORTANT):
            - Respond ONLY in valid JSON
            - Do NOT include explanations or markdown
            - Do NOT include extra text outside JSON
            - Follow this exact structure:

            {
            "query": "user search query",
            "movies": [
                {
                "title": "Movie name",
                "reason": "Why this movie matches the query"
                }
            ]
            }
        `