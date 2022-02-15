import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import characterReducer from './character';
import weaponReducer from './weapon';
import spellReducer from './spell';
import armorReducer from './armor';
import itemReducer from './item';

const rootReducer = combineReducers({
  session,
  characters: characterReducer,
  weapons: weaponReducer,
  spells: spellReducer,
  armors: armorReducer,
  items: itemReducer
});

// const appReducer = combineReducers({
//   session,
//   characters: characterReducer,
//   weapons: weaponReducer,
//   spells: spellReducer
// })

// const rootReducer = (state, action) => {
//   if (action.type === 'REMOVE_USER') {
//     return appReducer(undefined, action)
//   }

//   return appReducer(state, action)
// }

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
