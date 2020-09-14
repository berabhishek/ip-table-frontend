import React from "react";
import ApiConnector from "../connector/ApiConnector";
import "./styles/formstyles.css";

class OutputView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: {}};
        this.apiConnector = new ApiConnector();
    }

    componentWillMount() {
        // this.setState((prevState, props) => {
        //     prevState.data = this.apiConnector.fetchData(`/formhelper/alldata/${props.match.params.id}`);
        //     console.log(prevState.data);
        //     return prevState;
        // });
        this.setState({data: this.apiConnector.fetchData(`/formhelper/alldata/${this.props.match.params.id}`)}["data"]);
    }

    render() {
        console.log(this.props);
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
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                    <div className="mdl-cell mdl-cell--2-col">
                                        <b>Project Name:</b>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">{this.state.data.projectname}</div>
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                </div>
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                    <div className="mdl-cell mdl-cell--2-col">
                                        <b>Project ID:</b>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">{this.state.data.projectid}</div>
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                </div>
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                    <div className="mdl-cell mdl-cell--2-col">
                                        <b>VRF Name:</b>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">{this.state.data.vrfname}</div>
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                </div>
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                    <div className="mdl-cell mdl-cell--2-col">
                                        <b>RD Value:</b>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">0.5.1.100:9100</div>
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                </div>
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                    <div className="mdl-cell mdl-cell--2-col">
                                        <b>AS No.:</b>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">{this.state.data.asnumber}</div>
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                </div>
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                    <div className="mdl-cell mdl-cell--2-col">
                                        <b>Connectivity Type:</b>
                                    </div>
                                    <div className="mdl-cell mdl-cell--9-col">{this.state.data.connectivitytype}</div>
                                    <div className="mdl-cell mdl-cell--1-col"></div>
                                </div>
                                <div className="mdl-grid">
                                    <div className="mdl-cell mdl-cell--12-col">
                                    <table className="mdl-data-table mdl-js-data-table ip-full-width">
                                    <thead>
                                        <tr>
                                            <th>Device 1</th>
                                            <th>Device 2</th>
                                            <th>VLAN</th>
                                            <th>Subnet</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                                </div>
                                </div>
                                </div>
                            </div>
                            <div className="mdl-card__actions">
                            </div>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--1-col"></div>
                </div>
        )
    }
}
export default OutputView;