import {useState} from 'react'
import User from '../User';
import AddUser from '../AddUser';
import "./style.css"

export default function App(){
    let [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);

    const addUser = (name, userName) => {
        setData(data.concat({name, userName}))
    }

    const deleteUser = (i) => {
        let newData = [...data];
        newData.splice(i, 1);
        localStorage.setItem('data', JSON.stringify(newData));
        setData(newData);
    };

    return(
        <div className='App'>
          <h1>List of User</h1>
          <hr />
          <AddUser addUser={addUser}/>
          <div>
              {
                  data.length !== 0 && (
                      <div>
                          {data.length > 1 ? `${data.length} User added` : `${data.length} User added`} {''}
                          </div>
                  )
              }
              {
                  data.map((user, i) => (
                      <User key={i} i={i} user= {user} userName = {user.userName} deleteUser= {deleteUser} />
                  ))
              }
          </div>
        </div>
    )
}