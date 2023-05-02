import './App.css';

function App() {
  return (
    <div className="App">
      {/* <div className="loading"></div> */}
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
      <div className="container">
        <section className="section-intro">
          <div className="section__heading">
            <h1 className="heading">Hello World</h1>
          </div>
          <div className="section__bg">
            <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
          </div>
          <div className="section__sticky">
            <p>message 111</p>
          </div>
          <div className="section__sticky">
            <p>message 222</p>
          </div>
          <div className="section__sticky">
            <p>message 333</p>
          </div>
          <div className="section__sticky">
            <p>message 444</p>
          </div>
        </section>

        <section className="section">
          <div className="section__desc">
            <p><strong>보통 스크롤 영역</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.</p>
          </div>
        </section>

        <section className="section">
          <div className="section__desc">
            <p><strong>Retina 머그</strong>아이디어를 광활하게 펼칠 아름답고 부드러운 음료 공간.</p>
          </div>

          <div class="section__sticky">
            <canvas className="blend-image"></canvas>
          </div>

          <div className="section__desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.</p>
          </div>
        </section>
      </div>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
