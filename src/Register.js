import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const[isLoading, setIsLoading] =useState(false);

    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const register ={ name, phone, gender};

        setIsLoading(true);

        fetch('http://localhost:4000/Register', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(register)
        })
        .then(()=>{
            setIsLoading(false);
            history.push('/');
        });
    }

    return ( 
        <div className="Register">
            <h2>Registration</h2>

            <div className="welcome">
                Welcome, { name }
            </div>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text"
                required
                value={name} 
                onChange={(e)=> setName(e.target.value)}
                />

                <label>Phone:</label>
                <input 
                type="number"
                required
                value={phone} 
                onChange={(e)=> setPhone(e.target.value)}
                />

                <label>Gender:</label>           
                <select
                required
                value={gender}
                onChange={(e)=> setGender(e.target.value)}>
                    {/* <option value="Select gender">--Select Gender (M/F)--</option> */}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {!isLoading && <button>Register</button>}
                {isLoading && <button disabled>Registered</button>}
            </form>
            
        </div>
     );
}
 
export default Register;