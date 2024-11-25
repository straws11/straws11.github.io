import { useEffect, useState, ReactNode, useRef } from "react";
import "../index.css";
import React from "react";

declare global {
    interface Window {
        lastScrollY: number;
    }
}

interface ScrollTransitionProps {
    children: ReactNode;
    title: string;
}

export default function ScrollTransition(props: ScrollTransitionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    function handleScroll() {
        if (sectionRef.current) {
            const windowHeight = window.innerHeight;
            const elementTop = sectionRef.current.getBoundingClientRect().top;
            const elementVisible = 80;

            // decide on visibility
            const vis = elementTop < windowHeight - elementVisible;
            setIsVisible(vis);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // for cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={sectionRef} className={`reveal ${isVisible ? "active" : ""}`}>
            {props.children}
        </div>
    );
}
