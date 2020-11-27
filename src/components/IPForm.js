import React from "react";
import './styles/formstyles.css';
import DropDown from "./form_components/DropDown";
import InputText from "./form_components/InputText";
import TableElement from "./form_components/TableElement";
import ApiConnector from "../connector/ApiConnector";
import Header from "./Header";
import IPHelper from "../IPHelper";
import $ from "jquery";
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
            connection: [],
            device1: [],
            device2: [],
            devices: ["device1", "device2"],
            vrfname: [],
            vlans: [],
            subnets: [],
            region: [],
        }
        this.apiConnector = new ApiConnector();
        this.ipHelper = new IPHelper();
    }
    componentDidMount() {
        let keys = ["connection", "region"];
        keys.forEach(key => {
            this.setState((prevState, props) => {
            let values = this.ipHelper.formatData(`/formhelper/${key}`);
            prevState[key] = values;
            return prevState;
            });
        });
        this.setState((prevState, props) => {
            let values = this.apiConnector.fetchData(`/formhelper/vrfname`);
            if(typeof values === "undefined") {
                values = [];
            }
            values.unshift("");
            prevState["vrfname"] = values;
            return prevState;
        });
    }
    anyEntryChanged() {
        this.setState({ submit_disable: true });
    }

    findCountry(region) {
        
        if(typeof region !== "string") {
            console.error("Expected region to be string was given ", typeof region);
            return;
        }
        this.setState((prevState, props) => {
            let countries = this.ipHelper.formatData(`/formhelper/country/${region}`);
            prevState.country = countries;
            prevState.selected_region = region;
            
            return prevState;
        });
        this.anyEntryChanged();
    }

    findState(country) {
        if(typeof country !== "string") {
            console.error("Expected country to be a string was given ", typeof country);
            return;
        }
        this.setState((prevState, props) => {
            let states = this.ipHelper.formatData(`/formhelper/city/${country}`);
            prevState.state = states;
            prevState.selected_country = country;
            return prevState;
        });
        this.anyEntryChanged();
    }

    findOffice(city) {
        if(typeof city  !== "string") {
            console.error("City expected string was given", typeof city);
            return;
        }
        this.setState((prevState, props) => {
            let offices = this.ipHelper.formatData(`/formhelper/facility/${city}`)
            prevState.office = offices;
            prevState.selected_state = city;
            return prevState;
        });
        this.anyEntryChanged();
    }
