// le container d'etats des composantes

import React, {Component} from 'react'
import {connect} from 'react-redux'
import  {bindActionCreators} from 'redux'
import {selectBook} from '../actions/index'

class BookList extends Component {
    renderList() {
        //n oubliez pas le double return
        return (
            this.props.books.map( (book)=>{
                return(<li onClick= {()=>this.props.selectBook(book)} key={book.title}>{book.title}</li>)
            })
        )
      
      }

    render() {
        
        return (
           
            <ul className="list-group col-sm-4">
              
              {this.renderList() }
              
            </ul>
        )
    }    
}
//handle connection between redux and component BookList
function   mapStateToProps(state) {
    return (
        {
            books : state.books
        }
    )
}
//whenever an action of a book selection is called
//results should be dispatched to all reducers
function mapDispatchToProps (dispatch)  {
    return bindActionCreators({selectBook: selectBook},dispatch)
}

//actual connection between class component and the function mapStateToProps
export default connect(mapStateToProps,mapDispatchToProps)(BookList)