import scrollTo from "../../reusable/FN scrollTo";
const NavBtn = ({ content, to, setIsNavExpended }) => {
  return (
    <button
      className="navBtn"
      onClick={() => {
        setIsNavExpended(false);
        scrollTo(to);
      }}
    >
      {content}
    </button>
  );
};
export default NavBtn;
