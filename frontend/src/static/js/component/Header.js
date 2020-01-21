import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">AppPage</Link></li>
                    <li><Link to="/a">Apage</Link></li>
                    <li><Link to="/b">Bpage</Link></li>
                    <li><Link to="/c">Cpage</Link></li>
                </ul>
                <hr/>
            </div>
        )
    }
}

export default Header;