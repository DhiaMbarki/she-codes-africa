// sign up .js
import React, { FC, useState, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../UI/input';
import Button from '../UI/Button';
import Message from '../UI/Message';
import { signup, setError } from '../../redux/actions/authActions';
import { RootState } from '../../redux/index';
import './SignUp.css'

const SignUp: FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('')
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    return () => {
      if(error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);


  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if(error) {
      dispatch(setError(''));
    }
    setLoading(true);
    dispatch(signup({ email, password, firstName, type  }, () => setLoading(false)));
  }
  

  return(
    <section className="section">
      <div className="container">
        <h2 className="has-text-centered is-size-2 mb-3">Sign Up</h2>
        <form className="form" onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          <Input 
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            placeholder="First name"
            label="First name"
          />
          <Input 
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email address"
            label="Email address"
          />
          <Input 
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            label="Password"
          />


    <input  
 type="radio" className="option-input radio" value={type} onClick={() => console.log(type)} name="example" onChange = {(e)=>setType("Company")} />
    as Company
  
    <input type="radio" className="option-input radio" value={type} name="example" onClick={() => console.log(type)} onChange = {(e)=>setType("User")} />
    as User
          <Button text={loading ? "Loading..." : "Sign Up"} className="is-primary is-fullwidth mt-5" disabled={loading} />
        </form>
      </div>      
    </section>
  );
}

export default SignUp;