import { Registration } from './components/Registration/Registration';

export const App = () => {
  return (
    <main>
      <Registration />
      <div className="img__container">
        <img src="/img/hero-bg.jpg" alt="" />
      </div>
    </main>
  );
};

export default App;
