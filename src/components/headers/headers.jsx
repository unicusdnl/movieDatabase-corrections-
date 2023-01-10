import React, { Component } from 'react'
import './headers.css'

class Header extends Component {
  state = { 
    whatsPopular: [ "Streaming", "On TV", "For Rent", "In Theatres" ],
    freeToWatch: [ "Movies", "TV"],
    latestTrailesrs: ["Streaming", "On TV", "For Rent", "In Theatres" ],
    trending: ["Today", "This Week"]
   } 

  render() { 

    return (
      <section id='header'>
        <header className='headerListing' id='header-menu'>
          <li className='headerList'>What's Popular
          <ul id='tabs'>{this.state.whatsPopular.map(whatsPopular => <li>{whatsPopular}</li>)}</ul>
          </li>
          <li className='headerList'>Free To Watch
          <ul id='tabs'>{this.state.freeToWatch.map(freeToWatch => <li>{freeToWatch}</li>)}</ul>
          </li>
        </header>
      </section>
    );
  }
}
 
export default Header;