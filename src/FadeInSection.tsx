import React, { useRef, useEffect, useState } from 'react';

interface FadeInSectionProps {
    children: React.ReactNode;
    delay?: number;  // Add delay prop
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${delay}ms` }}  // Apply the delay here
        >
            {children}
        </div>
    );
};

export default FadeInSection;
