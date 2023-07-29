import { useContext, useRef } from 'react';
import { useScrollFadeIn } from 'hooks';
import { ScrollPageContext } from 'pages/home/Home';
import UstHeading from 'components/UstHeading';
import ModalPortal, { useModalWithData } from 'components/ModalPortal';

const works = [
  {
    id: 10,
    type: 'PC · Responsive Web · WebView',
    title: '하이클래스 리뉴얼, 신규 서비스 구축 및 유지보수',
    time: '2020.10 ~ 2023.06',
    skill: 'HTML, CSS, SCSS, JavaScript, jQuery, Vue.js, Zeplin, Figma, Photoshop, git',
    rate: '100%',
    client: '아이스크림 미디어',
    desc: '하이클래스는 학급 운영에 필요한 알림장, 게시판 기능을 비롯하여 하이톡과 가정통신문 등의 커뮤니티 서비스입니다.',
    works: [
      '- 인덱스, GNB, 로그인, 메인, 게시판, 하이톡 등 UI 개선과 고도화 작업을 했고 학교 양식 신청서, 설문, 이벤트 화면 등을 신규 제작하였습니다.',
      '- 인덱스, 메인, 게시글, 로그인, 이벤트, 웹뷰 등 일부 화면을 반응형 제작했습니다.',
      '- Vue.js 프로젝트이며 Vue.js 라이브러리 작업이 필요한 경우 Vue.js 산출물을 만들어 전달했습니다. vue-slick, vuedraggable, vue-chartjs, vue2-datepicker, vue-star-rating, cropperjs, vue-froala-wysiwyg 라이브러리를 사용했습니다.',
    ],
    thumb: process.env.PUBLIC_URL + `img/work09.jpg`,
    imgs: [
      process.env.PUBLIC_URL + `img/p09-01.png`,
      process.env.PUBLIC_URL + `img/p09-02.png`,
      process.env.PUBLIC_URL + `img/p09-03.png`,
      process.env.PUBLIC_URL + `img/p09-04.png`,
    ],
  },
  {
    id: 9,
    type: 'Responsive Web',
    client: '아이스크림 에듀',
    title: '하이스토어 유지보수',
    time: '2020.06 ~ 2020.09',
    skill: 'HTML, CSS, JavaScript, jQuery, Photoshop',
    rate: '100%',
    desc: '하이스토어는 학부모, 자녀에게 필요한 상품을 제공하는 쇼핑몰입니다.',
    works: [
      '- GNB, 메인, 체험학습, 장바구니, 주문결제 화면과 이메일 템플릿 UI를 개선하고 운영되고 있는 불안정한 화면을 수정 작업 하였습니다.',
      '- 반응형 UI로 제작되었습니다.',
    ],
    thumb: process.env.PUBLIC_URL + `img/work08.jpg`,
    imgs: [
      process.env.PUBLIC_URL + `img/p08-03.png`,
      process.env.PUBLIC_URL + `img/p08-02.png`,
      process.env.PUBLIC_URL + `img/p08-04.png`,
      process.env.PUBLIC_URL + `img/p08-05.png`,
    ],
  },
  {
    id: 8,
    type: 'Responsive Web',
    client: '스토리앤브라더스',
    title: '사피언스 Qna 신규 구축',
    time: '2020.01 ~ 2020.02',
    skill: 'HTML, CSS, JavaScript, jQuery, jsp, jstl, Photoshop, SVN',
    rate: '100%',
    desc: '사피언스 Qna는 박사 및 전문가들이 답해주는 지식 문답 서비스 입니다.',
    works: ['- 지식 문답 서비스를 반응형 UI로 신규 제작했습니다.'],
    thumb: process.env.PUBLIC_URL + `img/work07.jpg`,
    imgs: [
      process.env.PUBLIC_URL + `img/p07-01.webp`,
      process.env.PUBLIC_URL + `img/p07-02.webp`,
      process.env.PUBLIC_URL + `img/p07-03.webp`,
      process.env.PUBLIC_URL + `img/p07-04.webp`,
    ],
  },
  {
    id: 7,
    type: 'Responsive Web',
    client: '스토리앤브라더스',
    title: '사피언스 (팀빌딩 플랫폼) 리뉴얼 및 유지보수',
    time: '2018.12 ~ 2019.12',
    skill: 'HTML, CSS, JavaScript, jQuery, jsp, jstl, Photoshop, SVN',
    rate: '100%',
    desc: '사피언스는 사용자간의 채팅과 인공지능 성향 분석 매칭을 기반으로 고급기술인력들이 창업이나 프로젝트를 진행할 수 있도록 팀빌딩을 지원하고 프로젝트를 진행하는 플랫폼입니다.',
    // 이공계석박사와 제조생산경력자들이 유저로 가입되어 활동하며 이중 창업이나 프로젝트의 아이디어가 있는 사람이 프로젝트를 등록하면 기술 매칭과 키워드매칭, 인공지능 성향분석 매칭을 통해 적합한 동료를 추천해 주고 이들과 1:1 채팅으로 대화를 통해 서로 알아가게 되고 마음이 맞으면 팀으로 구성되어 단체채팅을 통해 프로젝트를 진행하는 형식의 서비스입니다. 기업에서의 해결 못한 R&D 문제도 오픈이노베이션 방식으로 프로젝트와 기술인재를 매칭해서 해결할 수 있습니다. Facebook에 본인이 올린 글을 끌어와 글쓰는 타입을 인공지능 자연어 분석을 통해 성격과 성향을 분석해주며 본인과 다른 사람과의 성향 매칭을 통해 팀빌딩의 성공확률을 높여주는 특징이 있습니다.',
    works: [
      '- 기존 서비스를 안정적으로 유지보수 하면서 전체 UI 개선 작업과 공모전 게시판, 이벤트 페이지를 신규 제작 했습니다.',
      '- 반응형 UI로 제작되었습니다.',
    ],
    thumb: process.env.PUBLIC_URL + `img/work06.jpg`,
    imgs: [
      process.env.PUBLIC_URL + `img/p06-01.webp`,
      process.env.PUBLIC_URL + `img/p06-02.webp`,
      process.env.PUBLIC_URL + `img/p06-03.webp`,
      process.env.PUBLIC_URL + `img/p06-04.webp`,
      process.env.PUBLIC_URL + `img/p06-05.webp`,
      process.env.PUBLIC_URL + `img/p06-06.webp`,
    ],
  },
  {
    id: 6,
    type: 'PC · Mobile Web',
    client: '플라이프그래프',
    title: '플라이프그래프 (항공권 검색 및 예약 서비스) 리뉴얼 및 유지보수',
    desc: '플라이트 그래프는 항공권 검색 고수들이 찾아놓은 황금노선을 따라서 예약할 수 있게 돕는 기능인 팔로우온(FOLLOW ON)을 제공하는 항공권 예약 서비스입니다. ',
    time: '2017.12 ~ 2018.10',
    skill: 'HTML, CSS, SCSS, JavaScript, jQuery, Photoshop, git, gulp',
    rate: '100%',
    works: [
      '- 기존 서비스를 안정적으로 유지보수 하면서 전체 UI 개선 작업과 일부 서비스 추가 및 이벤트 페이지를 신규 제작했습니다.',
      '- PC, Mobile웹을 따로 제작 하였으며 IE9 포함 크로스브라우징 했습니다.',
    ],
    thumb: process.env.PUBLIC_URL + `img/work05.jpg`,
    imgs: [
      process.env.PUBLIC_URL + `img/p05-01.png`,
      process.env.PUBLIC_URL + `img/p05-02.png`,
      process.env.PUBLIC_URL + `img/p05-03.png`,
      process.env.PUBLIC_URL + `img/p05-04.png`,
    ],
  },
  {
    id: 5,
    type: 'PC · Mobile Web',
    client: '현대자동차',
    title: '제네시스 게이트 메인, 멤버십, 커넥티드 서비스 안내 신규 구축',
    time: '2017.06 ~ 2017.11',
    skill: 'HTML, CSS, JavaScript, jQuery, Photoshop, SVN',
    rate: '100%',
    works: [
      '- 게이트 메인, GNB, 멤버십, 케넥티드 서비스, 이벤트 화면 등 신규 제작',
      '- PC, Mobile웹 제작',
      '- 한국어, 영문, 중동 등 기존 사이트 유지보수',
      '- 웹표준, IE9 포함 크로스브라우징',
    ],
    thumb: process.env.PUBLIC_URL + `img/work04.jpg`,
    imgs: [process.env.PUBLIC_URL + `img/p04.png`],
  },
  {
    id: 4,
    type: 'PC · Mobile Web',
    client: '처브라이프생명보험주식회사',
    title: '에이스생명 홈페이지 유지보수',
    time: '2016.03 ~ 2016.09',
    skill: 'HTML, CSS, jQuery, Photoshop',
    rate: '100%',
    works: [
      '- 홈페이지 유지보수 및 프로모션, 랜딩 페이지 퍼블리싱 작업',
      '- PC, Mobile웹 제작',
      '- 웹표준, IE8 포함 크로스 브라우징',
    ],
    thumb: process.env.PUBLIC_URL + `img/work03.jpg`,
    imgs: [process.env.PUBLIC_URL + `img/work03.jpg`],
  },
  {
    id: 3,
    type: 'PC · Mobile Web',
    client: '한섬',
    title: '더 한섬닷컴 쇼핑몰 유지보수',
    time: '2016.02 ~ 2016.09',
    skill: 'HTML, CSS, jQuery, Photoshop, SVN',
    rate: '100%',
    works: [
      '- 쇼핑몰 유지보수 및 글로벌 사이트(모바일), 메인, 아울렛, 룩북, 비디오, 덱케 브랜드 메인, 인스타그램, 이벤트 페이지 등 신규 작업',
      '- PC, Mobile웹 제작',
      '- 한국어, 영문, 중국 총 3개 언어 사이트 작업',
      '- 웹표준, IE8 포함 크로스 브라우징',
    ],
    thumb: process.env.PUBLIC_URL + `img/work02-2.jpg`,
    imgs: [process.env.PUBLIC_URL + `img/p02-2-pc.jpg`, process.env.PUBLIC_URL + `img/p02-2-m.jpg`],
  },
  {
    id: 2,
    type: 'PC · Mobile Web',
    title: '더 한섬닷컴 쇼핑몰 신규 구축',
    client: '한섬',
    time: '2015.08 ~ 2016.01',
    skill: 'HTML, CSS, jQuery, Photoshop, SVN',
    rate: '33%',
    works: [
      '- 패션브랜드 한섬 소개 및 온라인 쇼핑몰로 구성된 사이트 신규 구축',
      '- 글로벌 사이트(PC), 이벤트 템플릿, 푸터 메뉴 화면, 메일, CMS 페이지 담당',
      '- PC, Mobile웹 제작',
      '- 한국어, 영문, 중국 총 3개 언어 사이트 작업',
      '- 웹표준, IE8 포함 크로스 브라우징',
    ],
    thumb: process.env.PUBLIC_URL + `img/p02-02.jpg`,
    imgs: [
      process.env.PUBLIC_URL + `img/p02-01.jpg`,
      process.env.PUBLIC_URL + `img/p02-02.jpg`,
      process.env.PUBLIC_URL + `img/p02-03.jpg`,
      process.env.PUBLIC_URL + `img/p02-04.jpg`,
      process.env.PUBLIC_URL + `img/p02-05.jpg`,
      process.env.PUBLIC_URL + `img/p02-06.jpg`,
      process.env.PUBLIC_URL + `img/p02-07.jpg`,
      process.env.PUBLIC_URL + `img/p02-m-01.jpg`,
      process.env.PUBLIC_URL + `img/p02-m-02.jpg`,
      process.env.PUBLIC_URL + `img/p02-m-03.jpg`,
      process.env.PUBLIC_URL + `img/p02-m-04.jpg`,
    ],
  },
  {
    id: 1,
    type: 'PC · Mobile Web',
    client: 'GS리테일',
    title: 'GS리테일 홈페이지 리뉴얼',
    time: '2015.04 ~ 2015.07',
    skill: 'HTML, CSS, jQuery, Photoshop, SVN',
    rate: '25%',
    works: [
      '- GS리테일, GS25, GS수퍼마켓, 왓슨스, POP카드 총 5개 홈페이지 리뉴얼 작업',
      '- 푸터 메뉴 페이지와 서브 페이지 담당',
      '- PC, Mobile웹 제작',
      '- GS리테일 경우 한국어, 영문 총 2개 사이트 작업',
      '- 웹표준, 웹접근성, IE8 포함 크로스브라우징',
    ],
    thumb: process.env.PUBLIC_URL + `img/work01.jpg`,
    imgs: [
      process.env.PUBLIC_URL + `img/p01-pc.jpg`,
      process.env.PUBLIC_URL + `img/p01-02.jpg`,
      process.env.PUBLIC_URL + `img/p01-03.jpg`,
      process.env.PUBLIC_URL + `img/p01-04.jpg`,
      process.env.PUBLIC_URL + `img/p01-05.jpg`,
      process.env.PUBLIC_URL + `img/p01-m.jpg`,
      process.env.PUBLIC_URL + `img/p01-m-02.jpg`,
      process.env.PUBLIC_URL + `img/p01-m-03.jpg`,
    ],
  },
];

const SectionWork = () => {
  const scrollPageContext = useContext(ScrollPageContext);
  const headingText = ['W', 'O', 'R', 'K'];
  const animatedItem = {
    0: useScrollFadeIn(),
    1: useScrollFadeIn(),
    2: useScrollFadeIn(),
    3: useScrollFadeIn(),
    4: useScrollFadeIn(),
    5: useScrollFadeIn(),
    6: useScrollFadeIn(),
    7: useScrollFadeIn(),
    8: useScrollFadeIn(),
    9: useScrollFadeIn(),
  };

  const modalRef = useRef(null);
  const modalOpenRefs = useRef([]);
  const { modalOpen, selected, setSelected, setModalState } = useModalWithData();

  return (
    <section className="section section__work" ref={scrollPageContext.sectionWorkRef}>
      <UstHeading words={headingText} />
      <div className="card__list">
        {works.map((item, idx) => (
          <div
            className="card__item cursor-clickable"
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
            <div className="image" {...animatedItem[idx]}>
              <img src={item.thumb} alt={item.title} />
            </div>
            <span className="type">{item.type}</span>
            <strong className="heading">{item.title}</strong>
            <span className="time">{item.time}</span>
          </div>
        ))}
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
          <div className="work__wrap">
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
