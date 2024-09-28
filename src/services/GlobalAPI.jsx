import axios from "axios";

const api = axios.create({
  baseURL: "https://api.quran.com/api/v4",
});

export const getChaptersList = api.get("/chapters?language=ar");
export const getChapter = (id) => api.get(`/chapters/${id}?language=ar`);
export const getChapterTextById = (id) =>
  api.get(`/quran/verses/uthmani?chapter_number=${id}`);
export const getChapterInfo = (id) => api.get(`/chapters/${id}/info`);
export const getChapterAudioById = (id) =>
  api.get(`/recitations/9/by_chapter/${id}`);
