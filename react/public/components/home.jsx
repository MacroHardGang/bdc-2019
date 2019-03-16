import React from 'react'


class HomePage extends React.Component {
    render() {
        return(
            <div id="intro">
                <iframe width="640" height="360" className="video-parallax"
                        src="https://www.youtube.com/embed/Xd0Ok-MkqoE?autoplay=1&loop=1&mute=1&rel=1?autoreplay=1" 
                        frameborder="0" allow="autoplay; encrypted-media" 
                        allowfullscreen></iframe>

                <div className="intro">
                    <div className="intro-body">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-md-10 col-md-offset-3">
                                    <h1 className="brand-heading">Here to find your dream car? </h1>
                                    <p className="intro-text">
                                        360.Agency
                                    </p>
                                    <a href="#questionaire" className="page-scroll intro-button">
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