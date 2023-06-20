import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ErrorsProvider } from './context/ErrorsContext'
import { UserProvider } from './context/UserContext';
import { TopicProvider } from './context/TopicContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorsProvider>
      <UserProvider>
        <TopicProvider>
          <App />
        </TopicProvider>
      </UserProvider>
    </ErrorsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
