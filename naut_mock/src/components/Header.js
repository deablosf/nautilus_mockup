import React, { Component, useState }  from 'react';


function Header() {
        
        return (
            <div className="App">
                <header className="App-header">
                    <div className="Nav">
                    <div className="logo"> <a href="http://nautil.us/"> <img className="logoI" src={require("../assets/nautilus-logo-sprite@2x.png")}/> </a> </div>
                        <div className="links">
                        <p><a href="http://nautil.us/issues">ISSUES</a></p>
                        <p><a href="http://nautil.us/#">TOPICS</a></p>
                        <p><a href="http://nautil.us/blog">BLOGS</a></p>
                        <p><div><button type="button" className="collapsible" onClick>NEWSLETTERS</button></div></p>
                        <p>
                            <a className="social" href="http://www.facebook.com/NautilusMag">
                                <img src={require('../assets/icons8-facebook-f-13plain.png')}
                                onMouseOver={e => (e.currentTarget.src= require('../assets/icons8-facebook-f-13.png'))}
                                onMouseOut={e => (e.currentTarget.src = require('../assets/icons8-facebook-f-13plain.png'))}
                                 />
                            </a>
                        </p>
                        <p><a className="social" href="http://twitter.com/NautilusMag"><img src={require('../assets/icons8-twitter-13plain.png')}
                                onMouseOver={e => (e.currentTarget.src= require('../assets/icons8-twitter-13.png'))}
                                onMouseOut={e => (e.currentTarget.src = require('../assets/icons8-twitter-13plain.png'))}
                                 /></a></p>
                        <p><a href="http://nautil.us/primeuser">LOGIN</a></p>
                        <button className="subBtn">SUBSCRIBE</button> 
                        </div>
                    </div>
                </header>
            </div>
        )
    
}

export default Header