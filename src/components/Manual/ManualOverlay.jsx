import React, { useEffect, useState } from 'react';
import { useManual } from './ManualContext';
import ManualTooltip from './ManualTooltip';

const ManualOverlay = () => {
    const { isManualOpen, targetElement, stopTour } = useManual();
    const [spotlightStyle, setSpotlightStyle] = useState({});

    useEffect(() => {
        if (isManualOpen && targetElement) {
            const updateSpotlight = () => {
                const rect = targetElement.getBoundingClientRect();
                setSpotlightStyle({
                    position: 'fixed',
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height,
                    borderRadius: getComputedStyle(targetElement).borderRadius || '4px',
                    boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.75)', // The dark overlay
                    zIndex: 10000,
                    pointerEvents: 'none', // Let clicks pass through to the target? Or block? Usually block, but maybe we want interaction.
                    // For a tutorial, usually we want to block clicks outside, but maybe allow clicks on the target.
                    // To allow clicks on target, we can use 'mix-blend-mode' or just make this a hollow div.
                    // The box-shadow method makes the center transparent.
                    transition: 'all 0.3s ease-out'
                });
            };

            updateSpotlight();
            window.addEventListener('resize', updateSpotlight);
            window.addEventListener('scroll', updateSpotlight, true); // Capture scroll

            return () => {
                window.removeEventListener('resize', updateSpotlight);
                window.removeEventListener('scroll', updateSpotlight, true);
            };
        }
    }, [isManualOpen, targetElement]);

    if (!isManualOpen) return null;

    return (
        <>
            {/* The Spotlight Div */}
            {targetElement && (
                <div style={spotlightStyle} />
            )}

            {/* A click-catcher for the background to close/block interaction? 
          If we use the box-shadow method, the shadow itself doesn't block clicks efficiently in all browsers if pointer-events is none.
          But if pointer-events is auto, it blocks the hole too.
          
          Better approach for "Click to Interact":
          We want the user to be able to click the "Next" button in the tooltip.
          We might NOT want them to click the app underneath unless the step requires it.
          
          For now, let's keep it simple: Visual highlight only.
      */}

            <ManualTooltip />
        </>
    );
};

export default ManualOverlay;
