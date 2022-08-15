import React, { PureComponent } from "react";

// 装饰器为,组件添加number属性
function showNumber(Target: Function) {
  Target.prototype.number = 666;
}
// 使用装饰圈
@showNumber
class ClassDemo extends PureComponent {
  number?: number;

  render() {
    return <h2>类组件---{this.number}</h2>;
  }
}

export default ClassDemo;
