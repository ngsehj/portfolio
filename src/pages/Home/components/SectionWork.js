import { useState } from "react";
import Modal from "../../../components/Modal";

const SectionWork = () => {
  const works = [
    {
      title: '하이클래스 리뉴얼, 신규 서비스 구축 및 유지보수 (PC / Mobile Web)',
      time: '2020.10 ~ 2023.05',
      skill: 'HTML, CSS, JavaScript, jQuery, vuejs, git',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
    {
      title: '하이스토어 유지보수 (반응형 웹)',
      time: '2020.06 ~ 2020.09',
      skill: 'HTML, CSS, JavaScript, jQuery',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
    {
      title: '사피언스 Qna 신규 구축 (반응형 웹)',
      time: '2020.01 ~ 2020.02',
      skill: 'HTML, CSS, JavaScript, jQuery, jsp, jstl, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
    {
      title: '사피언스 틸빌딩 플랫폼 리뉴얼 및 유지보수 (반응형 웹)',
      time: '2018.12 ~ 2019.12',
      skill: 'HTML, CSS, JavaScript, jQuery, jsp, jstl, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
    {
      title: '플라이프그래프 항공권 검색 및 예약 서비스 유지보수 (PC / Mobile Web)',
      time: '2017.12 ~ 2018.10',
      skill: 'HTML, CSS, Sass, JavaScript, jQuery, Photoshop, git, gulp',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
    {
      title: '제네시스 홈페이지 리뉴얼 (PC / Mobile Web)',
      time: '2017.06 ~ 2017.11',
      skill: 'HTML, CSS, JavaScript, jQuery, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
    {
      title: '에이스생명 홈페이지 유지보수 (PC / Mobile Web)',
      time: 'HTML, CSS, jQuery, Photoshop',
      skill: '2016.03 ~ 2016.09',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
    {
      title: '더 한섬닷컴 쇼핑몰 유지보수 (PC / Mobile Web)',
      time: '2016.02 ~ 2016.09',
      skill: 'HTML, CSS, jQuery, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
    {
      title: '더 한섬닷컴 쇼핑몰 신규 구축 (PC / Mobile Web)',
      time: '2015.08 ~ 2016.01',
      skill: 'HTML, CSS, jQuery, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
    {
      title: 'GS리테일 홈페이지 리뉴얼 (PC / Mobile Web)',
      time: '2015.03 ~ 2015.07',
      skill: 'HTML, CSS, jQuery, Photoshop, SVN',
      img: 'https://abhishekjha.me/template/assets/project1/img3.jpg'
    },
  ];

  // const animatedItem = {
  //   0: useScrollFadeIn(),
  //   1: useScrollFadeIn(),
  //   2: useScrollFadeIn(),
  //   3: useScrollFadeIn(),
  //   4: useScrollFadeIn(),
  //   5: useScrollFadeIn(),
  //   6: useScrollFadeIn(),
  //   7: useScrollFadeIn(),
  //   8: useScrollFadeIn(),
  //   9: useScrollFadeIn(),
  // }

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <section className="section section__work">

      <button onClick={openModal}>open modal</button>
      {
        modalVisible && <Modal
          maskClosable={false}
          heading={'반가워요'}
          onClose={closeModal}>hello</Modal>
      }

      <div className="work__list">
        {works.map((item, idx) => (
          <div className="work__item" key={item.title}>
            <div className="image">
              <img 
                src={item.img} 
                alt="Sanrio" 
              />
            </div>
            <strong className="heading">{item.title}</strong>
            <span className="time">{item.time}</span>
            <span className="skill">{item.skill}</span>

          </div>
        ))}
      </div>

    </section>
  )
}

export default SectionWork;