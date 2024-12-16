import React, { useState } from "react";

function ImageProfile({ avatarUrl }) {
  const [imageSrc, setImageSrc] = useState(
    avatarUrl ||
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );
  return (
    <img
      src={imageSrc}
      alt="Foto de perfil"
      className="h-full w-full object-cover object-top"
      onError={() => setImageSrc("")}
    />
  );
}

export default ImageProfile;
