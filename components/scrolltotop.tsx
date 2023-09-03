import { useEffect, useState } from 'react';
import styles from "./scroll.module.css";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.scroll_box}>
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showButton ? "show" : ""}`}
      >
        Scroll 🚀
      </button>
    </div>
  );
};

export default ScrollToTop;
