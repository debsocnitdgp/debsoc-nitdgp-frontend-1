import styles from "../components/Alumni/alumni.module.scss";
import Navbar from "../components/Navbar/navbar";
import React, { useState, useEffect } from "react";
import Twenty from "../components/Alumni/2020/2020";
import Nine from "../components/Alumni/2019/2019";
import Eight from "../components/Alumni/2018/2018";
import Footer from "../components/Footer/footer";

export default function About() {
  const [isActive, setActive] = useState(false);
  const [isTrue, setTrue] = useState(false);
  const add = () => {
    setActive(true);
    setTrue(false);
  };
  const add2 = () => {
    setTrue(true);
    setActive(false);
  };
  const add3 = () => {
    setTrue(false);
    setActive(false);
  };
  useEffect(() => {
    add();
    add2();
    add3();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.about}>
        <div className={styles.col1}>
          <div className={styles.head1}>OUR ANCESTORS</div>
          <div className={styles.head2}>ALUMNI</div>
        </div>
        <div className={styles.content}>
          We are delighted to introduce our alumni, who have established themselves as successful individuals in virtually every aspect of their lives. Our alumni have raised our institution&apos;s reputation to such heights as they now work for some of the most coveted corporations in the world.
        </div>
        <div className={styles.col3}>
          <div
            className={
              isActive || isTrue ? `${styles.head2}` : `${styles.head1}`
            }
            onClick={add3}
          >
           2017 - 2021
          </div>
          <div
            className={
              isTrue && !isActive ? `${styles.head1}` : `${styles.head2}`
            }
            onClick={add2} 
          >
            2018 - 2022
          </div>
        </div>
        {!isActive && !isTrue ?  <Eight /> : <></>}
        {!isActive && isTrue ? <Nine /> : <></>}
        {isActive && !isTrue ? <Twenty />: <></>}
      </div>
      <Footer />
    </>
  );
}