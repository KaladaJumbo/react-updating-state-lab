// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    incClick = () => {
        this.setState((prevState) => {

            return {
                timesClicked: prevState.timesClicked + 1
            }

        })
    }
    render() {
        return (
            <button
            onClick= { () => { this.incClick()}}
            >{this.state.timesClicked}</button>
        )
    }
}