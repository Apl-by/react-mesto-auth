function ImagePopup() {
  return (
    <div className="popup popup_zoomed">
      <div className="zoom">
        <img src="#" alt="" className="zoom__img" />
        <p className="zoom__text"></p>
        <button className="zoom__close" type="button" aria-label="Закрыть изображение"></button>
      </div>
    </div>
  );
}

export default ImagePopup;