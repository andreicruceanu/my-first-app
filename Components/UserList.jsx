import React from "react";
import Useriteam from "./UserIteam";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    //  console.log(props);
    this.state = {};
  }
  render() {
    return (
      <div className="userIteam">
        {this.props.user.map((user, index) => {
          return (
            <Useriteam
              name={user.name}
              email={user.email}
              isGoldClient={user.isGoldClient}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default UserList;
