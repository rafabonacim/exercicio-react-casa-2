import { useState } from 'react';
import dummyAvatar from '../images/dummy-avatar.jpg';

function Topbar() {
  const [messages, setMessages]= useState(0);
  const [alertas, setAlertas]= useState(0);

  function alteraMensagem(event){
    event.preventDefault()
    setMessages(messages + 1)
  }
  function alteraNotifica(event){
    event.preventDefault()
    setAlertas(alertas + 1)
  }
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Sidebar Toggle (Topbar) --> */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">
        {/* <!-- Nav Item - Alerts --> */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown" onClick = {alteraNotifica} > 
            <i className="fas fa-bell fa-fw"></i>
            {/* <!-- Counter - Alerts --> */}
            <span className="badge badge-danger badge-counter">{alertas >= 10 ? (`${alertas}+`) : (alertas)}</span>
          </a>
        </li>

        {/* <!-- Nav Item - Messages --> */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="messagesDropdown"
            onClick={alteraMensagem}
          >
            <i className="fas fa-envelope fa-fw"></i>
            {/* <!-- Counter - Messages --> */}
            <span className="badge badge-danger badge-counter">{messages}</span>
          </a>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        {/* <!-- Nav Item - User Information --> */}
        <li className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Walter White
            </span>
            <img
              className="img-profile rounded-circle"
              src={dummyAvatar}
              width="60"
              alt=""
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
