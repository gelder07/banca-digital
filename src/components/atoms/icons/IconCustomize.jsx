import Image from "next/image";
import React from "react";

const IconCustomize = (props) => {
  const { src, alt, width, height } = props;

  return <Image src={src} alt={alt} width={width | 20} height={height | 20} />;
};

export default IconCustomize;
