import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faGlobe,
  faSun,
  faMoon
)

function selectLanguage(item) {

}

const Menu = props => (
  <>
    <h1>My News</h1>
    {/* TO DO MODE DARK/LIGHT: */}
    {/* <FontAwesomeIcon icon={faSun} /> */}
    {/* toogle */}
    {/* <FontAwesomeIcon icon={faMoon} /> */}
    {/* TO DO SELECT LANGUAGE */}
    <FontAwesomeIcon onClick={() => selectLanguage(props.item)} icon={faGlobe} className="dropDown" />
  </>
)

export default Menu;