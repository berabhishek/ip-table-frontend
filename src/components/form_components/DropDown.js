import React from "react";

class DropDown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <select class="mdl-textfield__input" id={this.props.id} name={this.props.name} onChange={(e) => this.props.anyEntryChanged.call(this, e.target.value)}>
                        {this.props.values.map((value) => {
                            return <option value={value}>{value}</option>
                        })}
                    </select>
                    <label class="mdl-textfield__label" for={this.props.id}>{this.props.title}</label>
                    </div>
            </div>
        )
    }
}
export default DropDown;