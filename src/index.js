import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchTransactionData } from './actions'
// import Keycloak from 'keycloak-js';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
store.dispatch(fetchTransactionData());

// //Get the keycloak configuration
// let keycloak = Keycloak('./keycloak.json');

// //Initialization of the keycloak instance
// keycloak.init({ onLoad: 'login-required' }).success((authenticated) => {
//     const logapp = keycloak.createLogoutUrl(true);
//     console.log(keycloak);
//     console.log(authenticated);
//     // console.log(getState().keycloakLogin);
//     if (!authenticated) {
//         window.location.reload();
//     } else {
//         console.info("Authenticated");
//     }

//     //React Render on authentication
    ReactDOM.render(
    <Provider store={store}>
      {/* <App logapp={logapp}/> */}
      <App />
    </Provider>,
     document.getElementById('root'));

//     //store authentication tokens in sessionStorage
//     sessionStorage.setItem('authentication', keycloak.token);
//     sessionStorage.setItem('refreshToken', keycloak.refreshToken);

//     //to regenerate token on expiry
//     setTimeout(() => {
//         keycloak.updateToken(70).success((refreshed) => {
//             if (refreshed) {
//                 console.debug('Token refreshed' + refreshed);
//             } else {
//                 console.warn('Token not refreshed, valid for '
//                     + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
//             }
//         }).error(() => {
//             console.error('Failed to refresh token');
//         });


//     }, 60000)

// }).error(() => {
//     console.error("Authenticated Failed");
// });
