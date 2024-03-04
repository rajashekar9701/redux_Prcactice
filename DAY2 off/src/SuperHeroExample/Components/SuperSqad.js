import React from 'react'

import { useSelector } from 'react-redux'

export default function SquadStats() {

  var heroes= useSelector(state=>state.herosdata)

 function strength() {
    let strength = 0;
    heroes.forEach(hero => strength += hero.strength);
    return strength;
  }

  function intelligence() {
    let intelligence = 0;
    heroes.forEach(hero => intelligence += hero.intelligence);
    return intelligence;
  }

  function speed() {
    let speed = 0;
  heroes.forEach(hero => speed += hero.speed);
    return speed;
  }


  return (
    <div>
      <h4>Squad Stats</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <b>Overall Strength:</b> {strength()}
        </li>
        <li className="list-group-item">
          <b>Overall Intelligence:</b> {intelligence()}
        </li>
        <li className="list-group-item">
          <b>Overall Speed:</b> {speed()}
        </li>
      </ul>
    </div>
  )
}
