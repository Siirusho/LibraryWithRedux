import React from "react";

class BooklistForm extends React.Component {
  state = {
    name: "",
    description: "",
    auther: ""
  };
  handleChangeName = (e) => {
    const { value: name } = e.target;
    this.setState({ name });
  };
  handleChangeDescription = (e) => {
    const { value: description } = e.target;
    this.setState({ description });
  };
  handleChangeAuther = (e) => {
    const { value: auther } = e.target;
    this.setState({ auther });
  };
  handleAdd = () => {
    if (this.state.name || this.state.description || this.state.auther) {
      this.props.addBook(
        this.state.name,
        this.state.description,
        this.state.auther
      );
    }
    this.setState({
      name: "",
      description: "",
      auther: ""
    });
  };

  render() {
    const { name, description, auther } = this.state;
    return (
      <div id="addbookform">
        <h1> Library </h1>
        <h3>Create new book</h3>
        <form>
          <input
            placeholder="Enter BookName"
            value={name}
            onChange={this.handleChangeName}
          />
          <input
            placeholder="Enter Descrption"
            value={description}
            onChange={this.handleChangeDescription}
          />
          <input
            placeholder="Enter Auther"
            value={auther}
            onChange={this.handleChangeAuther}
          />
          <label onClick={this.handleAdd}>Add book</label>
        </form>
      </div>
    );
  }
}

export default BooklistForm;
