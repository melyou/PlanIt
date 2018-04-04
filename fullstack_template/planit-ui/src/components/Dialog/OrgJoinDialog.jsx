import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';

import React, { Component } from 'react';

class OrgJoinDialog extends React.Component {

    /* Expected props:
     *
     *  submit: the function to send a "join"(true) or "leave"(false) boolean
     *  canJoin: a boolean determining if the user can join or leave an org
     *  org: The organization to display information of
     *  open: The boolean value determining if the dialog is open or not
     *  onClose: The function to call when any close request is made
     */
    render() {
        const orgActions = [
            <FlatButton
                label="Join Org"
                primary={true}
                onClick={() => this.props.submit("true", this.props.org.orgId)} />,
            <FlatButton
                label="Leave Org"
                primary={true}
                onClick={() => this.props.submit("false", this.props.org.orgId)} />
        ];

        return (
            <Dialog
                actions={this.props.canJoin ? [orgActions[0]] : [orgActions[1]]}
                title={this.props.org.organizationName}
                open={this.props.open}
                onRequestClose={this.props.onClose}>
                <div>
                    <h3>Organization Type</h3>
                    <div>{this.props.org.organizationType}</div>
                </div>
                <div>
                    <h3>Organization Description</h3>
                    <div>{this.props.org.organizationDescription}</div>
                </div>
            </Dialog>
        );
    }
}

export default OrgJoinDialog;