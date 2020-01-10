import React from "react";
import _ from "lodash";
import { emptyStr } from "../../../utils/commonMethod";

class ViewListComponent extends React.Component  {
  constructor(props) {
    super(props);
  }

  getOverList = (listobj, flag) => {
    const eleArray = [];
    listobj.map((item, index) => {
      const eleTemp = <div className="item-container" key={_.get(item, "id", index)}>
        <div className="item-container-up">
          <div className="item-ele-container">
            <span className="icons icon-home2"></span>
            <span>{_.get(item, "name", emptyStr)}</span>
          </div>
          <div className="item-ele-container">
            <span className="icons icon-home2"></span>
             <span>{`最近联系： ${_.get(item, "dates", emptyStr)}`}</span>
          </div>
        </div>
        <div className="item-container-down">
          <div className="item-ele-container">
            <span className="icons icon-home2"></span>
            <span>{_.get(item, "phone", emptyStr)}</span>
          </div>
          <div className="item-ele-container">
            <span className="icons icon-home2"></span>
            <span>{_.get(item, "webChartNum", emptyStr)}</span>
          </div>
        </div>
      </div>;
      eleArray.push(eleTemp);
    });
    return eleArray;
  }

  render(){
      const {title='', listArray=[], flag='' } = this.props;
    return (
      <div className='info-container'>
        {
          title ? (<div className="info-header">
            <h4>{title}</h4>
        </div>) : ''
        }
        
        <div className="info-body">
          {
            this.getOverList(listArray, flag)
          }
        </div>
      </div>
    );
  }
  
};

export default ViewListComponent;
