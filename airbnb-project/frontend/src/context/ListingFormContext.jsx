import React, { createContext, useReducer, useContext } from 'react';

const ListingFormContext = createContext();

export const useListingForm = () => {
  const context = useContext(ListingFormContext);
  if (!context) throw new Error("useListingForm must be used within ListingFormProvider");
  return context;
};

const initialForm = {
  id: null,
  user_id: 1,
  title: '',
  address: '',
  city: '',
  country: '',
  price_per_night: '',
};

const initialState = {
  form: initialForm,
  editId: null,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FORM":
      return { ...state, form: { ...state.form, ...action.payload } };
    case "RESET_FORM":
      return { form: initialForm, editId: null };
    case "SET_EDIT":
      return { form: action.payload, editId: action.payload?.id || null };
    default:
      return state;
  }
};

export function ListingFormProvider({ children }) {
  const [state, dispatchForm] = useReducer(formReducer, initialState);

  return (
    <ListingFormContext.Provider value={{ form: state.form, editId: state.editId, dispatchForm }}>
      {children}
    </ListingFormContext.Provider>
  );
}