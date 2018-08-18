import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>UPort Authentication</h1>
            
            
            
            <p>In the upper-right corner, you'll see a login button. Click it to login with UPort.</p>
            <p>(You'll be asked to authorize the test app named "React-Uport-Test-App" on Uport. To change the Uport App and other config please refer this <a href="https://hackernoon.com/launch-a-decentralized-identity-application-using-the-developer-friendly-uport-react-truffle-box-95d1ddf176ea">article</a>)</p>
            <p>NOTE: To interact with your smart contracts through UPort's web3 instance, make sure they're deployed to the Rinkeby/Ropsten testnet.</p>


            <h4>Further Reading</h4>
            <p>The React/Redux portions of the authentication fuctionality are provided by <a href="https://github.com/mjrussell/redux-auth-wrapper" target="_blank">mjrussell/redux-auth-wrapper</a>.</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
