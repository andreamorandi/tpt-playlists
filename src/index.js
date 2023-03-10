import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./core/store/store";
import "@fontsource/noto-sans-thaana/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './components/App';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);