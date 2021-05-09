// we are learning useState hooks here 
import React,{useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const {setAlert} = alertContext; 
    
    // useState with default value ''
    const [text,setText] = useState('');

    const onSubmit = e => {
        e.preventDefault()
        if(text === ""){
            setAlert( "please write something", "light" )
        }
        else{
            githubContext.searchUsers(text);
            setText('');
        } 
    } 

    const onChange = e => setText(e.target.value);

        return (
            <div>
               <form onSubmit={onSubmit} className= "form">
                <input type="text" 
                       name= "text" 
                       placeholder="Search Users..."
                       value= {text}
                       onChange= {onChange}
                />
                
                <input  type= "submit"
                        value = "Search"
                        className= "btn btn-dark btn-block"
                />
                </form> 
                { githubContext.users.length > 0 && (
                    <button
                    className = "btn btn-light btn-block"
                    onClick = {githubContext.clearUsers}
                    
                    > clear </button>
                ) }


            </div>
        )
}


export default Search
