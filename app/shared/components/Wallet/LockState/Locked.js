// @flow
import React, { Component } from 'react';
import { Button, Form, Header, Icon, Input, Menu, Message, Modal, Popup } from 'semantic-ui-react';

import WalletModalUnlock from '../Modal/Unlock';

export default class WalletLockStateLocked extends Component<Props> {
  state = {
    password: '',
    open: false
  }

  onChange = (e, { value }) => this.setState({ password: value })

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit();
    }
  }

  onOpen = () => this.setState({ open: true });
  onClose = () => this.setState({ open: false });

  onSubmit = () => {
    const {
      actions
    } = this.props;
    const {
      password
    } = this.state;
    actions.unlockWallet(password);
  };
  render() {
    const {
      validate
    } = this.props;
    const {
      open
    } = this.state;
    return (
      <WalletModalUnlock
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        onClose={this.onClose}
        onSubmit={this.onSubmit}
        open={open}
        trigger={(
          <Popup
            content="The wallet is currently locked. Click this menu item and enter its password to unlock it."
            inverted
            trigger={(
              <Menu.Item
                color="yellow"
                key="lockstate"
                inverted="true"
                onClick={this.onOpen}
              >
                <Icon
                  color="green"
                  name="lock"
                />
              </Menu.Item>
            )}
          />
        )}
        validate={validate}
      />
    );
  }
}
