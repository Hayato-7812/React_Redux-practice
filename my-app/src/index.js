import React from 'react';
import ReactDOM from 'react-dom/client';
import { creareStore } from 'redux'; //Storeを作成するための関数
import { Provider } from 'react-redux'; //作成したStoreを全コンポーネントに渡すための特殊なコンポーネント

import App from './components/App';
import reducer from './reducer';

const store = creareStore(reducer) //ここで作られるstoreはアプリケーション内部で唯一であり、アプリケーション内部の全てのStateはここに集約される。


//どのコンポーネントからもstoreを参照できるようにするコンポーネントをProviderでラップする

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
