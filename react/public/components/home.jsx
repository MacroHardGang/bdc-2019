import React from 'react'
import RequirementsPage from './requirements.jsx'

class HomePage extends React.Component {

    constructor() {
        super()
        this.state = {
            showQuestionnaire: false
        }
    }

    showQuestionnaire(evt) {
        evt.preventDefault();
        this.setState({
            showQuestionnaire: true
        })
        const element = document.getElementById(questionnaire);
        element.scrollIntoView({behavior: 'smooth'});
    }

    render() {
        return(
            <div>
                <div id="intro">
                    <iframe width="640" height="360" className="video-parallax"
                            src="https://www.youtube.com/embed/Xd0Ok-MkqoE?autoplay=1&loop=1&mute=1&rel=1?autoreplay=1" 
                            frameBorder="0" allow="autoplay; encrypted-media" 
                            allowFullScreen></iframe>

                    <div className="intro">
                        <div className="intro-body">
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col-md-10 col-md-offset-3">
                                        <h1 className="brand-heading">Here to find your dream car? </h1>
                                        <p className="intro-text">
                                            360.Agency
                                        </p>
                                        <a href="#questionnaire" className="page-scroll intro-button" onClick={evt => this.showQuestionnaire(evt)}>
                                            Let's get started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="questionnaire">
                    {this.state.showQuestionnaire ? <RequirementsPage></RequirementsPage> : ''}
                </div>
            </div>
        )
    }
}

export default HomePage