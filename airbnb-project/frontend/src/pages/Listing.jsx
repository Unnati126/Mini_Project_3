import "./Listing.css";
import { useListings } from "../context/ListingContext";

export default function Listing() {
  const { state, dispatch, addOrUpdateListing, deleteListing } = useListings();

  const handleChange = (e) => {
    dispatch({ type: "SET_FORM", payload: { [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateListing();
  };

  const handleEdit = (listing) => {
    dispatch({ type: "SET_EDIT", payload: listing });
  };

  return (
    <div className="listing-container">
      <h2>Listings</h2>
      <form onSubmit={handleSubmit} className="listing-form">
        <input
          name="title"
          placeholder="Title"
          value={state.form.title}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          placeholder="Address"
          value={state.form.address}
          onChange={handleChange}
          required
        />
        <input
          name="city"
          placeholder="City"
          value={state.form.city}
          onChange={handleChange}
          required
        />
        <input
          name="country"
          placeholder="Country"
          value={state.form.country}
          onChange={handleChange}
          required
        />
        <input
          name="price_per_night"
          placeholder="Price per Night"
          value={state.form.price_per_night}
          type="number"
          onChange={handleChange}
          required
        />
        <button type="submit">{state.editId ? "Update" : "Add"} Listing</button>
      </form>

      <div className="listing-list">
        {state.listings.map((listing) => (
          <div className="listing-item" key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>
              {listing.address}, {listing.city}, {listing.country}
            </p>
            <p><strong>Price/night:</strong> ${listing.price_per_night}</p>
            <button onClick={() => handleEdit(listing)}>Edit</button>
            <button onClick={() => deleteListing(listing.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}