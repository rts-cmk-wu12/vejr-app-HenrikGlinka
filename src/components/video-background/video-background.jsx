import { useEffect, useRef } from "react";

export default function VideoBackground({ src }) {
    const BASE_CLASS = 'video-background';

    const blurSize = 3;

    const style = {
        width: `calc(100% + ${blurSize * 2}px)`,
        height: `calc(100% + ${blurSize * 2}px)`,
        position: 'fixed',
        objectFit: 'cover',
        filter: `blur(${blurSize}px)`,
        top: `-${blurSize}px`,
        left: `-${blurSize}px`,
        zIndex: -1,
        opacity: 0,
        transition: 'opacity 2s ease-in-out',
    };
    
    const videoElement = useRef(null);

    useEffect(() => {
        if (!src || !videoElement) return;

        videoElement.current.src = src;
    }, [src]);

    return (
        <>
            {src &&
                <video ref={videoElement} onCanPlayThrough={event => event.target.style.opacity = 1} style={style} autoPlay loop muted playsInline>
                    <source src={src} type="video/mp4" />
                </video>
            }
        </>

    );
}