import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ResumeWebsite from './firstPage/resumeWebsite';
import PhrasesApp from './secondPage/phrasesApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResumeWebsite />,
  },
  {
    path: "phrases-app",
    element: <PhrasesApp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
