import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './pages/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import Homepage from './pages/containers/Homepage';
import TeamSheetContainer from './pages/containers/TeamSheetContainer';
import PlayersPage from './pages/containers/PlayersPage';
import ReportsPage from './pages/containers/ReportsPage'

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center',
};

class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Routes>
                                    <Route 
                                        path="/" 
                                        element={<PrivateRoute><Dashboard /></PrivateRoute>} 
                                    />
                                    <Route 
                                        path="/teambuilder" 
                                        element={<PrivateRoute><TeamSheetContainer /></PrivateRoute>} 
                                    />
                                    <Route 
                                        path="/players" 
                                        element={<PrivateRoute><PlayersPage /></PrivateRoute>} 
                                    />
                                    <Route 
                                        path="/reports" 
                                        element={<PrivateRoute><ReportsPage /></PrivateRoute>} 
                                    />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/home" element={<Homepage />} />
                                    <Route path="*" element={<Navigate to="/" replace />} />
                                </Routes>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
