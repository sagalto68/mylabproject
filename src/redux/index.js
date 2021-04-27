import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import languageReducer from './language/languageReducer';
import userReducer from './user/userReducer';

const reducers = combineReducers({
  lang: languageReducer,
  user: userReducer
})

const store = createStore(reducers);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default ReduxProvider;
