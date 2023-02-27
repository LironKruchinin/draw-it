import React from "react";
import { Link } from "react-router-dom";

export const CreateLoby: React.FC = () => {
  return (
    <section className="create_loby_container">
      <article className="player_details">
        <input type="text" placeholder="Nickname" />
      </article>
      <article className="modes"></article>
      <Link to='/draw'>Draw test</Link>

    </section>

  );
};
