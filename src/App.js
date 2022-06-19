import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./Page/Home'));
const Category = lazy(() => import('./Page/Category'));
const Chart = lazy(() => import('./Page/Chart'));
const Login = lazy(() => import('./Component/Login'));
const Profil = lazy(() => import('./Component/Profil'));
const Loyalty = lazy(() => import('./Component/Loyalty'));
const Keluar = lazy(() => import('./Component/Keluar'));
const Pengaturan = lazy(() => import('./Component/Pengaturan'));
const Simpan = lazy(() => import('./Component/Simpan'));
const Promo = lazy(() => import('./Page/Promo'));
const Masuk = lazy(() => import('./Component/Masuk'));
const Clothing = lazy(() => import('./Component/Clothing'));
const Notifikasi = lazy(() => import('./Component/Notifikasi'));
const Api = lazy(() => import('./Page/Api'));
const App = () => (
<Router>
<Suspense fallback={<div>Tunggu Yaaa...</div>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Category" element={<Category />} />
<Route path="/Chart" element={<Chart />} />
<Route path="/Login" element={<Login />} />
<Route path="/Profil" element={<Profil />} />
<Route path="/Loyalty" element={<Loyalty />} />
<Route path="/Keluar" element={<Keluar />} />
<Route path="/Pengaturan" element={<Pengaturan />} />
<Route path="/Simpan" element={<Simpan />} />
<Route path="/Promo" element={<Promo />} />
<Route path="/Masuk" element={<Masuk />} />
<Route path="/Clothing" element={<Clothing />} />
<Route path="/Notifikasi" element={<Notifikasi />} />
<Route path="/Api" element={<Api />} />
</Routes>
</Suspense>
</Router>
);
export default App;