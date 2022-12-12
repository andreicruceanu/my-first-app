import React from "react";

class UserAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nume: "",
      email: "",
      isGoldClient: false,
    };
  }
  handleNameChange(e) {
    this.setState({
      nume: e.target.value,
    });
    console.log(this.state);
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
    console.log(this.state);
  }
  handleIsGoldClientGoldChange(e) {
    this.setState({
      isGoldClient: e.target.checked,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: this.state.nume,
      email: this.state.email,
      isGoldClient: this.state.isGoldClient,
    };
    this.props.updateUserList(newUser);
  }

  render() {
    return (
      <form
        className="formAddUser"
        onSubmit={(event) => this.handleFormSubmit(event)}
      >
        <h1>Adauga Utilizator</h1>
        <label htmlFor="nume">Nume</label>
        <input
          value={this.state.nume}
          type="text"
          id="nume"
          onChange={(event) => {
            this.handleNameChange(event);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={this.state.email}
          onChange={(event) => this.handleEmailChange(event)}
        />
        <label htmlFor="clientGold">
          Este client Gold ?
          <input
            type="checkbox"
            id="clientGold"
            checked={this.state.isGoldClient}
            onChange={(event) => this.handleIsGoldClientGoldChange(event)}
          />
        </label>
        <div className="errorContainer">
          <input type="submit" id="btn-submit" value="Adauga User"></input>
        </div>
      </form>
    );
  }
}

export default UserAddForm;
