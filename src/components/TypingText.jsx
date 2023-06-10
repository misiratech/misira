import React, { useEffect, useState } from 'react'

const TypingText = () => {

    const words = ["“Desarrolladores de software metalúrgico”", "“Innovación tecnológica”"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayText(words[currentWordIndex].substring(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === words[currentWordIndex].length) {
                clearInterval(intervalId);

                setTimeout(() => {
                    setCurrentWordIndex((currentWordIndex + 1) % words.length);
                }, 2000);
            }
        }, 100);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentWordIndex]);

    return (
        <>
            <h1 className="home-title">MISIRA</h1>
            <h2 className='description'>{displayText}
                <span className="cursor"></span>
            </h2>
        </>
    )
}

export default TypingText