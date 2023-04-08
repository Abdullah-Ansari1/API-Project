import {RouterProvider} from 'react-router-dom';
import {router} from './Routes/Routes';
import {Layout} from 'antd';

function App() {
  return (
<Layout style={{minHeight:"100vh"}}>
<RouterProvider router={router} />
</Layout>

  );
}

export default App;