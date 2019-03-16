import React from 'react'

class QuestionairePage extends React.Component {
    render() {

        return(
            <div className="container content-section white-section">
                <div className="row justify-content-center">
                    <h2 className="text-center white-section-header">
                        Answer some questions so we can know you better
                    </h2>
                    <form className="contact100-form validate-form">
                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                            <span className="label-input100">Price Range</span>
                            <input className="input100" type="number" name="price-range-max" placeholder="MIN" step="0.01"/>
                            
                            <input className="input100" type="number" name="price-range-min" placeholder="MAX" step="0.01"/>
                        </div>

                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn">
                                <span>
                                    Submit
                                    <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default QuestionairePage