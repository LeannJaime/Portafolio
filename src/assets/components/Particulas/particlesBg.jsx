import React from 'react'
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from "./ParticlesConfig";
import { loadFull } from "tsparticles";


export const ParticlesBg = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={particlesConfig}
            />
        );
    }

    return <></>;
};