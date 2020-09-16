import React from "react";
import './styles/formstyles.css';
import DropDown from "./form_components/DropDown";
import InputText from "./form_components/InputText";
import TableElement from "./form_components/TableElement";
import ApiConnector from "../connector/ApiConnector";
import Header from "./Header";
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
            vrfname: [],
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

    showSnack(success){
        let message = "";
        if(success) {
            message = "Form is valid!";
        } else {
            message = 'Invalid form data, Please check the values';
        }
        var notification = document.querySelector('.mdl-js-snackbar');
        var data = {
            message: message,
            actionHandler: function(event) {},
            actionText: 'OK',
            timeout: null
        };
        notification.MaterialSnackbar.showSnackbar(data);
    }

    validateForm() {
        let projectname = document.getElementById("projectname").value;
        let projectid = document.getElementById("projectid").value;
        let vrfname_selected = document.getElementById("vrfname").value;
        let data = this.apiConnector.fetchData(`/formhelper/validate/${projectname}/${projectid}/${vrfname_selected}`);
        if(data && data.valid) {
            this.setState((prevState, props) => {
                prevState.submit_disable = false;
                return prevState
            });
                this.showSnack(true);
            } else {
                this.showSnack(false);
            }
    }
    submitForm() {
        let data = {};
        let idlist = [
            "region",
            "country",
            "facility",
            "city",
            "connectivitytype",
            "projectname",
            "projectid",
            "vrfname",
            "device1_1",
            "device2_1",
            "vlan_1",
            "subnet_1",
            "entervalue_1",
            "device1_2",
            "device2_2",
            "vlan_2",
            "subnet_2",
            "entervalue_2",
            "device1_3",
            "device2_3",
            "vlan_3",
            "subnet_3",
            "entervalue_3",
            "device1_4",
            "device2_4",
            "vlan_4",
            "subnet_4",
            "entervalue_4"
        ];
        idlist.forEach((id) => {
            try{
                data[id] = document.getElementById(id).value;
            } catch(err) {
                debugger;
            }
        });
        this.apiConnector.setData("/formhelper/setipdata", data);
    }
    render() {
        return (
            <div>
      <Header title="OffShore Location"/>
                <form id="ipform">
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
                                            <InputText id="projectname" text="Project Name*" key="projectname" anyEntryChanged={this.anyEntryChanged.bind(this)} required />
                                        </div>
                                        <div className="mdl-cell mdl-cell--6-col"></div>
                                    </div>
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--6-col">
                                            <InputText id="projectid" text="Project ID*" key="projectid" anyEntryChanged={this.anyEntryChanged.bind(this)} required />
                                        </div>
                                        <div className="mdl-cell mdl-cell--6-col"></div>
                                    </div>
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--6-col">
                                            <DropDown id="vrfname" name="vrfname" title="VRF Name" key="vrfname" values={this.state.vrfname} anyEntryChanged={this.anyEntryChanged.bind(this)} />
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
                                            <button className="mdl-button mdl-js-button mdl-js-ripple-effect" onClick={this.validateForm.bind(this)} type="button">
                                                Validate
                                    </button>
                                        </div>
                                        <div className="mdl-cell mdl-cell--3-col">
                                            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" disabled={this.state.submit_disable} onClick={this.submitForm.bind(this)}>
                                                Submit
                                    </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mdl-cell mdl-cell--1-col">
                        <div id="demo-snackbar-example" class="mdl-js-snackbar mdl-snackbar">
                            <div class="mdl-snackbar__text"></div>
                            <button class="mdl-snackbar__action" type="button"></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default IPForm;