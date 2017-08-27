import React, { Component } from 'react';
import { Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        var items = this.props.items;
        var nodes = [];
        items.forEach((item)=> {
            if (item && item.name && item.id) {
                nodes.push(
                    <NavItem key={item.id} className="LinkText">
                        <Link to={"/news/"+item.id}>{item.name}</Link>
                    </NavItem>
                );
            }
        });
        return (
            <div className="SidebarContainer">
                <Nav vertical>
                    {nodes}
                </Nav>
            </div>
        );
    }
}

export default Sidebar;
