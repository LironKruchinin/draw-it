import React from "react";
import { Link } from "react-router-dom";
import { CreateLoby } from "../cmps/create-loby/Createloby";

export const HomePage: React.FC = () => {
  return (
    <section className="home_page_container">
      <CreateLoby />
    </section>
  );
};
