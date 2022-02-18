import React, {Component} from 'react'
import { Stack } from '../common/contentstack-api/api'
import '../styles/styles.css'
export default class Detail extends Component{
    constructor(props) {
      super(props)
      console.log(props.match.params.uid)
      this.uid = props.match.params.uid
      this.state = { loading : true, result: null}
    }

    componentDidMount () {
      var  Query = Stack.ContentType("blogs_gazi").Entry(this.uid)
      .toJSON()
      .fetch()
      .then((result) => {
        console.log(result);
        this.setState({loading : false, result:result})
      })
      .catch((error) => {
        console.log(error)
      })
    }

    renderList (post) {
      return (
        <main>
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <p>Date: { post.date }</p>
              <h2 className='title-pink'>{ post.blog_title }</h2>
              <p>Category: { post.categories }</p>
              <p>Author: { post.author }</p>
              <br></br>
              <img className="img-fluid d-block mx-auto rounded w-50" src={post.image.url}/>       
              <div dangerouslySetInnerHTML={{ __html: post.description} } />
              {/* <p>{ post.description }</p> */}
            </div>
          </div>
        </div>
        </main>
      )
    }

    render () {
    const {loading, result} = this.state
      return (this.state.loading) ? <div className='container'><h2>loading...</h2></div> : this.renderList(result)
    }
}