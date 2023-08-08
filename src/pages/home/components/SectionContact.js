import UstHeading from 'components/UstHeading';
import useScrollAddClass from 'hooks/useScrollAddClass';
import { useScrollTranslate } from 'hooks';

const SectionContact = () => {
  const headingText = ['C', 'O', 'N', 'T', 'A', 'C', 'T'];

  const animatedElement = {
    section: useScrollAddClass(),
    email: useScrollTranslate(1, 1),
  };

  // useEffect(() => {console.log(document.querySelector('.arrow-path1').getTotalLength());}, []);

  return (
    <section className="section section-contact" {...animatedElement.section}>
      <UstHeading words={headingText} />
      <svg className="arrow" width="226" height="392" viewBox="0 0 226 392">
        <g>
          <g>
            <path className="arrow-path1" fill="none" d="M17 5v0s-34.969 255.598 15 202l40-59v0s40.059-64.266 54-9l60 238v0" />
          </g>
          <g>
            <path className="arrow-path2" fill="none" d="M120 327v0l67 56v0l34-96v0" />
          </g>
        </g>
      </svg>
      <a className="link-email" href="mailto:ngsehj@gmail.com">
        <span className="email" {...animatedElement.email}>
          ngsehj@gmail.com
        </span>
        <svg viewBox="0 0 400 60" preserveAspectRatio="none" stroke="#E8F109">
          <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
        </svg>
        <svg viewBox="0 0 400 60" preserveAspectRatio="none" stroke="#F1FB02">
          <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
        </svg>
      </a>
    </section>
  );
};
export default SectionContact;
