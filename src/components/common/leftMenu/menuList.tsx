import React, {useState} from "react";
import './index.sass';
import history from '../../../utils/history'

class MenuList extends React.Component  {
  constructor(props) {
    super(props);
    this.state={
      redindex: 0
    }
  }

  /**
  * 点击跳转
  *
  * @param {any} linkto 跳转路由
  */
  handleLink = (linkto, index) =>{
    history.push(linkto)
    this.setState({
      redindex: index
    })
  }

  listMenu = () => {
    const handleclick = this.handleLink;
    const {menuObj} = this.props;
    const {redindex} = this.state; 
    const eleObj = [];
    menuObj.map((item, index)=>{
      const eleItem = <div className={`icons-container${index === redindex ? ' redbg' : ''}`} key={index} onClick={() => handleclick(item.linkUrl, index)}>
        <span className={`icons ${item.iconType}`}></span>
      </div>;
      eleObj.push(eleItem);
    })
    return eleObj;
  }
  

  render(){
    return (
      <div className='menu-container'>
        <div  className="icons-container">
          <span className="icons icon-x"></span>
        </div>
        {
          this.listMenu()
        }
      </div>
    );
  }
  
};

export default MenuList;
