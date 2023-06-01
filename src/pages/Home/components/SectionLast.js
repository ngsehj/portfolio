import UstHeading from "../../../components/UstHeading";
import { useScrollCalc } from "../../../hooks";

const SectionLast = () => {
  
  const headingText = ['C', 'O', 'N', 'T', 'A', 'C', 'T'];

  const animatedText = {
    sticky: useScrollCalc('width', { start: 0, end: 2.01 }, true),
  };

  return (
    <section className="section">
      <div className="section__inner is-sticky" {...animatedText['sticky']}>
        <span class="text">Clean Code</span>
        <p>
          일관된 네이밍 규칙과 구조를 따르는 것<br />
          중복을 최소화하고 모듈화를 통해 재사용성을 높이는 것<br />
          웹 표준을 준수하여 웹 사이트의 호환성을 높이는 것<br />
          가독성과 유지보수성을 향상시키는 것을 목표로 하고 있습니다.<br />
        </p>
      </div>

      <div className="section__inner bg-color">
        <UstHeading words={headingText} />
      </div>
    </section>
  )
}

export default SectionLast;