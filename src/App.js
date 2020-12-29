import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';
import store from './store/index'
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          {renderRoutes(routes)}
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;