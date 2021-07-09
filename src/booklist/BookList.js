import React from "react";
import { connect } from "react-redux";
import BooklistForm from "../booklist/components/BooklisForm";
import List from "../booklist/components/List";

class BookList extends React.Component {
  addBook = (name, description, auther, id) => {
    this.props.dispatch({
      type: "add item",
      payload: {
        name,
        description,
        auther,
        id
      }
    });
  };

  delBook = (id) => {
    this.props.dispatch({
      type: "del item",
      payload: {
        id
      }
    });
  };

  editBook = (id, newname, newdescription, newauther) => {
    this.props.dispatch({
      type: "edit item",
      payload: {
        id,
        newname,
        newdescription,
        newauther
      }
    });
  };

  render() {
    return (
      <>
        <BooklistForm
          name={this.props.name}
          description={this.props.description}
          auther={this.props.auther}
          addBook={this.addBook}
        />
        <List
          items={this.props.items}
          delBook={this.delBook}
          editBook={this.editBook}
          logout={this.props.logout}
        />
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    items: state.items
  };
}
export default connect(mapStateToProps)(BookList);

//export default connect()(BookList);
