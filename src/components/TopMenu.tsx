'use client'

import Image from 'next/image';

const TopMenu: React.FC = () => {
  const menuItems = ['DESTINY 2', 'EPISODES', 'COMMUNITY', 'HELP', 'STORE', 'REWARDS'];

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <a className="navbar-brand me-3" href="#">
            <Image
              src="/Bungie_Logo.png"
              alt="Bungie Logo"
              width={100}
              height={40}
            />
          </a>
          <ul className="navbar-nav d-flex flex-row gap-3">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link text-white" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <a href="#" className="btn btn-warning me-2">PLAY DESTINY 2</a>
          <a href="#" className="btn btn-outline-light">MY ACCOUNT</a>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
