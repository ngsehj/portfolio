// import { useCallback, useContext } from "react";
// import { CursorContext } from "../pages/Home/Home";

// const isTouchDevice = 
//   "ontouchstart" in window
//   || navigator.MaxTouchPoints > 0 
//   || navigator.msMaxTouchPoints > 0;

// const useCursorHandler = (options = {}) => {
//   if (isTouchDevice) {
//     return options;
//   }

//   const [, setCursor] = useContext(CursorContext);

//   const toggleCursor = () => {
//     setCursor(({ active }) => ({ active: !active }));
//   };

//   const onMouseEnter = useCallback(event => {
//     if(options.onMouseEnter) {
//       options.onMouseEnter(event);
//     }
//     toggleCursor();
//   });

//   const onMouseLeave = useCallback(event =>  {
//     if(options.onMouseLeave) {
//       options.onMouseLeave(event);
//     }
//     toggleCursor();
//   });

//   return { onMouseEnter, onMouseLeave };
// }

// export default useCursorHandler;