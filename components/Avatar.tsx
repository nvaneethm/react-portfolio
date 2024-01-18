// components/Avatar.tsx
import React, { useState, useEffect } from "react";
import styles from "../styles/Avatar.module.css"; // Make sure the path to your CSS module is correct

const Avatar = () => {
  const [avatarSize, setAvatarSize] = useState(80); // Initial size
  const [topPosition, setTopPosition] = useState(250);

  useEffect(() => {
    const handleScroll = () => {
      const newSize = Math.max(50, 80 - window.scrollY / 10); // Adjust size based on scroll
      const newTop = Math.max(67, 250 - window.scrollY * 3);
      setAvatarSize(newSize);
      setTopPosition(newTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={styles.avatar}
      style={{ width: avatarSize, height: avatarSize, top: topPosition }}
    >
      N
    </div>
  );
};

export default Avatar;
