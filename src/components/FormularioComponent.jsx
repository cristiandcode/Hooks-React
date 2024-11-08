import { useForm } from "../Hooks/useForm"


    export const FormularioComponent = () => {
        const initialForm = {
            userName: '',
            email: '',
            password: ''
        }
       const {formState, onInputChange } =  useForm(initialForm)
       const {userName, email, password} = formState
        const onSubmit = (event) =>{
            event.preventDefault()
            console.log(formState)
        }

    return (

        <form onSubmit={onSubmit}>
    <div className="form-group">
        <label htmlFor="UserName"
        >UserName
        </label>
        <input type="user" 
        className="form-control" 
        name="Username"  
        placeholder="Enter your username"
        value={userName}
        onChange={onInputChange}
        />

       
    </div>
    <div className="form-group">
        <label htmlFor="email"
        >Email address
        </label>
        <input type="email"
        className="form-control"
        id="email"  
        placeholder="Enter email"
        value={email}
        onChange={onInputChange}
        />

       
    </div>
    <div className="form-group">
        <label htmlFor="password"
        >Password
        </label>
        <input type="password"
        className="form-control"
        id="password"
        placeholder="Password"
        value={password}
        onChange={onInputChange}
        />

        
    </div>
    <button type="submit"
    className="btn btn-primary"
    >Submit
    </button>
    </form>

    );
    }

