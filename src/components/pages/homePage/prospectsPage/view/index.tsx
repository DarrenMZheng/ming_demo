/**
 * Created by Darren on 2019/12/16.
 */
import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {injectIntl} from 'react-intl';
import "./index.sass";
import { getProspectsOverList, getProspectsUndoneList } from '../../../../../actions/prospectsActions/viewActions.js';
import ViewList from "../../../../common/viewList";

const mapStateToProps = (state, props) => ({
  overProspectsList: state.overProspectsList.data,
  undoneProspectsList: state.undoneProspectsList.undoneData
});

const mapDispatchToProps = (dispatch) => {
  return {
    getOverProspectsList: () => {
      dispatch(getProspectsOverList())
    }, 
    getProspectsUndoneList: () => {
      dispatch(getProspectsUndoneList())
    }
  }
};

class viewProspects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getOverProspectsList();
    this.props.getProspectsUndoneList();
  }

  formatItemData = (data, timeName) => {
    const dataTemp = [];
    if(_.get(data,"length",0)){
      data.map((item, index)=> {
        const temp = {}
        temp.name = _.get(item, "name", "");
        temp.dates = _.get(item, timeName, "");
        temp.phone = _.get(item, "phone", "");
        temp.webChartNum = _.get(item, "webChartNum", "");
        temp.status = _.get(item, "status", "");
        dataTemp.push(temp)
      })
    }
    return dataTemp;
  }

  render() {
    return (
        <div>
          <div className="prospects-list-container">
            {
              this.props.undoneProspectsList.length ? 
              <ViewList title={this.props.intl.formatMessage({id: `prospects.undone.title`})} listArray={this.formatItemData(this.props.undoneProspectsList, "leftTime")} flag="leftTime">
              </ViewList>            
              : ""
            }
            {
              this.props.overProspectsList.length ? 
              <ViewList title="已填写基本信息" listArray={this.formatItemData(this.props.overProspectsList, "contactTime") } flag="contactTime">
              </ViewList>            
              : ""
            }
          </div>
        </div>
        
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(viewProspects));