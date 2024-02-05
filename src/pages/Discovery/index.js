import { useEffect, useState } from "react";
import Header from "../../components/Header"
import axios from "axios";
import Text from "./components/Text";
import GetProjects from "./components/GetProjects";

const Discovery = () =>{
  const token = localStorage.getItem("usersToken")
  // const tokenGoogle = localStorage.getItem("usersTokenGoogle")
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    imagem: "",
    id: null,
  });

  useEffect(() => {
    if(token) {
    axios.get("http://3.239.251.235:8000/api/v1/usuarios/usuario", {
      headers: {
      Authorization: `Bearer ${token}`
    }},
    ).then((response) => setUserInfo(response.data))
  }

  // if(tokenGoogle) {
  //   axios
  //   .get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokenGoogle}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${tokenGoogle}`
  //     }
  //   })
  //   .then((response) => {
  //     const formatId = response.data.id.substr(0,5)
  //       setUserInfo({
  //         first_name: response.data.given_name,
  //         last_name: response.data.family_name,
  //         email: response.data.email,
  //         imagem: response.data.picture,
  //         id: parseInt(formatId),
  //       });
  //     });
  // }

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