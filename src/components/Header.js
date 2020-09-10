import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div>
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                    <span class="mdl-layout-title">{this.props.title}</span>
                    <div class="mdl-layout-spacer"></div>
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                        <a class="mdl-navigation__link" href="">Link</a>
                    </nav>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header;