import { useState } from 'react';

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
    <div className="registration">
      <form className="registration__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={user.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          value={user.passwordConfirm}
          onChange={handleChange}
        />
        <br />
        <button className="registration__submit-btn">REGISTER</button>
      </form>
    </div>
  );
};

//----NOTES

//#1
//--preliminary thoughts on handleChange
// setUser({
//   username: e.target.value, //ale value má být pro každé políčko jiná - využiju atribut name nakonec
//   // email: e.target.value,
//   // password: e.target.value,
//   // passwordConfirm: e.target.value,
// });

//#2
//--username autocomplete
// //Budeme chtít, aby se ve formuláři automaticky vyplnilo políčko User Name, pokud je User Name prázdné a pokud uživatel zadá validní email.
// // //Validní email poznáme tak, že obsahuje zavináč. Do User Name se pak vyplní část emailu před zavináčem.

//#3
//two-way data binding (tj. jinými slovy "Provažte obsah formuláře se stavem user.")

//#4
//html: the <button> element's default -type- is "submit" (MDN)
