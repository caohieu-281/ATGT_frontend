import { connect } from "react-redux";
import { setCenter, setSearchVisibility } from "../../store/actions";
import { IState } from "../../store/models";
import "./Header.css";
import { CgPlayListSearch } from "react-icons/cg";
import { useLocation } from "react-router-dom";

const Header = ({ searchIsVisible, setSearchVisibility, setCenter }: any) => {
  const location = useLocation();
  const handleSetCenter = () => {
    setCenter();
  };
  return (
    <div className="header__container">
      <CgPlayListSearch
        style={{
          fontSize: "3rem",
          verticalAlign: "middle",
          position: "absolute",
          left: "1rem",
          top: "10px",
        }}
        onClick={() => setSearchVisibility(!searchIsVisible)}
      ></CgPlayListSearch>
      <span>Camera</span>
      {location.pathname === "/" && (
        <button onClick={handleSetCenter}>123</button>
      )}
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  const { search } = state;
  return search;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSearchVisibility: (payload: boolean) =>
      dispatch(setSearchVisibility(payload)),
    setCenter: () => dispatch(setCenter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
