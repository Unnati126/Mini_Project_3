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









/*import { useEffect, useState } from "react";
import axios from "axios";
import "./Listing.css";

export default function Listing() {
  const [listings, setListings] = useState([]);
  const [form, setForm] = useState({
    id: null,
    user_id: 1, // Set to default user (you can dynamically assign this if needed)
    title: "",
    description: "",
    address: "",
    city: "",
    country: "",
    price_per_night: ""
  });

  const [editId, setEditId] = useState(null);

  const fetchListings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/properties");
      setListings(res.data);
    } catch (error) {
      console.error("Failed to fetch listings:", error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/properties/${editId}`, form);
      } else {
        await axios.post("http://localhost:5000/properties", form);
      }
      setForm({
        id: null,
        user_id: 1,
        title: "",
        description: "",
        address: "",
        city: "",
        country: "",
        price_per_night: ""
      });
      setEditId(null);
      fetchListings();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleEdit = (listing) => {
    setForm(listing);
    setEditId(listing.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/properties/${id}`);
      fetchListings();
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
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
        {listings.map((listing) => (
          <div className="listing-item" key={listing.id}>
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <p>
              {listing.address}, {listing.city}, {listing.country}
            </p>
            <p>
              <strong>Price/night:</strong> ${listing.price_per_night}
            </p>
            <button onClick={() => handleEdit(listing)}>Edit</button>
            <button onClick={() => handleDelete(listing.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}*/