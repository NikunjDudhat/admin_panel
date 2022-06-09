import logo from './logo.svg';
import './App.css';
import Layout from './conponent/Layout/Layout';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Medicine from './container/Medicine/Medicine';
import Doctor from './container/Doctor/Doctor';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
      <Switch>
          <Route exact path={"/"} component={Medicine} />
          <Route exact path={"/Medicine"} component={Medicine} />
          <Route exact path={"/Doctor"} component={Doctor} />
      </Switch>
    </Layout>
  );
}

export default App;
