// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { map } from 'lodash';

import ToolsCrosschainTransferComponent from '../../../../../shared/components/Tools/Blockchains/BEOS/CrosschainTransfer';

import * as CrosschainWithdrawActions from '../../../../../shared/actions/blockchains/beos/withdraw';
import * as SettingsActions from '../../../../../shared/actions/settings';
import * as SystemStateActions from '../../../../../shared/actions/system/systemstate';
import * as TransferActions from '../../../../../shared/actions/transfer';
import * as WalletActions from '../../../../../shared/actions/wallet';

class ToolsCrosschainTransfer extends Component<Props> {
  render = () => (
    <ToolsCrosschainTransferComponent
      {...this.props}
    />
  )
}

function mapStateToProps(state) {
  return {
    balances: state.balances,
    blockchains: state.blockchains,
    blockExplorers: state.blockExplorers,
    connection: state.connection,
    pubkeys: {
      available: state.storage.keys,
      unlocked: map(state.auths.keystore, 'pubkey')
    },
    settings: state.settings,
    system: state.system,
    transaction: state.transaction,
    validate: state.validate,
    wallet: state.wallet
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...CrosschainWithdrawActions,
      ...SettingsActions,
      ...SystemStateActions,
      ...TransferActions,
      ...WalletActions,
    }, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolsCrosschainTransfer));
