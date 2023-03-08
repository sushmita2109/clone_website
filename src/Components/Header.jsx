import "./styles/Header.css";
export const Header = () => {
  return (
    <div className="header">
      <img
        className="header_img"
        src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?cs=srgb&dl=pexels-jane-doan-1099680.jpg&fm=jpg"
        alt="header_pic"
      />
      <h1 className="header_txt">Recepies</h1>
    </div>
  );
};
