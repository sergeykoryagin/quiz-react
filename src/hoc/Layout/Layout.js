import React, {Component} from "react";
import styles from './Layout.module.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }

    handlerMenuToggleClick = () => {
        this.setState(prevState => ({
                menu: !prevState.menu
            })
        )
    }

    render() {
        return (
            <div className={styles.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                />

                <MenuToggle
                    onMenuToggleClick={this.handlerMenuToggleClick}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;