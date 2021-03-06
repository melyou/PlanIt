import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import OrgCardContainer from '../CardContainer/OrgCardContainer';
import OrgCard from '../Card/OrgCard';

import CreateOrgDialog from '../Dialog/CreateOrgDialog';
import OrgInfoDialog from '../Dialog/OrgInfoDialog';

import React, { Component } from 'react';

require('./MyOrgs.css');

class MyOrgs extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            memberStatus: "Admin",
            isCreateVisible: false,
            isInfoVisible: false,
            orgInfo: {}
        }

        this.closeCreateDialog = this.closeCreateDialog.bind(this);
        this.closeInfoDialog = this.closeInfoDialog.bind(this);
        this.changeOrgInfoVisible = this.changeOrgInfoVisible.bind(this);

        this.renderAdminSelector = this.renderAdminSelector.bind(this);
        this.handleOrgRoleChange = this.handleOrgRoleChange.bind(this);
    }

    changeOrgInfoVisible(orgId) {
        var org = {};
        this.state.memberStatus === "Admin" ? 
         org = this.props.AdminOrgs.filter(org => org.organizationId === orgId)[0]
        :
         org = this.props.MemberOrgs.filter(org => org.organizationId === orgId)[0];
        
        console.log("Organization was...");
        console.log(org);
        this.setState({orgInfo: org, isInfoVisible: true});
    }

    closeCreateDialog() {
        this.setState({isCreateVisible: false});
    }

    closeInfoDialog() {
        this.setState({isInfoVisible: false});
    }

    handleOrgRoleChange(event, index, value) {
        this.setState({memberStatus: value});
    }

    renderAdminSelector() {
        console.log("is this working");
        return (
            <DropDownMenu value={this.state.memberStatus} onChange={this.handleOrgRoleChange} className="admin-selector">
                <MenuItem value={"Admin"} key={0} primaryText={"Admin"}/>
                <MenuItem value={"Member"} key={1} primaryText={"Member"}/>
            </DropDownMenu>
        );
    }
    
    render() {
        return (
            <div style={style}>
               {this.state.memberStatus === "Admin" ?
               <div>
                  <div className="rowComponent">
                    <div className="sub-row">
                        <h1 className="float-left" style={{paddingTop: 20 + 'px', fontSize: 16 + 'px'}}>Organizations You Are an Admin of: </h1>
                        <RaisedButton className="float-left" label="Create Organization" primary={true} style={style} onClick={() => this.setState({isCreateVisible:true})}/>
                    </div>
                    {this.renderAdminSelector()}
                  </div>
                  <OrgCardContainer cards={this.props.AdminOrgs} renderOrgInfo={this.changeOrgInfoVisible}/>
              </div>
              :
              <div>
                  <div className="rowComponent">
                    <h1 style={{paddingTop: 20 + 'px', fontSize: 16 + 'px'}}>Organizations You Are a Member of: </h1>
                    {this.renderAdminSelector()}
                  </div>
                  <OrgCardContainer cards={this.props.MemberOrgs} renderOrgInfo={this.changeOrgInfoVisible}/>
              </div>
               }
               <OrgInfoDialog isVisible={this.state.isInfoVisible} close={this.closeInfoDialog} org={this.state.orgInfo} {...this.props}/>
               <CreateOrgDialog isVisible={this.state.isCreateVisible} close={this.closeCreateDialog} {...this.props}/>
               
            </div>
        );
    }
}

const style = {
    margin: 15,
};


export default MyOrgs;