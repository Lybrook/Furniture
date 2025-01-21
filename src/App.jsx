import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';

const routes = [
  { path: '/', component: lazy(() => import('./Pages/Home')), exact: true },
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
              exact={route.exact}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;