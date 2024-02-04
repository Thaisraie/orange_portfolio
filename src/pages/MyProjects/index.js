import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Profile from './components/Profile';
import CreateProjects from './components/CreateProjects';
import axios from 'axios';

const MyProject = () => {
  const token = localStorage.getItem("usersToken")
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios.get("http://3.239.251.235:8000/api/v1/usuarios/usuario", {
      headers: {
      Authorization: `Bearer ${token}`
    }},
    ).then((response) => setUserInfo(response.data))
  }, [token])

    return (
      <>
        <Header userInfo={userInfo}/>
        <Profile userInfo={userInfo}/>
        <CreateProjects userInfo={userInfo}/>
        </>
    )
}

export default MyProject;
