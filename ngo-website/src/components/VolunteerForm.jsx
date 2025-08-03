import { useState } from "react";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for signing up, " + formData.name + "!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="volunteer" className="volunteer-form">
      <h2>Volunteer With Us</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="form-textarea"
          name="message"
          placeholder="Why do you want to volunteer?"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="form-button">Submit</button>
      </form>
    </section>
  );
}
