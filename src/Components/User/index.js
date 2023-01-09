// import { Link } from "react-router-dom";
import "./style.css"




function User({i, user, userName, deleteUser}){

let updateInput = (i,user) => {
    let selectedUser = document.getElementsByClassName('.user-list')
    selectedUser.removeChild('h2');
    var input = document.createElement('input');
    input.id = 'i';
    input.value = user.name;
    selectedUser.appendChild(input);
    input.select();
} 

    return(
        <div className="user-container">
            <div className="user-list">
                <h2 className="user-name" onClick={() => {updateInput(i,user)}}>
                    <span className="user-index">{i+1}</span>
                    {user.name}
                </h2>
                <p className="username">
                    {user.userName}
                </p>
            </div>
            <span className="delete-btn" onClick={() => deleteUser(i)}>X</span>
            {/* <Link to='/edit'>
                <button className="edit-btn">Edit</button>
            </Link> */}

        </div>
    )
}
export default User;