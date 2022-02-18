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
          {
            post.map((value, index) => {
              return (
              
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className='text-white pt-5 text-center' key={index} style={{
                          background: `url(${value.hero.hero_image.url})`,
                          height:'70vh',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}>
                      <div className='text-white pb-3' dangerouslySetInnerHTML={{ __html: value.hero.hero_text} } />
                      <a className='btn btn-danger' href={value.hero.button.href}>{value.hero.button.title}</a>
                      {/* <a href={'mailto:{value.hero.button.href}'}>{value.hero.button.title}</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              )
              })
          }
        </main>
      )
    }

    render () {
      const {loading, result} = this.state
      return (this.state.loading) ? <div className='container'><h2>loading..</h2></div> : this.renderList(result[0])
    }
  }