import React from 'react';
import axios from 'axios';

  async function dbCall(id) {
     const config = {
       method: 'get',
       url:  'http://localhost:3000/settings/' + id
     }
      let res = await axios(config);
      const client = res.data;
      //let clients = res.data;
      //const client = clients.find(c => c.id === id);
      
      // ***** previous solution *****
      // let client = {}
      // for (const prop in clients) {
      //  if(clients[prop].id == id) {
      //    console.log('id props', clients[prop].id, id);
      //    client = clients[prop];
      //    break;
      //   } 
        
      //  }
       return client;
    }


export default dbCall;