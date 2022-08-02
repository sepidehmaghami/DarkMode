import { useState , useEffect} from "react";

const useDarkMode =() =>{

    //The "light" is defined string because we want to check it with localStorage
    const [theme,setTheme] = useState('light');

    const switchTheme = () =>{
        if (theme === 'light'){
            //This changes to dark when the theme is light
            window.localStorage.setItem('theme','dark')
            setTheme('dark');
        }
        else{
            window.localStorage.setItem('theme','light')
            setTheme('light');
        }
    }

    useEffect (() =>{
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme){
            setTheme(localTheme);
        }
    }, [])

    return[theme , switchTheme];
}

export default useDarkMode;