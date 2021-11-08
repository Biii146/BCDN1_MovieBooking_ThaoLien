import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import {store} from './redux/configStore'
import CineTicket from './cinema/CineTicket';


function App() {
  return (
    <div>
      <Provider store={store}>
          <CineTicket/>
      </Provider>
    </div>
  );
}

export default App;
