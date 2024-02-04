import { useEffect, useState } from "react";
import Header from "../../components/Header"
import axios from "axios";
import Text from "./components/Text";
import GetProjects from "./components/GetProjects";

const Discovery = () =>{
  const token = localStorage.getItem("usersToken")
  const [userInfo, setUserInfo] = useState([]);

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
        <Text/>
        <GetProjects userInfo={userInfo}/>
        </>
    )
}

export default Discovery;