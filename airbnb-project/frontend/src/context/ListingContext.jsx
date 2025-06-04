import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const ListingContext = createContext();

const initialState = {
  listings: [],
  form: {
    id: null,
    user_id: 1,
    title: "",
    description: "",
    address: "",
    city: "",
    country: "",
    price_per_night: "",
  },
  editId: null,
};

function listingReducer(state, action) {
  switch (action.type) {
    case "SET_LISTINGS":
      return { ...state, listings: action.payload };
    case "SET_FORM":
      return { ...state, form: { ...state.form, ...action.payload } };
    case "RESET_FORM":
      return { ...state, form: initialState.form, editId: null };
    case "SET_EDIT":
      return {
        ...state,
        form: action.payload,
        editId: action.payload.id,
      };
    default:
      return state;
  }
}

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

  const addOrUpdateListing = async () => {
    try {
      if (state.editId) {
        await axios.put(
          `http://localhost:5000/properties/${state.editId}`,
          state.form
        );
      } else {
        await axios.post("http://localhost:5000/properties", state.form);
      }
      dispatch({ type: "RESET_FORM" });
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
      console.error("Failed to delete listing:", err);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <ListingContext.Provider
      value={{ state, dispatch, addOrUpdateListing, deleteListing }}
    >
      {children}
    </ListingContext.Provider>
  );
}