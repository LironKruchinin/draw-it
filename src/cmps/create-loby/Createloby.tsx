import React from "react";
import { Link } from "react-router-dom";

export const CreateLoby: React.FC = () => {
  return (
    <section className="create_loby_container">
      <article className="player_details">
        <input type="text" placeholder="Nickname" />
        <div className="go_btn">Go!</div>
      </article>
      <article className="modes_section">
        <div className="single_mode"></div>
        <div className="single_mode"></div>
        <div className="single_mode"></div>
        <div className="single_mode"></div>
        <div className="single_mode"></div>
        <div className="single_mode"></div>
        <div className="single_mode"></div>
        <div className="single_mode"></div>
        <div className="single_mode"></div>
      </article>
      <Link to='/draw'>Draw test</Link>

    </section>

  );
};
