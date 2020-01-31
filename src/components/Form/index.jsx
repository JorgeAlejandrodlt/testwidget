import React, {useRef, useState, useEffect, Fragment} from 'react';
import Activity from '../Filters/Activity';
import Traveler from '../Filters/Traveler'
import Total from '../Total';
import Button from '../Button';
import styles from './style.css';

const Form = ({primary_color, contrast_color, hover_color, button_hover, banner, logo, activities, travelers, key}) => {
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

    const Slider = ({ slides }) => {
        const [current, setCurrent] = useState(0);
        const length = slides.length;
        

        
        const goToNext = () => {   
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        useEffect(() => {
            setTimeout(goToNext,2000);
        });


        if(!Array.isArray(slides) || length <= 0) {
            return null;
        }


        return (
            <section className={styles.slider}>
                {slides.map((s, i) => (
                    <div key={s} className={i === current ?  `${styles.slide.active}` : `${styles.slide}`}>
                        <img src={s} className={styles.image}/>
                    </div>
                ))}
            </section>
        );
    }
    
    return (
        <Fragment>
            {banner && (<Slider slides={banner}/>)}
            <img src={logo} className={styles.logo}/>
            <form className={styles.form} style={{backgroundColor:(hover) ? hover_color :  primary_color}} ref={ref}>
                <Traveler travelers={travelers} key={key} />
                <Activity activities={activities} key={key}/>
                <div>
                    <Total />
                    <Button  contrast_color={contrast_color} button_hover={button_hover}/>
                </div>
            </form> 
        </Fragment>

    );
};

export default Form;