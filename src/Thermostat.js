
function Thermostat() {
  this.temperature = 20
  this.powerSavingMode = true
  this.maxTempSaveOn = 25

}

Thermostat.prototype.increase = function() {
  if (this.temperature === 25 && this.powerSavingMode === true) {throw Error ("Maximum temperature reached in current mode")}
  if (this.temperature === 32 && this.powerSavingMode === false) {throw Error ("Maximum temperature reached in current mode")}
  this.temperature ++
}

Thermostat.prototype.decrease = function() {
  if (this.temperature === 10) {throw Error ("Minimum temperature reached")}
  this.temperature --
}

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false
}

Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingMode = true
}

Thermostat.prototype.reset = function() {
  this.temperature = 20
}

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "low-usage"
  }
  else if (this.temperature > 18 && this.temperature < 25) {
    return "medium-usage"
  }
  else {return "high-usage"}
  }

Thermostat.prototype.powerSaverSwitch = function() {
  if (this.powerSavingMode === true) {
    return (this.powerSavingMode = false)
  }
  else {
    if (this.temperature > this.maxTempSaveOn){ this.temperature = this.maxTempSaveOn }
    return (this.powerSavingMode = true)
  }
}
