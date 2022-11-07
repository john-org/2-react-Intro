import React from "react";

export function Card(props) {
  return (
    <li className="contact-card">
      <h2>{props.name}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{props.job}</dd>
        <dt>Email</dt>
        <dd>{props.email}</dd>
      </dl>
    </li>
  );
}

export function ContactCard() {
  return (
    <div className="contact-card" style={{ maxWidth: "420px" }}>
      <ul>
        <Card
          name="Sunita Kumar"
          job="Electrical Engineer"
          email="sunita.kumar@acme.co"
        />
        <Card
          name="Henderson G. Sterling II"
          job="Receptionist"
          email="henderson-the-second@acme.co"
        />
        <Card
          name="Aoi Kobayashi"
          job="President"
          email="kobayashi.aoi@acme.co"
        />
      </ul>
    </div>
  );
}
