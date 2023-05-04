import { useEffect, useRef } from "react";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const SectionCanvas = ({ calcAnimation, scrollH }) => {
  const canvasRef = useRef();
  // const currentYOffset = yOffset - prevScrollH;

  let image;
  let images = [];
  const imagePath = [
    process.env.PUBLIC_URL + `/assets/images//blend-image-1.jpg`,
    process.env.PUBLIC_URL + `/assets/images//blend-image-2.jpg`
  ]

  for (let i = 0; i < imagePath.length; i++) {
    image = new Image();
    image.src = imagePath[i];
    images.push(image);
  }


  useEffect(()=> {
    let canvasScaleRatio;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    let rectStartY = 0;
    const rect1X = [0, 0, { start: 0, end: 0 }]
    const rect2X = [0, 0, { start: 0, end: 0 }]
    const blendHeight = [0, 0, { start: 0, end: 0 }]
    const canvas_scale = [0, 0, { start: 0, end: 0 }]
    const canvasCaption_opacity = [0, 1, { start: 0, end: 0 }]
    const canvasCaption_translateY = [ 20, 0, { start: 0, end: 0 } ]
    
    // const scrollHeight = 5000;
    const widthRatio = window.innerWidth / canvas.width;
    const heightRatio = window.innerHeight / canvas.height;
    
    
    if (widthRatio <= heightRatio) {
      // 캔버스보다 브라우저 창이 홀쭉한 경우
      canvasScaleRatio = heightRatio;
    } else {
      // 캔버스보다 브라우저 창이 납작한 경우
      canvasScaleRatio = widthRatio;
    }

    // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
    const recalculatedInnerWidth = document.body.offsetWidth / canvasScaleRatio;

    if (!rectStartY) {
      rectStartY = canvas.offsetTop + (canvas.height - canvas.height * canvasScaleRatio) / 2;
      rect1X[2].start = (window.innerHeight / 2) / scrollH;
      rect2X[2].start = (window.innerHeight / 2) / scrollH;
      rect1X[2].end = rectStartY / scrollH;
      rect2X[2].end = rectStartY / scrollH;
    }

    const whiteRectWidth = recalculatedInnerWidth * 0.15;
    rect1X[0] = (canvas.width - recalculatedInnerWidth) / 2;
    rect1X[1] = rect1X[0] - whiteRectWidth;
    rect2X[0] = rect1X[0] + recalculatedInnerWidth - whiteRectWidth;
    rect2X[1] = rect2X[0] + whiteRectWidth;

    // 좌우 흰색 박스 그리기
    context.fillRect(
      parseInt(calcAnimation(rect1X, 1000, scrollH)),
      0,
      parseInt(whiteRectWidth),
      canvas.height
    );
    context.fillRect(
      parseInt(calcAnimation(rect2X, 1000, scrollH)),
      0,
      parseInt(whiteRectWidth),
      canvas.height
    );


    canvas.style.transform = `scale(${canvasScaleRatio})`;
    context.fillStyle = '#000';

    images[0].onload = function() {
      context.drawImage(images[0], 0, 0);
    };

  }, []);

  return (
    <>
      <div className="section__desc">
        <p><strong>Retina 머그</strong>아이디어를 광활하게 펼칠 아름답고 부드러운 음료 공간.</p>
      </div>

      <canvas ref={canvasRef} width="1920" height="1080"></canvas>

      <div className="section__desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima, eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam. Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis accusantium, aspernatur beatae.</p>
      </div>
    </>
  )
}

export default SectionCanvas;