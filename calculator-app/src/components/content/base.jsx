import React, { Component } from 'react';

class Base extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <React.Fragment>
                    <div className="card" style={{ marginTop: "20px" }}>
                        <div className="card-body">
                            {this.props.children}
                        </div>
                    </div>
                </React.Fragment>
            </React.Fragment>
        );
    }
}

export default Base;