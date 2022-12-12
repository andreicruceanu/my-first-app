import React from "react";

function UserIteam(props) {
  const { name, email, isGoldClient } = props;
  //console.log(props);

  return (
    <div>
      <h3>Nume: {name}</h3>
      <h5>Email : {email}</h5>
      {isGoldClient ? <p>Client Gold</p> : null}
    </div>
  );
}

export default UserIteam;
