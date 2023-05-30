import { useState } from "react";
import Modal from "../../../components/Modal";
import { useScrollFadeIn } from "../../../hooks";

const SectionWork = () => {
  const works = [
    {
      title: '하이클래스 리뉴얼, 신규 서비스 구축 및 유지보수 (PC / WebView / 반응협 웹)',
      time: '2020.10 ~ 2023.06',
      skill: 'HTML, CSS, SCSS, JavaScript, jQuery, vuejs, git',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg',
      rate: '참여율: 100%',
      desc: [
        '학교 알림장 서비스, 채팅, 가정통신문, 학교 양식 등록 및 제출, 과제 제출, 이벤트 퍼블리싱',
        'PC web, 일부 웹뷰, 반응형 웹 작업',
        'HTML / Vue.js 퍼블리싱 산출물 작업, 웹표준 작업, 크로스브라우징'
      ]
    },
    {
      title: '하이스토어 유지보수 (반응형 웹)',
      time: '2020.06 ~ 2020.09',
      skill: 'HTML, CSS, JavaScript, jQuery',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg',
      rate: '참여율: 100%',
      desc: [
        '하이스토어 쇼핑몰 유지보수',
        '웹표준 작업, 반응형 웹 제작, 크로스브라우징'
      ]
    },
    {
      title: '사피언스 Qna 신규 구축 (반응형 웹)',
      time: '2020.01 ~ 2020.02',
      skill: 'HTML, CSS, JavaScript, jQuery, jsp, jstl, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg',
      rate: '참여율: 100%',
      desc: [
        '지식인 서비스 구축',
        '웹표준 작업, 반응형 웹 제작, 크로스브라우징'
      ]
    },
    {
      title: '사피언스 인공지능 성향분석 매칭을 통한 팀빌딩 플랫폼 리뉴얼 및 유지보수 (반응형 웹)',
      time: '2018.12 ~ 2019.12',
      skill: 'HTML, CSS, JavaScript, jQuery, jsp, jstl, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg',
      rate: '참여율: 100%',
      desc: [
        '인공지능 성향분석 매칭을 통한 팀빌딩 플랫폼 리뉴얼 및 유지보수, 채팅, 이벤트 페이지 퍼블리싱',
        'D3.js, 웹표준 작업, 반응형 웹 제작, 크로스브라우징'
      ]
    },
    {
      title: '플라이프그래프 항공권 검색 및 예약 서비스 유지보수 (PC / Mobile Web)',
      time: '2017.12 ~ 2018.10',
      skill: 'HTML, CSS, SCSS, JavaScript, jQuery, Photoshop, git, gulp',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg',
      rate: '참여율: 100%',
      desc: [
        '항공권 검색 및 예약 서비스 리뉴얼 및 이벤트 페이지 퍼블리싱',
        'PC, Mobile웹 제작',
        '웹표준 작업, IE9까지 크로스브라우징'
      ]
    },
    {
      title: '제네시스 홈페이지 리뉴얼 (PC / Mobile Web)',
      time: '2017.06 ~ 2017.11',
      skill: 'HTML, CSS, JavaScript, jQuery, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg',
      rate: '참여율: 100%',
      desc: [
        '게이트 메인, GNB, 멤버십, 케넥티드 서비스, 이벤트 페이지 퍼블리싱 및 유지보수',
        'PC, Mobile웹 제작',
        '한국어, 영문, 중동 등 언어 사이트',
        '웹표준 작업, IE9까지 크로스브라우징'
      ]
    },
    {
      title: '에이스생명 홈페이지 유지보수 (PC / Mobile Web)',
      time: 'HTML, CSS, jQuery, Photoshop',
      skill: '2016.03 ~ 2016.09',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg',
      rate: '참여율: 100%',
      desc: [
        '홈페이지 유지보수 및 랜딩 페이지, 이벤트 페이지 퍼블리싱 작업',
        'PC, Mobile웹 제작',
        '한국어, 영문, 중국 총 3개 언어 사이트 작업',
        '웹표준, IE8까지 크로스 브라우징',
      ]
    },
    {
      title: '더 한섬닷컴 쇼핑몰 유지보수 (PC / Mobile Web)',
      time: '2016.02 ~ 2016.09',
      skill: 'HTML, CSS, jQuery, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg',
      rate: '참여율: 100%',
      desc: [
        '패션브랜드 한섬 소개 및 온라인 쇼핑몰로 구성',
        'PC, Mobile웹 제작',
        '한국어, 영문, 중국 총 3개 언어 사이트 작업',
        '웹표준, IE8까지 크로스 브라우징',
      ]
    },
    {
      title: '더 한섬닷컴 쇼핑몰 신규 구축 (PC / Mobile Web)',
      time: '2015.08 ~ 2016.01',
      skill: 'HTML, CSS, jQuery, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg',
      rate: '참여율: 50%',
      desc: [
        '패션브랜드 한섬 소개 및 온라인 쇼핑몰로 구성',
        'PC, Mobile웹 제작',
        '한국어, 영문, 중국 총 3개 언어 사이트 작업',
        '웹표준, IE8까지 크로스 브라우징',
      ]
    },
    {
      title: 'GS리테일 홈페이지 리뉴얼 (PC / Mobile Web)',
      time: '2015.03 ~ 2015.07',
      skill: 'HTML, CSS, jQuery, Photoshop, SVN',
      rate: '참여율: 30%',
      desc: [
              'GS리테일, GS25, GS수퍼마켓, 왓슨스, POP카드 총 5개 홈페이지 리뉴얼 작업',
              'PC, Mobile웹 제작',
              'GS리테일 경우 한국어, 영문 총 2개 사이트 작업',
              '웹표준, 웹접근성, IE8까지 크로스브라우징'
            ],
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
  ];

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
  }

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <section className="section section__work">
      <h2 className="heading">Work</h2>
      <div className="work__list">
        {works.map((item, idx) => (
          <div className="work__item" key={item.title}>
            <div className="image" {...animatedItem[idx]}>
              <img 
                src={item.img} 
                alt="Sanrio" 
              />
            </div>
            <strong className="heading">{item.title}</strong>
            <span className="time">{item.time}</span>
            <span className="skill">{item.skill}</span>
            <button onClick={() => {
              openModal();
              setSelectedModal(item);
            }}>open modal</button>
          </div>
        ))}
      </div>

      {
        modalVisible && <Modal
        maskClosable={false}
        heading={selectedModal.title}
        onClose={closeModal}>{selectedModal.skill}</Modal>
      }

    </section>
  )
}

export default SectionWork;