import logo from './images/logo.png';
import platforms from './images/platforms.png';
import chart from './images/chart.png';
import galaxy from './images/galaxy.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="">
              <img src={logo} className="img-fluid" alt="logo" />
            </a>
            <button
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-bs-target="#navbarSupportedContent"
              data-bs-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#infos-stats">
                    Infos &amp; Stats
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#your-benefits">
                    Your benefits
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#wallet-explorer">
                    Wallet Explorer
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tokenomics">
                    Tokenomics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#roadmap">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <div className="container info">
          <h1>Kai Inu</h1>
          <ul className="list">
            <li>Listed on 5 exchanges</li>
            <li>Unique Wallet Explorer Utility</li>
            <li>2% rewards for holders</li>
            <li>German, doxxed team</li>
            <li>Available on BSC & ETH chain</li>
            <li>Weekly buybacks</li>
          </ul>
        </div>

        <div className="platforms">
        <img src={platforms} className="img-fluid center" alt="platforms" />
        </div>
      </header>


      <div className="container">

        <section id="wallet-explorer" className="wallet-explorer">
          <div className="row">
            <div className="col-md-6">
              <img src={chart} className="img-fluid" alt="chart" />
            </div>
            <div className="col-md-6 d-flex">
              <div className="mt-auto mb-auto">
                <h1>Wallet Explorer</h1>
                <p>At the top of the secret mountain, where the line between land and sky blurs, the veneered Kai Inu was forged by ancient monks. Declared as a natural monument in 1934, it’s time to declare Kai Inu as a crypto meme monument.</p>
                <a href="" className="btn">Explore the Wallet Explorer now</a>  
              </div>
            </div>
          </div>
        </section>
          


        <section id="infos-stats">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="mt-auto mb-auto">
                <h1>Infos &amp; Stats</h1>
                <p>At the top of the secret mountain, where the line between land and sky blurs, the veneered Kai Inu was forged by ancient monks. Declared as a natural monument in 1934, it’s time to declare Kai Inu as a crypto meme monument.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <div>
                  <p>Published</p>
                  <p className="gray">28 days ago</p>
                </div>
                <hr/>
                <div>
                  <p>Market Cap</p>
                  <p className="gray">$1.500.000</p>
                </div>
                <hr/>
                <div>
                  <p>Price</p>
                  <p className="gray">0.000000002343</p>
                </div>
                <hr/>
                <div>
                  <p>Holders</p>
                  <p className="gray">10.000</p>
                </div>
                <hr/>
                <div>
                  <p>Initial Supply</p>
                  <p className="gray">1.000.000.000.000.000</p>
                </div>
                <hr/>
                <div>
                  <p>Burned Sup.</p>
                  <p className="gray">338.000.000.000.000</p>
                </div>
                <hr/>
                <div>
                  <p>Circulating Sup.</p>
                  <p className="gray">661.835.306.925.000</p>
                </div>
                <hr/>
                <div>
                  <p>Contract</p>
                  <small className="gray">0xe5a09784b16e1065c37df14c6e2f06fdce317a1b</small>
                </div>
              </div>
            </div>
          </div>
        </section>
            


        <section id="your-benefits">
          <div className="row">
            <h1>Why you should buy kai Inu</h1>
            <div className="col-md-6">
              <iframe width="90%" height="100%" src="https://www.youtube.com/embed/FJYgse_La6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-md-6">
              <ul className="list">
                <li>Available on BSC & ETH</li>
                <li>Unique Wallet Utility</li>
                <li>Ownership Rennounced</li>
                <li>Doxxed team</li>
                <li>All LP burned</li>
                <li>Audited Contract</li>
                <li>Buy Backs</li>
                <li>Auto LP Mechanism like Safemoon</li>
                <li>2% Redistribution</li>
                <li>Giveaways & Contests</li>
              </ul>
            </div>
          </div>
        </section>


        <section id="tokenomics">
          <div className="row">
            <div className="col-md-6">
              <div className="box">
                <h2>3% Liquidity</h2>
                <p>As more transactions come in, our liquidity will increase, allowing bigger trades and stabilizing our price.</p>
              </div>
              <div className="box">
                <h2>2% Rewards</h2>
                <p>As more transactions come in, our liquidity will increase, allowing bigger trades and stabilizing our price.</p>
              </div>
              <div className="box">
                <h2>2% Marketing</h2>
                <p>As more transactions come in, our liquidity will increase, allowing bigger trades and stabilizing our price.</p>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="mt-auto mb-auto">
                <h1>Tokenomics</h1>
                <p>Kai Inu is a deflationary token running on the BSC network joining the ranks of the master pups.</p>
                <p>All transactions are taxed 7%, broken down as follows:</p>
              </div>
            </div>
          </div>
        </section>


        <section id="roadmap">
          <div className="row">
            <div className="col-md-6">
              <h1>Roadmap</h1>
              <div className="relative">
                <div class="vl"></div>
                <ul className="roadmap-list">
                  <li>
                    <ul className="list">
                      <h3>May 2021</h3>
                      <li>Pre-sale</li>
                      <li>Launch</li>
                      <li>Audit</li>
                      <li>CoinGecko Listing</li>
                      <li>First Influencer Marketing</li>
                      <li>Community Building</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="list">
                      <h3>June 2021</h3>
                      <li>CoinMarketCap Listing</li>
                      <li>2 Exchange listings</li>
                      <li className="unchecked">Blockfolio listing</li>
                      <li className="unchecked">Bridge to ETH</li>
                      <li className="unchecked">Charity Partners</li>
                      <li className="unchecked">Marketing Push</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="list">
                      <h3>July 2021</h3>
                      <li className="unchecked">4 Exchange listings</li>
                      <li className="unchecked">NFT Marketplace</li>
                      <li className="unchecked">Kai Inu merchandise</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="list">
                      <h3>August 2021</h3>
                      <p>To Be Announced…</p>
                    </ul>
                  </li>

                </ul>
                
              </div>
              

            </div>
            <div className="col-md-6">
              <div className="galaxy">
                <img src={galaxy} className="img-fluid" alt="galaxy" />
              </div>
            </div>
          </div>
        </section>

      </div>
      

    </div>
  );
}

export default App;
