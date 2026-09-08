export const renderScene = (_width, _height) => {
  const viewport = document.getElementById("viewport");
  viewport.style.width = _width + "px";
  viewport.style.height = _height + "px";
};
