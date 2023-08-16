import { useNavigate } from 'react-router-dom';
import { useContext, useRef, useCallback } from 'react';
import { GlobalDataContext } from 'App';
import { ScrollPageContext } from 'pages/home/Home';
import UstHeading from 'components/UstHeading';
import ModalPortal, { useModalWithData } from 'components/ModalPortal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const SectionWork = () => {
  const navigate = useNavigate();
  const headingText = ['W', 'O', 'R', 'K'];
  const scrollPageContext = useContext(ScrollPageContext);
  const { workData } = useContext(GlobalDataContext);

  const modalRef = useRef(null);
  const modalOpenRefs = useRef([]);
  const { modalOpen, selected, setSelected, setModalState } = useModalWithData();

  const goGsapPage = () => navigate('/portfolio/gsap');

  const handleClose = useCallback(() => {
    setModalState(false);
    window.setTimeout(() => modalOpenRefs.current[selected.id].focus());
  }, [setModalState]);

  const handleOpen = useCallback(
    item => {
      setSelected(item);
      setModalState(true);
      window.setTimeout(() => modalRef.current.focus());
    },
    [setModalState],
  );

  return (
    <section className="section section-work" ref={scrollPageContext.sectionWorkRef}>
      <UstHeading words={headingText} />
      <div className="section__inner">
        <div className="work__list">
          <div
            className="work__item cursor-clickable uht-hover"
            tabIndex={0}
            onClick={goGsapPage}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') goGsapPage();
            }}
          >
            <div className="image">
              <LazyLoadImage src="https://ngsehj.github.io/portfolio/img/bg-intro.jpg" alt="portfolio" effect="opacity" />
            </div>
            <span className="type">Responsive Web</span>
            <strong className="heading">포트폴리오</strong>
            <span className="time">2023.07 ~ 2023.08</span>
          </div>
          {workData.map(item => (
            <div
              className="work__item cursor-clickable"
              key={item.title}
              ref={el => (modalOpenRefs.current[item.id] = el)}
              aria-haspopup="true"
              role="button"
              tabIndex={0}
              onClick={() => handleOpen(item)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpen(item);
                }
              }}
            >
              <div className="image">
                <LazyLoadImage src={item.thumb} alt={item.title} effect="opacity" />
              </div>
              <span className="type">{item.type}</span>
              <strong className="heading">{item.title}</strong>
              <span className="time">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <ModalPortal type="up" title={selected.title} modalRef={modalRef} handleClose={handleClose} modalOpen={modalOpen} setModalState={setModalState}>
          <article className="work-detail">
            <div className="work-detail__info">
              <p className="type">{selected.client}</p>
              <strong className="heading">{selected.title}</strong>
              <p className="desc">{selected.desc}</p>
              <p>기간 : {selected.time}</p>
              <p>참여도 : {selected.rate}</p>
              <p>{selected.skill}</p>
              <ul className="info__list">
                {selected.works.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="work-detail__photo">
              {selected.imgs &&
                selected.imgs.map((item, idx) => (
                  <div className="image" key={idx}>
                    <LazyLoadImage src={item} alt={selected.title} effect="opacity" />
                  </div>
                ))}
            </div>
          </article>
        </ModalPortal>
      )}
    </section>
  );
};

export default SectionWork;
