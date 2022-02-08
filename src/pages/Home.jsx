
import React, {Component} from 'react'
import '../styles/styles.css'
import { Link } from 'react-router-dom'
import { Stack } from '../common/contentstack-api/api'

export default class Home extends Component{
    constructor() {
      super()
      this.state = { loading : true, result: null}
    }
    componentDidMount () {
      var  Query = Stack.ContentType("blogs_gazi").Query()
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
        <div className="d-md-flex justify-content-around">
          {
            post.map((value, index) => {
              return (
              <div className="card mb-5" style={{width: "300px"}} key={index}>
                <div className="card-header">
                  { value.categories }
                </div>
                <img className="img-fluid" src={value.image.url}/>
                <div className="card-body">
                    <h5 className="card-title mb-4">{value.title}</h5>
                    <Link to={`/detail/${value.uid}`}>
                      <p className="btn btn-dark w-100">Show more</p>
                    </Link>
                </div>
                <div dangerouslySetInnerHTML={{ __html: value.body} } />
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