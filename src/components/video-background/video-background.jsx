export default function VideoBackground({src}) {
    const BASE_CLASS = 'video-background';

    const blurSize = 6;

    const style = {
        width: `calc(100% + ${blurSize * 2}px)`,
        height: `calc(100% + ${blurSize * 2}px)`,
        position: 'fixed',
        objectFit: 'cover',
        filter: `blur(${blurSize}px)`,
        top: `-${blurSize}px`,
        left: `-${blurSize}px`,
        zIndex: -1,
        backgroundImage: 'linear-gradient(to bottom, #0159b5, #4ea1e9)',
    };

    return (
            <video style={style} autoPlay loop muted playsInline>
                <source src={src} type="video/mp4" />
            </video>
    );
}