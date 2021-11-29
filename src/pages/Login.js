import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()

    const handleClick = () => {
        const client_id = process.env.REACT_APP_CLIENT_ID || 'E6qyTeX-cDiRB6IwwCBZR'
        const redirect_uri = process.env.REACT_APP_REDIRECT_API || 'http://localhost:3000'
        const state = 'state1234567890'
        const auth_frontend_url = process.env.REACT_APP_AUTH_FRONTEND_URL || "https://secure-river-45347.herokuapp.com"
        const url = `${auth_frontend_url}/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`
        window &&
            window.location &&
            window.location.replace(url)
    }

    return (
        <div className="App">
            <header className="App-header">
                <button className="Auth-btn" onClick={handleClick}>
                    Login With Auth Server
                </button>
            </header>
        </div>
    );
}

export default Login;
