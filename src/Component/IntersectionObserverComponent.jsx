import React, { useEffect, useRef } from 'react';

const IntersectionObserverComponent = ({ targetClassName }) => {
  const observer = useRef(null);

  useEffect(() => {
    const elementsToWatch = document.querySelectorAll(`.${targetClassName}`);

    const callback = (items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          item.target.classList.add('in-page');
        } else {
          item.target.classList.remove('in-page');
        }
      });
    };

    observer.current = new IntersectionObserver(callback, { threshold: 0.2 });

    elementsToWatch.forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      observer.current.disconnect();
    };
  }, [targetClassName]);

  return null;
};

export default IntersectionObserverComponent;