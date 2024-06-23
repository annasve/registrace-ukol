import { useState } from 'react';

import './registration.css';

//----interface for the object named "user"
interface FormData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

//----the component
export const Registration: React.FC = () => {
  //--use state
  const [user, setUser] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  //--two-way data binding: part 1
  // //function for setting the state when the change event fires
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //--username autocomplete logic
  if (user.email.includes('@') && user.username === '') {
    user.username = user.email.substring(0, user.email.indexOf('@'));
  }

  //-- handling the submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted user info', user);
  };

  //--tsx
  return (
    <form className="registration__form" onSubmit={handleSubmit}>
      <h2>REGISTRATION</h2>

      <input
        type="text"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="username"
        placeholder="User Name"
        value={user.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="passwordConfirm"
        placeholder="Confirm Password"
        value={user.passwordConfirm}
        onChange={handleChange}
      />

      <button className="registration__submit-btn">REGISTER</button>
    </form>
  );
};
