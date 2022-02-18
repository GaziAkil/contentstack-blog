
import React, {Component} from 'react'
import '../styles/styles.css'
import Hero from './Hero'

export default class About extends Component{
    constructor() {
      super()
      this.state = { loading : true, result: null}
    }
    render() {
        return (
            <Hero/>
        )
    }
}