import { useScrollHorizontal } from '../../../hooks';


const items = [
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/curlfix2023_kazuha_01.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/curlfix2023_kazuha_02.jpg'},
  { img: 'https://www.etude.com/wp-content/uploads/2022/09/makeup_look_playlist.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/glowfixing_kazuha_02.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/curlfix2023_kazuha_01.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/curlfix2023_kazuha_02.jpg'},
  { img: 'https://www.etude.com/wp-content/uploads/2022/09/makeup_look_playlist.jpg' },
  { img: 'https://www.etude.com/wp-content/uploads/2023/03/glowfixing_kazuha_02.jpg' },
]

const SectionHorizontal = () => {
  const { sectionRef, sliderRef, sectionHeight } = useScrollHorizontal();

  return (
    <section className="section section__horizontal"
      ref={sectionRef}
      style={{ height: sectionHeight }}
    >
      <div className="section__sticky">
        <div className="slider__wrap">
          <div className="slider kazuha" ref={sliderRef}>
            {items.map((item, idx) => (
              <div className="slide" key={idx}>
                <img src={item.img} alt="kazuha" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionHorizontal;

