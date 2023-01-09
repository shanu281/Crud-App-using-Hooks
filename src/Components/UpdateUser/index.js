import {useState} from 'react'
import { withRouter } from 'react-router-dom'

function UpdateUser(props){

    let id = props.location.id
    let [name, setName] = useState(JSON.parse(localStorage.getItem('data'))[id].name);
    let [userName, setUserName] = useState(JSON.parse(localStorage.getItem('data'))[id].userName);

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = JSON.parse(localStorage.getItem('data'));
            data[id] = {name, userName};
            localStorage.setItem('data', JSON.stringify(data));
             props.history.push('/'); 
    }
    
    const handleChange =({target}) => {
        let {id} = target.dataset.id;
        if(id === "name"){
            setName(target.value)
        }
        if(id === "userName"){
            setUserName(target.value)
        }
    }

    return(
        <div>
            <form
            onSubmit={handleSubmit}
            className= "user-content">
                <input
                  onChange={handleChange}
                  type= "text"
                  value={name}
                  data-id= "name"
                  placeholder='Enter Name'
                />
                <input
                  onChange={handleChange}
                  type="text"
                  value={userName}
                  data-id= 'userName'
                  placeholder='Enter Username'
                />
                <input
                 className='input'
                 type='submit'
                 value='Update User'
                />

            </form>
        </div>
    )
}