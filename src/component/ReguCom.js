import React, { Component } from 'react'

class ReguCom extends Component {
    render() {
        console.log('***Regular Component Render***')
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default ReguCom
