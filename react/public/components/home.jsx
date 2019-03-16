import React from 'react'

class HomePage extends React.Component {

    render() {
        return(
            <div id="home">
            <iframe width="640" height="360" class="video-parallax"
                    src="https://www.youtube.com/embed/Xd0Ok-MkqoE?autoplay=1&loop=1&mute=1&rel=1?autoreplay=1" 
                    frameborder="0" allow="autoplay; encrypted-media" 
                    allowfullscreen>
            </iframe>

            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <h1 class="brand-heading">Here to find your dream car? </h1>
                        <p class="intro-text">
                            360.Agency
                        </p>
                        <a href="#about" class="page-scroll" id="intro-button">
                            Let's get started
                        </a>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}

export default HomePage