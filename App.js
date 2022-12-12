import "./App.css";
import React from "react";
import UserList from "./Components/UserList";
import PostList from "./Components/PostList";
import UserAddForm from "./Components/UserAddForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "white",
      user: [],
      post: [],
      viewUser: true,
      viewPost: false,
    };
  }

  handleBackgroundChange(e) {
    e.target.className === "button1"
      ? this.setState({ background: "black", color: "white" })
      : this.setState({ background: "green" });
  }

  switchList(e) {
    e.target.className === "btn-user"
      ? this.setState({ viewUser: true, viewPost: false })
      : this.setState({ viewUser: false, viewPost: true });
  }

  updateUserList(user) {
    this.setState((previous) => {
      return {
        user: [...previous.user, user],
      };
    });
    console.log(this.state);
  }

  render() {
    return (
      <div
        className="App"
        style={{ background: this.state.background, color: this.state.color }}
      >
        <div className="buttonDarkMode">
          <div
            className="button1"
            onClick={(event) => this.handleBackgroundChange(event)}
          ></div>
          <div
            className="button2"
            onClick={(event) => this.handleBackgroundChange(event)}
          ></div>
        </div>
        <UserAddForm updateUserList={(user) => this.updateUserList(user)} />
        <h1> Lista utilizatori</h1>
        <div className="containerListAll">
          <div className="containerUserIteam">
            {this.state.viewUser === true ? (
              <UserList user={this.state.user} />
            ) : null}
          </div>
          <div className="containerPost">
            {this.state.viewPost === true ? (
              <PostList post={this.state.post}></PostList>
            ) : null}
          </div>
        </div>
        <div className="container-btn">
          <button
            className="btn-user"
            onClick={(event) => this.switchList(event)}
          >
            Afiseaza Useri
          </button>
          <button
            className="btn-postari"
            onClick={(event) => this.switchList(event)}
          >
            Afiseaza Postari
          </button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        data.map((x) => (x.isGoldClient = true));
        const UserFilter = data.filter((x) => x.id < 4);

        return this.setState({ user: UserFilter });
      });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const postFilter = data.filter((x) => x.id < 4);
        return this.setState({ post: postFilter });
      });
  }
}

export default App;
