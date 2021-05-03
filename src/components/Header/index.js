import React from 'react';

import './style.css';

function Header({black}) {
  return (
    <header className={black ? 'background' : ''}>
        <div className="header--logo">
            <a href="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" />
            </a>
        </div>
        <div className="header--user">
            <a href="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
            </a>
            <div className="user--name">VictorGAG</div>
        </div>
    </header>
  );
}

export default Header;