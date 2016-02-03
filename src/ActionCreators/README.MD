# Action creators

Action creator are class helpers for trigger actions into the dispatcher.

We should create one actin creator by store.

# Example

```js
import Immutable = require("immutable");

// import all your actions
import AccountsEditAction from "../Actions/AccountsEditAction";
import AccountsSaveAction from "../Actions/AccountsSaveAction";
import AccountsCreateAction from "../Actions/AccountCreateAction";
import AccountListLoadedAction from "../Actions/AccountListLoadedAction";

class AccountsActionCreators {
  /**
   * The scoped dispatcher
   */
  dispatcher: any;

  constructor(dispatcher: any) {
    // The dispatcher is provided by the parent provider instance
    this.dispatcher = dispatcher;
  }
  // the list of available methods
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
```
