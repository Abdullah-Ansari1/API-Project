import { createBrowserRouter } from "react-router-dom";
import {
  API,
  APIOverview,
  APISubscription,
  TryOut,
  Comments,
  Documentation,
  SDKs,
  Application,
  EditApplication,
  CreateApplication,
  OverviewApplication,
  ApplicationSubscription,
  ProductionApikeys,
  ProductionKeys,
  ProductionOAuth,
  SandboxApikey,
  SandboxKeys,
  SandboxOAuth,
  Dashboard,
  APICategories
} from "../pages";
import RootLayout from "../RootLayout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <API />,
      },
      {
        path: "/devportal/apis",
        element: <API />,
      },
      {
        path: "/devportal/api/overview",
        element: <APIOverview />,
      },
      {
        path: "/devportal/api/subscription",
        element: <APISubscription />,
      },
      {
        path: "/devportal/api/tryout",
        element: <TryOut />,
      },
      {
        path: "/devportal/api/comments",
        element: <Comments />,
      },
      {
        path: "/devportal/api/documentation",
        element: <Documentation />,
      },
      {
        path: "/devportal/api/sdks",
        element: <SDKs />,
      },
      {
        path: "/devportal/applications",
        element: <Application />,
      },
      {
        path: "/devportal/application/:id/edit",
        element: <EditApplication />,
      },
      {
        path: "/devportal/application/create",
        element: <CreateApplication />,
      },
      {
        path: "/devportal/application/overview",
        element: <OverviewApplication />,
      },
      {
        path: "/devportal/application/productionkeys",
        element: <ProductionKeys />,
      },
      {
        path: "/devportal/application/productionOauth2tokens",
        element: <ProductionOAuth />,
      },
      {
        path: "/devportal/application/productionapikeys",
        element: <ProductionApikeys />,
      },
      {
        path: "/devportal/application/sandboxkeys",
        element: <SandboxKeys />,
      },
      {
        path: "/devportal/application/sandboxOauth2tokens",
        element: <SandboxOAuth />,
      },
      {
        path: "/devportal/application/sandboxapikeys",
        element: <SandboxApikey />,
      },
      {
        path: "/devportal/application/subscription",
        element: <ApplicationSubscription />,
      },
      {
        path: "/devportal/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/devportal/dashboard/apicategories",
        element: <APICategories />,
      },
    ],
  },
]);
