import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const UserSignUp = async (data) => {
  try {
    const response = await API.post("/user/signup", data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    console.error("Error during sign up:", error);
    throw error;
  }
};
export const UserSignIn = async (data) => API.post("/user/signin", data);

export const getDashboardDetails = async (token) =>
  API.get("/user/dashboard", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getWorkouts = async (token, date) =>
  await API.get("/user/workout", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addWorkout = async (token, data) =>
  await API.post("/user/addworkout", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
