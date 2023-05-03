const Header = () => {
  return (
    <header className="header">
      <strong className="logo">logo</strong>
      <nav className="gnb">
        <div className="gnb__menu">
          <span className="gnb__item">1</span>
          <span className="gnb__item">2</span>
          <span className="gnb__item">3</span>
          <span className="gnb__item">4</span>
        </div>
      </nav>
      <nav className="lnb">
        <div className="lnb__menu"></div>
      </nav>
    </header>
  )
}

export default Header;