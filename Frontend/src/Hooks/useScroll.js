import {useState, useEffect} from 'react';

function useScroll(element) {
    const [scroll, setScroll] = useState(0);
    const onScroll = () => {
        setScroll(window.scrollY);
    }
    
    window.addEventListener('scroll', onScroll);
    
    useEffect(() => {
        element.current
            .querySelectorAll('section[id]')
            .forEach((el) => {
                if(el.offsetTop === scroll) {
                    window
                        .location
                        .replace(`/#${el.id}`);
                }
            });

            return () => {
                window.removeEventListener('scroll', onScroll);
            }
    });
}

export default useScroll;