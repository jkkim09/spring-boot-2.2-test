import React, { Component, Fragment } from 'react';

class Dpage extends Component {
    render() {
        const list = [1, 2, 3 ,4 ,5]
        return (
            <Fragment>
                <table>
                    <tbody>
                        <tr>
                            {list.map((value) => <td key={value.toString()}>hello Dpage {value}</td>)}
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default Dpage;