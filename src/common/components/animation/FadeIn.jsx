import React from "react";
import { useInView } from "react-intersection-observer";

export const FadeIn = ({ children, x, y, ...restProps }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        rootMargin: "150px",
    });

    const positionFromStyle = { 
        opacity: "1", 
        transform: "translate(0, 0)", 
        transition: "all 2s ease" 
    };

    const positionToStyle = {
        opacity: "0",
        transform: `translate(${x}, ${y})`,
        transition: "all 2s ease",
    };

    return (
        <div
            ref={ref}
            style={inView ? positionFromStyle : positionToStyle}
            className={restProps.className && restProps.className}>
            {children}
        </div>
    );
};
