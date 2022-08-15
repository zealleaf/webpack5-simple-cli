import React, { useState } from "react";
const Class = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Class" */
      /*webpackPrefetch: true*/
      "@/components/ClassDemo"
    )
);
import "./app.css";
import "./app.less";

function App() {
  const [color, setColor] = useState(false);

  return (
    <div>
      <h2>webpack5-react-T {process.env.BASE_ENV}</h2>
      <Class />
      <div
        onClick={() => {
          setColor(!color);
        }}
        style={{ cursor: "pointer", color: color ? "skyblue" : "pink" }}
      >
        点我换颜色
      </div>
    </div>
  );
}
export default App;
