import axios from "../configs/axios";
import ErrorHandler from "../utils/ErrorHandler";

export default async function getExamData({ type = "" }) {
  try {
    const response = await axios.get(
      "/exams",
      {
        type,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
}
