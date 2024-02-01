import { useEffect, useState } from "react";
import Header from "../../components/Header"
import axios from "axios";


export default function Discovery(){
    const [token, setToken] = useState('');
    const [userInfo, setUserInfo] = useState([]);
  
    useEffect(() => {
      const formData = new FormData();
      formData.append('email', 'tha@gmail.com');
      formData.append('password', 'testeuser1');
  
      axios.post("http://3.239.251.235:8000/api/v1/usuarios/login", formData).then((response) => {
      setToken(response.data.access_token)
      })
    }, [])
  
    useEffect(() => {
      axios.get("http://3.239.251.235:8000/api/v1/usuarios/usuario", {
        headers: {
        Authorization: `Bearer ${token}`
      }},
      ).then((response) => setUserInfo(response.data))
    }, [token])

    return(
        <>
        <Header userInfo={userInfo}/>
        </>
    )
}