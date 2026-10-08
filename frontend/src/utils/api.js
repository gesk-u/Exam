import { API_URL } from "../config";

const request = async (url, method = "GET", body) => {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
  const data = res.status === 204 ? null : await res.json();
  if (!res.ok) throw new Error(data?.error || data?.message || `Request failed (${res.status})`);
  return data;
};

export const getAllWorkouts = () => request(API_URL);
export const getWorkoutById = (id) => request(`${API_URL}/${id}`);
export const createWorkout = (item) => request(API_URL, "POST", item);
export const updateWorkout = (id, item) => request(`${API_URL}/${id}`, "PUT", item);
export const deleteWorkout = (id) => request(`${API_URL}/${id}`, "DELETE");