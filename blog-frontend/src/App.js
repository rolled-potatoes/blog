import React from 'react';
import {ListPage, NotFoundPage, PostPage,EditorPage} from './pages'
import {Switch,Route} from 'react-router-dom'
import Base from './containers/common/Base'
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = {ListPage}/>
        <Route exact path='/page/:page' component = {ListPage}/>
        <Route exact path='/tag/:tag/:page?' component = {ListPage}/>
        <Route exact path='/post/:id' component = {PostPage}/>
        <Route exact path='/editor' component = {EditorPage}/>
        <Route component ={NotFoundPage}/>
      </Switch>
      <Base/>
    </div>
  );
}

export default App;
//Switch 는 라우터중 일치하는 라우터 하나만 출력한다. 