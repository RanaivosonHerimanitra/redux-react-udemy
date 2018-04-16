import React, {Component} from 'react'
//import {connect} from 'react-redux'
import BookList from '../containers/book-list'
import BookDetails from '../containers/book-details';

export default class App extends Component {
   
    render () {
        //console.log("Props",this.props)
        return (
        <div>
            <BookList/>
            <BookDetails/>
        </div>)
    }
}
