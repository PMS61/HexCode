import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Login from './components/Login/Login.jsx';
import MapNew from './components/Dashboard/MapNew.jsx';
import SignUp from './components/Login/SignUp.jsx';
import MultiStepForm from './components/Form/MultiStepForm.jsx';
import Landing from './components/Landing/Landing.jsx';
import QueryForum from './components/QueryForum/QueryForum.jsx';
import Scheduler from './components/Dashboard/scheduler.jsx';
import ProjectDetails from './components/Dashboard/ProjectDetails/ProjectDetails.jsx';
import ProjectState from './Context/ProjectState.jsx';
import LocationSearch from './components/Form/Search.jsx';
import Announcements from './components/Dashboard/Announcements.jsx';
import DataShare from './components/Dashboard/ProjectDetails/DataShare.jsx';
import TabNavigation from './components/Dashboard/ProjectDetails/tabNavigation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/search",
    element: <LocationSearch />,
  },
  {
    path: "/form",
    element: <MultiStepForm />
  },
  {
    path: "/datashare",
    element: <DataShare />
  },
  {
    path: "/map",
    element: <MapNew />
  },
  {
    path: "/announcements",
    element: <Announcements />
  },
  {
    path: "/queryforum",
    element: <QueryForum />
  },
  {
    path: "/scheduler",
    element: <Scheduler />
  },
  {
    path: "/projectdetails/:projectId",
    element: <ProjectDetails />
  },
  {
    path: "/projectdetails",
    element: <TabNavigation />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ProjectState>
    <RouterProvider router={router} />
  </ProjectState>
  </StrictMode>,
)
