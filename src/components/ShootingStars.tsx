import { useEffect } from 'react';

type ShootingStarsProps = {
    containerId: string;
};

const ShootingStars = ({ containerId = 'particles-container' }: ShootingStarsProps) => {
    useEffect(() => {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            
            // Position aléatoire sur tout l'écran
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Taille aléatoire
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Opacité aléatoire
            particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();
            particle.style.backgroundColor = 'gold';

            // Animation aléatoire
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particle.style.animationDelay = `-${Math.random() * 10}s`;

            document.getElementById(containerId)?.appendChild(particle);
        };

        // Créer plusieurs particules
        for(let i = 0; i < 50; i++) {
            createParticle();
        }

        return () => {
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '';
            }
        };
    }, [containerId]);

    return (
        <div 
            id={containerId}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
            style={{ background: 'transparent' }}
        />
    );
};

export default ShootingStars; 