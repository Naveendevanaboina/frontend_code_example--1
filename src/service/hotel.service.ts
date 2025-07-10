// src/services/hotelService.ts
import axios from 'axios';
import { Hotel } from '../type/Hotel';

const BASE_URL = 'http://localhost:8080/api/hotels';

// CREATE: Save a new hotel
export const saveHotel = async (hotel: Hotel) => {
  return axios.post(`${BASE_URL}/save`, hotel);
};

// READ: Get all hotels
export const getAllHotels = async () => {
  return axios.get<Hotel[]>(`${BASE_URL}/all`);
};

// READ: Get hotel by ID
export const getHotelById = async (hotelId: number) => {
  return axios.get<Hotel>(`${BASE_URL}/${hotelId}`);
};

// UPDATE: Update hotel by ID
export const updateHotel = async (hotelId: number, updatedHotel: Hotel) => {
  return axios.put(`${BASE_URL}/update/${hotelId}`, updatedHotel);
};

// DELETE: Delete hotel by ID
export const deleteHotel = async (hotelId: number) => {
  return axios.delete(`${BASE_URL}/delete/${hotelId}`);
};
