const clients = [
    {
        id: 5,
        color: 'blue',
        fontSize: '10px',
        title: 'Booking-widget'
    },
    {
        id: 10,
        color: 'green',
        fontSize: '12px',
        title: 'this is a test'
    },
    {
        id: 8,
        color: 'teal',
        fontSize: '14px',
        title: 'this is still a test',
    },
    {
        id: 15,
        color: 'black',
        fontSize: '24px',
        title: 'this is a booking widget'
    },
    {
        id: 20,
        color: 'red',
        fontSize: '20px',
        title: 'not only a widget, a react booking widget'
    },
    {
        id: 25,
        color: 'darkred',
        fontSize: '14px',
        title: 'this is a react widget for a vue app'
    }
]

const getStyleFromDb = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filtered =  clients.find(client => (client.id === id));
            resolve(filtered);
        }, 1500);
    });
};

export default getStyleFromDb;