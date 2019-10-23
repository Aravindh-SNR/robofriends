import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import SearchBox from './components/search_box/SearchBox';
import RobotList from './components/robot_list/RobotList';
import Scroll from './components/scroll/Scroll';

function App() {

  //setting the state of the component
  //there are 2 arrays because we want to compare the two and display search results
  const [robotList, setRobotList] = useState([]);
  const [newRobotList, setNewRobotList] = useState([]);

  //fetching json from an api once the component has mounted
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      setRobotList(users);
      setNewRobotList(users);
    });
  }, []);

  //listener for the search event
  const searchRobot = (event) => {
    setNewRobotList(robotList.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  return (
    <Fragment>
      <header>
        <h1>RoboFriends</h1>
      </header>
      <SearchBox searchRobot={searchRobot}/>
      <Scroll>
        <RobotList newRobotList={newRobotList}/>
      </Scroll>
    </Fragment>
  );
}

export default App;