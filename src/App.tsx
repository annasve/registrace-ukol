import { Registration } from './components/Registration/Registration';

export const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>REGISTRATION</h1>
      </header>
      <main>
        <Registration />
      </main>
    </div>
  );
};

export default App;
