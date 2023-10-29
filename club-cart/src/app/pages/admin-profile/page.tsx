"use client"

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function AdminProfile() {
    return <main className={styles.main}>
        <div className={styles.nav}>
            <Link href="/pages/shop" style={{ textDecoration: "none", color: "#044e8b" }}>
                <div className={styles.navLogo}>CLUBCART</div>
            </Link>
            <Link href="/pages/shop" className={styles.link} style={{ marginLeft: "auto" }}>
                <button className={styles.navButton}>
                    <img src="/home-icon.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto" }} />
                    Shop
                </button>
            </Link>
            <Link href="/pages/cart" className={styles.link} style={{ marginLeft: "1rem" }}>
                <button className={styles.navButton}>
                    <img src="/shopping-cart.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto", transform: "translateX(-2px)" }} />
                    cart
                </button>
            </Link>

            <Link href="/pages/user-profile" className={styles.link} style={{ marginLeft: "1rem" }}>
                <button className={styles.navButton}>
                    <img src="/default-avatar.png" width={35} height={35} style={{ marginLeft: "auto", marginRight: "auto" }} />
                    profile
                </button>
            </Link>
        </div>

        <div className={styles.contentContainer}>
            <div className={styles.profileContainer}>
                <div className={styles.left}>
                    <img src="/default-avatar.png" width={400} height={400} style={{ marginLeft: "0", marginRight: "auto" }} />
                </div>
                <div className={styles.right}>
                    <div className={styles.nameContainer}>
                        <div className={styles.bigName}>
                            Mrs. Jane Doe
                        </div>
                        <div className={styles.schoolName}>
                            North Allgheny Senior High School
                        </div>
                    </div>
                    <div className={styles.contactInfoContainer}>
                        <div className={styles.contactInfo}>
                            Email: jdoe@northallgheny.org
                        </div>
                        <div className={styles.contactInfo}>
                            Phone: (412) 978-6672
                        </div>
                    </div>
                    <div className={styles.roleText}>Role(s): Sponsor</div>
                </div>
            </div>

            {/* most of this should auto fill with info from google/the school */}
            <div className={styles.fieldChangeContainer}>
                <div className={styles.fieldChangeTitle}>School Information</div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoRow}>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.firstHalfDescription}>State</div>
                            <div className={styles.lastHalfDescription}>County</div>
                        </div>
                        <div className={styles.splitInputContainer}>
                            <input className={styles.splitInput} />
                            <input className={styles.splitInput} />
                        </div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.description}>School</div>
                        </div>
                        <input className={styles.infoInput} />
                    </div>
                </div>
            </div>


            <div className={styles.fieldChangeContainer}>
                <div className={styles.fieldChangeTitle}>Sponsor Information</div>
                <div className={styles.infoContainer}>

                    <div className={styles.infoRow}>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.description}>Prefix</div>
                        </div>
                        <input className={styles.infoInput} />
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.description}>First Name</div>
                        </div>
                        <input className={styles.infoInput} />
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.description}>Last Name</div>
                        </div>
                        <input className={styles.infoInput} />
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.description}>Email</div>
                        </div>
                        <input className={styles.infoInput} />
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.descriptionContainer}>
                            <div className={styles.description}>Phone Number</div>
                        </div>
                        <input className={styles.infoInput} />
                    </div>
                </div>
            </div>

            {/* <div className={styles.fieldChangeContainer}>
                <div className={styles.fieldChangeTitle}>Clubs</div>
                <div className={styles.infoContainer}>
                </div>
            </div> */}
            {/* idk if we want to make it so only one person per club and you can transfer ownership, that's prob too complicated for now */}

            <button className={styles.updateButton}>Update Changes</button>

        </div>
    </main>;
}