import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import {Layout} from 'antd';
import RootLayout from './RootLayout/RootLayout';
import TryOut from './pages/APIpages/Tryout';
import APIOverview from './pages/APIpages/Overview';
import APISubscription from './pages/APIpages/Subscriptions';
import Comments from './pages/APIpages/Comments';
import Documentation from './pages/APIpages/Documentation';
import SDKs from './pages/APIpages/SDKs';
import MyApplication from './Components/ApplicationComponents/MyApplication';
import CreateApplication from './pages/Applicationpages/CreateApplication';
import EditApplication from './pages/Applicationpages/EditApplication';
import OverviewApplication from './pages/Applicationpages/Overview';
import Subscription from './pages/Applicationpages/Subscription';
import ProductionKeys from './pages/Applicationpages/ProductionKeys/ProductionKeys';
import ProductionOAuth from './pages/Applicationpages/ProductionKeys/Ouath2Tokens';
import ProductionApikeys from './pages/Applicationpages/ProductionKeys/ApiKeys';
import SandboxKeys from './pages/Applicationpages/Sanboxkeys/SandboxKeys';
import SandboxOAuth from './pages/Applicationpages/Sanboxkeys/Ouath2Tokens';
import SandboxApikey from './pages/Applicationpages/Sanboxkeys/ApiKeys';
const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout />,
    children:[
      {
        path:"/",
        element:<APIOverview/>
      },
      {
        path:"/api/overview",
        element:<APIOverview/>
      },
      {
        path:"/api/subscription",
        element:<APISubscription/>
      },
      {
        path:"/api/tryout",
        element:<TryOut/>
      },
      {
        path:"/api/comments",
        element:<Comments/>
      },
      {
        path:"/api/documentation",
        element:<Documentation/>
      },
      {
        path:"/api/sdks",
        element:<SDKs/>
      },
      {
        path:"/application",
        element:<MyApplication/>
      },
      {
        path:"/application/edit",
        element:<EditApplication/>
      },
      {
        path:"/application/create",
        element:<CreateApplication/>
      },
      {
        path:"/application/overview",
        element:<OverviewApplication/>
      },
      {
        path:"/application/productionkeys",
        element:<ProductionKeys/>
      },
      {
        path:"/application/productionOauth2tokens",
        element:<ProductionOAuth/>
      },
      {
        path:"/application/productionapikeys",
        element:<ProductionApikeys/>
      },
      {
        path:"/application/sandboxkeys",
        element:<SandboxKeys/>
      },
      {
        path:"/application/sandboxOauth2tokens",
        element:<SandboxOAuth/>
      },
      {
        path:"/application/sandboxapikeys",
        element:<SandboxApikey/>
      },
      {
        path:"/application/subscription",
        element:<Subscription/>
      },
    ]
  }
  
])
function App() {
  return (
<Layout style={{minHeight:"100vh"}}>
<RouterProvider router={router} />
</Layout>

  );
}

export default App;