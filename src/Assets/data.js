export const data = [
  {
    room: "kitchen",
    appliance: {
      names: ["roomba", "lights"],
      boolean: [true, false],
    },
    settings: {
      days: [false, true, false, false, false, false, false],
      times: [
        { startHr: 9, startMin: 0, endHr: 11, endMin: 0 },
        { startHr: 18, startMin: 20, endHr: 19, endMin: 30 },
      ],
      vibrate: false
    },
  },
  {
    room: "bed",
    appliance: {
      names: ["test11", "test22"],
      boolean: [false, true],
    },
    settings: {
      days: [false, true, false, true, false, true, false],
      times: [
        { startHr: 2, startMin: 0, endHr: 4, endMin: 0 },
        { startHr: 18, startMin: 8, endHr: 19, endMin: 7 },
      ],
      vibrate: true
    },
  },
];
