import ReactDOM from 'react-dom';
import App from './components/App/App';
import StylesConfig from './config/StylesConfig';
import { store } from './redux/reduxStore';
import { Provider } from 'react-redux';

ReactDOM.render( 
  <>
    <Provider store={ store }>
      <App />
    </Provider>
    <StylesConfig />
  </>,
  document.getElementById("root") 
);