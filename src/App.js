import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContextProvider } from './contexts/appContext';
import Page from './pages/summary';

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Page/>
      </div>
    </AppContextProvider>
  );
}

export default App;
