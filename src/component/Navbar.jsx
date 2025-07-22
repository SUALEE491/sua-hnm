import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const menuList = [
      "여성",
      "Divided",
      "남성",
      "신생아/유아",
      "H&M Home",
      "Sale",
      "지속가능성",
    ];

  const navigate = useNavigate()

  const goToLogin=()=>{
    navigate('/login')
  };
  const search = (event)=>{
    if(event.key === "Enter"){
      //입력한 검색어를 읽어와서
      let keyword = event.target.value
      
      //url을 바꿔준다.
      navigate(`/?q=${keyword}`);

    }
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="navbar-section">
        <img
          width="100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s"
        />
      </div>
      <div className ="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div>
          <FontAwesomeIcon icon={faSearch}/>
          <input type="text" onKeyPress={(event)=>search(event)}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar
