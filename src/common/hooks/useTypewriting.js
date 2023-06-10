import { useEffect, useState } from "react";

export const PHASE_Type = {
    TYPING: "typing",
    PAUSING: "pausing",
    DELETING: "deleting",
    DELETING_PAUSE: "deleting pause",
};

const PHASE_INTERVALS = {
    TYPING: 90,
    PAUSING: 2000,
    DELETING: 80,
    DELETING_PAUSE: 1000,
};

export const useTypewriting = texts => {
    const [typedText, setTypedText] = useState("");
    const [currentPhase, setCurrentPhase] = useState(PHASE_Type.TYPING);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        switch (currentPhase) {
            case PHASE_Type.TYPING: {
                const nextTypedText = texts[selectedIndex].slice(0, typedText.length + 1);

                if (nextTypedText === typedText) {
                    setCurrentPhase(PHASE_Type.PAUSING);
                    return;
                }

                const timerID = setTimeout(() => {
                    setTypedText(nextTypedText);
                }, PHASE_INTERVALS.TYPING);

                return () => clearTimeout(timerID);
            }

            case PHASE_Type.DELETING: {
                if (!typedText) {
                    const nextIndex = selectedIndex + 1;
                    setSelectedIndex(texts[nextIndex] ? nextIndex : 0);

                    setCurrentPhase(PHASE_Type.DELETING_PAUSE);
                    return;
                }

                const remainTypedText = texts[selectedIndex].slice(0, typedText.length - 1);

                const timerID = setTimeout(() => {
                    setTypedText(remainTypedText);
                }, PHASE_INTERVALS.DELETING);

                return () => clearTimeout(timerID);
            }

            case PHASE_Type.DELETING_PAUSE: {
                const timeoutId = setTimeout(() => {
                    setCurrentPhase(PHASE_Type.TYPING);
                }, PHASE_INTERVALS.DELETING_PAUSE);

                return () => clearTimeout(timeoutId);
            }

            case PHASE_Type.PAUSING:
            default:
                const timeout = setTimeout(() => {
                    setCurrentPhase(PHASE_Type.DELETING);
                }, PHASE_INTERVALS.PAUSING);

                return () => clearTimeout(timeout);
        }
    }, [texts, typedText, currentPhase, selectedIndex]);

    return { typedText, currentPhase };
};
