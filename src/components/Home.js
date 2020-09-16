import React from "react";
import './styles/formstyles.css';
import Header from "./Header";
class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
    }
    formRedirectPage(){
        window.location= "/input";
    }
    render() {
        return (
            <div>
      <Header title="Home"/>
                <form id="Home">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--1-col"></div>
                        <div className="mdl-cell mdl-cell--10-col">
                            <div className="mdl-card ip-full-width mdl-shadow--2dp">
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                                </div>
                                <div className="mdl-card__supporting-text ip-full-width no-padding">
                                    <div className="mdl-grid home-select">
                        <div className="mdl-cell mdl-cell--4-col">Please Select The Option</div>
                        <div className="mdl-cell mdl-cell--4-col"></div>
                        <div className="mdl-cell mdl-cell--4-col"></div>
                                        
                                        </div>

                                <div className="mdl-grid">
                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={this.formRedirectPage.bind(this)} >
                                                OffShore Location
                                    </button>
                                </div>
                                <div className="mdl-grid">
                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" >
                                                Onshore POP Location
                                    </button>
                                </div>
                                <div className="mdl-grid">
                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" >
                                                Client Location
                                    </button>
                                </div>


                                </div>
<div className="mdl-card__actions">
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--3-col">
                                        </div>
                                        <div className="mdl-cell mdl-cell--3-col">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--1-col">
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Home;