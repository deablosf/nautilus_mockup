import React, { Component } from 'react'

class Splash extends Component {
    render() {
        return (
            <div className="match">
                <div className="issue">ISSUE 079</div>
                <div className="cata">CATALYSTS</div>
                <div className="agaent">Agents of Change</div>
                <button className="splBtn">READ MORE</button>
                <button className="splBtn2">SEE FULL ISSUE</button>
                <img className="down" src={require('../assets/curtain-down.png')} />
            </div>
        )
    }
}

export default Splash