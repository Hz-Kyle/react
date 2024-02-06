import React, { useState } from 'react'

const SwitchTheme = () => {
    const [isDark, setIsDark] = useState(true)
    const [buttonText, setButtonText] = useState('change Dark')

    const changeThemeHandler = () => {
        if (isDark === true) {
            console.log("Theme is Dark");
            document.body.style.backgroundColor = "black"
           
            setIsDark(false);
        } else {
            console.log("Theme is White")
            document.body.style.backgroundColor = "white"
          
            setIsDark(true);
        }
    }

    return (
        <>
            <button onClick={changeThemeHandler}>
                Change {
                    isDark === true ? `Dark` : `White`
            }
            </button>
            {
                isDark && <p> Theme is </p>
            }
        </>
    )
}

export default SwitchTheme