import axios from "../configs/axios";
import ErrorHandler from "../utils/ErrorHandler";

async function getProfile() {
  try {
    const response = await axios.get("/auth/profile", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
}

async function getUserResults({ userId }) {
  try {
    const response = await axios.post("/examTaken/getUserResults", {
      userId,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
}

async function finishExam({ answerKey, exam, userId, userTimer }) {
  try {
    await axios.post("/examTaken/createOrUpdate", {
      answerKey,
      exam,
      userId,
      userTimer,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    ErrorHandler(error);
  }
}

async function logOut(setUser) {
  try {
    const response = await axios.get("/auth/logout", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setUser(null);
  } catch (error) {
    ErrorHandler(error);
  }
}

export { getProfile, getUserResults, finishExam, logOut };
