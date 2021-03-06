// @flow
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Icon, Menu, Popup } from 'semantic-ui-react';

class WalletMode extends Component<Props> {
  render() {
    const {
      settings,
      t
    } = this.props;
    let element = false;
    switch (settings.walletMode) {
      case 'cold': {
        element = (
          <Popup
            content={(t('wallet_mode_explain_cold'))}
            inverted
            trigger={(
              <Menu.Item>
                <Icon
                  color="blue"
                  name="snowflake"
                  size="large"
                  style={{ margin: 0 }}
                />
              </Menu.Item>
            )}
          />
        );
        break;
      }
      case 'watch': {
        element = (
          <Popup
            content={(t('wallet_mode_explain_watch'))}
            inverted
            trigger={(
              <Menu.Item>
                <Icon
                  color="orange"
                  name="eye"
                  size="large"
                  style={{ margin: 0 }}
                />
              </Menu.Item>
            )}
          />
        );
        break;
      }
      default: {
        // no default
      }
    }
    return element;
  }
}

export default withTranslation('wallet')(WalletMode);
