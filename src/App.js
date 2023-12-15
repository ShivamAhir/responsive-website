import './Global.css';
import { useState } from 'react';
function App() {

  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div>
      <header className="header">
        <a href='#'><img src='./images/logo.png' alt="Logo" /></a>
        <nav>
          <ul role='list' className="header-nav">
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Product</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Community</a></li>
          </ul>
        </nav>
        <div className="topnav">
          <a href='#' class="active"><img src='./images/logo.png' alt="Logo" /></a>
          <div id="myLinks" style={{ display: showLinks ? 'block' : 'none' }}>
            <a href='#'>Pricing</a>
            <a href='#'>Product</a>
            <a href='#'>About Us</a>
            <a href='#'>Careers</a>
            <a href='#'>Community</a>
          </div>
          <button className="icon" onClick={toggleLinks}>
            <img src='./images/icon-hamburger.svg'/>
          </button>
        </div>
        <button className='button'>Get Started</button>
      </header>
      <div >
        <div className='flexbox '>
          <div className='inner-box'>
            <h1>
            Bring everyone together to build better products.
            </h1>
            <p>
            Manage makes it simple for software teams to plan ady-to-day tasks while keeping the larger team goals in view.
            </p>
            <button className='button'>Get Started</button>
          </div>
          <div className='inner-box'>
          <img src='./images/illustration_intro.png' style={{ width: '100%', height: 'auto' }} />

          </div>
        </div>
        
        <div className='flexbox'>
          <div className='inner-box'>
            <h1>
            What's different about Manage?
            </h1>
            <p>
            Manage provides all the functionality your team needs, without the complexity. Our sottware is tallor-made tor modern digitat oroouel leums.
            </p>
          </div>
          <div className='inner-box'>
            <ol role='list'>
              <li>
                <h3>Track company-wide progress</h3>
                <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                </p>
              </li>
              <li>
                <h3>Advanced built-in reports</h3>
                <p>
                Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders intormed
                </p>
              </li>
              <li>
                <h3>Everything you need in one place</h3>
                <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution</p>
              </li>
            </ol>
          </div>
        </div>
        {/* <div>
          <h1>What they've said</h1>
          <div>
            <p>working</p>
          </div>
          <button>Get Started</button>
        </div> */}
        <div className='flexbox Simplify-inner-box'>
          
          <div className='inner-box white'>
              <h1>
              Simplify how your team works today.
              </h1>
          </div>
            <div className='inner-box flexbox-orange'>
              <button className='white orange-font button-size'>Get Started</button>
            </div>
          </div>
      </div>
      <footer className="footer flexbox flex-gap">
        <div className='footer-box'>
          <a href='#'><img src='./images/logo.png'/></a>
          <ul role='list' className='nave'>
            <li><a href='#'><img src='./images/icon-facebook.png'/></a> </li>
            <li><a href='#'><img src='./images/icon-youtube.png'/></a> </li>
            <li><a href='#'><img src='./images/icon-twitter.png'/></a> </li>
            <li><a href='#'><img src='./images/icon-pinterest.png'/></a> </li>
            <li><a href='#'><img src='./images/icon-instagram.png'/></a> </li>
          </ul>
        </div>
        <div className='footer-box second-div'>
          <ul role='list'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className='footer-box'>
          <ul role='list'>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-box'>
        <div>
        <div className='send-mail'>
          <input placeholder='johnmadden@mail' />
          <button className='white orange-font button-size'>Go</button>
        </div>
        <p>Please enter a valid email</p>
        <p>Copyright 2020. All Rights Reserved</p>
      </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
