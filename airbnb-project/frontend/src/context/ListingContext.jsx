import React, { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";

const ListingContext = createContext();

export const useListingContext = () => {
  const context = useContext(ListingContext);
  if (!context) throw new Error("useListingContext must be used within ListingProvider");
  return context;
};

const listingReducer = (state, action) => {
  switch (action.type) {
    case "SET_LISTINGS":
      return { ...state, listings: action.payload };
    default:
      return state;
  }
};

const initialState = {
  listings: [],
};

export function ListingProvider({ children }) {
  const [state, dispatch] = useReducer(listingReducer, initialState);

  const fetchListings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/properties");
      dispatch({ type: "SET_LISTINGS", payload: res.data });
    } catch (err) {
      console.error("Failed to fetch listings:", err);
    }
  };

  const addOrUpdateListing = async (form, editId) => {
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/properties/${editId}`, form);
      } else {
        await axios.post("http://localhost:5000/properties", form);
      }
      fetchListings();
    } catch (err) {
      console.error("Failed to add/update listing:", err);
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
    <ListingContext.Provider value={{ state, dispatch, addOrUpdateListing, deleteListing }}>
      {children}
    </ListingContext.Provider>
  );
}
