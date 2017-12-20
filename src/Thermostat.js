
function Thermostat() {
  this.temperature = 20
  this.powerSavingMode = true
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
