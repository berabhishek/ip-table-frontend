import React from "react";
import './styles/formstyles.css';
import Header from "./Header";
class Home extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
    }
    formRedirectPage(link){
        // alert(link);
        window.location= link;
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
                        <div className="mdl-cell mdl-cell--4-col"></div>
                                        
                                        </div>

                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--4-col">


                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <div className="container">
                                                    <img src="offshore.jpg" alt="Avatar" className="img-class"/>
                                                    <div className="centered">OFFSHORE</div>
                                                </div>
                                            </div>
                                        <div className="flip-card-back mdl-grid">
                                            <div className="mdl-grid">
                                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={() => this.formRedirectPage("/input/existing")} >
                                                    Existing Connection
                                                </button>
                                            </div>
                                            <div className="mdl-grid">
                                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={() => this.formRedirectPage("/input/new")} >
                                                    New Connection
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                
                                    </div>
                                    <div className="mdl-cell mdl-cell--4-col">
                                        
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <div className="container">
                                                    <img src="clientreal.jpg" alt="Avatar" className="img-class"/>
                                                    <div className="centered">CLIENT LOCATION</div>
                                                </div>
                                            </div>
                                        <div className="flip-card-back mdl-grid">
                                            <div className="mdl-grid">
                                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={() => this.formRedirectPage("/input/existing")} >
                                                    Existing Connection
                                                </button>
                                            </div>
                                            <div className="mdl-grid">
                                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={() => this.formRedirectPage("/input/new")} >
                                                    New Connection
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="mdl-cell mdl-cell--4-col">
                                        
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <div className="container">
                                                    <img src="client.jpg" alt="Avatar" className="img-class"/>
                                                    <div className="centered">ONSHORE POP LOCATION</div>
                                                </div>
                                            </div>
                                        <div className="flip-card-back mdl-grid">
                                            <div className="mdl-grid">
                                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={() => this.formRedirectPage("/input/existing")} >
                                                    Existing Connection
                                                </button>
                                            </div>
                                            <div className="mdl-grid">
                                                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" onClick={() => this.formRedirectPage("/input/new")} >
                                                    New Connection
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="mdl-grid">
                                
                                </div>
                                <div className="mdl-grid">
                                
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