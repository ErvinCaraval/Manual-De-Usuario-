import React, { useState, useEffect, useRef } from 'react';
import { useManual } from './ManualContext';

const ManualTooltip = () => {
    const { currentStep, currentStepIndex, activeTour, nextStep, prevStep, stopTour, targetElement } = useManual();
    const tooltipRef = useRef(null);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (targetElement && tooltipRef.current) {
            const targetRect = targetElement.getBoundingClientRect();
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const spacing = 16; // Gap between target and tooltip

            let top = 0;
            let left = 0;

            // Simple positioning logic
            switch (currentStep.position) {
                case 'top':
                    top = targetRect.top - tooltipRect.height - spacing;
                    left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
                    break;
                case 'bottom':
                    top = targetRect.bottom + spacing;
                    left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
                    break;
                case 'left':
                    top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
                    left = targetRect.left - tooltipRect.width - spacing;
                    break;
                case 'right':
                    top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
                    left = targetRect.right + spacing;
                    break;
                default: // Default to bottom
                    top = targetRect.bottom + spacing;
                    left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
            }

            // Boundary checks (keep on screen)
            const padding = 16;
            if (left < padding) left = padding;
            if (left + tooltipRect.width > window.innerWidth - padding) left = window.innerWidth - tooltipRect.width - padding;
            if (top < padding) top = padding;
            if (top + tooltipRect.height > window.innerHeight - padding) top = window.innerHeight - tooltipRect.height - padding;

            setPosition({ top, left });
        }
    }, [targetElement, currentStep]);

    if (!currentStep || !targetElement) return null;

    const isLastStep = currentStepIndex === activeTour.length - 1;

    return (
        <div
            ref={tooltipRef}
            style={{
                position: 'fixed',
                top: position.top,
                left: position.left,
                zIndex: 10001, // Above overlay
                width: '320px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--accent-primary)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
                padding: '20px',
                color: 'var(--text-primary)',
                animation: 'fadeIn 0.3s ease-out'
            }}
        >
            <h3 style={{
                margin: '0 0 8px 0',
                fontSize: '18px',
                fontWeight: '600',
                color: 'var(--accent-primary)'
            }}>
                {currentStep.title}
            </h3>
            <p style={{
                margin: '0 0 20px 0',
                fontSize: '14px',
                lineHeight: '1.5',
                color: 'var(--text-secondary)'
            }}>
                {currentStep.content}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Paso {currentStepIndex + 1} de {activeTour.length}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {currentStepIndex > 0 && (
                        <button
                            onClick={prevStep}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '8px',
                                border: '1px solid var(--border-medium)',
                                background: 'transparent',
                                color: 'var(--text-primary)',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            Atrás
                        </button>
                    )}
                    <button
                        onClick={nextStep}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: 'none',
                            background: 'var(--accent-primary)',
                            color: 'var(--text-on-accent)',
                            cursor: 'pointer',
                            fontWeight: '600',
                            fontSize: '14px'
                        }}
                    >
                        {isLastStep ? 'Finalizar' : 'Siguiente'}
                    </button>
                </div>
            </div>

            <button
                onClick={stopTour}
                style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '18px',
                    lineHeight: '1'
                }}
                aria-label="Close"
            >
                ×
            </button>
        </div>
    );
};

export default ManualTooltip;
