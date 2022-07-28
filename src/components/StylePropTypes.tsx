import React from "react";

type StyleProps = {
    style: React.CSSProperties
}

const StylePropTypes = ({style}: StyleProps) => {
  return (
    <div style={style}>
      StylePropTypes
    </div>
  );
};

export default StylePropTypes;
