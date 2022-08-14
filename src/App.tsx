import React, { useState } from "react";
// import Class from "@/components/Class";
const Class = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Class" */
      /*webpackPrefetch: true*/
      "@/components/Class"
    )
);
import "./app.css";
import "./app.less";

function App() {
  const [color, setColor] = useState(false);
  return (
    <div>
      <h2>
        <Class></Class>webpack5-react-T {process.env.BASE_ENV}
      </h2>
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
