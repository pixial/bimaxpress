import './stylesheets/App.css';
import CreateRecord from './pages/CreateRecord';
import NavMenu from './components/NavMenu';
import ExistingRecords from './pages/ExistingRecords';
import { Route } from 'react-router-dom';
import axios from 'axios';
function App() {
  function addDataHandler(data) {
    const newUserData = { ...data, id: Math.random().toString() };
    console.log('APP JS', newUserData);
    axios
      .post('http://localhost:5000/personalDetails/add', newUserData)
      .then((res) => console.log(res.data));
  }
  return (
    <div className='App'>
      <NavMenu />
      <Route exact path='/'>
        <CreateRecord OnNewData={addDataHandler} />
      </Route>
      <Route exact path='/existingrecords' component={ExistingRecords} />
    </div>
  );
}

export default App;
