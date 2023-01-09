import {useState} from 'react';

function AddUser({ addUser }) {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
  
    let handleSubmit = (event) => {
        event.preventDefault();
        addUser(name, userName);
        setName("");
        setUserName("");
    }
    return (
      <div>
        <form onSubmit={handleSubmit} className="user-content">
          <input
            className="input"
            onChange={(event) => setName(event.target.value)}
            type="text"
            value={name}
            data-id={name}
            placeholder="Enter your name"
          />
          <input
            className="input"
            onChange={(event) => setUserName(event.target.value)}
            type="text"
            value={userName}
            data-id={userName}
            placeholder="Enter your Username"
          />
          <input className="input" type="submit" value="Add User" />
        </form>
      </div>
    );
  }
  export default AddUser;
  
  