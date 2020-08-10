import React from "react";

// one way of using HOC
// const withClass = (props) => (
//   <div className={props.classes}>{props.children}</div>
// );

// second way of using HOC

const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
