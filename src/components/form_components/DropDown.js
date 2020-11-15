import React from "react";

class DropDown extends React.Component {
    render() {
        return (
            <div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <select 
                        className="mdl-textfield__input" 
                        id={this.props.id} 
                        name={this.props.name} 
                        onChange={(e) => this.props.anyEntryChanged.call(this, e.target.value)}
                        required={this.props.required}
                        >
                        {this.props.values.map((value) => {
                            return <option value={value}>{value}</option>
                        })}
                    </select>
                    <label className="mdl-textfield__label" for={this.props.id}>{this.props.title}</label>
                    </div>
            </div>
        )
    }
}
export default DropDown;