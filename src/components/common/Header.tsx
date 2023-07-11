import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6 18H2V6h4v12zm16-6h-4l-3-4-3 4H2v6h20v-6zm-9-4l2.5-3h5.5v3h2V5H13l-2.5 3H5v2h6z" />
        </svg>
      </div>
      <div>Action Buttons</div>
    </div>
  );
};
