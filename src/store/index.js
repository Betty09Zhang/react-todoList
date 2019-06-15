import {createStore,compose,applyMiddleware} from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk';
// 引入thunk 中间件 将异步请求提取 放在actionCreators 中 返回一个函数而不是action 对象；


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

export default store;
