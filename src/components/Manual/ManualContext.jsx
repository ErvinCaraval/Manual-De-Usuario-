import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { tours } from './tours';

const ManualContext = createContext();

export const useManual = () => {
    const context = useContext(ManualContext);
    if (!context) {
        throw new Error('useManual must be used within a ManualProvider');
    }
    return context;
};

export const ManualProvider = ({ children }) => {
    const [activeTourId, setActiveTourId] = useState(null);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isManualOpen, setIsManualOpen] = useState(false);
    const [targetElement, setTargetElement] = useState(null);

    const activeTour = activeTourId ? tours[activeTourId] : null;
    const currentStep = activeTour ? activeTour[currentStepIndex] : null;

    const startTour = useCallback((tourId) => {
        if (tours[tourId]) {
            setActiveTourId(tourId);
            setCurrentStepIndex(0);
            setIsManualOpen(true);
        } else {
            console.warn(`Tour '${tourId}' not found.`);
        }
    }, []);

    const stopTour = useCallback(() => {
        setIsManualOpen(false);
        setActiveTourId(null);
        setCurrentStepIndex(0);
        setTargetElement(null);
    }, []);

    const nextStep = useCallback(() => {
        if (activeTour && currentStepIndex < activeTour.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
        } else {
            stopTour();
        }
    }, [activeTour, currentStepIndex, stopTour]);

    const prevStep = useCallback(() => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(prev => prev - 1);
        }
    }, [currentStepIndex]);

    // Effect to find the target element in the DOM
    useEffect(() => {
        if (isManualOpen && currentStep) {
            // Small timeout to allow for rendering/transitions
            const timer = setTimeout(() => {
                const element = document.querySelector(`[data-tour-target="${currentStep.target}"]`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTargetElement(element);
                } else {
                    console.warn(`Target element '${currentStep.target}' not found.`);
                    // Optional: Auto-skip if target not found? For now, just stay.
                }
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isManualOpen, currentStep]);

    const value = {
        activeTour,
        currentStep,
        currentStepIndex,
        isManualOpen,
        startTour,
        stopTour,
        nextStep,
        prevStep,
        targetElement
    };

    return (
        <ManualContext.Provider value={value}>
            {children}
        </ManualContext.Provider>
    );
};
