import { getChapterTextById, getChapter } from "./GlobalAPI";

export const fetchChapterText = async (id) => {
  try {
    const res = await getChapterTextById(id);
    return res.data.verses;
  } catch (error) {
    console.error(error);
  }
};

export const fetchChapter = async (id) => {
  try {
    const res = await getChapter(id);
    return res.data.chapter;
  } catch (error) {
    console.error(error);
  }
};
