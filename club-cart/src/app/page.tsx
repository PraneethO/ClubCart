"use client";

import React from "react";
import styles from "./page.module.css";
import { useState } from "react";
import Typewriter from "typewriter-effect";

import Link from "next/link";

export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    setError("Test");
  };

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div>CLUBCART</div>

        <Link href="/pages/sign-up" className={styles.link}>
          <button className={styles.navButton}>Join Us</button>
        </Link>

      </nav>
      <div className={styles.firstContainer}>
        <div className={styles.loginForm}>
          <div className={styles.inputContainer} style={{ marginTop: "1rem" }}>
            <div className={styles.inputDesc}>Username or email</div>
            <input
              className={styles.inputField}
              placeholder="Enter your username or email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ marginBottom: "0.5rem" }}
            ></input>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.inputDesc} style={{ marginTop: "0.25rem" }}>
              Password
            </div>
            <input
              className={styles.inputField}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}

              type={showPassword ? "text" : "password"}
            />
            <label className={styles.showPasswordText}>
              
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                style = {{marginTop: "0.5rem"}}
              />
              
              <span className="checkmark"></span>
              Show Password
            </label>
            
          </div>
          <button className={styles.inputButton} onClick={handleSubmit}>
            Login
          </button>
          <a href="/pages/sign-up" className={styles.inputExtra}>
            Don&rsquo;t have an account? Sign Up
          </a>
          {error ? <div className={styles.errorContainer}>ERROR</div> : ""}
        </div>
        <div className={styles.rightText}>
          <Typewriter
            options={{
              strings: ["Your one-stop <br/> shop for all things <br/> clubs."],
              autoStart: true,
              delay: 40,
              loop: true,
            }}
          />
        </div>
      </div>
    </main>
  );
}

{/* Your one-stop <br/> shop for all things <br/> clubs. */ }