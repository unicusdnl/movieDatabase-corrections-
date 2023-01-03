import React from 'react' 
import './subscription.css'
import {BsCheck2} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'
import Footer from '../footer/footer'
import Nav from '../../components/nav/nav'

const Subscription = () => {
  return (
    <section id='subscription'>

      <Nav />
        <div className="sub-ctr">
            <h3 id='plan'>Choose the plan thats right for you</h3>
        </div>

        <div className="card-wrapper">
          
          <div className="card-header">
          <h2>STARTER</h2>
          </div>

          <div className="card-details">
            <p>
              <span>
                <BsCheck2 id='check'/>
                <b>1</b> full user
                </span>
              </p>
              <p>
              <span>
                <BsCheck2 id='check'/>
                <b>2</b> contact per client
                </span>
              </p>
              <p>
              <span>
                <MdClose id='nocheck'/>
                <b>No</b> Lorem ipsum dolor
                </span>
              </p>
              <p>
              <span>
                <MdClose id='nocheck'/>
                <b>No</b> Lorem ipsum dolor
                </span>
              </p>
          </div>

          <div className="card-price">
            <p>
              <sup>
                ₵
                </sup>
                10.99
                <sub>
                  /month
                </sub>
                </p>
          </div>
        
          <button className='card-button'>
            SELECT
          </button>
        </div>

        <div className="card-wrapper">
          
          <div className="card-header">
          <h2>PRIVILEDGE</h2>
          </div>

          <div className="card-details">
            <p>
              <span>
                <BsCheck2 id='check'/>
                <b>5</b> users
                </span>
              </p>
              <p>
              <span>
                <BsCheck2 id='check'/>
                <b>2</b> contact per client
                </span>
              </p>
              <p>
              <span>
                <BsCheck2 id='check'/>
                <b>4</b> Lorem ipsum dolor
                </span>
              </p>
              <p>
              <span>
                <MdClose id='nocheck'/>
                <b>No</b> Lorem ipsum dolor
                </span>
              </p>
          </div>

          <div className="card-price">
            <p>
              <sup>
                ₵
                </sup>
                15.99
                <sub>
                  /month
                </sub>
                </p>
          </div>
          
          <button className='card-button'>
            SELECT
          </button>
        </div>

        <div className="card-wrapper">

        <div className="card-header">
          <h2>MASTER</h2>
          </div>

          <div className="card-details">
            <p>
              <span>
                <BsCheck2 id='check'/>
                <b>5</b> users
                </span>
              </p>
              <p>
              <span>
                <BsCheck2 id='check'/>
                <b>2</b> contact per client
                </span>
              </p>
              <p>
              <span>
                <BsCheck2 id='check'/>
                <b>All</b> Lorem ipsum dolor
                </span>
              </p>
              <p>
              <span>
                <BsCheck2 id='check'/>
                <b>All</b> Lorem ipsum dolor
                </span>
              </p>
          </div>

          <div className="card-price">
            <p>
              <sup>
                ₵
                </sup>
                18.99
                <sub>
                  /month
                </sub>
                </p>
          </div>
          
          <button className='card-button'>
            SELECT
          </button>
          </div>
          
          <Footer/> 
          
    </section>
  )
}

export default Subscription
