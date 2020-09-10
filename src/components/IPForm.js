import React from "react";
import './styles/formstyles.css';
import DropDown from "./form_components/DropDown";
import InputText from "./form_components/InputText";
import TableElement from "./form_components/TableElement";
class IPForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submit_disable: true
        }
    }
    anyEntryChanged() {
        this.setState({submit_disable: true});
    }

    validateForm() {
        this.setState({submit_disable: false});
    }
    render() {
        return (
            <div>
                <form>
                <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--2-col"></div>
                    <div class="mdl-cell mdl-cell--8-col">
                        <div class="mdl-card full-width">
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">{this.props.title}</h2>
                        </div>
                        <div class="mdl-card__supporting-text full-width no-padding">
                            <div class="mdl-grid">
                                <div class="mdl-cell mdl-cell--2-col">
                                    <DropDown id="region" name="region" title="Region" values={["APAC", "BPAC"]} anyEntryChanged={this.anyEntryChanged.bind(this)}/>
                                </div>
                                <div class="mdl-cell mdl-cell--3-col">
                                    <DropDown id="country" name="country" title="Country" values={["India"]}/>
                                </div>
                                <div class="mdl-cell mdl-cell--3-col">
                                    <DropDown id="city" name="city" title="City" values={["Hyderabad"]} anyEntryChanged={this.anyEntryChanged.bind(this)}/>
                                </div>
                                <div class="mdl-cell mdl-cell--2-col">
                                    <DropDown id="facility" name="facility" title="Facility" values={["HDC1", "HDC2", "HDC3"]} anyEntryChanged={this.anyEntryChanged.bind(this)}/>
                                </div>
                                <div class="mdl-cell mdl-cell--2-col">
                                    <DropDown id="connectivitytype" name="connectivitytype" title="Connectivity Type" values={["Shared Infra", "Ad-Hoc"]} anyEntryChanged={this.anyEntryChanged.bind(this)}/>
                                </div>
                            </div>
                            <div class="mdl-grid">
                                <div class="mdl-cell mdl-cell--8-col">
                                    <InputText id="projectname" text="Project Name*" anyEntryChanged={this.anyEntryChanged.bind(this)} required/>
                                </div>
                                <div class="mdl-cell mdl-cell--4-col"></div>
                            </div>
                            <div class="mdl-grid">
                                <div class="mdl-cell mdl-cell--8-col">
                                    <InputText id="projectid" text="Project ID*" anyEntryChanged={this.anyEntryChanged.bind(this)} required/>
                                </div>
                                <div class="mdl-cell mdl-cell--4-col"></div>
                            </div>
                            <div class="mdl-grid">
                                <div class="mdl-cell mdl-cell--8-col">
                                    <DropDown id="vrname" name="vrname" title="VR Name Type" values={["GDN:ABC"]} anyEntryChanged={this.anyEntryChanged.bind(this)}/>
                                </div>
                                <div class="mdl-cell mdl-cell--4-col"></div>
                            </div>
                            <TableElement headers={["Device 1", "Device 2", "VLAN", "Subnet", "Enter Value"]} anyEntryChanged={this.anyEntryChanged.bind(this)}/>
                        </div>
                        <div class="mdl-card__actions">
                        <div class="mdl-grid">
                                <div class="mdl-cell mdl-cell--3-col">
                                    <button class="mdl-button mdl-js-button mdl-js-ripple-effect" onClick={this.validateForm.bind(this)}>
                                        Validate
                                    </button>
                                </div>
                                <div class="mdl-cell mdl-cell--3-col">
                                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" disabled={this.state.submit_disable}>
                                        Submit
                                    </button>
                                </div>
                        </div>
                        </div>
                    </div>
                        </div>
                    <div class="mdl-cell mdl-cell--2-col"></div>
                </div>
                </form>
            </div>
        )
    }
}
export default IPForm;