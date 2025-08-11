import Image from "next/image";
import React from "react";

const ImageCustomize = (props) => {
  const { src, alt, width, height, className } = props;

  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width || 200}
      height={height || 200}
    />
  );
};

export default ImageCustomize;
