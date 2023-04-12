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
        path: "/api",
        element: <API />,
      },
      {
        path: "/api/overview",
        element: <APIOverview />,
      },
      {
        path: "/api/subscription",
        element: <APISubscription />,
      },
      {
        path: "/api/tryout",
        element: <TryOut />,
      },
      {
        path: "/api/comments",
        element: <Comments />,
      },
      {
        path: "/api/documentation",
        element: <Documentation />,
      },
      {
        path: "/api/sdks",
        element: <SDKs />,
      },
      {
        path: "/application",
        element: <Application />,
      },
      {
        path: "/application/edit",
        element: <EditApplication />,
      },
      {
        path: "/application/create",
        element: <CreateApplication />,
      },
      {
        path: "/application/overview",
        element: <OverviewApplication />,
      },
      {
        path: "/application/productionkeys",
        element: <ProductionKeys />,
      },
      {
        path: "/application/productionOauth2tokens",
        element: <ProductionOAuth />,
      },
      {
        path: "/application/productionapikeys",
        element: <ProductionApikeys />,
      },
      {
        path: "/application/sandboxkeys",
        element: <SandboxKeys />,
      },
      {
        path: "/application/sandboxOauth2tokens",
        element: <SandboxOAuth />,
      },
      {
        path: "/application/sandboxapikeys",
        element: <SandboxApikey />,
      },
      {
        path: "/application/subscription",
        element: <ApplicationSubscription />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/apicategories",
        element: <APICategories />,
      },
    ],
  },
]);
