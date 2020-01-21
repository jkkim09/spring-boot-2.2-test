import React, { Component } from 'react';

class Apage extends Component {
    constructor(props) {
        super(props)
    }

    styleReturn() {
        return {
            fontSize: '30px'
        }
    }
    
    render() {
        const apage_stype = this.styleReturn()
        return (
            <div style={apage_stype}>
                Hello Apage {this.props.name}
            </div>
        );
    }
}

export default Apage;