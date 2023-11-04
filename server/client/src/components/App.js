import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

/* Components */
import Header from './Header';

const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;
const Landing = () => <h1>Landing</h1>;

class App extends Component {
   componentDidMount() {
      this.props.fetchUser();
   };

   render() {
      return (
         <div>
            <BrowserRouter>
               <div className='container'>
                  <Header />
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/surveys"  component={Dashboard} />
                  <Route path="/surveys/new" component={SurveyNew} />
               </div>
            </BrowserRouter> 
         </div>
      );
   };
}; 

export default connect(null, actions)(App);