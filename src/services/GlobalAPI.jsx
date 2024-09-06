import axios from "axios";

const api = axios.create({
  baseURL: "https://api.quran.com/api/v4",
});

export const getChaptersList = api.get("/chapters?language=ar");
