import "./styles/styles.css";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import Authentication from "../redux/authentication";
import Common from "../redux/reducer";
import thunk from "redux-thunk";
// This default export is required in a new `pages/_app.js` file.

let rootReducer = combineReducers({ Authentication, Common });
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
