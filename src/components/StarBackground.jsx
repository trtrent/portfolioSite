import { useState, useEffect } from "react";

export const StarBackground = () => {
    
    // Star attr: id, size, x, y, opacity, animationDuration
    // Meteor attr: id, size, x, y, delay, animationDuration

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect( () => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        //Calls handleResize function upon resize of window, which re-calls generate stars
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numOfStars = Math.floor(document.documentElement.scrollHeight * document.documentElement.scrollWidth) / 10000;
        const newStars = [];

    for (let i = 0; i < numOfStars; i++) {
        newStars.push({
            id: i,
            size: Math.random() * 3 + 1, //Generate stars between 1 and 4 pixels
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        });
    };

    setStars(newStars);
    };

    const generateMeteors = () => {
        const numOfMeteors = 4;
        const newMeteors = [];

    for (let i = 0; i < numOfMeteors; i++) {
        newMeteors.push({
            id: i,
            size: Math.random() * 2 + 1, //Generate stars between 1 and 4 pixels
            x: Math.random() * 100,
            y: Math.random() * 20,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3,
        });
    };

    setMeteors(newMeteors);
    };

    return ( 
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opcaity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }} />
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size + 2 + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                }} />
            ))}
        </div>
    );
}