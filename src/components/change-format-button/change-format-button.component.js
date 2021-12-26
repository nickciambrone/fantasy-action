import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setFormatFalse } from "../../redux/lineup/lineup.actions";
import { setBetsFalse } from "../../redux/action/action.actions";
import {changePosition} from '../../redux/lineup/lineup.actions'


function ChangeFormatButton({ history, setFormatFalse, changePosition }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style = {{width:'100%'}}>
      <Button style = {{height:'40px', width:'100%', borderRadius:'0', color:'white', fontFamily:'arial', fontSize:'15px', fontWeight: 'bolder', backgroundColor:'#242424', borderColor:'#242424'}} className = 'change-format-button-link' onClick={handleShow}>
      &laquo; Edit Format
      </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Body>
            Are you sure you want to change format? The draft will start over
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setFormatFalse();
                setBetsFalse();
                changePosition('All');
                history.push('/set-lineup')
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setFormatFalse: () => dispatch(setFormatFalse()),
  setBetsFalse: () =>dispatch(setBetsFalse()),
  changePosition: item => dispatch(changePosition(item))

});

export default withRouter(
  connect(null, mapDispatchToProps)(ChangeFormatButton)
);
