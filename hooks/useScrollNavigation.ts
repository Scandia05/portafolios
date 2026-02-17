import { useEffect } from 'react';

interface UseScrollNavigationProps {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    isAnimating: boolean;
    setIsAnimating: (isAnimating: boolean) => void;
    sectionsLength: number;
}

export const useScrollNavigation = ({
    activeIndex,
    setActiveIndex,
    isAnimating,
    setIsAnimating,
    sectionsLength,
}: UseScrollNavigationProps) => {

    useEffect(() => {
        const changeSection = (newIndex: number) => {
            if (newIndex === activeIndex) return;
            setIsAnimating(true);
            setActiveIndex(newIndex);
            setTimeout(() => setIsAnimating(false), 1200);
        };

        // --- TOUCH SWIPE LOGIC ---
        let touchStartY = 0;
        let touchEndY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isAnimating) return;
            touchEndY = e.changedTouches[0].clientY;
            handleSwipe(e.target as HTMLElement);
        };

        const handleSwipe = (target: HTMLElement) => {
            const minSwipeDistance = 50;
            const distance = touchStartY - touchEndY;
            const isSwipeUp = distance > minSwipeDistance;
            const isSwipeDown = distance < -minSwipeDistance;

            if (!isSwipeUp && !isSwipeDown) return;

            // Check for scrollable containers
            const scrollableContainer = target.closest('.allow-scroll');
            if (scrollableContainer) {
                const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
                const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;
                const isAtTop = scrollTop <= 0;

                if (isSwipeUp && !isAtBottom) return;
                if (isSwipeDown && !isAtTop) return;
            }

            if (isSwipeUp && activeIndex < sectionsLength - 1) {
                changeSection(activeIndex + 1);
            } else if (isSwipeDown && activeIndex > 0) {
                changeSection(activeIndex - 1);
            }
        };

        // --- WHEEL LOGIC ---
        const handleWheel = (e: WheelEvent) => {
            if (isAnimating) return;

            const isScrollingDown = e.deltaY > 0;
            const scrollableContainer = (e.target as HTMLElement).closest('.allow-scroll');

            if (scrollableContainer) {
                const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
                const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight - 1;
                const isAtTop = scrollTop <= 0;

                if (isScrollingDown && !isAtBottom) return;
                if (!isScrollingDown && !isAtTop) return;
            }

            if (isScrollingDown && activeIndex < sectionsLength - 1) {
                changeSection(activeIndex + 1);
            } else if (!isScrollingDown && activeIndex > 0) {
                changeSection(activeIndex - 1);
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchend", handleTouchEnd, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [activeIndex, isAnimating, sectionsLength, setActiveIndex, setIsAnimating]);
};
