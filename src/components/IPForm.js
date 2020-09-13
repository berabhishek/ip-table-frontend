import React from "react";
import './styles/formstyles.css';
import DropDown from "./form_components/DropDown";
import InputText from "./form_components/InputText";
import TableElement from "./form_components/TableElement";
import ApiConnector from "../connector/ApiConnector";
class IPForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submit_disable: true,
            country: ["", "India"],
            selected_country: "India",
            state: [""],
            selected_state: "",
            office: [""],
            selected_office: "",
            connectiontype: [],
            device1: [],
            device2: [],
            devices: ["device1", "device2"],
            vrfname: []
        }
        this.apiConnector = new ApiConnector();
    }
    componentDidMount() {
        let keys = ["connectiontype", "vrfname"];
        keys.forEach(key => {
                this.setState((prevState, props) => {
                let data = this.apiConnector.fetchData(`/formhelper/${key}`);
                if (data && data[key]) {
                    data[key].unshift("");
                    prevState[key] = data[key];
                }
                return prevState;
            });
        });
    }
    anyEntryChanged() {
        this.setState({ submit_disable: true });
    }

    findState(country) {
        this.setState((prevState, props) => {
            let data = this.apiConnector.fetchData(`/formhelper/state/${country}`);
            if (data && data.state) {
                data.state.unshift("");
                prevState.state = data.state;
                prevState.selected_country = country;
            }
            return prevState;
        });
        this.anyEntryChanged();
    }

    findOffice(state) {
        this.setState((prevState, props) => {
            let data = this.apiConnector.fetchData(`/formhelper/office/${state}`);
            if (data && data.office) {
                data.office.unshift("");
                prevState.office = data.office;
                prevState.selected_state = state;
            }
            return prevState;
        });
        this.anyEntryChanged();
    }

    updateDevices(name) {
        this.setState((prevState, props) => {
            this.state.devices.forEach(device => {
                let data = this.apiConnector.fetchData(`/formhelper/device/${device}/${name}`);
                if (data && data.name) {
                    data.name.unshift("");
                    prevState[device] = data.name;
                }
                return prevState;
            });
        });
        this.anyEntryChanged();
    }

    validateForm() {
        this.setState({ submit_disable: false });
    }
    render() {
        return (
            <div>
                <form>
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--1-col"></div>
                        <div className="mdl-cell mdl-cell--10-col">
                            <div className="mdl-card ip-full-width mdl-shadow--2dp">
                                <div className="mdl-card__title">
                                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                                </div>
                                <div className="mdl-card__supporting-text ip-full-width no-padding">
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--2-col">
                                            <DropDown id="region" name="region" title="Region" values={["APAC", "BPAC"]} anyEntryChanged={this.findOffice.bind(this)} />
                                        </div>
                                        <div className="mdl-cell mdl-cell--3-col">
                                            <DropDown id="country" name="country" title="Country" values={this.state.country} anyEntryChanged={this.findState.bind(this)} />
                                        </div>
                                        <div className="mdl-cell mdl-cell--3-col">
                                            <DropDown id="city" name="city" title="City" values={this.state.state} anyEntryChanged={this.findOffice.bind(this)} />
                                        </div>
                                        <div className="mdl-cell mdl-cell--2-col">
                                            <DropDown id="facility" name="facility" title="Facility" values={this.state.office} anyEntryChanged={this.anyEntryChanged.bind(this)} />
                                        </div>
                                        <div className="mdl-cell mdl-cell--2-col">
                                            <DropDown id="connectivitytype" name="connectivitytype" title="Connectivity Type" values={this.state.connectiontype} anyEntryChanged={this.updateDevices.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--6-col">
                                            <InputText id="projectname" text="Project Name*" anyEntryChanged={this.anyEntryChanged.bind(this)} required />
                                        </div>
                                        <div className="mdl-cell mdl-cell--6-col"></div>
                                    </div>
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--6-col">
                                            <InputText id="projectid" text="Project ID*" anyEntryChanged={this.anyEntryChanged.bind(this)} required />
                                        </div>
                                        <div className="mdl-cell mdl-cell--6-col"></div>
                                    </div>
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--6-col">
                                            <DropDown id="vrname" name="vrname" title="VRF Name" values={this.state.vrfname} anyEntryChanged={this.anyEntryChanged.bind(this)} />
                                        </div>
                                        <div className="mdl-cell mdl-cell--6-col"></div>
                                    </div>
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--12-col">
                                            <TableElement headers={["Device 1", "Device 2", "VLAN", "Subnet", "Enter Value"]} device1={this.state.device1} device2={this.state.device2} anyEntryChanged={this.anyEntryChanged.bind(this)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mdl-card__actions">
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--3-col">
                                            <button className="mdl-button mdl-js-button mdl-js-ripple-effect" onClick={this.validateForm.bind(this)}>
                                                Validate
                                    </button>
                                        </div>
                                        <div className="mdl-cell mdl-cell--3-col">
                                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" disabled={this.state.submit_disable}>
                                                Submit
                                    </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--1-col"></div>
                    </div>
                </form>
            </div>
        )
    }
}
export default IPForm;