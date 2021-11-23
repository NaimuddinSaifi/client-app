import { useNavigate } from "react-router"

function Login() {
    const navigate = useNavigate()

    const handleClick = () => {
        // if (localStorage.getItem('token')) {
            const client_id = 'client_id123'
            const redirect_uri = 'http://localhost:3000'
            const auth_server_frontend="https://secure-river-45347.herokuapp.com"
            const state = 'state'
            const url = `${auth_server_frontend}/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`
            window && window.location &&
                window.location.replace(url)
        // } else {
            // navigate('/login')
        // }

    }
    return (
        <div className="App">
            <header className="App-header">

                <button onClick={handleClick}>
                    Login With Auth Server
                </button>

            </header>
        </div>
    );
}

export default Login;
