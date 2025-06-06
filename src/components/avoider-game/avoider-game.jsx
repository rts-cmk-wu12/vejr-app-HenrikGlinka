import { useEffect, useRef } from "react"
import './avoider-game.sass';
import * as Flags from 'country-flag-icons/react/3x2';

export default function AvoiderGame() {

    const BASE_CLASS = 'avoider-game';
    const canvas = useRef(null);
    const buffer = document.createElement('canvas');
    const player = {
        x: 0,
        y: 0,
        width: 40,
        height: 40,
        speed: 0,
        jumpHeight: 12,
        gravity: .8,
        color: 'black'
    };

    const spike = {
        x: 0,
        y: 0,
        width: 30,
        height: 20,
        startSpeed: 4,
        speed: 4,
        acceeration: .2,
        color: 'black'
    }



    useEffect(() => {
        const bufferContext = buffer.getContext('2d');
        const canvasContext = canvas.current.getContext('2d');
        const width = buffer.width = canvas.current.width = canvas.current.offsetWidth;
        const height = buffer.height = canvas.current.height = width / 16 * 9;
        const baseline = height - player.height - 5;

        let score = 0;
        let highScore = 0;

        player.x = player.width;
        player.y = baseline;

        spike.x = width;
        spike.y = height - 5;

        const interval = setInterval(() => {

            const scoreText = `SCORE: ${score.toString().padStart(6, '0') }`;
            const highScoreText = `HI: ${highScore.toString().padStart(6, '0') }`;

            if (player.x + player.width > spike.x && player.x < spike.x + spike.width &&
                player.y + player.height > spike.y - spike.height && player.y < spike.y) {

                if (score > highScore) highScore = score;

                score = 0;
                player.x = player.width;
                player.y = baseline;

                spike.x = width;
                spike.y = height - 5;
                spike.speed = spike.startSpeed;
            }

            player.y += player.speed;

            if (player.y < baseline) {
                player.speed += player.gravity;
            } else {
                player.y = baseline;
                player.speed = 0;
            }

            spike.x -= spike.speed;
            if (spike.x < 0 - spike.width) {
                spike.x = width;
                spike.speed += spike.acceeration;
                score++;
            }

            bufferContext.clearRect(0, 0, width, height);
            bufferContext.fillStyle = 'white';
            bufferContext.fillRect(0, 0, width, height);
            bufferContext.closePath();

            bufferContext.fillStyle = player.color;
            bufferContext.fillRect(player.x, player.y, player.width, player.height);
            bufferContext.closePath();

            bufferContext.beginPath();
            bufferContext.strokeStyle = 'transparent';
            bufferContext.fillStyle = spike.color;

            bufferContext.moveTo(spike.x, spike.y);
            bufferContext.lineTo(spike.x + spike.width, spike.y);
            bufferContext.lineTo(spike.x + spike.width / 2, spike.y - spike.height);
            bufferContext.fill();
            bufferContext.closePath();

            bufferContext.beginPath();
            bufferContext.moveTo(0, height - 5);
            bufferContext.lineTo(width, height - 5);
            bufferContext.strokeStyle = 'black';
            bufferContext.lineWidth = 2;
            bufferContext.stroke();
            bufferContext.closePath();

            bufferContext.fillStyle = 'black';
            bufferContext.font = '12px Arial';
            bufferContext.fillText(scoreText, 10, 20);
            bufferContext.fillText(highScoreText, width - bufferContext.measureText(highScoreText).width - 10, 20);

            canvasContext.drawImage(buffer, 0, 0);
        }, 1000 / 60);

        return () => clearInterval(interval);

    });

    const jump = () => player.speed = -player.jumpHeight;

    return (
        <canvas ref={canvas} className={BASE_CLASS} onPointerDown={jump} />
    )
}