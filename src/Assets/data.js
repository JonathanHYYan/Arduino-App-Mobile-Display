export const data = [
  {
    id: "000",
    room: "kitchen",
    appliance: [
      {
        id: "000000",
        name: "lights",
        switchOn: true,
        settings: {
          days: [false, true, false, false, false, false, false],
          times: [
            { startHr: 9, startMin: 0, endHr: 11, endMin: 0 },
            { startHr: 18, startMin: 20, endHr: 19, endMin: 30 },
          ],
          vibrate: true,
        },
      },
      {
        id: "000001",
        name: "roomba",
        switchOn: false,
        settings: {
          days: [false, true, false, false, false, false, false],
          times: [
            { startHr: 9, startMin: 0, endHr: 11, endMin: 0 },
            { startHr: 18, startMin: 20, endHr: 19, endMin: 30 },
          ],
          vibrate: false,
        },
      },
    ],
  },
  {
    id: "001",
    room: "bed",
    appliance: [
      {
        id: "001000",
        name: "lights",
        switchOn: false,
        settings: {
          days: [false, true, false, false, false, false, false],
          times: [
            { startHr: 9, startMin: 0, endHr: 11, endMin: 0 },
            { startHr: 18, startMin: 20, endHr: 19, endMin: 30 },
          ],
          vibrate: false,
        },
      },
      {
        id: "001001",
        name: "kettle",
        switchOn: true,
        settings: {
          days: [false, true, false, true, false, true, false],
          times: [
            { startHr: 2, startMin: 0, endHr: 4, endMin: 0 },
            { startHr: 18, startMin: 8, endHr: 19, endMin: 7 },
          ],
          vibrate: true,
        },
      },
    ],
  },
];
