import React, { useEffect } from "react";
import Pill from "../pill/pill.component";
import CardList from "../card-list/card-list.component";
import { withRouter } from "react-router-dom";
import "./player-options.styles.scss";
import { connect } from "react-redux";
import ChangeFormatButton from "../change-format-button/change-format-button.component";
import { changePosition } from "../../redux/lineup/lineup.actions";

const PlayerOptions = ({
  filteredPlayers,
  addPlayer,
  positions,
  positionSelected,
  handlePositionChange,
  handleChange,
  teamsFull,
  match,
  history,
  changePosition,
}) => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".top-buttons-player-options");
    const scrollTop = window.scrollY;
    scrollTop >= 71
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div className="player-options">

      <div className="player-options-content">
        <div className="player-options-top">
          <Pill items={positions} selectedItem={positionSelected} />
        </div>
        <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          textAlign: "left",
          fontWeight:'bold'
        }}
      >
        <div style={{ width: "12%" }}></div>
        <div style={{ width: "40%", textAlign:'center', padding:'5px 0', borderRight:'1px solid white',  borderLeft:'1px solid white' }}>Name</div>
        <div style={{ width: "19%", textAlign:'center' , padding:'5px 0', borderRight:'1px solid white'}}>Team</div>
        <div style={{ width: "19%", textAlign: "center",padding:'5px 0',  borderRight:'1px solid white' }}>
          Projected 
        </div>
        <div style={{ width: "10%" }}></div>

      </div>
        <CardList players={filteredPlayers} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  teamsFull: state.lineup.teamsFull,
});
const mapDispatchToProps = (dispatch) => ({
  changePosition: (item) => dispatch(changePosition(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlayerOptions)
);
