import React, { Fragment } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {IntlProvider, addLocaleData } from 'react-intl';
import './App.sass';
import LocaleProvider from '../components/common/localeProvider';
import MenuComponent from '../components/common/leftMenu/index.tsx';
import HomePage from '../components/pages/homePage/index.tsx';
import ProspectsPage from '../components/pages/prospectsPage/index.tsx';
import ProspectsView from '../components/pages/prospectsPage/view/index.tsx';
import ProspectsAdd from '../components/pages/prospectsPage/add/index.tsx';
import Header from '../components/common/header';

/**
 * 获取国际化资源文件
 *
 * @param {any} lang
 * @returns
 */
function getLocale(lang) {
  /* eslint-disable global-require */
  let result = {};
  switch (lang) {
    case 'zh-CN':
      result = require('../locales/zh-CN');
      break;
    case 'en-US':
      result = require('../locales/en-US');
      break;
    default:
      result = require('../locales/zh-CN');
      break;
  }

  return result.default || result;
  /* eslint-enable global-require */
}




class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      lang: 'zh-CN',
    };
  }
  /**
   * 切换语言
   *
   * @param {any} index 语言序号
   */
  onChange = (index) => {
    const lang = index === 0 ? 'en-US' : 'zh-CN';
    this.setState({
      lang,
    });
  }

  render(){
    const { lang } = this.state;
    const appLocale = getLocale(lang);
    addLocaleData(...appLocale.data);
    return(
      <div className="App">
        <LocaleProvider locale={appLocale}>
          <IntlProvider 
            locale={appLocale.locale}
            messages={appLocale.messages}
            formats={appLocale.formats}
          >
            <Fragment>
              <MenuComponent />
              <div className="main-container">
                <Header></Header>
                <Switch>
                  <Redirect exact from='/' to='/homePage'></Redirect>
                  <Route path='/homePage' component={HomePage}></Route>
                  <Route path='/prospects' render={()=>{
                      return(
                        <ProspectsPage>
                          <Route path='/prospects/view' component={ProspectsView}></Route>
                          <Route path='/prospects/add' component={ProspectsAdd}></Route>
                        </ProspectsPage>
                      )
                    }}>
                  </Route>
                </Switch>
              </div> 
            </Fragment>
          </IntlProvider> 
        </LocaleProvider>
      </div>
    )
  }
}

export default App;
