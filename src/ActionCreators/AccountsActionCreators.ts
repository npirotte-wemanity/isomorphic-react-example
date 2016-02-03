import Immutable = require("immutable");

import AccountsEditAction from "../Actions/AccountsEditAction";
import AccountsSaveAction from "../Actions/AccountsSaveAction";
import AccountsCreateAction from "../Actions/AccountCreateAction";
import AccountListLoadedAction from "../Actions/AccountListLoadedAction";

class AccountsActionCreators {
  dispatcher: any;

  constructor(dispatcher: any) {
      this.dispatcher = dispatcher;
  }

  edit(account: Immutable.Map<string, string>): void {
    this.dispatcher.dispatch(new AccountsEditAction(account));
  }

  save(account: Immutable.Map<string, string>): void {
    this.dispatcher.dispatch(new AccountsSaveAction(account));
  }

  create(account: Immutable.Map<string, string>): void {
    this.dispatcher.dispatch(new AccountsCreateAction(account));
  }

  loaded(): void {
    this.dispatcher.dispatch(new AccountListLoadedAction());
  }
}

export default AccountsActionCreators;
