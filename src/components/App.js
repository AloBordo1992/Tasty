import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './../pages/HomePage/HomePage';
import Favorites from './../pages/FavoritesPage/FavoritesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
