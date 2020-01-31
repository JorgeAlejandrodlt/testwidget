import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import styles from '../Styles/style.css';
import dbCall from '../api/dbCall';


const App = ({id}) => {
  const [loading, setLoading] = useState(true);
  const [primary_color, set_primary_color] = useState();
  const [contrast_color, set_contrast_color] = useState();
  const [hover_color, set_hover_color] = useState();
  const [button_hover, set_button_hover] = useState();
  const [banner, setBanner] = useState();
  const [logo, setLogo] = useState();

  useEffect(() => {
     async function customizeWidget() {
      const client = await dbCall(id); 
      
      if(client) {
        set_primary_color(client.settings.primary_color);
        set_contrast_color(client.settings.contrast_color);
        set_hover_color(client.settings.hover_color);
        set_button_hover(client.settings.button_hover);
        setLogo(client.settings.logo);
        setBanner(client.settings.banner);
      } 
      setLoading(false);

    }  
    customizeWidget();    
  }, []);  




  if(loading) return 'loading';

  return(
    <div className={styles.container} >
      <img src="/src/assets/img/beach-background.jpg" className={styles.background} alt="Booking-Widget-Background" />
      <h1 className={styles.title}>
        Booking Widget
      </h1>
      <Form primary_color={primary_color} contrast_color={contrast_color} hover_color={hover_color} button_hover={button_hover} logo={logo} banner={banner} />
    </div>
    );
};

export default App;


