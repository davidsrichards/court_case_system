import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import DefaultLayout from './layout/DefaultLayout';
import NewCase from './pages/Form/NewCase';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Checking if the current path is for SignIn or SignUp
  const isAuthRoute = pathname === '/' || pathname === '/auth/signup';

  return loading ? (
    <Loader />
  ) : isAuthRoute ? (
    // Render SignIn or SignUp without DefaultLayout
    <Routes>
      <Route path='/' 
        element={
          <>
            <PageTitle title="signin" />
            <SignIn />
          </>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <>
            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignUp />
          </>
        }
      />
    </Routes>
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          path='/dashboard'
          element={
            <>
              <PageTitle title="court case dashboard" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="form" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="new case" />
              <NewCase />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="settings" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="charts" />
              <Chart />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;