import React, { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";

// Context
const ListingContext = createContext();

// Custom hook
export const useListings = () => {
  const context = useContext(ListingContext);
  if (!context) throw new Error("useListings must be used within ListingProvider");
  return context;
};

// Reducer
const listingReducer = (state, action) => {
  switch (action.type) {
    case "SET_LISTINGS":
      return action.payload;
    default:
      return state;
  }
};

// Provider
export function ListingProvider({ children }) {
  const [listings, dispatch] = useReducer(listingReducer, []);

  const fetchListings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/properties");
      dispatch({ type: "SET_LISTINGS", payload: res.data });
    } catch (err) {
      console.error("Failed to fetch listings:", err);
    }
  };

  const addListing = async (listingData) => {
    try {
      await axios.post("http://localhost:5000/properties", listingData);
      fetchListings();
    } catch (err) {
      console.error("Add failed:", err);
    }
  };

  const updateListing = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:5000/properties/${id}`, updatedData);
      fetchListings();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const deleteListing = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/properties/${id}`);
      fetchListings();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <ListingContext.Provider value={{ listings, addListing, updateListing, deleteListing }}>
      {children}
    </ListingContext.Provider>
  );
}