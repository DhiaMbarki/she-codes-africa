import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

<<<<<<< HEAD
import Message from "../UI/Message";
import { setSuccess } from "../../store/actions/authActions";
import { RootState } from "../../store";
=======
import Message from '../UI/Message';
import { setSuccess } from '../../redux/actions/authActions';
import { RootState } from '../../redux/index';
>>>>>>> 82f0c589fd3bb14ae75b2ca0eff1071d236b46e8

const Dashboard: FC = () => {
  const { user, needVerification, success } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(setSuccess(""));
    }
  }, [success, dispatch]);

  return (
    <section className="section">
      <div className="container">
        {needVerification && (
          <Message type="success" msg="Please verify your email address." />
        )}
        <h1 className="is-size-1">Welcome {user?.firstName}</h1>
      </div>
    </section>
  );
};

export default Dashboard;
