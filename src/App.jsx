import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import ErrorBoundary from './Components/ErrorBoundary';

const routes = [
  { path: '/', component: lazy(() => import('./Pages/Home')) },
  { path: '/about', component: lazy(() => import('./Pages/AboutPage')) },
  { path: '/services', component: lazy(() => import('./Pages/ServicePage')) },
  { path: '/gallery', component: lazy(() => import('./Pages/GalleryPage')) },
  { path: '/contact', component: lazy(() => import('./Pages/ContactFormPage')) },
  { path: '*', component: lazy(() => import('./Pages/NotFoundPage')) },
];

function App() {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
