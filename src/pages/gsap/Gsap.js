import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import SectionIntro from 'pages/gsap/components/SectionIntro';
import SectionSlider from 'pages/gsap/components/SectionSlider';
import SectionSetting from 'pages/gsap/components/SectionSetting';

gsap.registerPlugin(ScrollTrigger);

const Gsap = () => {
  const component = useRef();

  useEffect(() => {
    document.body.classList.add('l-page-sub');
    return () => {
      document.body.classList.remove('l-page-sub');
    };
  }, []);

  return (
    <article className="container" ref={component}>
      <SectionIntro />
      <SectionSetting />
      <SectionSlider />
    </article>
  );
};

export default Gsap;
