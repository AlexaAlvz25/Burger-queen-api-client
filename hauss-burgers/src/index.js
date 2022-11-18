import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    );
/* ReactDOM.render(
   // <React.StrictMode>
    <Login />,
    // </React.StrictMode>,
    document.getElementById('root')
) */