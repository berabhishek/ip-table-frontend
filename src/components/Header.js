import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                    <span class="mdl-layout-title">{this.props.title} - Update</span>
                    <div class="mdl-layout-spacer"></div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;