import { useScrollCalc } from "../../../hooks";

const SectionLast = () => {
  const animatedText = {
    sticky: useScrollCalc('width', { start: 0, end: 2.01 }, true),
  };

  return (
    <section className="section">
      <div className="section__inner is-sticky" {...animatedText['sticky']}>
        <span className="text">Clean Code</span>
        <p>일관된 네이밍 규칙과 구조를 따르는 것</p>
        <p>중복을 최소화하고 모듈화를 통해 재사용성을 높이는 것</p>
        <p>웹 표준을 준수하여 웹 사이트의 호환성을 높이는 것</p>
        <p>가독성과 유지보수성을 향상시키는 것을 목표로 하고 있습니다.</p>
      </div>

    </section>
  )
}

export default SectionLast;