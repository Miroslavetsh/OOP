class NullBillingAccount {
  constructor() {
    this.id = 'null-billing-account-with-unique-hashed-id'
    this.activated = false
  }
}

class BillingAccount {
  constructor(id, activated = false, ballance = 0) {
    this.id = id
    this.activated = activated
    this._ballance = ballance
  }

  /**
   * @param {number} amount
   */
  set ballance(amount) {
    this._ballance = amount
  }

  get ballance() {
    if (typeof this._ballance !== 'number') {
      throw new Error('Wrong ballance value. Retake Your BA with the right credentials')
    }

    return this._ballance
  }

  charge(amount) {
    this._ballance -= amount

    return amount
  }
}

class ATM {
  static manufacturer = 'NCR Corporation'

  constructor({ isFree = true, accounts = [] } = {}) {
    this.isFree = isFree
    this.accounts = accounts
    this.state = {
      currentAccount: new NullBillingAccount(),
    }
  }

  static showManufacturerInfo() {
    return `
      Headquartered in midtown Atlanta, Ga.,
      NCR has over 34,000 employees in 160 countries and solutions distributed in 141 countries.`
  }

  /**
   * Private methods in JS marks with # symbol before it's name
   */
  #checkCurrentBillingAccount() {
    if (this.state.currentAccount.id === 'null-billing-account-with-unique-hashed-id') {
      throw new Error('No such current Billing Account. Register it at first')
    }
  }

  #setCurrentAccount(account) {
    if (this.state.currentAccount.id !== account.id) {
      this.state = {
        ...this.state,
        currentAccount: account,
      }

      return account.id
    }
  }

  register(account) {
    account.activated = true
    this.accounts.push(account)
    this.#setCurrentAccount(account)
  }

  chargeMoney(amount) {
    this.#checkCurrentBillingAccount()

    if (this.state.currentAccount && this.state.currentAccount.activated) {
      return this.state.currentAccount.charge(amount)
    }
  }

  putMoney(amount) {
    this.#checkCurrentBillingAccount()

    if (this.state.currentAccount && this.state.currentAccount.activated) {
      this.state.currentAccount.ballance += amount
    }

    return this.state.currentAccount.ballance
  }

  showMoney() {
    this.#checkCurrentBillingAccount()

    if (this.state.currentAccount) {
      return this.state.currentAccount.ballance
    }
  }
}

module.exports = { ATM, BillingAccount }
