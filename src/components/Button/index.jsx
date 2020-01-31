import React, { useRef, useState, useEffect }from 'react';
import styles from './style.css';



  const Button = ({contrast_color, button_hover}) => {
    function useHover() {
      const ref = useRef({});
      const [hover, setHover] = useState(false);

      const enter = () => setHover(true);
      const exit = () => setHover(false);

      useEffect(() => {
          ref.current.addEventListener('mouseenter', enter);
          ref.current.addEventListener('mouseleave', exit);

          return () => {
              ref.current.removeEventListener('mouseenter', enter);
              ref.current.removeEventListener('mouseleave', exit);
          }
      }, []);

    return [ref, hover]
  }

  const [ref, hover] = useHover();

    return(
      <button type="button" value="Add" className={styles.button} style={{background: (hover) ? contrast_color : button_hover}} ref={ref}>Search</button>
    );
};

export default Button;
