import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setFormatFalse } from "../../redux/lineup/lineup.actions";
import { setBetsFalse } from "../../redux/action/action.actions";
import {changePosition} from '../../redux/lineup/lineup.actions'
import './change-format.styles.scss';

function ChangeFormatButton({ history, setFormatFalse, changePosition, activeGreen }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style = {{width:'100%'}}>
      <div style = {{ color:'white', fontFamily:'var(--bs-body-font-family)', fontSize:'15px',  backgroundColor:'transparent', border:'none', display:'flex', flexDirection:'row', justifyContent:'center'}} className = 'change-format-button-link' onClick={handleShow}>
      <div style ={{marginRight:'5px', backgroundColor:'#1a411a',padding:'3px', height:'30px', width:'30px', borderRadius:'30px'}}>&#49; </div> 
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className = {`${activeGreen ? 'activeGreen' : ''}`}> Set Format</div> 
      </div>
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
