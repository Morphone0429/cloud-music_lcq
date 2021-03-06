import React from 'react';
import { renderRoutes } from "react-router-config";
import { Top, Tab, TabItem } from './style'
import { NavLink } from 'react-router-dom'
function Home(props) {
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to='/recommend' activeClassName="seleced"><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to='/singers' activeClassName="seleced"><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to='/rank' activeClassName="seleced"><TabItem><span>排行榜</span></TabItem></NavLink>

      </Tab>
      {renderRoutes(props.route.routes)}
    </div>
  )
}
export default React.memo(Home);