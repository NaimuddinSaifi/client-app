import { useEffect } from "react";
import axios from "axios";
import { useLocation ,useNavigate } from "react-router-dom"

function Code(props) {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const code = new URLSearchParams(location && location.search).get("code")
        const url = `${process.env.REACT_APP_SERVER_URL}/api/oauth/token?code=${code}&grant_type=authorization_code&redirect_uri=http://localhost:3000/auth&client_id=cid&client_secret=csec`
        axios.get(url)
            .then(res => {
                console.log(res)
                localStorage.setItem('access_token', res && res.data && res.data.data.access_token)
                // navigate('/home')
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            CODE
        </div>
    );
}

export default Code;
