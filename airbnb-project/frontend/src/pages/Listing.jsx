import { useEffect, useState } from "react";
import axios from "axios";
import "./Listing.css";

export default function Listing() {
  const [listings, setListings] = useState([]);
  const [form, setForm] = useState({
    address: "",
    city: "",
    country: "",
    price_per_night: "",
  });
  const [editId, setEditId] = useState(null);

  const fetchListings = async () => {
    const res = await axios.get("http://localhost:5000/api/listings");
    setListings(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:5000/api/listings/${editId}`, form);
    } else {
      await axios.post("http://localhost:5000/api/listings", form);
    }
    setForm({ address: "", city: "", country: "", price_per_night: "" });
    setEditId(null);
    fetchListings();
  };

  const handleEdit = (listing) => {
    setForm(listing);
    setEditId(listing.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/listings/${id}`);
    fetchListings();
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return (
    <div className="listing-container">
      <h2>Listings</h2>
      <form onSubmit={handleSubmit} className="listing-form">
        <input
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <input
          placeholder="City"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
          required
        />
        <input
          placeholder="Country"
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
          required
        />
        <input
          placeholder="Price per Night"
          value={form.price_per_night}
          type="number"
          onChange={(e) => setForm({ ...form, price_per_night: e.target.value })}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      <div className="listing-list">
        {listings.map((listing) => (
          <div className="listing-item" key={listing.id}>
            <p><strong>Address:</strong> {listing.address}</p>
            <p><strong>City:</strong> {listing.city}</p>
            <p><strong>Country:</strong> {listing.country}</p>
            <p><strong>Price/night:</strong> ${listing.price_per_night}</p>
            <button onClick={() => handleEdit(listing)}>Edit</button>
            <button onClick={() => handleDelete(listing.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}










/*import { useEffect, useState } from "react";
import axios from "axios";

function Listing() {
  const [listings, setListings] = useState([]);
  const [form, setForm] = useState({
    id: null,
    user_id: 1,
    title: '',
    description: '',
    address: '',
    city: '',
    country: '',
    price_per_night: ''
  });

  const fetchListings = async () => {
    const res = await axios.get('http://localhost:5002/api/listings');
    setListings(res.data);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.id) {
      await axios.put(`http://localhost:5002/api/listings/${form.id}`, form);
    } else {
      await axios.post('http://localhost:5002/api/listings', form);
    }
    setForm({ id: null, user_id: 1, title: '', description: '', address: '', city: '', country: '', price_per_night: '' });
    fetchListings();
  };

  const handleEdit = listing => {
    setForm(listing);
  };

  const handleDelete = async id => {
    await axios.delete(`http://localhost:5002/api/listings/${id}`);
    fetchListings();
  };

  return (
    <div className="p-4 text-black bg-white min-h-screen">
      <h2 className="text-2xl mb-4 text-center font-bold">Manage Listings</h2>
      
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md max-w-xl mx-auto">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border p-2 my-2" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 my-2" />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full border p-2 my-2" />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full border p-2 my-2" />
        <input name="country" placeholder="Country" value={form.country} onChange={handleChange} className="w-full border p-2 my-2" />
        <input name="price_per_night" placeholder="Price per Night" value={form.price_per_night} onChange={handleChange} className="w-full border p-2 my-2" />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
          {form.id ? "Update Listing" : "Add Listing"}
        </button>
      </form>

      <div className="mt-6 max-w-4xl mx-auto">
        {listings.map(listing => (
          <div key={listing.id} className="border-b py-4">
            <h2 className="text-lg font-semibold">{listing.title}</h2>
            <p>{listing.description}</p>
            <p>{listing.address}, {listing.city}, {listing.country}</p>
            <p>${listing.price_per_night}/night</p>
            <button onClick={() => handleEdit(listing)} className="bg-yellow-400 text-black px-3 py-1 mr-2 rounded">Edit</button>
            <button onClick={() => handleDelete(listing.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listing;*/











/*import React from 'react';

function Listing() {
  const containerStyle = {
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    paddingTop: '60px',
    padding: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h2>Available Listings</h2>
      <ul>
        <li>Name: John Doe | Guests: 3 | Days: 5</li>
        <li>Name: Sarah Smith | Guests: 2 | Days: 3</li>
        <li>Name: Mike Johnson | Guests: 4 | Days: 7</li>
      </ul>
    </div>
  );
}

export default Listing;*/