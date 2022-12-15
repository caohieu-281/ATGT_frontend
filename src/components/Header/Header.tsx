import { connect } from "react-redux";
import { setSearchVisibility } from "../../store/actions";
import { IState } from "../../store/models";
import "./Header.css";
import { CgPlayListSearch } from "react-icons/cg";

const center = [51.505, -0.09];
const zoom = 13;

const Header = ({ searchIsVisible, setSearchVisibility }: any) => {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
