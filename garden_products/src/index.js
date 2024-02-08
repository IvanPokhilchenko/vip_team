import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// <<<<<<< HEAD
// =======

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import HomePage from './Components/HomePage';
// import CategoryPage from './Components/CategoryPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <HomePage/>
//       },
//       {
//         path: "/categories",
//         element: <CategoryPage/>
//       }
//     ]
//   },
// ]);

// >>>>>>> beab5fad25d964c2e85a39dbed00e07c7e007335
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
