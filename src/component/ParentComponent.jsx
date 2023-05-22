// ParentComponent.js
import { useCallback } from 'react';
import Header from './Header';

function ParentComponent() {
    const toggleTheme = useCallback((isDarkMode) => {
        document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
    }, []);

    return (
        <Header toggleTheme={toggleTheme} />
    );
}

export default ParentComponent;
