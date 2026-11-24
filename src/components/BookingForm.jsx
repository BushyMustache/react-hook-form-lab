import { useState } from "react";

import { TIMES } from "../data/tonight.js";
import RenderBadge from "./RenderBadge.jsx";

function BookingForm({ onBook }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [partySize, setPartySize] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const booking = {
      id: crypto.randomUUID(),
      name,
      phone,
      partySize: Number(partySize),
      time,
      notes,
    };
    onBook(booking);
    setName("");
    setPhone("");
    setPartySize("");
    setTime("");
    setNotes("");
  }

  return (
    <section className="panel">
      <div className="panel-head">
        <h2 className="panel-title">Book a table</h2>
        <RenderBadge />
      </div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="field-label" htmlFor="name">Name</label>
          <input
            id="name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="field-label" htmlFor="phone">Phone</label>
          <input
            id="phone"
            className="input"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="field-row">
          <div className="field">
            <label className="field-label" htmlFor="partySize">Party size</label>
            <input
              id="partySize"
              className="input"
              type="number"
              min="1"
              max="12"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
            />
          </div>

          <div className="field">
            <label className="field-label" htmlFor="time">Time</label>
            <select
              id="time"
              className="input"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Choose a time</option>
              {TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label className="field-label" htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            className="input"
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button className="book-button">Book the table</button>
      </form>
    </section>
  );
}

export default BookingForm;
