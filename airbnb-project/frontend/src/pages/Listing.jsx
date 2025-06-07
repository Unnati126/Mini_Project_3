import "./Listing.css";
import { useListingContext } from "../context/ListingContext";
import { useListingForm } from "../context/ListingFormContext";

export default function Listing() {
  const { state, addOrUpdateListing, deleteListing } = useListingContext();
  const { form, editId, dispatchForm } = useListingForm();

  const handleChange = (e) => {
    dispatchForm({ type: "SET_FORM", payload: { [e.target.name]: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateListing(form, editId);
    dispatchForm({ type: "RESET_FORM" });
  };

  const handleEdit = (listing) => {
    dispatchForm({ type: "SET_EDIT", payload: listing });
  };

  return (
    <div className="listing-container">
      <h2>Listings</h2>
      <form onSubmit={handleSubmit} className="listing-form">
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />
        <input
          name="country"
          placeholder="Country"
          value={form.country}
          onChange={handleChange}
          required
        />
        <input
          name="price_per_night"
          placeholder="Price per Night"
          value={form.price_per_night}
          type="number"
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"} Listing</button>
      </form>

      <div className="listing-list">
        {state.listings.map((listing) => (
          <div className="listing-item" key={listing.id}>
            <h3>{listing.title}</h3>
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
