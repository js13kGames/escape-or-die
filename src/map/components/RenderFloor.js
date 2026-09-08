import { tileSize } from "../../base/constants/constant";

export const renderFloor = (_width, _height) => {
  const scene = document.getElementById("scene");
  const floor = document.getElementById("floor");
  scene.style.width = floor.style.width = _width * tileSize + "px";
  scene.style.height = floor.style.height = _height * tileSize + "px";
};
