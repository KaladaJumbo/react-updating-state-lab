// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    changeSettingBitrate = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                settings: {
                    ...prevState.settings,
                    bitrate: 12
                }
            }
        })
    }

    changeSettingResolution = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                settings: {
                    ...prevState.settings,
                    video: {
                        resolution: "720p"
                    }
                }
            }
        })
    }

    render () {
        return (
            <div>
                <button
                    className= "bitrate"
                    onClick= {() => { this.changeSettingBitrate()}}
                >
                    bitrate: {this.state.settings.bitrate}
                </button>

                <button
                    className= "resolution"
                    onClick= {() => { this.changeSettingResolution()}}
                >
                    resolution {this.state.settings.video.resolution}
                </button>
            </div>
        )
    }
}