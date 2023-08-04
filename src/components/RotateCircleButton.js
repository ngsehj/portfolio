const RotateCircleButton = ({ text, handleClick }) => {
  return (
    <button className="btn-circle-rotate" onClick={handleClick}>
      <div className="rotate">
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 268.6 268.7" space="preserve">
          <defs>
            <path id="circle" d="M234.3,134.3c0,55.2-44.8,100-100,100s-100-44.8-100-100s44.8-100,100-100 S234.3,79.1,234.3,134.3z" />
          </defs>
          <text startOffset="100%">
            <textPath href="#circle">{text}</textPath>
          </text>
        </svg>
      </div>
      <div className="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="42.208" viewBox="0 0 84 42.208">
          <g>
            <path
              d="M83.445,147.127h0l-19.09-19.091a1.909,1.909,0,1,0-2.692,2.692l15.826,15.845H1.909a1.909,1.909,0,0,0,0,3.818h75.58L61.663,166.218a1.909,1.909,0,1,0,2.692,2.692l19.091-19.091A1.909,1.909,0,0,0,83.445,147.127Z"
              transform="translate(0 -127.369)"
            />
          </g>
        </svg>
      </div>
    </button>
  );
};

export default RotateCircleButton;
