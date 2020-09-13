import React from "react";

class OutputView extends React.Component {
    render() {
        return (
            <div>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--1-col"></div>
                    <div className="mdl-cell mdl-cell--10-col">
                        <div className="mdl-card ip-full-width mdl-shadow--2dp">
                            <div className="mdl-card__title">
                                <h2 className="mdl-card__title-text">{this.props.title}</h2>
                            </div>
                            <div className="mdl-card__supporting-text ip-full-width no-padding">
                            </div>
                            <div className="mdl-card__actions">
                            </div>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--1-col"></div>
                </div>
        </div>
        )
    }
}
export default OutputView;