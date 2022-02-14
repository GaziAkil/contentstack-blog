import React, {Component} from 'react'
import '../styles/styles.css'
import { Stack } from '../common/contentstack-api/api'

export default class Hero extends Component{
    constructor() {
      super()
      this.state = { loading : true, result: null }
    }
    componentDidMount () {
      var  Query = Stack.ContentType("blogs_hero_gazi").Query()
      .toJSON()
      .find()
      .then((result) => {
        console.log(result)  
        this.setState({loading : false, result:result})
      })
      .catch((error) => {
        console.log(error)
      })
    }
  
    renderList (post) {
      return (
        <main>
            <div className="container" >
            {
                post.map((value, index) => {
                return (
                <div className='text-white p-3' key={index} style={{
                    background: `url(${value.hero.hero_image.url})`,
                    height:'100vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}>
                <a className='btn btn-warning' href={value.hero.button.href}>{value.hero.button.title}</a>
                {/* <a href={'mailto:{value.hero.button.href}'}>{value.hero.button.title}</a> */}
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
      return (this.state.loading) ? <div className='container'><h2>loading..</h2></div> : this.renderList(result[0])
    }
  }