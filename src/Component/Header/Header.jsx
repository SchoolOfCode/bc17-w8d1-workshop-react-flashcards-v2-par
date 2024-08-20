import React from "react";
import HeaderReactLogo from "../../../public/Images/Logo/logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <section className = {styles.wrapper}>
      <HeaderReactLogo />
      <h1>Flashcards</h1>
      <p>🧠Expand your reacts knowledge, one flashcard at a time 🐌</p>
    </section>
  );
}
