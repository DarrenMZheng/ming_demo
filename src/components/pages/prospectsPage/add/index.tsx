/**
 * Created by Darren on 2019/12/16.
 */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AddPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
        <div>
           Add Prospects page
        </div>
    );
  }
}

// const mapStateToProps = (state: any) => ({
//   homeData: state.homeData
// });

// const mapDispatchToProps = (dispatch: any) => {
//   return bindActionCreators(
//     {
//       fetchList
//     },
//     dispatch
//   );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default AddPage;