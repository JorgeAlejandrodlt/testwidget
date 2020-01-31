import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

 function Widget() {

 }

    Widget.prototype.mount = (settings) => {
       
    ReactDOM.render(<App id={settings.id} />, document.getElementById('root'));
}

let widget = new Widget();
widget.mount({
    id: '12345'
})
