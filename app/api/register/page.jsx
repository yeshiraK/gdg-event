"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year_of_study: "",
    college_name: "",
    github_link: "",
    twitter_link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
    } else {
      alert(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Year of Study:
        <input type="text" name="year_of_study" value={formData.year_of_study} onChange={handleChange} required />
      </label>
      <label>
        College Name:
        <input type="text" name="college_name" value={formData.college_name} onChange={handleChange} required />
      </label>
      <label>
        GitHub Link:
        <input type="url" name="github_link" value={formData.github_link} onChange={handleChange} required />
      </label>
      <label>
        Twitter Link:
        <input type="url" name="twitter_link" value={formData.twitter_link} onChange={handleChange} required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
