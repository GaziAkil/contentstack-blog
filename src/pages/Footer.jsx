import React, {Component} from 'react'
import '../styles/styles.css'
import { Link } from 'react-router-dom'
import { Stack } from '../common/contentstack-api/api'

export default class Footer extends Component{
    constructor() {
      super()
      this.state = { loading : true, result: null}
    }
    componentDidMount () {
      var  Query = Stack.ContentType("blogs_footer_gazi").Query()
      .toJSON()
      .find()
      .then((result) => {
        this.setState({loading : false, result:result})
      })
      .catch((error) => {
        console.log(error)
      })
    }
  
    renderList (post) {
      return (
        <main>
            <div className="container-fluid bg-dark fixed-bottom">
            {
                post.map((value, index) => {
                return (
                <div className='text-white p-3' key={index}>
                    <p className='text-center m-0'>{value.copy_right}</p>
                </div>
                )
                })
            }
            </div>
        </main>
      )
    }

    render () {
      const {loading, result} = this.state
      return (this.state.loading) ? <div className='container'><h2>loading...</h2></div> : this.renderList(result[0])
    }
  }