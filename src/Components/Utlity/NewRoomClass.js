class Appliance {
  constructor(id, name, switchOn, settings) {
    this.id = id;
    this.name = name;
    this.switchOn;
    this.settings = {
      days: [false, false, false, false, false, false, false],
      times: [
        { startHr: 0, startMin: 0, endHr: 0, endMin: 0 },
        { startHr: 0, startMin: 0, endHr: 0, endMin: 0 },
      ],
      vibrate: true,
    };
  }
}

class NewRoom {
  constructor(id, name, appliances) {
    this.id = id;
    this.room = name;
    this.appliance = appliances;
  }
}

module.exports = {
    Appliance,
    NewRoom,
};