import React from "react";
import { CustomDropdown } from "../custom-dropdown/custom-dropdown.component";
import CustomButton from "../custom-button/custom-button.component";
import "./select-format.styles.scss";
import {connect} from 'react-redux'
import {selectFormat} from '../../redux/lineup/lineup.actions'

class SelectFormat extends React.Component {
  constructor() {
    super();
    this.state = {
      QB:1,
      RB:2,
      WR:2,
      TE:1,
      Flex:1,
      K:1,
      DEF:1
    };
    this.handleChange = (event)=>{
      let quantity = parseInt(event.target.value)
      this.setState({[event.target.id]:quantity})
    }
  }
  render() {
    const {selectFormat} = this.props;
    return (
      <div className="select-format">
        <h1 style = {{marginBottom:'12px'}}>Select the format of your league</h1>
        <div className="formats">
          <div className="position-and-dropdown">
            <div className="position">
              <span>QB</span>
            </div>
            <div className="dropdown" id="qb-dropdown">
              <CustomDropdown
                defaultOption={1}
                options={[1, 2]}
                onChange={this.handleChange}
                position='QB'
              ></CustomDropdown>
            </div>
          </div>
          <div className="position-and-dropdown">
            <div className="position">
              <span>RB</span>
            </div>
            <div className="dropdown" id="rb-dropdown">
              <CustomDropdown
                defaultOption={2}
                options={[2, 3]}
                onChange={this.handleChange}
                position='RB'

              ></CustomDropdown>
            </div>
          </div>
          <div className="position-and-dropdown">
            <div className="position">
              <span>WR</span>
            </div>
            <div className="dropdown" id="wr-dropdown">
              <CustomDropdown
                defaultOption={2}
                options={[2, 3]}
                onChange={this.handleChange}
                position='WR'

              ></CustomDropdown>
            </div>
          </div>
          <div className="position-and-dropdown">
          <div className="position">
            <span>Flex</span>
          </div>
          <div className="dropdown" id="flex-dropdown">
            <CustomDropdown
              defaultOption={1}
              options={[0, 1, 2]}
              onChange={this.handleChange}
              position='Flex'

            ></CustomDropdown>
          </div>
        </div>
          <div className="position-and-dropdown">
            <div className="position">
              <span>TE</span>
            </div>
            <div className="dropdown" id="te-dropdown">
              <CustomDropdown
                defaultOption={1}
                options={[0, 1, 2]}
                onChange={this.handleChange}
                position='TE'

              ></CustomDropdown>
            </div>
          </div>
          <div className="position-and-dropdown">
            <div className="position">
              <span>K</span>
            </div>
            <div className="dropdown" id="K-dropdown">
              <CustomDropdown
                defaultOption={1}
                options={[0, 1]}
                onChange={this.handleChange}
                position='K'

              ></CustomDropdown>
            </div>
          </div>
          <div className="position-and-dropdown">
            <div className="position">
              <span>Def</span>
            </div>
            <div className="dropdown" id="DEF-dropdown">
              <CustomDropdown
                defaultOption={1}
                options={[0, 1]}
                onChange={this.handleChange}
                position='DEF'

              ></CustomDropdown>
            </div>
          </div>
          <div className="set-lineup-button">
          <CustomButton onClick = {()=>selectFormat(this.state)}>Set Lineup</CustomButton>
        </div>
         
        </div>
      
      </div>
    );
  }
}
const mapDispatchToProps =dispatch =>({
  selectFormat: (format)=>dispatch(selectFormat(format))
})
export default connect(null, mapDispatchToProps)(SelectFormat);


