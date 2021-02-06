import React, { FC } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../UI/Button';
import { RootState } from '../../store';
import { signout } from '../../store/actions/authActions';

const Header: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return(
    
      <div className="container">

        <div className="navbar-end">
          <div className="navbar-items">
            {!authenticated ? <div className="buttons">
              </div>
              :
              <Button text="Sign out" onClick={logoutClickHandler}/>
            }
          </div>
        </div>
      </div>
    
  );
}

export default Header;