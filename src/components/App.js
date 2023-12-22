import { Routes, Route } from 'react-router-dom';
// import GlobalStyles from '../styles/GlobalStyles';
import Layout from './Layout/Layout';
import Home from './../pages/HomePage/HomePage';
import Favorites from './../pages/FavoritesPage/FavoritesPage';

export const App = () => {
  return (
    <Routes>
      {/* <GlobalStyles /> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
