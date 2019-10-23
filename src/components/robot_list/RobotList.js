import React from 'react';
import Robot from '../robot/Robot';
import './robotList.css';

//component to display the list of robots
const RobotList = ({newRobotList}) => {
  return newRobotList.length ? <main className="robotList">
                                 {newRobotList.map(robot => <Robot robot={robot} key={robot.id}/>)}
                               </main>
                             : <h3>Loading...</h3>;
};

export default RobotList;