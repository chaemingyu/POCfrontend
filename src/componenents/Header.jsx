import React from 'react';
import {  useNavigate, Link  } from 'react-router-dom';



function Header(props) {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: '#370474', padding: '10px' }}>
            <Link style={{ display: 'flex', alignItems: 'center' }} to="/">
                <img
                    src="/res/TitleLogo.png"
                    alt="Title Logo"
                    style={{ width: '300px', height: '150px' }} // 이미지에 width와 height를 주는 스타일
                />
            </Link>

            <ul style={{ listStyleType: 'none', padding: '0', margin: '0', textAlign: 'center' }}>
                <li style={{ display: 'inline-block', margin: '0 10px' }}>
                    <div className="header-nav-item" onClick={() => navigate("/")} style={{color: 'white'}}>
                        홈
                    </div>
                </li>
                <li style={{ display: 'inline-block', margin: '0 10px' }}>
                    <div className="header-nav-item" onClick={() => navigate("/intro")} style={{color: 'white'}}>
                        소개
                    </div>
                </li>
            </ul>
        </div>
    
    );
}

export default Header;