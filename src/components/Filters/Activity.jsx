import React from 'react';
import styles from './style.css'

const Activity = () => {
    
    const activities = [
        { title: "What kind of activity are you looking for?", autocomplete: [
            "result 1",
            "result 2",
            "result 3",
            "result 4",
            "result 5"
        ]}
    ]

    return(
        <div>
          {activities.map((activity) => {
            <div key={`activities`}>
                <select type="text" className={styles.select}>
                    {activity.autocomplete.map((autocomplete) => {
                        return(
                            <div key={`activity`}>
                                <option className={styles.field}>{activities.title}</option>
                                <option>{autocomplete}</option>
                            </div>
                        );
                    })}
                </select>
            </div>
        })
    }
        </div>
    )
    



}

export default Activity;