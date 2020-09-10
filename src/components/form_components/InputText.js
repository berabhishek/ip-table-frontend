import React from "react";

class InputText extends React.Component {
    render() {
        return (
            <div>
                <div className={"mdl-textfield mdl-js-textfield mdl-textfield--floating-label"} onKeyDown={this.props.anyEntryChanged}>
                    <input className="mdl-textfield__input" type="text" id={this.props.id} required={this.props.required}/>
                    <label className="mdl-textfield__label" for={this.props.id}>{this.props.text}</label>
                </div>
            </div>
        )
    }
}
export default InputText;