describe("Thermostat", function() {
  var thermostat

beforeEach(function(){
  thermostat = new Thermostat
})

  it("Thermostat starts on 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20)
  })

  it("Increases the temperature", function() {
    thermostat.increase()
    expect(thermostat.temperature).toEqual(21)
  })

  it("Decreases the temeprature", function(){
    thermostat.decrease()
    expect(thermostat.temperature).toEqual(19)
  })

  it("Raises error when trying to decrease temperature below 10 degrees", function() {
    for (i = 0; i< 10; i++) {
      thermostat.decrease()
    }

    expect(function() {thermostat.decrease()}).toThrowError("Minimum temperature reached")
  })

  it("Power saving mode is on by default", function() {
    expect(thermostat.powerSavingMode).toBe(true)
  })

  it("Raises error when trying to increase temperature above 25 degrees during power saving mode", function() {
    for (i = 0; i < 5; i++) {
      thermostat.increase()
    }
    expect(function() {thermostat.increase()}).toThrowError("Maximum temperature reached in current mode")
  })

  it("Turns power saving mode off", function() {
    thermostat.powerSavingOff()
    expect(thermostat.powerSavingMode).toBe(false)
  })

  it("Turns power saving mode on", function() {
    thermostat.powerSavingOff()
    thermostat.powerSavingOn()
    expect(thermostat.powerSavingMode).toBe(true)
  })

  it("Raises error when trying to increase temperature above 32 degrees when power saving mode is off", function() {
    thermostat.powerSavingOff()
    for (i = 0; i < 12; i++) {
      thermostat.increase()
    }
    expect(function() {thermostat.increase()}).toThrowError("Maximum temperature reached in current mode")
  })

  it("Resets the thermostat temeprature to 20", function() {
    thermostat.increase()
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })
})
