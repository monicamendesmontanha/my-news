import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLanguage, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(
  faLanguage,
  faSun,
  faMoon
)


function selectLanguage(item) {

}


const Menu = props => (
  <>
    <FontAwesomeIcon onClick={() => selectLanguage(props.item)} icon={faLanguage} />
    <FontAwesomeIcon icon={faSun} />
    <FontAwesomeIcon icon={faMoon} />
  </>
)

export default Menu;