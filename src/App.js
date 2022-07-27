import logo from './logo.svg';
import './App.css';
import Layout from './conponent/Layout/Layout';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Medicine from './container/Medicine/Medicine';
import Doctor from './container/Doctor/Doctor';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { countorStore } from './Redux/Store';
import Counter from './container/Counter/Counter';
import { PersistGate } from 'redux-persist/integration/react';
import UseMemo from './container/useMemo/UseMemo';
import useCallBack from './container/useMemo/useCallBack';
import { ThemeProvider } from './container/Tasklist/TaskContextProvider';

function App() {

  const {store, persistor} = countorStore()
  

  return (
    <>
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Switch>
                <Route exact path={"/"} component={Medicine} />
                <Route exact path={"/Medicine"} component={Medicine} />
                <Route exact path={"/Doctor"} component={Doctor} />
                <Route exact path={"/Counter"} component={Counter} />
                <Route exact path={"/usememo"} component={UseMemo} />
                <Route exact path={"/usecallback"} component={useCallBack} />
            </Switch>
          </Layout>
        </PersistGate>
      </Provider>
    </ThemeProvider>
    </>
  );
}

export default App;
