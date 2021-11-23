import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom"

function Home(props) {
    const location = useLocation()
    const navigate = useNavigate()

    const [userName, setUserName] = useState('')

    useEffect(() => {
        const url = `${process.env.REACT_APP_SERVER_URL}/api/oauth/profile`
        const headers = {
            authorization: localStorage.getItem('access_token')
        }
        axios.get(url, headers)
            .then(res => {
                console.log(res)
                if (res && res.data && res.data.data && res.data.data.userName) {
                    setUserName(res.data.data.userName)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            Home Page
            Welcome :  {userName}
        </div>
    );
}

export default Home;
