import React from "react";

export const CreateLoby: React.FC = () => {
  return (
    <section className="create_loby_container">
      <article className="player_details">
        <input type="text" placeholder="Nickname" />
      </article>
      <article className="modes"></article>
    </section>
  );
};
