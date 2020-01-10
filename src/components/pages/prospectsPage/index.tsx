/**
 * Created by Darren on 2019/12/16.
 */
import React from "react";

class ProspectsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>ProspectsPage</h1>
        <div className='admin-center'>{this.props.children}</div>
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
export default ProspectsPage;