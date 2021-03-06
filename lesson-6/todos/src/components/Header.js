import React from 'react'
import { Link } from 'react-router-dom'

import NewNoteModal from './NewNoteModal'
import logo from '../logo.png'
import '../styles/Header.css'

class Header extends React.Component {

  getNoteCountMessage(noteCount){
    const isPlural = noteCount > 1;
    return `(containing ${noteCount} idea${isPlural ? 's' : ''})`
  }

  render() {
    const { ...props } = this.props
    return (
      <div className="Header">
        <div className="Header-logo">
          <img src={logo} alt="logo" />
          <b>IDEA JOURNAL</b>
          <span><Link to="/" >List Notes</Link></span>
          <span><Link to="/Summary" >Summary</Link></span>

        </div>
        <NewNoteModal />
      </div>
    )
  }
}

export default Header
