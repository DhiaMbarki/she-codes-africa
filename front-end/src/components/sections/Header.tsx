import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../UI/Button';
import { RootState } from '../../redux/index';
import { signout } from '../../redux/actions/authActions';
import './Header.css'

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return(
    
    <nav className="navbar is-spaced has-shadow">
    <div className="container">
      <div className="navbar-brand">
      </div>

      <div className="navbar-end">
        <div className="navbar-items">
          {!authenticated ? <div className="buttons">
             
            </div>
            :
            <div className="dhia">
            <Button text="Sign out" onClick={logoutClickHandler} />
            </div>
          }
        </div>
      </div>
    </div>
  </nav>
);
}

export default Header;