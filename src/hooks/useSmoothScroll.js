import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;

    const scrollToSection = (index) => {
      if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        // Scrolling down
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
      } else {
        // Scrolling up
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
      }
      scrollToSection(currentSectionIndex);
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
};

export default useSmoothScroll;
