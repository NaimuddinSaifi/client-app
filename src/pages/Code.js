import { useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom"


function Code(props) {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const code = new URLSearchParams(location && location.search).get("code")
        const redirect_uri = process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000'
        const client_id = process.env.REACT_APP_CLIENT_ID || 'uidWomMlTsJhRam0zm8AK'
        const client_secret = process.env.REACT_APP_CLIENT_SECRET || '0nh-UdU_Vi4Geo73Ek78-'
        const url = `${process.env.REACT_APP_SERVER_URL}/api/oauth/token?code=${code}&grant_type=authorization_code&redirect_uri=${redirect_uri}&client_id=${client_id}&client_secret=${client_secret}`
        axios.get(url)
            .then(res => {
                console.log(res)
                // localStorage.setItem('access_token', res && res.data && res.data.data.access_token)
                // navigate('/home')
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            CODE EXCHANGE FOR TOKEN
        </div>
    );
}

export default Code;
