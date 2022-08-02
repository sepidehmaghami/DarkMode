import './App.css';
import useDarkMode from './userDarkMode';

const  App = () => {
  const [theme , switchTheme] = useDarkMode();

  return (
    <div className="App"
    style={{
      background : theme === 'dark' ? '#212121' : '#ffffff',
      transition: '.4s all',
    }}
    >
      
    <button type="button" onClick={switchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