//on connection change - update device and 
    onConnectivityTypeChanged(name) {
        this.updateDevices(name);
        if(name === "Shared Infrastructure") {
            this.getFreeVlans();
            
        }
    }

    getFreeVlans() {
        this.setState((prevState, props) => {
            let facility = document.getElementById("facility").value;
            if(facility === "") {
                console.error("Faciltiy is empty");
                return prevState;
            }
            let vlans = this.apiConnector.fetchData(`/formhelper/get_free_vlans/${facility}`)
            prevState.vlans.length = 4;
            prevState.vlans_store = vlans;
            return prevState;
        });
    }
    getChildSubnets(){
        for(let rowIndex = 1; rowIndex < 5; rowIndex++) {
            let enter_val = document.getElementById(`entervalue_${rowIndex}`).value;
            let facility = document.getElementById("facility").value;
            let child_subnet = this.apiConnector.fetchData(`/formhelper/subnetfilter/${facility}/${enter_val.split("/")[1]}`);
            if(child_subnet) {
                child_subnet = child_subnet["childsubnet"];
            } else {
                child_subnet = "";
            }
            this.setState((prevState, props) => {
                // prevState.subnets[rowIndex-1] = child_subnet;
                if(typeof prevState.subnets_store === "undefined") {
                    prevState.subnets_store = [];
                    prevState.subnets_store.length = 4;
                }
                prevState.subnets_store[rowIndex-1] = child_subnet;
                return prevState;
            });
    }
    }
    updateDevices(name) {
        this.setState((prevState, props) => {
            this.state.devices.forEach(device => {
                let values = this.ipHelper.formatData(`/formhelper/${device}/${name}`)
                prevState[device] = values;
                return prevState;
            });
        });
        this.anyEntryChanged();
    }

    showSnack(success , errMsg){
        let message = "";
        if(success) {
            message = "Form is valid!";
        } else {
            message = errMsg;
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
    updateFacility() {
        this.getChildSubnets();
        this.getFreeVlans();
        for(let i=1; i< 5;i++) {
            this.updateConnections(i);
        }
    }
    updateConnections(rowIndex) {
        let device1 = document.getElementById(`device1_${rowIndex}`).value;
        let device2 = document.getElementById(`device2_${rowIndex}`).value;
        let facility = document.getElementById("facility").value;
        if(device1 !== "" && device2 !== "" && facility !== "")  {
            this.setState((prevState, props)=> {
                prevState.vlans[rowIndex-1] = prevState.vlans_store[rowIndex-1] ? prevState.vlans_store[rowIndex-1]:  "";
                prevState.subnets[rowIndex-1] = prevState.subnets_store[rowIndex-1];
                return prevState;
            });
        } else {
            this.setState((prevState, props)=> {
                prevState.vlans[rowIndex-1] = "";
                prevState.subnets[rowIndex-1] = "";
                return prevState;
            });
        }
    }

    enterValueChanged(rowIndex) {
        let enter_val = document.getElementById(`entervalue_${rowIndex}`).value;
        let device1 = document.getElementById(`device1_${rowIndex}`).value;
        let device2 = document.getElementById(`device2_${rowIndex}`).value;
        let facility = document.getElementById("facility").value;
        
        let child_subnet = this.apiConnector.fetchData(`/formhelper/subnetfilter/${facility}/${enter_val.split("/")[1]}`);
        if(child_subnet) {
            child_subnet = child_subnet["childsubnet"];
        } else {
            child_subnet = "";
        }
        this.setState((prevState, props) => {
            if(device1 !== "" && device2 !== "" && facility !== "") {
                prevState.subnets[rowIndex-1] = child_subnet;
            }
            prevState.subnets_store[rowIndex-1] = child_subnet;
            return prevState;
        });
    }

    validateForm() {
        let projectname = document.getElementById("projectname").value;
        let projectid = document.getElementById("projectid").value;
        let vrfname_selected = document.getElementById("vrfname").value;
        let msg = "Invalid Form Data";
        let data = {};
        if(projectname === "") {
            msg = "Project Name Is Empty";
        } else if(projectid === "") {
            msg = "Project Id Is Empty";
        } else if(vrfname_selected === "") {
            msg = "VRF Name Is Empty";
        } else {
            if(this.props.match.params.existing === "new") {
                data = this.apiConnector.fetchData(`/formhelper/validateany/${projectname}/${projectid}/${vrfname_selected}`);
            } else {
                data = this.apiConnector.fetchData(`/formhelper/validate/${projectname}/${projectid}/${vrfname_selected}`);
            }
        }
            if(data && data.valid) {//check data is valid 
                this.setState((prevState, props) => {
                    prevState.submit_disable = false;
                    return prevState;
            });
                this.showSnack(true);
            } else {
                this.showSnack(false , msg);
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
            }
        });
        if(this.props.match.params.existing === "new") {
            this.apiConnector.setData("/formhelper/setipdata/new", data);
        } else {
            this.apiConnector.setData("/formhelper/setipdata/existing", data);
        }
    }

    resetForm() {
        document.getElementById("ipform").reset();
        $(".mdl-textfield").removeClass("is-dirty")
    }

    releaseForm() {
        let projectid = document.getElementById("projectid").value;
        let facility = document.getElementById("facility").value;
        let vrfname = document.getElementById("vrfname").value;
        let projectname = document.getElementById("projectname").value;
        this.apiConnector.deleteData(`/formhelper/cleariptable/${projectname}/${projectid}/${vrfname}/${facility}`);
        this.resetForm();
    }

    render() {
        return (
            <div>
                <Header title="Input Data - PD VRF Extension on Shared Infrastructure"/>
                <form id="ipform">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--1-col"></div>
                        <div className="mdl-cell mdl-cell--10-col">
                            <div className="mdl-card ip-full-width mdl-shadow--2dp">
                                <div className="mdl-card__supporting-text ip-full-width no-padding">
                                    <div className="mdl-grid less-height">
                                        <div className="mdl-cell mdl-cell--2-col">
                                            <DropDown id="region" name="region" title="Region" values={this.state.region} anyEntryChanged={this.findCountry.bind(this)} />
                                        </div>
                                        <div className="mdl-cell mdl-cell--3-col">
                                            <DropDown id="country" name="country" title="Country" values={this.state.country} anyEntryChanged={this.findState.bind(this)} />
                                        </div>
                                        <div className="mdl-cell mdl-cell--3-col">
                                            <DropDown id="city" name="city" title="City" values={this.state.state} anyEntryChanged={this.findOffice.bind(this)} />
                                        </div>
                                        <div className="mdl-cell mdl-cell--2-col">
                                            <DropDown id="facility" name="facility" title="Facility" values={this.state.office} anyEntryChanged={this.updateFacility.bind(this)} />
                                        </div>
                                        <div className="mdl-cell mdl-cell--2-col">
                                            <DropDown id="connectivitytype" name="connectivitytype" title="Connectivity Type" values={this.state.connection} anyEntryChanged={this.onConnectivityTypeChanged.bind(this)} />
                                        </div>
                                    </div>
                                    <div className="mdl-grid less-height">
                                        <div className="mdl-cell mdl-cell--4-col">
                                            <InputText id="projectname" text="Project Name*" key="projectname" anyEntryChanged={this.anyEntryChanged.bind(this)} required />
                                        </div>
                                        <div className="mdl-cell mdl-cell--4-col">
                                            <InputText id="projectid" text="Project ID*" key="projectid" anyEntryChanged={this.anyEntryChanged.bind(this)} required />

                                        </div>
                                        <div className="mdl-cell mdl-cell--4-col">
                                           { this.props.match.params.existing === "existing" ? 
                                            <DropDown id="vrfname" name="vrfname" title="VRF Name*" key="vrfname" values={this.state.vrfname} anyEntryChanged={this.anyEntryChanged.bind(this)} required/> 
                                            :
                                            <InputText id="vrfname" name="vrfname" text="VRF Name*" key="vrfname" anyEntryChanged={this.anyEntryChanged.bind(this)} required/> 
                                        }

                                        </div>
                                    </div>
                                    <div className="mdl-grid">
                                        <div className="mdl-cell mdl-cell--12-col">
                                            <TableElement 
                                                headers={["Device 1", "Device 2", "VLAN", "Subnet", "Enter Value"]} 
                                                device1={this.state.device1} 
                                                device2={this.state.device2} 
                                                vlans={this.state.vlans} 
                                                subnets={this.state.subnets} 
                                                entervaluerange={["/28","/29", "/30"]}
                                                enterValueChanged={this.enterValueChanged.bind(this)}
                                                anyEntryChanged={this.anyEntryChanged.bind(this)}
                                                updateConnections={this.updateConnections.bind(this)}
                                            />
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
                                        <div className="mdl-cell mdl-cell--3-col">
                                            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.resetForm.bind(this)}>
                                                Reset
                                            </button>
                                        </div>
                                        <div className="mdl-cell mdl-cell--3-col">
                                            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={this.releaseForm.bind(this)}>
                                                Release
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