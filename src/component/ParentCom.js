import React, { Component } from 'react'
import PureComp from './PureComp'
import ReguCom from './ReguCom'

class ParentCom extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Vishwash'
        }
    }

    componentDidMount(){
        setInterval(() => {  
        this.state({
            name : 'Vishwash'
        })
    },2000)
    }
    

    render() {
        console.log('*******Parent Componenet Render********')
        return (
            <div>
                Parent Component
                <ReguCom name={this.state.name}></ReguCom>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentCom
