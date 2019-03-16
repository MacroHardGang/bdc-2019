import React from 'react'
import './home.css'

var iframe = '<iframe src="https://www.youtube.com/embed/Xd0Ok-MkqoE?autoplay=1&loop=1&mute=1&rel=1?autoreplay=1" width="540" height="450" allowFullScreen allow="autoplay; encrypted-media></iframe>'; 

class HomePage extends React.Component {

    render() {
        return(
            <div id="intro">

            <div dangerouslySetInnerHTML={ this.iframe() } />

            <div className="intro">
                <div className="intro-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <h1 className="brand-heading">Here to find your dream car? </h1>
                                <p className="intro-text">
                                    360.Agency
                                </p>
                                <a href="#about" className="page-scroll intro-button">
                                    Let's get started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default HomePage