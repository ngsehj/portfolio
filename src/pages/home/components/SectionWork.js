import { useContext, useRef } from 'react';
import { GlobalDataContext } from 'App';
import { ScrollPageContext } from 'pages/home/Home';
import UstHeading from 'components/UstHeading';
import ModalPortal, { useModalWithData } from 'components/ModalPortal';

const SectionWork = () => {
  const headingText = ['W', 'O', 'R', 'K'];
  const scrollPageContext = useContext(ScrollPageContext);
  const { workData } = useContext(GlobalDataContext);
  const modalRef = useRef(null);
  const modalOpenRefs = useRef([]);
  const { modalOpen, selected, setSelected, setModalState } = useModalWithData();

  return (
    <section className="section section-work" ref={scrollPageContext.sectionWorkRef}>
      <UstHeading words={headingText} />
      <div className="section__inner">
        <div className="work__list">
          {workData.map((item, idx) => (
            <div
              //
              className="work__item cursor-clickable"
              key={item.title}
              ref={el => (modalOpenRefs.current[item.id] = el)}
              role="button"
              tabIndex={0}
              onClick={() => {
                setSelected(item);
                setModalState(true);
                window.setTimeout(() => modalRef.current.focus());
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.keyCode === 32) {
                  setSelected(item);
                  setModalState(true);
                  window.setTimeout(() => modalRef.current.focus());
                }
              }}
            >
              <div className="image">
                <img src={item.thumb} alt={item.title} />
              </div>
              <span className="type">{item.type}</span>
              <strong className="heading">{item.title}</strong>
              <span className="time">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <ModalPortal
          type="up"
          title={selected.title}
          modalRef={modalRef}
          handleClose={() => {
            setModalState(false);
            window.setTimeout(() => modalOpenRefs.current[selected.id].focus());
          }}
          handleFocusModal={e => {
            if (!e.shiftKey && e.keyCode === 9) {
              e.preventDefault();
              window.setTimeout(() => modalRef.current.focus());
            }
          }}
        >
          <div className="work__grid">
            <div className="work__info">
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
            <div className="work__photo">
              {selected.imgs &&
                selected.imgs.map((item, idx) => (
                  <div className="image" key={idx}>
                    <img src={item} alt={selected.title} />
                  </div>
                ))}
            </div>
          </div>
        </ModalPortal>
      )}
    </section>
  );
};

export default SectionWork;
