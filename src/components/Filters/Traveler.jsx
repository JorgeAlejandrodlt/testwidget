import React from 'react';
import styles from './style.css'

const Traveler = () => {
    const travelers = [
        { title: "What kind of traveler are you?", name: [
            "Adrenaline Addicts",
            "Culture Lovers",
            "Aquatic adventures", 
            "Beach enthusiasts", 
            "Adventure seekers",
            "Party hoppers",
            "Motor fans"
        ] }
    ]

    return(
        <div>
            {travelers.map((traveler) => {
                <div key={`travelers`}>
                    <select type="text" className={styles.select}>
                    {traveler.name.map((name) => {
                        return (
                        <div key={`traveler`}>
                            <option className={styles.field}>{travelers.title}</option>
                            <option>{name}</option>
                        </div>
                        );
                    })}
                    </select>    
                </div>
                })
            }
        </div>
    );

};

export default Traveler;