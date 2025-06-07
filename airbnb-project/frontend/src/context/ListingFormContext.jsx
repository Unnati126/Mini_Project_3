import React, { createContext, useReducer, useContext } from 'react';

//context
const ListingFormContext = createContext();

// custom hook
export const useListingForm = () => {
  const context = useContext(ListingFormContext);
  if (!context) 
    throw new Error("useListingForm must be used within ListingFormProvider");
  return context;
};

// initial form state
const initialForm = {
    id: null,
    user_id: 1, 
    title: '',
    description: '',
    address: '',
    city: '',
    country: '',
    price_per_night: '',
};


// reducer function
const formReducer = (state, action) => {
    switch (action.type) {
    case "SET_FORM":
      return { ...state, ...action.payload };
    case "RESET_FORM":
      return initialForm;
    case "SET_EDIT":
      return action.payload;
    default:
      return state;
  }
};

// provider component
export function ListingFormProvider({ children }) {
  const [form, dispatchForm] = useReducer(formReducer, initialForm);

  return (
    <ListingFormContext.Provider value={{ form, dispatchForm }}>
      {children}
    </ListingFormContext.Provider>
  );
}