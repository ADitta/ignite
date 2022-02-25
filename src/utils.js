// Media resize
export const smallImage = (imagePath, size) => {
  return imagePath.match(/media\/(screenshots|games)/)
    ? imagePath.replace("/media/", `/media/resize/${size}/-/`)
    : imagePath;
};
//   const image = imagePath.match(/media\/screenshots/)
//     ? imagePath.replace(
//         "media/screenshots",
//         `/media/resize/${size}/-/screenshots`
//       )
//     : imagePath.replace(`/media/games/`, `/media/resize/${size}/-/games`);
//   return image;
