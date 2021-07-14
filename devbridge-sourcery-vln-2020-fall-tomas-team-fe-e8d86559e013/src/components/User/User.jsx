import React from 'react';

const User = ({ user }) => (
  <div>
    <p>
      User name:
      {user.name}
    </p>
    <p>
      User surname:
      {user.surname}
    </p>
  </div>
);

export default User;
