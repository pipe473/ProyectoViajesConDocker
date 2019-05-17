import {useState, useEffect} from 'react';
function useName (initialState) {
    const [name, setName] = useState(initialState); 

    if(name.length > 15) {
        // console.log('demasiado largo')
        setName(name.slice(0,15));
    }

    return [name, setName];
}

export default useName;
