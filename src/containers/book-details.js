import React , {Component} from 'react'
import {connect} from 'react-redux'
class BookDetails extends Component {
    render () {
        //conditional rendering:
        if (!this.props.book) {
            return <div>select a book</div>
        } else {
            return <div>Book details:
            <h2>Title: {this.props.book.title}</h2>
            <h2>#Pages: {this.props.book.pages}</h2>
        </div>

        }
       
    }
}
//handle connection between redux and component BookDetails
function   mapStateToProps(state) {
    return (
        {
            book : state.activeBook
        }
    )
}
export default connect(mapStateToProps)(BookDetails)