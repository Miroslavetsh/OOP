const { ATM, BillingAccount } = require('../index')

describe('ATM should work', () => {
  it('Static field manufacturer works', () => {
    expect(ATM.manufacturer).toBe('NCR Corporation')
  })

  it('Static method showManufacturerInfo works', () => {
    const MANUFACTURER_INFO = `
      Headquartered in midtown Atlanta, Ga.,
      NCR has over 34,000 employees in 160 countries and solutions distributed in 141 countries.`

    expect(ATM.showManufacturerInfo()).toBe(MANUFACTURER_INFO)
  })
})

describe('BillingAccount should work', () => {
  const newBillingAccount = new BillingAccount('unique-id-0')
  const anotherBillingAccountWithWrongBallance = new BillingAccount('unique-id-1', true, null)

  it('The new account MUST NOT be activated', () => {
    expect(newBillingAccount.activated).toBe(false)
  })

  it("The new account's ballance equals 0", () => {
    expect(newBillingAccount.ballance).toBe(0)
  })

  it('Wrong ballance should throw an Error with the relevant message', () => {
    try {
      expect(anotherBillingAccountWithWrongBallance.ballance).toThrow(Error)
    } catch (e) {
      expect(e.message).toBe('Wrong ballance value. Retake Your BA with the right credentials')
    }
  })
})

describe("ATM's default attributes should work", () => {
  it('ATM by default is free', () => {
    const myLittlePony = new ATM()

    expect(myLittlePony.isFree).toBe(true)
  })
})

describe("ATM's interactions with account works", () => {
  const myFirstATM = new ATM()
  const myFirstBillingAccount = new BillingAccount('unique-id-2', false, 1000)

  it('Registering account works', () => {
    myFirstATM.register(myFirstBillingAccount)

    expect(myFirstBillingAccount.activated).toBe(true)
  })

  it('Charging money from account works (charge amount returns)', () => {
    expect(myFirstATM.chargeMoney(100)).toBe(100)
    expect(myFirstBillingAccount.ballance).toBe(900)
  })

  it('Putting money in account works', () => {
    expect(myFirstATM.putMoney(1000)).toBe(1900)
  })

  it('Showing money on account works', () => {
    expect(myFirstATM.showMoney()).toBe(1900)
  })
})

describe("ATM's errors catching works", () => {
  const myAnotherATMWithNotActivatedNullBillingAccount = new ATM()
  myAnotherATMWithNotActivatedNullBillingAccount.register(new BillingAccount('unique-id', false))

  const myAnotherATMWithRegisteredNullBillingAccount = new ATM()

  it('Charging money from null unregistered account is not possible', () => {
    try {
      myAnotherATMWithNotActivatedNullBillingAccount.chargeMoney(100)
    } catch (e) {
      expect(e.message).toBe('No such current Billing Account. Register it at first')
    }
  })

  it('Putting money in null unregistered account is not possible', () => {
    try {
      myAnotherATMWithNotActivatedNullBillingAccount.putMoney(1000)
    } catch (e) {
      expect(e.message).toBe('No such current Billing Account. Register it at first')
    }
  })

  it('Showing money on null unregistered account is not possible', () => {
    try {
      myAnotherATMWithNotActivatedNullBillingAccount.showMoney()
    } catch (e) {
      expect(e.message).toBe('No such current Billing Account. Register it at first')
    }
  })
})
