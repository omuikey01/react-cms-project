import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './CssFiles'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor} >
                <App />
            </PersistGate>
        </Provider>
    </>
);