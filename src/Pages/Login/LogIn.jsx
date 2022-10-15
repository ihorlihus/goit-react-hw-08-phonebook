import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { ContactFormWrap } from '../../components/ContactForm/ContactFirmStyled';
import Button from 'components/ButtonStiled/Button';

export function LogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>LogIn Page</h1>

      <ContactFormWrap onSubmit={handleSubmit} autoComplete="off">
        <label>
          <p>Email</p>

          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          <p>Password</p>

          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <Button type="submit">LogIn</Button>
      </ContactFormWrap>
    </div>
  );
}
