import axios from "axios";

const api = axios.create({
  baseURL: "https://api.quran.com/api/v4",
});

export const getChaptersList = api.get("/chapters?language=ar");
export const getChapter = (id) => api.get(`/chapters/${id}?language=ar`);
export const getChapterTextById = (id) =>
  api.get(`/quran/verses/uthmani?chapter_number=${id}`);
