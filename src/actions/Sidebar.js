import React, { Component } from 'react'
import Sidebar from 'react-sidebar'

class MyNationsSideBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sidebarOpen: false
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  onSetSidebarOpen (open) {
    this.setState({ sidebarOpen: open })
  }
  render () {
    return (
      <Sidebar
        className="sidenav"
        sidebar={<b>This will hold nations of the given user that is logged in</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
      >
        <button className="navbutton" onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    )
  }
}

export default MyNationsSideBar
