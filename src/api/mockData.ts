export const mockData = {
  current_day: '2026-06-01',
  available_days: [
    '2026-06-01',
    '2026-06-02',
    '2026-06-03',
    '2026-06-04',
    '2026-06-05',
    '2026-06-06',
    '2026-06-07',
  ],
  restaurant: {
    id: 111000,
    timezone: 'Asia/Vladivostok',
    restaurant_name: 'Супра',
    opening_time: '8:00',
    closing_time: '23:30',
  },

  tables: [{
    "id": "tbl-101",
    "number": "101",
    "zone": "1 Этаж",
    "capacity": 2,
    "orders": [
      {
        "id": "ord-tbl-101-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T18:21:00+10:00",
        "end_time": "2026-06-01T19:30:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T21:45:00+10:00",
        "end_time": "2026-06-01T22:09:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-01T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-01T18:57:00+10:00",
        "end_time": "2026-06-01T19:42:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-01T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-01T20:09:00+10:00",
        "end_time": "2026-06-01T21:33:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T16:54:00+10:00",
        "end_time": "2026-06-01T17:27:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-01T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-01T13:22:00+10:00",
        "end_time": "2026-06-01T13:49:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-03T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-03T15:50:00+10:00",
        "end_time": "2026-06-03T16:48:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T16:06:00+10:00",
        "end_time": "2026-06-03T17:25:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-03T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-03T16:11:00+10:00",
        "end_time": "2026-06-03T17:17:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-03T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-03T09:13:00+10:00",
        "end_time": "2026-06-03T10:06:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-03T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-03T20:30:00+10:00",
        "end_time": "2026-06-03T22:12:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-03T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-03T12:56:00+10:00",
        "end_time": "2026-06-03T13:52:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-03T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-03T13:39:00+10:00",
        "end_time": "2026-06-03T15:01:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-03T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-03T18:35:00+10:00",
        "end_time": "2026-06-03T19:46:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-04T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-04T11:14:00+10:00",
        "end_time": "2026-06-04T13:10:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-04T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-04T20:42:00+10:00",
        "end_time": "2026-06-04T22:41:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T14:29:00+10:00",
        "end_time": "2026-06-05T15:59:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-05T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-05T15:16:00+10:00",
        "end_time": "2026-06-05T15:52:00+10:00"
      },
      {
        "id": "ord-tbl-101-2026-06-06T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-06T14:55:00+10:00",
        "end_time": "2026-06-06T16:17:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 1,
        "name_for_reservation": "Игорь",
        "phone_number": "+79763461473",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-01T17:52:00+10:00",
        "end_time": "2026-06-01T21:16:00+10:00"
      },
      {
        "id": 2,
        "name_for_reservation": "София",
        "phone_number": "+79437982599",
        "num_people": 6,
        "status": "Новая",
        "seating_time": "2026-06-01T14:00:00+10:00",
        "end_time": "2026-06-01T16:58:00+10:00"
      },
      {
        "id": 3,
        "name_for_reservation": "Елена",
        "phone_number": "+79339445742",
        "num_people": 5,
        "status": "Открыт",
        "seating_time": "2026-06-01T12:28:00+10:00",
        "end_time": "2026-06-01T13:58:00+10:00"
      },
      {
        "id": 4,
        "name_for_reservation": "Елена",
        "phone_number": "+79549559551",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T12:57:00+10:00",
        "end_time": "2026-06-01T14:10:00+10:00"
      },
      {
        "id": 5,
        "name_for_reservation": "Игорь",
        "phone_number": "+79527183433",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-01T22:04:00+10:00",
        "end_time": "2026-06-01T23:57:00+10:00"
      },
      {
        "id": 6,
        "name_for_reservation": "Елена",
        "phone_number": "+79731071696",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-01T20:26:00+10:00",
        "end_time": "2026-06-02T00:03:00+10:00"
      },
      {
        "id": 7,
        "name_for_reservation": "Анна",
        "phone_number": "+79731484105",
        "num_people": 2,
        "status": "Закрыт",
        "seating_time": "2026-06-02T09:28:00+10:00",
        "end_time": "2026-06-02T12:55:00+10:00"
      },
      {
        "id": 8,
        "name_for_reservation": "София",
        "phone_number": "+79367700714",
        "num_people": 1,
        "status": "Заявка",
        "seating_time": "2026-06-02T18:04:00+10:00",
        "end_time": "2026-06-02T21:50:00+10:00"
      },
      {
        "id": 9,
        "name_for_reservation": "Анна",
        "phone_number": "+79955244069",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-02T09:14:00+10:00",
        "end_time": "2026-06-02T11:47:00+10:00"
      },
      {
        "id": 10,
        "name_for_reservation": "Елена",
        "phone_number": "+79480580922",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-02T14:06:00+10:00",
        "end_time": "2026-06-02T17:09:00+10:00"
      },
      {
        "id": 11,
        "name_for_reservation": "Максим",
        "phone_number": "+79738611163",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T15:18:00+10:00",
        "end_time": "2026-06-02T17:41:00+10:00"
      },
      {
        "id": 12,
        "name_for_reservation": "Павел",
        "phone_number": "+79278188445",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-03T12:57:00+10:00",
        "end_time": "2026-06-03T13:42:00+10:00"
      },
      {
        "id": 13,
        "name_for_reservation": "Максим",
        "phone_number": "+79460055478",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-03T22:08:00+10:00",
        "end_time": "2026-06-04T01:17:00+10:00"
      },
      {
        "id": 14,
        "name_for_reservation": "Олег",
        "phone_number": "+79181782857",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-03T18:47:00+10:00",
        "end_time": "2026-06-03T21:56:00+10:00"
      },
      {
        "id": 15,
        "name_for_reservation": "Игорь",
        "phone_number": "+79322962606",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-03T15:05:00+10:00",
        "end_time": "2026-06-03T17:27:00+10:00"
      },
      {
        "id": 16,
        "name_for_reservation": "Мария",
        "phone_number": "+79381920743",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-04T09:46:00+10:00",
        "end_time": "2026-06-04T12:24:00+10:00"
      },
      {
        "id": 17,
        "name_for_reservation": "Павел",
        "phone_number": "+79614365407",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-04T19:36:00+10:00",
        "end_time": "2026-06-04T20:11:00+10:00"
      },
      {
        "id": 18,
        "name_for_reservation": "Олег",
        "phone_number": "+79639896739",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-04T09:10:00+10:00",
        "end_time": "2026-06-04T11:12:00+10:00"
      },
      {
        "id": 19,
        "name_for_reservation": "Павел",
        "phone_number": "+79196890650",
        "num_people": 3,
        "status": "Живая очередь",
        "seating_time": "2026-06-05T20:31:00+10:00",
        "end_time": "2026-06-05T23:07:00+10:00"
      },
      {
        "id": 20,
        "name_for_reservation": "Дарья",
        "phone_number": "+79365423852",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-06T12:01:00+10:00",
        "end_time": "2026-06-06T13:29:00+10:00"
      }
    ]
  }, {
    "id": "tbl-102",
    "number": "102",
    "zone": "1 Этаж",
    "capacity": 4,
    "orders": [
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-01T21:34:00+10:00",
        "end_time": "2026-06-01T22:55:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-01T16:56:00+10:00",
        "end_time": "2026-06-01T18:10:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-01T13:28:00+10:00",
        "end_time": "2026-06-01T14:23:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-01T11:30:00+10:00",
        "end_time": "2026-06-01T13:07:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T09:15:00+10:00",
        "end_time": "2026-06-01T11:06:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-01T17:45:00+10:00",
        "end_time": "2026-06-01T19:38:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-01T14:30:00+10:00",
        "end_time": "2026-06-01T16:21:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-7",
        "status": "New",
        "start_time": "2026-06-01T09:40:00+10:00",
        "end_time": "2026-06-01T10:41:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-8",
        "status": "Closed",
        "start_time": "2026-06-01T10:27:00+10:00",
        "end_time": "2026-06-01T12:20:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-01T04:00:00+10:00-9",
        "status": "New",
        "start_time": "2026-06-01T19:15:00+10:00",
        "end_time": "2026-06-01T20:41:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-02T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-02T12:14:00+10:00",
        "end_time": "2026-06-02T13:41:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T11:38:00+10:00",
        "end_time": "2026-06-02T12:55:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T21:16:00+10:00",
        "end_time": "2026-06-03T21:42:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-03T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-03T16:28:00+10:00",
        "end_time": "2026-06-03T18:24:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T19:17:00+10:00",
        "end_time": "2026-06-04T21:16:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-05T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-05T13:09:00+10:00",
        "end_time": "2026-06-05T13:46:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-05T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-05T21:35:00+10:00",
        "end_time": "2026-06-05T22:31:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-05T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-05T20:59:00+10:00",
        "end_time": "2026-06-05T22:37:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-05T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-05T14:01:00+10:00",
        "end_time": "2026-06-05T14:45:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-06T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-06T11:18:00+10:00",
        "end_time": "2026-06-06T12:46:00+10:00"
      },
      {
        "id": "ord-tbl-102-2026-06-06T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-06T09:56:00+10:00",
        "end_time": "2026-06-06T11:25:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 21,
        "name_for_reservation": "Игорь",
        "phone_number": "+79414868965",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T18:31:00+10:00",
        "end_time": "2026-06-01T20:53:00+10:00"
      },
      {
        "id": 22,
        "name_for_reservation": "Мария",
        "phone_number": "+79583763628",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-01T22:33:00+10:00",
        "end_time": "2026-06-02T00:59:00+10:00"
      },
      {
        "id": 23,
        "name_for_reservation": "Дарья",
        "phone_number": "+79236743532",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-02T10:10:00+10:00",
        "end_time": "2026-06-02T11:57:00+10:00"
      },
      {
        "id": 24,
        "name_for_reservation": "Павел",
        "phone_number": "+79324934224",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T11:03:00+10:00",
        "end_time": "2026-06-02T12:26:00+10:00"
      },
      {
        "id": 25,
        "name_for_reservation": "Мария",
        "phone_number": "+79602766804",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T19:00:00+10:00",
        "end_time": "2026-06-03T22:59:00+10:00"
      },
      {
        "id": 26,
        "name_for_reservation": "Анна",
        "phone_number": "+79380657490",
        "num_people": 1,
        "status": "Открыт",
        "seating_time": "2026-06-05T09:34:00+10:00",
        "end_time": "2026-06-05T10:38:00+10:00"
      },
      {
        "id": 27,
        "name_for_reservation": "Игорь",
        "phone_number": "+79133779825",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-05T19:01:00+10:00",
        "end_time": "2026-06-05T20:47:00+10:00"
      }
    ]
  }, {
    "id": "tbl-103",
    "number": "103",
    "zone": "1 Этаж",
    "capacity": 2,
    "orders": [
      {
        "id": "ord-tbl-103-2026-06-01T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-01T21:04:00+10:00",
        "end_time": "2026-06-01T22:34:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T13:49:00+10:00",
        "end_time": "2026-06-01T15:04:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-01T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-01T09:00:00+10:00",
        "end_time": "2026-06-01T10:58:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-01T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-01T19:27:00+10:00",
        "end_time": "2026-06-01T20:51:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T21:26:00+10:00",
        "end_time": "2026-06-01T22:53:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-01T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-01T19:38:00+10:00",
        "end_time": "2026-06-01T21:12:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T09:45:00+10:00",
        "end_time": "2026-06-02T11:00:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T17:21:00+10:00",
        "end_time": "2026-06-02T19:09:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-02T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-02T21:38:00+10:00",
        "end_time": "2026-06-02T22:36:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T14:43:00+10:00",
        "end_time": "2026-06-03T16:36:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-03T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-03T21:24:00+10:00",
        "end_time": "2026-06-03T23:14:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-03T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-03T21:28:00+10:00",
        "end_time": "2026-06-03T22:56:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-03T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-03T17:40:00+10:00",
        "end_time": "2026-06-03T18:33:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-03T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-03T14:28:00+10:00",
        "end_time": "2026-06-03T15:39:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-03T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-03T09:08:00+10:00",
        "end_time": "2026-06-03T10:47:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-03T04:00:00+10:00-6",
        "status": "Bill",
        "start_time": "2026-06-03T10:25:00+10:00",
        "end_time": "2026-06-03T11:14:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-03T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-03T12:15:00+10:00",
        "end_time": "2026-06-03T13:22:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T20:08:00+10:00",
        "end_time": "2026-06-04T21:12:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-05T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-05T21:43:00+10:00",
        "end_time": "2026-06-05T22:19:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-05T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-05T16:43:00+10:00",
        "end_time": "2026-06-05T17:32:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-06T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-06T11:02:00+10:00",
        "end_time": "2026-06-06T12:28:00+10:00"
      },
      {
        "id": "ord-tbl-103-2026-06-06T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-06T14:47:00+10:00",
        "end_time": "2026-06-06T15:31:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 28,
        "name_for_reservation": "Илья",
        "phone_number": "+79928908281",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-01T09:50:00+10:00",
        "end_time": "2026-06-01T13:17:00+10:00"
      },
      {
        "id": 29,
        "name_for_reservation": "Максим",
        "phone_number": "+79575227453",
        "num_people": 2,
        "status": "Закрыт",
        "seating_time": "2026-06-02T10:27:00+10:00",
        "end_time": "2026-06-02T11:46:00+10:00"
      },
      {
        "id": 30,
        "name_for_reservation": "София",
        "phone_number": "+79876117610",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-02T10:46:00+10:00",
        "end_time": "2026-06-02T12:20:00+10:00"
      },
      {
        "id": 31,
        "name_for_reservation": "Дарья",
        "phone_number": "+79349320960",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-02T19:38:00+10:00",
        "end_time": "2026-06-02T22:27:00+10:00"
      },
      {
        "id": 32,
        "name_for_reservation": "Павел",
        "phone_number": "+79990132664",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-02T15:35:00+10:00",
        "end_time": "2026-06-02T18:50:00+10:00"
      },
      {
        "id": 33,
        "name_for_reservation": "Илья",
        "phone_number": "+79288835521",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-03T12:11:00+10:00",
        "end_time": "2026-06-03T14:20:00+10:00"
      },
      {
        "id": 34,
        "name_for_reservation": "Елена",
        "phone_number": "+79332013306",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-03T10:43:00+10:00",
        "end_time": "2026-06-03T12:42:00+10:00"
      },
      {
        "id": 35,
        "name_for_reservation": "Дарья",
        "phone_number": "+79420543761",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-03T09:17:00+10:00",
        "end_time": "2026-06-03T10:10:00+10:00"
      },
      {
        "id": 36,
        "name_for_reservation": "Павел",
        "phone_number": "+79920924966",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-03T18:20:00+10:00",
        "end_time": "2026-06-03T20:25:00+10:00"
      },
      {
        "id": 37,
        "name_for_reservation": "Елена",
        "phone_number": "+79736777236",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-04T12:01:00+10:00",
        "end_time": "2026-06-04T15:06:00+10:00"
      },
      {
        "id": 38,
        "name_for_reservation": "Мария",
        "phone_number": "+79458436265",
        "num_people": 4,
        "status": "Новая",
        "seating_time": "2026-06-05T15:28:00+10:00",
        "end_time": "2026-06-05T16:58:00+10:00"
      },
      {
        "id": 39,
        "name_for_reservation": "София",
        "phone_number": "+79105778963",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-05T20:54:00+10:00",
        "end_time": "2026-06-05T23:36:00+10:00"
      }
    ]
  }, {
    "id": "tbl-104",
    "number": "104",
    "zone": "1 Этаж",
    "capacity": 6,
    "orders": [
      {
        "id": "ord-tbl-104-2026-06-01T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-01T20:39:00+10:00",
        "end_time": "2026-06-01T22:12:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-01T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-01T12:00:00+10:00",
        "end_time": "2026-06-01T12:31:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-01T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-01T11:07:00+10:00",
        "end_time": "2026-06-01T12:47:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-01T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-01T11:28:00+10:00",
        "end_time": "2026-06-01T13:27:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-01T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-01T19:04:00+10:00",
        "end_time": "2026-06-01T19:28:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T21:19:00+10:00",
        "end_time": "2026-06-02T22:44:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T16:52:00+10:00",
        "end_time": "2026-06-02T18:04:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-02T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-02T09:25:00+10:00",
        "end_time": "2026-06-02T10:58:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-02T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-02T11:00:00+10:00",
        "end_time": "2026-06-02T11:22:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-02T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-02T11:06:00+10:00",
        "end_time": "2026-06-02T12:53:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-02T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-02T10:11:00+10:00",
        "end_time": "2026-06-02T11:52:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-02T04:00:00+10:00-6",
        "status": "Bill",
        "start_time": "2026-06-02T17:51:00+10:00",
        "end_time": "2026-06-02T18:52:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-02T04:00:00+10:00-7",
        "status": "New",
        "start_time": "2026-06-02T21:25:00+10:00",
        "end_time": "2026-06-02T23:15:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T16:56:00+10:00",
        "end_time": "2026-06-03T17:57:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T21:29:00+10:00",
        "end_time": "2026-06-03T22:50:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-03T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-03T21:53:00+10:00",
        "end_time": "2026-06-03T23:28:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-03T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-03T11:59:00+10:00",
        "end_time": "2026-06-03T13:44:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-03T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-03T12:06:00+10:00",
        "end_time": "2026-06-03T14:01:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-03T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-03T17:10:00+10:00",
        "end_time": "2026-06-03T17:30:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-03T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-03T14:34:00+10:00",
        "end_time": "2026-06-03T15:38:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-04T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-04T15:34:00+10:00",
        "end_time": "2026-06-04T16:21:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-05T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-05T11:00:00+10:00",
        "end_time": "2026-06-05T12:32:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-05T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-05T09:19:00+10:00",
        "end_time": "2026-06-05T11:09:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-05T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-05T21:31:00+10:00",
        "end_time": "2026-06-05T22:09:00+10:00"
      },
      {
        "id": "ord-tbl-104-2026-06-05T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-05T21:50:00+10:00",
        "end_time": "2026-06-05T22:12:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 40,
        "name_for_reservation": "Елена",
        "phone_number": "+79980625573",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-01T17:40:00+10:00",
        "end_time": "2026-06-01T18:55:00+10:00"
      },
      {
        "id": 41,
        "name_for_reservation": "Анна",
        "phone_number": "+79766487878",
        "num_people": 2,
        "status": "Закрыт",
        "seating_time": "2026-06-02T19:07:00+10:00",
        "end_time": "2026-06-02T19:55:00+10:00"
      },
      {
        "id": 42,
        "name_for_reservation": "Олег",
        "phone_number": "+79464938919",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-02T18:31:00+10:00",
        "end_time": "2026-06-02T21:27:00+10:00"
      },
      {
        "id": 43,
        "name_for_reservation": "Анна",
        "phone_number": "+79155208075",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T21:35:00+10:00",
        "end_time": "2026-06-03T00:01:00+10:00"
      },
      {
        "id": 44,
        "name_for_reservation": "Павел",
        "phone_number": "+79698776181",
        "num_people": 1,
        "status": "Новая",
        "seating_time": "2026-06-02T18:13:00+10:00",
        "end_time": "2026-06-02T19:53:00+10:00"
      },
      {
        "id": 45,
        "name_for_reservation": "Олег",
        "phone_number": "+79650568855",
        "num_people": 5,
        "status": "Открыт",
        "seating_time": "2026-06-03T19:13:00+10:00",
        "end_time": "2026-06-03T22:27:00+10:00"
      },
      {
        "id": 46,
        "name_for_reservation": "Мария",
        "phone_number": "+79302645212",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T13:34:00+10:00",
        "end_time": "2026-06-03T15:11:00+10:00"
      },
      {
        "id": 47,
        "name_for_reservation": "Максим",
        "phone_number": "+79390347070",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-03T13:00:00+10:00",
        "end_time": "2026-06-03T14:20:00+10:00"
      },
      {
        "id": 48,
        "name_for_reservation": "Дарья",
        "phone_number": "+79460706912",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-03T14:13:00+10:00",
        "end_time": "2026-06-03T16:02:00+10:00"
      },
      {
        "id": 49,
        "name_for_reservation": "Илья",
        "phone_number": "+79682823147",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-04T13:38:00+10:00",
        "end_time": "2026-06-04T14:17:00+10:00"
      },
      {
        "id": 50,
        "name_for_reservation": "Дарья",
        "phone_number": "+79996803138",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-04T21:37:00+10:00",
        "end_time": "2026-06-05T00:51:00+10:00"
      },
      {
        "id": 51,
        "name_for_reservation": "Дарья",
        "phone_number": "+79196357416",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-06T22:44:00+10:00",
        "end_time": "2026-06-07T01:45:00+10:00"
      }
    ]
  }, {
    "id": "tbl-105",
    "number": "105",
    "zone": "1 Этаж",
    "capacity": 4,
    "orders": [
      {
        "id": "ord-tbl-105-2026-06-01T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-01T13:55:00+10:00",
        "end_time": "2026-06-01T14:57:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-01T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-01T16:38:00+10:00",
        "end_time": "2026-06-01T17:58:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T20:17:00+10:00",
        "end_time": "2026-06-01T21:55:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-01T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-01T19:07:00+10:00",
        "end_time": "2026-06-01T21:00:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-02T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-02T17:36:00+10:00",
        "end_time": "2026-06-02T18:06:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T11:46:00+10:00",
        "end_time": "2026-06-02T13:20:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-03T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-03T21:18:00+10:00",
        "end_time": "2026-06-03T22:30:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-03T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-03T12:14:00+10:00",
        "end_time": "2026-06-03T13:26:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-03T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-03T15:21:00+10:00",
        "end_time": "2026-06-03T15:59:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-03T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-03T13:08:00+10:00",
        "end_time": "2026-06-03T14:07:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-03T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-03T21:51:00+10:00",
        "end_time": "2026-06-03T23:29:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T09:03:00+10:00",
        "end_time": "2026-06-05T11:00:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-05T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-05T10:25:00+10:00",
        "end_time": "2026-06-05T11:55:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-06T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-06T20:48:00+10:00",
        "end_time": "2026-06-06T22:06:00+10:00"
      },
      {
        "id": "ord-tbl-105-2026-06-06T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-06T11:28:00+10:00",
        "end_time": "2026-06-06T13:20:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 52,
        "name_for_reservation": "Максим",
        "phone_number": "+79595930004",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-01T14:13:00+10:00",
        "end_time": "2026-06-01T16:17:00+10:00"
      },
      {
        "id": 53,
        "name_for_reservation": "Мария",
        "phone_number": "+79872355178",
        "num_people": 5,
        "status": "Заявка",
        "seating_time": "2026-06-01T17:01:00+10:00",
        "end_time": "2026-06-01T18:24:00+10:00"
      },
      {
        "id": 54,
        "name_for_reservation": "Анна",
        "phone_number": "+79504558636",
        "num_people": 4,
        "status": "Новая",
        "seating_time": "2026-06-01T15:32:00+10:00",
        "end_time": "2026-06-01T17:07:00+10:00"
      },
      {
        "id": 55,
        "name_for_reservation": "Павел",
        "phone_number": "+79584727712",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-01T19:54:00+10:00",
        "end_time": "2026-06-01T21:07:00+10:00"
      },
      {
        "id": 56,
        "name_for_reservation": "Илья",
        "phone_number": "+79292788775",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-01T17:55:00+10:00",
        "end_time": "2026-06-01T18:39:00+10:00"
      },
      {
        "id": 57,
        "name_for_reservation": "Дарья",
        "phone_number": "+79715206337",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-02T18:53:00+10:00",
        "end_time": "2026-06-02T21:13:00+10:00"
      },
      {
        "id": 58,
        "name_for_reservation": "Максим",
        "phone_number": "+79692061813",
        "num_people": 6,
        "status": "Живая очередь",
        "seating_time": "2026-06-04T20:04:00+10:00",
        "end_time": "2026-06-04T21:26:00+10:00"
      },
      {
        "id": 59,
        "name_for_reservation": "Мария",
        "phone_number": "+79532208079",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-05T14:57:00+10:00",
        "end_time": "2026-06-05T18:52:00+10:00"
      }
    ]
  }, {
    "id": "tbl-106",
    "number": "106",
    "zone": "1 Этаж",
    "capacity": 8,
    "orders": [
      {
        "id": "ord-tbl-106-2026-06-02T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-02T13:01:00+10:00",
        "end_time": "2026-06-02T13:46:00+10:00"
      },
      {
        "id": "ord-tbl-106-2026-06-02T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-02T12:33:00+10:00",
        "end_time": "2026-06-02T13:29:00+10:00"
      },
      {
        "id": "ord-tbl-106-2026-06-03T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-03T17:35:00+10:00",
        "end_time": "2026-06-03T19:12:00+10:00"
      },
      {
        "id": "ord-tbl-106-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T18:54:00+10:00",
        "end_time": "2026-06-03T20:42:00+10:00"
      },
      {
        "id": "ord-tbl-106-2026-06-04T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-04T19:15:00+10:00",
        "end_time": "2026-06-04T20:53:00+10:00"
      },
      {
        "id": "ord-tbl-106-2026-06-04T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-04T16:22:00+10:00",
        "end_time": "2026-06-04T18:22:00+10:00"
      },
      {
        "id": "ord-tbl-106-2026-06-04T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-04T09:42:00+10:00",
        "end_time": "2026-06-04T10:35:00+10:00"
      },
      {
        "id": "ord-tbl-106-2026-06-04T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-04T20:13:00+10:00",
        "end_time": "2026-06-04T21:59:00+10:00"
      },
      {
        "id": "ord-tbl-106-2026-06-05T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-05T11:14:00+10:00",
        "end_time": "2026-06-05T12:20:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 60,
        "name_for_reservation": "Максим",
        "phone_number": "+79639821461",
        "num_people": 1,
        "status": "Открыт",
        "seating_time": "2026-06-01T19:33:00+10:00",
        "end_time": "2026-06-01T21:50:00+10:00"
      },
      {
        "id": 61,
        "name_for_reservation": "Анна",
        "phone_number": "+79543795295",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-01T21:16:00+10:00",
        "end_time": "2026-06-01T23:38:00+10:00"
      },
      {
        "id": 62,
        "name_for_reservation": "Мария",
        "phone_number": "+79568827859",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-01T11:14:00+10:00",
        "end_time": "2026-06-01T14:46:00+10:00"
      },
      {
        "id": 63,
        "name_for_reservation": "Павел",
        "phone_number": "+79543324912",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T12:53:00+10:00",
        "end_time": "2026-06-01T14:41:00+10:00"
      },
      {
        "id": 64,
        "name_for_reservation": "Павел",
        "phone_number": "+79405092701",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-01T14:49:00+10:00",
        "end_time": "2026-06-01T16:35:00+10:00"
      },
      {
        "id": 65,
        "name_for_reservation": "Мария",
        "phone_number": "+79430444434",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-03T19:21:00+10:00",
        "end_time": "2026-06-03T20:51:00+10:00"
      },
      {
        "id": 66,
        "name_for_reservation": "Анна",
        "phone_number": "+79542887377",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-03T09:14:00+10:00",
        "end_time": "2026-06-03T09:44:00+10:00"
      },
      {
        "id": 67,
        "name_for_reservation": "Анна",
        "phone_number": "+79575212963",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-03T19:12:00+10:00",
        "end_time": "2026-06-03T22:51:00+10:00"
      },
      {
        "id": 68,
        "name_for_reservation": "Анна",
        "phone_number": "+79178572842",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-04T15:58:00+10:00",
        "end_time": "2026-06-04T16:34:00+10:00"
      },
      {
        "id": 69,
        "name_for_reservation": "Олег",
        "phone_number": "+79870182998",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-04T20:11:00+10:00",
        "end_time": "2026-06-04T22:06:00+10:00"
      },
      {
        "id": 70,
        "name_for_reservation": "Илья",
        "phone_number": "+79168760430",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-04T19:42:00+10:00",
        "end_time": "2026-06-04T21:02:00+10:00"
      },
      {
        "id": 71,
        "name_for_reservation": "Анна",
        "phone_number": "+79615686589",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-06T16:16:00+10:00",
        "end_time": "2026-06-06T17:05:00+10:00"
      }
    ]
  }, {
    "id": "tbl-107",
    "number": "107",
    "zone": "1 Этаж",
    "capacity": 2,
    "orders": [
      {
        "id": "ord-tbl-107-2026-06-01T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-01T09:20:00+10:00",
        "end_time": "2026-06-01T09:48:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T10:52:00+10:00",
        "end_time": "2026-06-01T12:48:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T15:22:00+10:00",
        "end_time": "2026-06-01T16:50:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-01T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-01T15:45:00+10:00",
        "end_time": "2026-06-01T16:51:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T11:58:00+10:00",
        "end_time": "2026-06-01T13:27:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-02T15:55:00+10:00",
        "end_time": "2026-06-02T16:40:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T14:41:00+10:00",
        "end_time": "2026-06-02T16:29:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-02T19:23:00+10:00",
        "end_time": "2026-06-02T20:43:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-02T17:47:00+10:00",
        "end_time": "2026-06-02T19:37:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-02T10:29:00+10:00",
        "end_time": "2026-06-02T12:02:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-02T09:03:00+10:00",
        "end_time": "2026-06-02T09:54:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-02T11:03:00+10:00",
        "end_time": "2026-06-02T12:45:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-7",
        "status": "Bill",
        "start_time": "2026-06-02T16:21:00+10:00",
        "end_time": "2026-06-02T17:16:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-02T18:19:00+10:00",
        "end_time": "2026-06-02T19:35:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-02T04:00:00+10:00-9",
        "status": "Bill",
        "start_time": "2026-06-02T13:46:00+10:00",
        "end_time": "2026-06-02T15:30:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T13:56:00+10:00",
        "end_time": "2026-06-04T15:35:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-04T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-04T19:19:00+10:00",
        "end_time": "2026-06-04T20:41:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-04T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-04T18:18:00+10:00",
        "end_time": "2026-06-04T18:50:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-04T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-04T19:09:00+10:00",
        "end_time": "2026-06-04T19:44:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T10:32:00+10:00",
        "end_time": "2026-06-05T11:43:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-05T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-05T15:14:00+10:00",
        "end_time": "2026-06-05T16:31:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-05T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-05T19:03:00+10:00",
        "end_time": "2026-06-05T20:13:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-05T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-05T18:32:00+10:00",
        "end_time": "2026-06-05T19:09:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-06T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-06T14:00:00+10:00",
        "end_time": "2026-06-06T15:40:00+10:00"
      },
      {
        "id": "ord-tbl-107-2026-06-06T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-06T20:45:00+10:00",
        "end_time": "2026-06-06T22:07:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 72,
        "name_for_reservation": "Мария",
        "phone_number": "+79481983694",
        "num_people": 3,
        "status": "Открыт",
        "seating_time": "2026-06-01T17:59:00+10:00",
        "end_time": "2026-06-01T21:06:00+10:00"
      },
      {
        "id": 73,
        "name_for_reservation": "Елена",
        "phone_number": "+79345133083",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-02T19:02:00+10:00",
        "end_time": "2026-06-02T20:01:00+10:00"
      },
      {
        "id": 74,
        "name_for_reservation": "Игорь",
        "phone_number": "+79772498049",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T10:11:00+10:00",
        "end_time": "2026-06-02T11:48:00+10:00"
      },
      {
        "id": 75,
        "name_for_reservation": "Елена",
        "phone_number": "+79708695016",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-02T21:08:00+10:00",
        "end_time": "2026-06-02T21:53:00+10:00"
      },
      {
        "id": 76,
        "name_for_reservation": "Игорь",
        "phone_number": "+79446835216",
        "num_people": 4,
        "status": "Новая",
        "seating_time": "2026-06-02T09:28:00+10:00",
        "end_time": "2026-06-02T10:41:00+10:00"
      },
      {
        "id": 77,
        "name_for_reservation": "Павел",
        "phone_number": "+79247749339",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-03T18:41:00+10:00",
        "end_time": "2026-06-03T21:49:00+10:00"
      },
      {
        "id": 78,
        "name_for_reservation": "Игорь",
        "phone_number": "+79374587649",
        "num_people": 3,
        "status": "Открыт",
        "seating_time": "2026-06-03T09:50:00+10:00",
        "end_time": "2026-06-03T11:05:00+10:00"
      },
      {
        "id": 79,
        "name_for_reservation": "Игорь",
        "phone_number": "+79996613009",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-04T17:42:00+10:00",
        "end_time": "2026-06-04T18:53:00+10:00"
      },
      {
        "id": 80,
        "name_for_reservation": "Дарья",
        "phone_number": "+79323312089",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-04T17:52:00+10:00",
        "end_time": "2026-06-04T21:34:00+10:00"
      },
      {
        "id": 81,
        "name_for_reservation": "Максим",
        "phone_number": "+79323193074",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-04T09:00:00+10:00",
        "end_time": "2026-06-04T12:40:00+10:00"
      },
      {
        "id": 82,
        "name_for_reservation": "Павел",
        "phone_number": "+79193047850",
        "num_people": 4,
        "status": "Новая",
        "seating_time": "2026-06-05T15:16:00+10:00",
        "end_time": "2026-06-05T17:13:00+10:00"
      },
      {
        "id": 83,
        "name_for_reservation": "Дарья",
        "phone_number": "+79334231843",
        "num_people": 2,
        "status": "Новая",
        "seating_time": "2026-06-05T21:26:00+10:00",
        "end_time": "2026-06-05T23:25:00+10:00"
      },
      {
        "id": 84,
        "name_for_reservation": "Игорь",
        "phone_number": "+79741076878",
        "num_people": 4,
        "status": "Новая",
        "seating_time": "2026-06-06T13:11:00+10:00",
        "end_time": "2026-06-06T15:00:00+10:00"
      }
    ]
  }, {
    "id": "tbl-201",
    "number": "201",
    "zone": "2 Этаж",
    "capacity": 4,
    "orders": [
      {
        "id": "ord-tbl-201-2026-06-01T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-01T12:37:00+10:00",
        "end_time": "2026-06-01T13:39:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-01T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-01T17:15:00+10:00",
        "end_time": "2026-06-01T18:01:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T15:32:00+10:00",
        "end_time": "2026-06-01T17:06:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-02T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-02T10:52:00+10:00",
        "end_time": "2026-06-02T12:08:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T20:01:00+10:00",
        "end_time": "2026-06-03T21:12:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T18:07:00+10:00",
        "end_time": "2026-06-03T18:34:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-03T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-03T18:01:00+10:00",
        "end_time": "2026-06-03T19:03:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-03T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-03T13:33:00+10:00",
        "end_time": "2026-06-03T14:11:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-03T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-03T17:00:00+10:00",
        "end_time": "2026-06-03T18:23:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-03T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-03T16:10:00+10:00",
        "end_time": "2026-06-03T17:25:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-03T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-03T14:09:00+10:00",
        "end_time": "2026-06-03T16:08:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-03T04:00:00+10:00-7",
        "status": "Bill",
        "start_time": "2026-06-03T09:20:00+10:00",
        "end_time": "2026-06-03T10:35:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T09:13:00+10:00",
        "end_time": "2026-06-04T10:44:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-04T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-04T14:33:00+10:00",
        "end_time": "2026-06-04T15:29:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-04T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-04T19:46:00+10:00",
        "end_time": "2026-06-04T21:12:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T20:23:00+10:00",
        "end_time": "2026-06-05T22:13:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-05T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-05T11:04:00+10:00",
        "end_time": "2026-06-05T12:41:00+10:00"
      },
      {
        "id": "ord-tbl-201-2026-06-06T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-06T16:47:00+10:00",
        "end_time": "2026-06-06T17:58:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 85,
        "name_for_reservation": "Игорь",
        "phone_number": "+79541920376",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-01T15:02:00+10:00",
        "end_time": "2026-06-01T18:41:00+10:00"
      },
      {
        "id": 86,
        "name_for_reservation": "Анна",
        "phone_number": "+79329770232",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-02T21:30:00+10:00",
        "end_time": "2026-06-03T01:21:00+10:00"
      },
      {
        "id": 87,
        "name_for_reservation": "Дарья",
        "phone_number": "+79194728192",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-02T21:38:00+10:00",
        "end_time": "2026-06-02T23:13:00+10:00"
      },
      {
        "id": 88,
        "name_for_reservation": "Илья",
        "phone_number": "+79233830377",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-03T10:22:00+10:00",
        "end_time": "2026-06-03T11:56:00+10:00"
      }
    ]
  }, {
    "id": "tbl-202",
    "number": "202",
    "zone": "2 Этаж",
    "capacity": 6,
    "orders": [
      {
        "id": "ord-tbl-202-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T18:49:00+10:00",
        "end_time": "2026-06-01T20:10:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T20:18:00+10:00",
        "end_time": "2026-06-01T20:56:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T20:39:00+10:00",
        "end_time": "2026-06-01T21:09:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-01T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-01T19:30:00+10:00",
        "end_time": "2026-06-01T20:16:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T14:34:00+10:00",
        "end_time": "2026-06-01T16:08:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-01T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-01T13:49:00+10:00",
        "end_time": "2026-06-01T14:33:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T11:39:00+10:00",
        "end_time": "2026-06-02T13:36:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-02T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-02T12:21:00+10:00",
        "end_time": "2026-06-02T14:16:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-02T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-02T15:00:00+10:00",
        "end_time": "2026-06-02T15:52:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-02T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-02T15:33:00+10:00",
        "end_time": "2026-06-02T16:08:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-02T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-02T19:33:00+10:00",
        "end_time": "2026-06-02T19:53:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-02T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-02T15:46:00+10:00",
        "end_time": "2026-06-02T17:02:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-02T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-02T14:56:00+10:00",
        "end_time": "2026-06-02T16:34:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-02T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-02T15:03:00+10:00",
        "end_time": "2026-06-02T16:23:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-02T04:00:00+10:00-8",
        "status": "Closed",
        "start_time": "2026-06-02T16:47:00+10:00",
        "end_time": "2026-06-02T17:34:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-03T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-03T21:51:00+10:00",
        "end_time": "2026-06-03T23:33:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T10:33:00+10:00",
        "end_time": "2026-06-03T12:23:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-03T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-03T18:32:00+10:00",
        "end_time": "2026-06-03T19:52:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-04T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-04T09:26:00+10:00",
        "end_time": "2026-06-04T10:45:00+10:00"
      },
      {
        "id": "ord-tbl-202-2026-06-06T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-06T11:57:00+10:00",
        "end_time": "2026-06-06T13:29:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 89,
        "name_for_reservation": "Павел",
        "phone_number": "+79830913759",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-01T20:11:00+10:00",
        "end_time": "2026-06-01T23:19:00+10:00"
      },
      {
        "id": 90,
        "name_for_reservation": "Анна",
        "phone_number": "+79308748982",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-01T18:24:00+10:00",
        "end_time": "2026-06-01T19:47:00+10:00"
      },
      {
        "id": 91,
        "name_for_reservation": "Дарья",
        "phone_number": "+79815735592",
        "num_people": 5,
        "status": "Открыт",
        "seating_time": "2026-06-01T16:06:00+10:00",
        "end_time": "2026-06-01T18:31:00+10:00"
      },
      {
        "id": 92,
        "name_for_reservation": "Анна",
        "phone_number": "+79395344675",
        "num_people": 5,
        "status": "Заявка",
        "seating_time": "2026-06-01T13:09:00+10:00",
        "end_time": "2026-06-01T15:45:00+10:00"
      },
      {
        "id": 93,
        "name_for_reservation": "Максим",
        "phone_number": "+79210110887",
        "num_people": 2,
        "status": "Закрыт",
        "seating_time": "2026-06-02T12:18:00+10:00",
        "end_time": "2026-06-02T14:11:00+10:00"
      },
      {
        "id": 94,
        "name_for_reservation": "Павел",
        "phone_number": "+79935987575",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T09:22:00+10:00",
        "end_time": "2026-06-02T12:06:00+10:00"
      },
      {
        "id": 95,
        "name_for_reservation": "Олег",
        "phone_number": "+79427606111",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-02T22:34:00+10:00",
        "end_time": "2026-06-03T01:38:00+10:00"
      },
      {
        "id": 96,
        "name_for_reservation": "Павел",
        "phone_number": "+79416071937",
        "num_people": 4,
        "status": "Новая",
        "seating_time": "2026-06-03T11:50:00+10:00",
        "end_time": "2026-06-03T13:02:00+10:00"
      },
      {
        "id": 97,
        "name_for_reservation": "Максим",
        "phone_number": "+79618883772",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-03T14:28:00+10:00",
        "end_time": "2026-06-03T17:05:00+10:00"
      },
      {
        "id": 98,
        "name_for_reservation": "Дарья",
        "phone_number": "+79903336634",
        "num_people": 3,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T17:22:00+10:00",
        "end_time": "2026-06-03T20:59:00+10:00"
      },
      {
        "id": 99,
        "name_for_reservation": "София",
        "phone_number": "+79768518354",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-03T22:35:00+10:00",
        "end_time": "2026-06-04T00:07:00+10:00"
      },
      {
        "id": 100,
        "name_for_reservation": "Игорь",
        "phone_number": "+79360156766",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-04T09:24:00+10:00",
        "end_time": "2026-06-04T11:50:00+10:00"
      },
      {
        "id": 101,
        "name_for_reservation": "Дарья",
        "phone_number": "+79706780024",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-04T21:13:00+10:00",
        "end_time": "2026-06-05T00:06:00+10:00"
      },
      {
        "id": 102,
        "name_for_reservation": "Елена",
        "phone_number": "+79336458776",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-06T19:16:00+10:00",
        "end_time": "2026-06-06T22:31:00+10:00"
      }
    ]
  }, {
    "id": "tbl-203",
    "number": "203",
    "zone": "2 Этаж",
    "capacity": 2,
    "orders": [
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T20:03:00+10:00",
        "end_time": "2026-06-01T21:02:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T18:33:00+10:00",
        "end_time": "2026-06-01T20:29:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-01T19:11:00+10:00",
        "end_time": "2026-06-01T19:54:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-01T12:16:00+10:00",
        "end_time": "2026-06-01T14:12:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-01T17:28:00+10:00",
        "end_time": "2026-06-01T19:26:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-01T14:35:00+10:00",
        "end_time": "2026-06-01T15:25:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-01T09:16:00+10:00",
        "end_time": "2026-06-01T10:34:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-7",
        "status": "Bill",
        "start_time": "2026-06-01T20:16:00+10:00",
        "end_time": "2026-06-01T22:04:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-01T15:11:00+10:00",
        "end_time": "2026-06-01T16:19:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-9",
        "status": "Closed",
        "start_time": "2026-06-01T11:19:00+10:00",
        "end_time": "2026-06-01T13:00:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-10",
        "status": "Closed",
        "start_time": "2026-06-01T09:08:00+10:00",
        "end_time": "2026-06-01T09:59:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-01T04:00:00+10:00-11",
        "status": "Closed",
        "start_time": "2026-06-01T15:47:00+10:00",
        "end_time": "2026-06-01T17:33:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T18:34:00+10:00",
        "end_time": "2026-06-03T19:40:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-03T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-03T14:41:00+10:00",
        "end_time": "2026-06-03T15:06:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-03T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-03T13:25:00+10:00",
        "end_time": "2026-06-03T14:41:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-03T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-03T11:40:00+10:00",
        "end_time": "2026-06-03T12:08:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-03T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-03T14:37:00+10:00",
        "end_time": "2026-06-03T16:33:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-03T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-03T14:34:00+10:00",
        "end_time": "2026-06-03T15:23:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-03T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-03T13:06:00+10:00",
        "end_time": "2026-06-03T14:33:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T09:53:00+10:00",
        "end_time": "2026-06-04T10:18:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T14:20:00+10:00",
        "end_time": "2026-06-05T14:40:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-05T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-05T12:59:00+10:00",
        "end_time": "2026-06-05T14:29:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-06T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-06T14:17:00+10:00",
        "end_time": "2026-06-06T15:05:00+10:00"
      },
      {
        "id": "ord-tbl-203-2026-06-06T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-06T15:38:00+10:00",
        "end_time": "2026-06-06T17:38:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 103,
        "name_for_reservation": "Анна",
        "phone_number": "+79334010737",
        "num_people": 4,
        "status": "Новая",
        "seating_time": "2026-06-01T09:51:00+10:00",
        "end_time": "2026-06-01T12:18:00+10:00"
      },
      {
        "id": 104,
        "name_for_reservation": "Игорь",
        "phone_number": "+79923710218",
        "num_people": 2,
        "status": "Новая",
        "seating_time": "2026-06-01T22:18:00+10:00",
        "end_time": "2026-06-02T01:32:00+10:00"
      },
      {
        "id": 105,
        "name_for_reservation": "София",
        "phone_number": "+79955398400",
        "num_people": 1,
        "status": "Заявка",
        "seating_time": "2026-06-01T09:32:00+10:00",
        "end_time": "2026-06-01T12:36:00+10:00"
      },
      {
        "id": 106,
        "name_for_reservation": "Игорь",
        "phone_number": "+79493325084",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-01T16:53:00+10:00",
        "end_time": "2026-06-01T18:09:00+10:00"
      },
      {
        "id": 107,
        "name_for_reservation": "Павел",
        "phone_number": "+79411792072",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-02T22:38:00+10:00",
        "end_time": "2026-06-03T00:25:00+10:00"
      },
      {
        "id": 108,
        "name_for_reservation": "Анна",
        "phone_number": "+79930688899",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-02T20:36:00+10:00",
        "end_time": "2026-06-03T00:18:00+10:00"
      },
      {
        "id": 109,
        "name_for_reservation": "София",
        "phone_number": "+79614686278",
        "num_people": 2,
        "status": "Закрыт",
        "seating_time": "2026-06-02T20:36:00+10:00",
        "end_time": "2026-06-02T23:36:00+10:00"
      },
      {
        "id": 110,
        "name_for_reservation": "Максим",
        "phone_number": "+79721598575",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-02T18:49:00+10:00",
        "end_time": "2026-06-02T21:56:00+10:00"
      },
      {
        "id": 111,
        "name_for_reservation": "Илья",
        "phone_number": "+79592975548",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-02T20:19:00+10:00",
        "end_time": "2026-06-02T22:34:00+10:00"
      },
      {
        "id": 112,
        "name_for_reservation": "София",
        "phone_number": "+79476301329",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-03T20:58:00+10:00",
        "end_time": "2026-06-03T23:25:00+10:00"
      },
      {
        "id": 113,
        "name_for_reservation": "Елена",
        "phone_number": "+79892905847",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-03T09:03:00+10:00",
        "end_time": "2026-06-03T10:26:00+10:00"
      },
      {
        "id": 114,
        "name_for_reservation": "София",
        "phone_number": "+79120356731",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-03T17:33:00+10:00",
        "end_time": "2026-06-03T18:53:00+10:00"
      },
      {
        "id": 115,
        "name_for_reservation": "Павел",
        "phone_number": "+79540899291",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-04T15:02:00+10:00",
        "end_time": "2026-06-04T16:47:00+10:00"
      },
      {
        "id": 116,
        "name_for_reservation": "Максим",
        "phone_number": "+79776676213",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-04T21:41:00+10:00",
        "end_time": "2026-06-05T01:24:00+10:00"
      },
      {
        "id": 117,
        "name_for_reservation": "Игорь",
        "phone_number": "+79164086185",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-04T17:20:00+10:00",
        "end_time": "2026-06-04T19:44:00+10:00"
      },
      {
        "id": 118,
        "name_for_reservation": "Илья",
        "phone_number": "+79997251964",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-05T16:51:00+10:00",
        "end_time": "2026-06-05T19:32:00+10:00"
      },
      {
        "id": 119,
        "name_for_reservation": "Елена",
        "phone_number": "+79997653772",
        "num_people": 3,
        "status": "Открыт",
        "seating_time": "2026-06-06T16:12:00+10:00",
        "end_time": "2026-06-06T19:54:00+10:00"
      }
    ]
  }, {
    "id": "tbl-204",
    "number": "204",
    "zone": "2 Этаж",
    "capacity": 8,
    "orders": [
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T18:11:00+10:00",
        "end_time": "2026-06-01T19:26:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-01T12:16:00+10:00",
        "end_time": "2026-06-01T13:41:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-01T10:24:00+10:00",
        "end_time": "2026-06-01T11:11:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-01T20:21:00+10:00",
        "end_time": "2026-06-01T21:27:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T15:09:00+10:00",
        "end_time": "2026-06-01T16:27:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-01T10:31:00+10:00",
        "end_time": "2026-06-01T12:01:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-01T12:53:00+10:00",
        "end_time": "2026-06-01T14:42:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-7",
        "status": "Bill",
        "start_time": "2026-06-01T18:10:00+10:00",
        "end_time": "2026-06-01T18:54:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-8",
        "status": "Closed",
        "start_time": "2026-06-01T18:19:00+10:00",
        "end_time": "2026-06-01T19:57:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-9",
        "status": "Bill",
        "start_time": "2026-06-01T09:07:00+10:00",
        "end_time": "2026-06-01T10:03:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-10",
        "status": "Closed",
        "start_time": "2026-06-01T20:07:00+10:00",
        "end_time": "2026-06-01T21:07:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-01T04:00:00+10:00-11",
        "status": "New",
        "start_time": "2026-06-01T13:52:00+10:00",
        "end_time": "2026-06-01T15:01:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T20:35:00+10:00",
        "end_time": "2026-06-02T21:49:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-02T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-02T15:33:00+10:00",
        "end_time": "2026-06-02T16:58:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-02T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-02T14:13:00+10:00",
        "end_time": "2026-06-02T15:17:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-02T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-02T13:16:00+10:00",
        "end_time": "2026-06-02T15:15:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-02T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-02T15:27:00+10:00",
        "end_time": "2026-06-02T17:23:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-02T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-02T16:03:00+10:00",
        "end_time": "2026-06-02T16:29:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-02T04:00:00+10:00-6",
        "status": "Bill",
        "start_time": "2026-06-02T13:25:00+10:00",
        "end_time": "2026-06-02T14:41:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-02T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-02T09:09:00+10:00",
        "end_time": "2026-06-02T10:20:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-02T04:00:00+10:00-8",
        "status": "New",
        "start_time": "2026-06-02T19:27:00+10:00",
        "end_time": "2026-06-02T19:52:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-03T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-03T16:37:00+10:00",
        "end_time": "2026-06-03T17:22:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T19:39:00+10:00",
        "end_time": "2026-06-03T19:59:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-03T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-03T10:17:00+10:00",
        "end_time": "2026-06-03T12:14:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-03T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-03T10:15:00+10:00",
        "end_time": "2026-06-03T11:25:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T14:28:00+10:00",
        "end_time": "2026-06-04T15:27:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-04T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-04T09:09:00+10:00",
        "end_time": "2026-06-04T10:00:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T20:28:00+10:00",
        "end_time": "2026-06-05T21:42:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-05T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-05T15:09:00+10:00",
        "end_time": "2026-06-05T15:50:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-05T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-05T21:46:00+10:00",
        "end_time": "2026-06-05T23:09:00+10:00"
      },
      {
        "id": "ord-tbl-204-2026-06-06T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-06T09:04:00+10:00",
        "end_time": "2026-06-06T10:58:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 120,
        "name_for_reservation": "Илья",
        "phone_number": "+79556647164",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T09:47:00+10:00",
        "end_time": "2026-06-01T11:17:00+10:00"
      },
      {
        "id": 121,
        "name_for_reservation": "Дарья",
        "phone_number": "+79924800554",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-01T13:24:00+10:00",
        "end_time": "2026-06-01T15:55:00+10:00"
      },
      {
        "id": 122,
        "name_for_reservation": "Илья",
        "phone_number": "+79681013434",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-01T11:00:00+10:00",
        "end_time": "2026-06-01T14:12:00+10:00"
      },
      {
        "id": 123,
        "name_for_reservation": "Максим",
        "phone_number": "+79632832737",
        "num_people": 4,
        "status": "Новая",
        "seating_time": "2026-06-01T20:19:00+10:00",
        "end_time": "2026-06-01T22:30:00+10:00"
      },
      {
        "id": 124,
        "name_for_reservation": "Елена",
        "phone_number": "+79458294327",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T22:31:00+10:00",
        "end_time": "2026-06-03T01:26:00+10:00"
      },
      {
        "id": 125,
        "name_for_reservation": "Олег",
        "phone_number": "+79686032938",
        "num_people": 3,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T15:32:00+10:00",
        "end_time": "2026-06-02T18:11:00+10:00"
      },
      {
        "id": 126,
        "name_for_reservation": "Елена",
        "phone_number": "+79898131909",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-03T10:17:00+10:00",
        "end_time": "2026-06-03T10:50:00+10:00"
      },
      {
        "id": 127,
        "name_for_reservation": "Олег",
        "phone_number": "+79130100675",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-04T12:40:00+10:00",
        "end_time": "2026-06-04T16:22:00+10:00"
      },
      {
        "id": 128,
        "name_for_reservation": "Максим",
        "phone_number": "+79990525193",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-04T18:54:00+10:00",
        "end_time": "2026-06-04T19:37:00+10:00"
      },
      {
        "id": 129,
        "name_for_reservation": "Олег",
        "phone_number": "+79344755833",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-04T18:34:00+10:00",
        "end_time": "2026-06-04T22:09:00+10:00"
      },
      {
        "id": 130,
        "name_for_reservation": "Илья",
        "phone_number": "+79692796466",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-05T18:41:00+10:00",
        "end_time": "2026-06-05T21:45:00+10:00"
      }
    ]
  }, {
    "id": "tbl-205",
    "number": "205",
    "zone": "2 Этаж",
    "capacity": 4,
    "orders": [
      {
        "id": "ord-tbl-205-2026-06-01T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-01T19:53:00+10:00",
        "end_time": "2026-06-01T21:31:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-01T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-01T19:36:00+10:00",
        "end_time": "2026-06-01T20:48:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-01T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-01T21:46:00+10:00",
        "end_time": "2026-06-01T23:00:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-01T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-01T19:21:00+10:00",
        "end_time": "2026-06-01T20:58:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T20:12:00+10:00",
        "end_time": "2026-06-01T21:18:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-01T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-01T13:11:00+10:00",
        "end_time": "2026-06-01T14:37:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-01T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-01T11:38:00+10:00",
        "end_time": "2026-06-01T12:19:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-01T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-01T10:37:00+10:00",
        "end_time": "2026-06-01T12:10:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-02T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-02T19:45:00+10:00",
        "end_time": "2026-06-02T21:39:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T12:36:00+10:00",
        "end_time": "2026-06-02T14:25:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-02T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-02T18:30:00+10:00",
        "end_time": "2026-06-02T19:46:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-03T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-03T16:09:00+10:00",
        "end_time": "2026-06-03T18:09:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-03T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-03T18:40:00+10:00",
        "end_time": "2026-06-03T19:45:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-03T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-03T14:05:00+10:00",
        "end_time": "2026-06-03T15:46:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-03T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-03T13:00:00+10:00",
        "end_time": "2026-06-03T14:14:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T14:13:00+10:00",
        "end_time": "2026-06-04T16:07:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-04T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-04T21:58:00+10:00",
        "end_time": "2026-06-04T23:01:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-04T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-04T15:46:00+10:00",
        "end_time": "2026-06-04T16:36:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-04T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-04T19:38:00+10:00",
        "end_time": "2026-06-04T20:46:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-04T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-04T16:52:00+10:00",
        "end_time": "2026-06-04T17:39:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-04T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-04T11:55:00+10:00",
        "end_time": "2026-06-04T12:42:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T15:15:00+10:00",
        "end_time": "2026-06-05T15:44:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-05T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-05T11:05:00+10:00",
        "end_time": "2026-06-05T11:51:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-05T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-05T11:05:00+10:00",
        "end_time": "2026-06-05T12:35:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-06T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-06T20:06:00+10:00",
        "end_time": "2026-06-06T20:48:00+10:00"
      },
      {
        "id": "ord-tbl-205-2026-06-06T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-06T12:19:00+10:00",
        "end_time": "2026-06-06T13:52:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 131,
        "name_for_reservation": "Игорь",
        "phone_number": "+79187156536",
        "num_people": 5,
        "status": "Открыт",
        "seating_time": "2026-06-01T20:28:00+10:00",
        "end_time": "2026-06-02T00:16:00+10:00"
      },
      {
        "id": 132,
        "name_for_reservation": "Максим",
        "phone_number": "+79536486448",
        "num_people": 1,
        "status": "Заявка",
        "seating_time": "2026-06-01T10:35:00+10:00",
        "end_time": "2026-06-01T14:13:00+10:00"
      },
      {
        "id": 133,
        "name_for_reservation": "Анна",
        "phone_number": "+79769539553",
        "num_people": 1,
        "status": "Заявка",
        "seating_time": "2026-06-01T20:44:00+10:00",
        "end_time": "2026-06-01T22:12:00+10:00"
      },
      {
        "id": 134,
        "name_for_reservation": "Мария",
        "phone_number": "+79630074157",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-01T21:39:00+10:00",
        "end_time": "2026-06-02T01:17:00+10:00"
      },
      {
        "id": 135,
        "name_for_reservation": "Мария",
        "phone_number": "+79966971517",
        "num_people": 1,
        "status": "Заявка",
        "seating_time": "2026-06-01T21:37:00+10:00",
        "end_time": "2026-06-02T00:22:00+10:00"
      },
      {
        "id": 136,
        "name_for_reservation": "Олег",
        "phone_number": "+79329684246",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-02T12:16:00+10:00",
        "end_time": "2026-06-02T15:39:00+10:00"
      },
      {
        "id": 137,
        "name_for_reservation": "Максим",
        "phone_number": "+79676139975",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-02T18:10:00+10:00",
        "end_time": "2026-06-02T19:00:00+10:00"
      },
      {
        "id": 138,
        "name_for_reservation": "Олег",
        "phone_number": "+79599151549",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-02T18:37:00+10:00",
        "end_time": "2026-06-02T21:29:00+10:00"
      },
      {
        "id": 139,
        "name_for_reservation": "Игорь",
        "phone_number": "+79238381603",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-02T13:52:00+10:00",
        "end_time": "2026-06-02T17:40:00+10:00"
      },
      {
        "id": 140,
        "name_for_reservation": "Анна",
        "phone_number": "+79295546990",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T14:36:00+10:00",
        "end_time": "2026-06-03T18:17:00+10:00"
      },
      {
        "id": 141,
        "name_for_reservation": "Анна",
        "phone_number": "+79436436783",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-03T19:31:00+10:00",
        "end_time": "2026-06-03T21:36:00+10:00"
      },
      {
        "id": 142,
        "name_for_reservation": "Мария",
        "phone_number": "+79712267148",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-03T17:14:00+10:00",
        "end_time": "2026-06-03T21:11:00+10:00"
      },
      {
        "id": 143,
        "name_for_reservation": "София",
        "phone_number": "+79809134035",
        "num_people": 6,
        "status": "Новая",
        "seating_time": "2026-06-04T20:20:00+10:00",
        "end_time": "2026-06-04T21:36:00+10:00"
      },
      {
        "id": 144,
        "name_for_reservation": "София",
        "phone_number": "+79843311588",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-04T14:52:00+10:00",
        "end_time": "2026-06-04T16:19:00+10:00"
      }
    ]
  }, {
    "id": "tbl-206",
    "number": "206",
    "zone": "2 Этаж",
    "capacity": 10,
    "orders": [
      {
        "id": "ord-tbl-206-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T12:59:00+10:00",
        "end_time": "2026-06-01T14:06:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-01T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-01T10:50:00+10:00",
        "end_time": "2026-06-01T12:06:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-01T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-01T18:16:00+10:00",
        "end_time": "2026-06-01T19:22:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-01T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-01T13:29:00+10:00",
        "end_time": "2026-06-01T15:07:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-01T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-01T19:26:00+10:00",
        "end_time": "2026-06-01T20:33:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-01T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-01T13:04:00+10:00",
        "end_time": "2026-06-01T14:35:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-01T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-01T10:39:00+10:00",
        "end_time": "2026-06-01T11:02:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-02T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-02T17:30:00+10:00",
        "end_time": "2026-06-02T18:50:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T13:30:00+10:00",
        "end_time": "2026-06-02T15:18:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-02T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-02T09:15:00+10:00",
        "end_time": "2026-06-02T09:45:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-02T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-02T18:36:00+10:00",
        "end_time": "2026-06-02T19:30:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-02T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-02T15:04:00+10:00",
        "end_time": "2026-06-02T17:01:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T17:18:00+10:00",
        "end_time": "2026-06-03T19:14:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-03T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-03T18:00:00+10:00",
        "end_time": "2026-06-03T18:55:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-03T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-03T13:04:00+10:00",
        "end_time": "2026-06-03T14:36:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T21:28:00+10:00",
        "end_time": "2026-06-04T22:27:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-04T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-04T21:49:00+10:00",
        "end_time": "2026-06-04T22:16:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-05T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-05T20:10:00+10:00",
        "end_time": "2026-06-05T21:40:00+10:00"
      },
      {
        "id": "ord-tbl-206-2026-06-06T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-06T17:28:00+10:00",
        "end_time": "2026-06-06T19:19:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 145,
        "name_for_reservation": "Мария",
        "phone_number": "+79593581897",
        "num_people": 3,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T10:41:00+10:00",
        "end_time": "2026-06-01T12:43:00+10:00"
      },
      {
        "id": 146,
        "name_for_reservation": "Игорь",
        "phone_number": "+79210137618",
        "num_people": 3,
        "status": "Открыт",
        "seating_time": "2026-06-01T13:26:00+10:00",
        "end_time": "2026-06-01T17:20:00+10:00"
      },
      {
        "id": 147,
        "name_for_reservation": "Илья",
        "phone_number": "+79201873899",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-01T09:18:00+10:00",
        "end_time": "2026-06-01T10:28:00+10:00"
      },
      {
        "id": 148,
        "name_for_reservation": "Максим",
        "phone_number": "+79519792979",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-01T13:48:00+10:00",
        "end_time": "2026-06-01T16:10:00+10:00"
      },
      {
        "id": 149,
        "name_for_reservation": "Максим",
        "phone_number": "+79691491211",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T16:47:00+10:00",
        "end_time": "2026-06-01T18:35:00+10:00"
      },
      {
        "id": 150,
        "name_for_reservation": "Илья",
        "phone_number": "+79972610399",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-02T21:40:00+10:00",
        "end_time": "2026-06-03T00:11:00+10:00"
      },
      {
        "id": 151,
        "name_for_reservation": "Павел",
        "phone_number": "+79450760459",
        "num_people": 3,
        "status": "Открыт",
        "seating_time": "2026-06-02T09:50:00+10:00",
        "end_time": "2026-06-02T12:24:00+10:00"
      },
      {
        "id": 152,
        "name_for_reservation": "Илья",
        "phone_number": "+79889582884",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-03T19:22:00+10:00",
        "end_time": "2026-06-03T20:34:00+10:00"
      },
      {
        "id": 153,
        "name_for_reservation": "Илья",
        "phone_number": "+79518849518",
        "num_people": 6,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T11:27:00+10:00",
        "end_time": "2026-06-03T15:04:00+10:00"
      },
      {
        "id": 154,
        "name_for_reservation": "Игорь",
        "phone_number": "+79536006505",
        "num_people": 5,
        "status": "Открыт",
        "seating_time": "2026-06-03T11:38:00+10:00",
        "end_time": "2026-06-03T15:08:00+10:00"
      },
      {
        "id": 155,
        "name_for_reservation": "Елена",
        "phone_number": "+79862367903",
        "num_people": 4,
        "status": "Новая",
        "seating_time": "2026-06-03T13:31:00+10:00",
        "end_time": "2026-06-03T16:45:00+10:00"
      },
      {
        "id": 156,
        "name_for_reservation": "Максим",
        "phone_number": "+79411714228",
        "num_people": 1,
        "status": "Заявка",
        "seating_time": "2026-06-04T11:25:00+10:00",
        "end_time": "2026-06-04T12:36:00+10:00"
      },
      {
        "id": 157,
        "name_for_reservation": "Игорь",
        "phone_number": "+79355471669",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-05T11:17:00+10:00",
        "end_time": "2026-06-05T15:12:00+10:00"
      },
      {
        "id": 158,
        "name_for_reservation": "Дарья",
        "phone_number": "+79174049876",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-05T17:53:00+10:00",
        "end_time": "2026-06-05T20:49:00+10:00"
      },
      {
        "id": 159,
        "name_for_reservation": "Олег",
        "phone_number": "+79876184359",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-06T12:17:00+10:00",
        "end_time": "2026-06-06T16:07:00+10:00"
      }
    ]
  }, {
    "id": "tbl-301",
    "number": "301",
    "zone": "3 Этаж",
    "capacity": 2,
    "orders": [
      {
        "id": "ord-tbl-301-2026-06-01T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-01T11:24:00+10:00",
        "end_time": "2026-06-01T12:28:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-01T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-01T13:24:00+10:00",
        "end_time": "2026-06-01T14:34:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T14:53:00+10:00",
        "end_time": "2026-06-01T16:04:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-01T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-01T19:57:00+10:00",
        "end_time": "2026-06-01T20:52:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T20:32:00+10:00",
        "end_time": "2026-06-02T21:15:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T10:44:00+10:00",
        "end_time": "2026-06-02T11:42:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-02T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-02T21:46:00+10:00",
        "end_time": "2026-06-02T22:53:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-02T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-02T11:14:00+10:00",
        "end_time": "2026-06-02T13:11:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-02T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-02T13:52:00+10:00",
        "end_time": "2026-06-02T15:11:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-03T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-03T18:05:00+10:00",
        "end_time": "2026-06-03T19:17:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T10:16:00+10:00",
        "end_time": "2026-06-03T12:09:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-03T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-03T20:01:00+10:00",
        "end_time": "2026-06-03T20:35:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-03T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-03T09:29:00+10:00",
        "end_time": "2026-06-03T10:08:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-03T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-03T18:12:00+10:00",
        "end_time": "2026-06-03T19:08:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-03T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-03T10:14:00+10:00",
        "end_time": "2026-06-03T10:57:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T12:10:00+10:00",
        "end_time": "2026-06-04T12:32:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-04T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-04T14:34:00+10:00",
        "end_time": "2026-06-04T16:33:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-04T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-04T13:15:00+10:00",
        "end_time": "2026-06-04T14:52:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-05T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-05T14:35:00+10:00",
        "end_time": "2026-06-05T15:04:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-05T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-05T11:04:00+10:00",
        "end_time": "2026-06-05T12:43:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-05T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-05T15:22:00+10:00",
        "end_time": "2026-06-05T16:28:00+10:00"
      },
      {
        "id": "ord-tbl-301-2026-06-05T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-05T13:19:00+10:00",
        "end_time": "2026-06-05T14:13:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 160,
        "name_for_reservation": "Олег",
        "phone_number": "+79632435768",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-01T14:15:00+10:00",
        "end_time": "2026-06-01T14:54:00+10:00"
      },
      {
        "id": 161,
        "name_for_reservation": "Максим",
        "phone_number": "+79760018393",
        "num_people": 6,
        "status": "Новая",
        "seating_time": "2026-06-01T11:26:00+10:00",
        "end_time": "2026-06-01T15:05:00+10:00"
      },
      {
        "id": 162,
        "name_for_reservation": "Анна",
        "phone_number": "+79515800409",
        "num_people": 5,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T10:43:00+10:00",
        "end_time": "2026-06-02T14:18:00+10:00"
      },
      {
        "id": 163,
        "name_for_reservation": "Дарья",
        "phone_number": "+79593147290",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-02T09:02:00+10:00",
        "end_time": "2026-06-02T09:36:00+10:00"
      },
      {
        "id": 164,
        "name_for_reservation": "София",
        "phone_number": "+79978395233",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-02T15:05:00+10:00",
        "end_time": "2026-06-02T18:13:00+10:00"
      },
      {
        "id": 165,
        "name_for_reservation": "София",
        "phone_number": "+79828696325",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-02T12:43:00+10:00",
        "end_time": "2026-06-02T13:13:00+10:00"
      },
      {
        "id": 166,
        "name_for_reservation": "Павел",
        "phone_number": "+79245229710",
        "num_people": 5,
        "status": "Заявка",
        "seating_time": "2026-06-03T21:25:00+10:00",
        "end_time": "2026-06-03T23:25:00+10:00"
      },
      {
        "id": 167,
        "name_for_reservation": "Илья",
        "phone_number": "+79909925675",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-04T09:11:00+10:00",
        "end_time": "2026-06-04T11:24:00+10:00"
      },
      {
        "id": 168,
        "name_for_reservation": "Олег",
        "phone_number": "+79127601927",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-04T10:58:00+10:00",
        "end_time": "2026-06-04T14:37:00+10:00"
      },
      {
        "id": 169,
        "name_for_reservation": "Анна",
        "phone_number": "+79220277672",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-04T19:10:00+10:00",
        "end_time": "2026-06-04T20:12:00+10:00"
      },
      {
        "id": 170,
        "name_for_reservation": "София",
        "phone_number": "+79638636197",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-06T15:23:00+10:00",
        "end_time": "2026-06-06T17:08:00+10:00"
      }
    ]
  }, {
    "id": "tbl-302",
    "number": "302",
    "zone": "3 Этаж",
    "capacity": 4,
    "orders": [
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-01T12:16:00+10:00",
        "end_time": "2026-06-01T12:44:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T19:51:00+10:00",
        "end_time": "2026-06-01T20:26:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-01T14:32:00+10:00",
        "end_time": "2026-06-01T16:01:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-01T18:48:00+10:00",
        "end_time": "2026-06-01T20:43:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-01T20:52:00+10:00",
        "end_time": "2026-06-01T21:46:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-01T21:44:00+10:00",
        "end_time": "2026-06-01T23:17:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-01T20:33:00+10:00",
        "end_time": "2026-06-01T21:24:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-7",
        "status": "Bill",
        "start_time": "2026-06-01T20:54:00+10:00",
        "end_time": "2026-06-01T22:22:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-01T14:53:00+10:00",
        "end_time": "2026-06-01T16:25:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-9",
        "status": "Closed",
        "start_time": "2026-06-01T09:53:00+10:00",
        "end_time": "2026-06-01T10:45:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-10",
        "status": "Bill",
        "start_time": "2026-06-01T16:15:00+10:00",
        "end_time": "2026-06-01T16:51:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-01T04:00:00+10:00-11",
        "status": "Closed",
        "start_time": "2026-06-01T09:47:00+10:00",
        "end_time": "2026-06-01T11:17:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-02T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-02T16:32:00+10:00",
        "end_time": "2026-06-02T18:20:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-02T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-02T09:52:00+10:00",
        "end_time": "2026-06-02T11:39:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-02T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-02T10:41:00+10:00",
        "end_time": "2026-06-02T12:31:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-02T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-02T14:28:00+10:00",
        "end_time": "2026-06-02T16:07:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-02T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-02T20:18:00+10:00",
        "end_time": "2026-06-02T21:13:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-02T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-02T15:10:00+10:00",
        "end_time": "2026-06-02T16:03:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-02T04:00:00+10:00-6",
        "status": "Bill",
        "start_time": "2026-06-02T13:57:00+10:00",
        "end_time": "2026-06-02T14:49:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T17:39:00+10:00",
        "end_time": "2026-06-03T19:30:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-03T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-03T11:26:00+10:00",
        "end_time": "2026-06-03T12:52:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-03T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-03T17:08:00+10:00",
        "end_time": "2026-06-03T17:32:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-03T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-03T21:43:00+10:00",
        "end_time": "2026-06-03T22:06:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-03T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-03T16:10:00+10:00",
        "end_time": "2026-06-03T17:42:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-03T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-03T18:07:00+10:00",
        "end_time": "2026-06-03T19:06:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T15:31:00+10:00",
        "end_time": "2026-06-04T16:03:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-04T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-04T14:18:00+10:00",
        "end_time": "2026-06-04T16:11:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-04T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-04T20:52:00+10:00",
        "end_time": "2026-06-04T21:16:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-04T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-04T09:18:00+10:00",
        "end_time": "2026-06-04T10:47:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-04T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-04T16:04:00+10:00",
        "end_time": "2026-06-04T16:32:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-04T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-04T15:11:00+10:00",
        "end_time": "2026-06-04T16:24:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T17:40:00+10:00",
        "end_time": "2026-06-05T18:01:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-05T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-05T19:02:00+10:00",
        "end_time": "2026-06-05T19:57:00+10:00"
      },
      {
        "id": "ord-tbl-302-2026-06-05T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-05T09:35:00+10:00",
        "end_time": "2026-06-05T11:08:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 171,
        "name_for_reservation": "Игорь",
        "phone_number": "+79119159854",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-01T18:30:00+10:00",
        "end_time": "2026-06-01T20:21:00+10:00"
      },
      {
        "id": 172,
        "name_for_reservation": "Анна",
        "phone_number": "+79398569074",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-01T17:03:00+10:00",
        "end_time": "2026-06-01T18:01:00+10:00"
      },
      {
        "id": 173,
        "name_for_reservation": "София",
        "phone_number": "+79288121802",
        "num_people": 5,
        "status": "Открыт",
        "seating_time": "2026-06-01T16:21:00+10:00",
        "end_time": "2026-06-01T17:50:00+10:00"
      },
      {
        "id": 174,
        "name_for_reservation": "Максим",
        "phone_number": "+79558662779",
        "num_people": 5,
        "status": "Открыт",
        "seating_time": "2026-06-02T10:24:00+10:00",
        "end_time": "2026-06-02T11:41:00+10:00"
      },
      {
        "id": 175,
        "name_for_reservation": "Павел",
        "phone_number": "+79386835811",
        "num_people": 5,
        "status": "Заявка",
        "seating_time": "2026-06-02T09:06:00+10:00",
        "end_time": "2026-06-02T11:46:00+10:00"
      },
      {
        "id": 176,
        "name_for_reservation": "Павел",
        "phone_number": "+79267895832",
        "num_people": 2,
        "status": "Новая",
        "seating_time": "2026-06-02T17:54:00+10:00",
        "end_time": "2026-06-02T20:14:00+10:00"
      },
      {
        "id": 177,
        "name_for_reservation": "Олег",
        "phone_number": "+79841585388",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-02T13:46:00+10:00",
        "end_time": "2026-06-02T14:51:00+10:00"
      },
      {
        "id": 178,
        "name_for_reservation": "София",
        "phone_number": "+79668807465",
        "num_people": 1,
        "status": "Новая",
        "seating_time": "2026-06-02T10:24:00+10:00",
        "end_time": "2026-06-02T13:22:00+10:00"
      },
      {
        "id": 179,
        "name_for_reservation": "Анна",
        "phone_number": "+79472977785",
        "num_people": 2,
        "status": "Закрыт",
        "seating_time": "2026-06-03T17:23:00+10:00",
        "end_time": "2026-06-03T19:43:00+10:00"
      },
      {
        "id": 180,
        "name_for_reservation": "Максим",
        "phone_number": "+79514643431",
        "num_people": 3,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T12:37:00+10:00",
        "end_time": "2026-06-03T15:53:00+10:00"
      },
      {
        "id": 181,
        "name_for_reservation": "Олег",
        "phone_number": "+79674614447",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-03T14:51:00+10:00",
        "end_time": "2026-06-03T17:37:00+10:00"
      },
      {
        "id": 182,
        "name_for_reservation": "Илья",
        "phone_number": "+79689129188",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-03T14:55:00+10:00",
        "end_time": "2026-06-03T16:31:00+10:00"
      },
      {
        "id": 183,
        "name_for_reservation": "Олег",
        "phone_number": "+79671453217",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-04T20:53:00+10:00",
        "end_time": "2026-06-04T23:57:00+10:00"
      },
      {
        "id": 184,
        "name_for_reservation": "Анна",
        "phone_number": "+79167867815",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-04T13:09:00+10:00",
        "end_time": "2026-06-04T13:58:00+10:00"
      },
      {
        "id": 185,
        "name_for_reservation": "Дарья",
        "phone_number": "+79894750084",
        "num_people": 5,
        "status": "Открыт",
        "seating_time": "2026-06-04T19:44:00+10:00",
        "end_time": "2026-06-04T22:11:00+10:00"
      }
    ]
  }, {
    "id": "tbl-303",
    "number": "303",
    "zone": "3 Этаж",
    "capacity": 6,
    "orders": [
      {
        "id": "ord-tbl-303-2026-06-01T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-01T14:23:00+10:00",
        "end_time": "2026-06-01T15:04:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-01T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-01T13:49:00+10:00",
        "end_time": "2026-06-01T14:16:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-01T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-01T13:16:00+10:00",
        "end_time": "2026-06-01T15:14:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-01T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-01T18:27:00+10:00",
        "end_time": "2026-06-01T19:09:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T16:49:00+10:00",
        "end_time": "2026-06-01T18:31:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-01T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-01T09:40:00+10:00",
        "end_time": "2026-06-01T11:23:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-01T04:00:00+10:00-6",
        "status": "Bill",
        "start_time": "2026-06-01T16:57:00+10:00",
        "end_time": "2026-06-01T18:04:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-01T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-01T09:38:00+10:00",
        "end_time": "2026-06-01T10:28:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-01T04:00:00+10:00-8",
        "status": "Closed",
        "start_time": "2026-06-01T20:55:00+10:00",
        "end_time": "2026-06-01T21:29:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T14:13:00+10:00",
        "end_time": "2026-06-02T14:36:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-02T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-02T11:24:00+10:00",
        "end_time": "2026-06-02T11:48:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-02T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-02T20:08:00+10:00",
        "end_time": "2026-06-02T20:46:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-02T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-02T13:38:00+10:00",
        "end_time": "2026-06-02T14:48:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-02T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-02T16:47:00+10:00",
        "end_time": "2026-06-02T17:38:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-02T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-02T14:13:00+10:00",
        "end_time": "2026-06-02T14:34:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-02T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-02T20:08:00+10:00",
        "end_time": "2026-06-02T21:26:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-03T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-03T17:46:00+10:00",
        "end_time": "2026-06-03T18:17:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-03T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-03T18:35:00+10:00",
        "end_time": "2026-06-03T19:37:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-03T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-03T09:06:00+10:00",
        "end_time": "2026-06-03T09:38:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-03T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-03T14:43:00+10:00",
        "end_time": "2026-06-03T16:06:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-03T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-03T16:14:00+10:00",
        "end_time": "2026-06-03T18:13:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-03T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-03T12:57:00+10:00",
        "end_time": "2026-06-03T13:23:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-03T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-03T15:58:00+10:00",
        "end_time": "2026-06-03T17:06:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-03T04:00:00+10:00-7",
        "status": "New",
        "start_time": "2026-06-03T17:00:00+10:00",
        "end_time": "2026-06-03T18:52:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T14:54:00+10:00",
        "end_time": "2026-06-04T16:32:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-04T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-04T14:34:00+10:00",
        "end_time": "2026-06-04T16:10:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-04T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-04T19:25:00+10:00",
        "end_time": "2026-06-04T20:01:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-04T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-04T16:16:00+10:00",
        "end_time": "2026-06-04T17:31:00+10:00"
      },
      {
        "id": "ord-tbl-303-2026-06-04T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-04T21:08:00+10:00",
        "end_time": "2026-06-04T22:32:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 186,
        "name_for_reservation": "Анна",
        "phone_number": "+79790295737",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-01T22:23:00+10:00",
        "end_time": "2026-06-02T01:59:00+10:00"
      },
      {
        "id": 187,
        "name_for_reservation": "Игорь",
        "phone_number": "+79852040358",
        "num_people": 3,
        "status": "Открыт",
        "seating_time": "2026-06-02T12:05:00+10:00",
        "end_time": "2026-06-02T13:17:00+10:00"
      },
      {
        "id": 188,
        "name_for_reservation": "Олег",
        "phone_number": "+79543353291",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-02T19:51:00+10:00",
        "end_time": "2026-06-02T20:21:00+10:00"
      },
      {
        "id": 189,
        "name_for_reservation": "Максим",
        "phone_number": "+79232791246",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-02T11:31:00+10:00",
        "end_time": "2026-06-02T13:08:00+10:00"
      },
      {
        "id": 190,
        "name_for_reservation": "Елена",
        "phone_number": "+79195045226",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-02T09:23:00+10:00",
        "end_time": "2026-06-02T12:31:00+10:00"
      },
      {
        "id": 191,
        "name_for_reservation": "Дарья",
        "phone_number": "+79575583582",
        "num_people": 1,
        "status": "Открыт",
        "seating_time": "2026-06-02T13:28:00+10:00",
        "end_time": "2026-06-02T15:24:00+10:00"
      },
      {
        "id": 192,
        "name_for_reservation": "Илья",
        "phone_number": "+79622683895",
        "num_people": 6,
        "status": "Новая",
        "seating_time": "2026-06-03T15:21:00+10:00",
        "end_time": "2026-06-03T16:56:00+10:00"
      },
      {
        "id": 193,
        "name_for_reservation": "Максим",
        "phone_number": "+79856772449",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-03T16:29:00+10:00",
        "end_time": "2026-06-03T18:57:00+10:00"
      },
      {
        "id": 194,
        "name_for_reservation": "Олег",
        "phone_number": "+79859996564",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-03T17:26:00+10:00",
        "end_time": "2026-06-03T19:55:00+10:00"
      },
      {
        "id": 195,
        "name_for_reservation": "Елена",
        "phone_number": "+79682490368",
        "num_people": 1,
        "status": "Открыт",
        "seating_time": "2026-06-03T19:12:00+10:00",
        "end_time": "2026-06-03T20:04:00+10:00"
      },
      {
        "id": 196,
        "name_for_reservation": "София",
        "phone_number": "+79221359471",
        "num_people": 2,
        "status": "Новая",
        "seating_time": "2026-06-04T11:05:00+10:00",
        "end_time": "2026-06-04T14:40:00+10:00"
      },
      {
        "id": 197,
        "name_for_reservation": "Мария",
        "phone_number": "+79944519650",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-04T10:17:00+10:00",
        "end_time": "2026-06-04T13:25:00+10:00"
      },
      {
        "id": 198,
        "name_for_reservation": "Мария",
        "phone_number": "+79769634838",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-05T19:52:00+10:00",
        "end_time": "2026-06-05T21:43:00+10:00"
      },
      {
        "id": 199,
        "name_for_reservation": "Мария",
        "phone_number": "+79743308319",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-05T12:27:00+10:00",
        "end_time": "2026-06-05T14:18:00+10:00"
      },
      {
        "id": 200,
        "name_for_reservation": "Дарья",
        "phone_number": "+79584199512",
        "num_people": 5,
        "status": "Живая очередь",
        "seating_time": "2026-06-06T17:10:00+10:00",
        "end_time": "2026-06-06T18:38:00+10:00"
      }
    ]
  }, {
    "id": "tbl-304",
    "number": "304",
    "zone": "3 Этаж",
    "capacity": 2,
    "orders": [
      {
        "id": "ord-tbl-304-2026-06-01T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-01T17:01:00+10:00",
        "end_time": "2026-06-01T17:30:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-01T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-01T11:05:00+10:00",
        "end_time": "2026-06-01T12:47:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T13:57:00+10:00",
        "end_time": "2026-06-01T14:37:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-01T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-01T21:42:00+10:00",
        "end_time": "2026-06-01T23:22:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-01T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-01T13:05:00+10:00",
        "end_time": "2026-06-01T14:19:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-02T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-02T19:56:00+10:00",
        "end_time": "2026-06-02T20:34:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T19:44:00+10:00",
        "end_time": "2026-06-03T21:10:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T18:30:00+10:00",
        "end_time": "2026-06-03T19:55:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-03T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-03T15:21:00+10:00",
        "end_time": "2026-06-03T16:26:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-03T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-03T10:51:00+10:00",
        "end_time": "2026-06-03T12:29:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-03T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-03T17:59:00+10:00",
        "end_time": "2026-06-03T19:16:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-03T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-03T15:02:00+10:00",
        "end_time": "2026-06-03T15:42:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-03T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-03T18:42:00+10:00",
        "end_time": "2026-06-03T19:24:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-04T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-04T15:36:00+10:00",
        "end_time": "2026-06-04T16:36:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-04T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-04T19:46:00+10:00",
        "end_time": "2026-06-04T21:28:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T12:53:00+10:00",
        "end_time": "2026-06-05T13:58:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-06T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-06T12:45:00+10:00",
        "end_time": "2026-06-06T14:00:00+10:00"
      },
      {
        "id": "ord-tbl-304-2026-06-06T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-06T15:56:00+10:00",
        "end_time": "2026-06-06T17:27:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 201,
        "name_for_reservation": "Илья",
        "phone_number": "+79964097104",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-01T14:55:00+10:00",
        "end_time": "2026-06-01T16:14:00+10:00"
      },
      {
        "id": 202,
        "name_for_reservation": "Мария",
        "phone_number": "+79519760090",
        "num_people": 6,
        "status": "Новая",
        "seating_time": "2026-06-01T18:47:00+10:00",
        "end_time": "2026-06-01T22:01:00+10:00"
      },
      {
        "id": 203,
        "name_for_reservation": "Павел",
        "phone_number": "+79208360010",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-02T22:10:00+10:00",
        "end_time": "2026-06-03T01:59:00+10:00"
      },
      {
        "id": 204,
        "name_for_reservation": "Игорь",
        "phone_number": "+79608620324",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-02T10:30:00+10:00",
        "end_time": "2026-06-02T13:03:00+10:00"
      },
      {
        "id": 205,
        "name_for_reservation": "Максим",
        "phone_number": "+79923592653",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T15:03:00+10:00",
        "end_time": "2026-06-02T19:02:00+10:00"
      },
      {
        "id": 206,
        "name_for_reservation": "Павел",
        "phone_number": "+79331956666",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-03T22:32:00+10:00",
        "end_time": "2026-06-04T02:18:00+10:00"
      },
      {
        "id": 207,
        "name_for_reservation": "Елена",
        "phone_number": "+79939354178",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-03T16:28:00+10:00",
        "end_time": "2026-06-03T19:04:00+10:00"
      },
      {
        "id": 208,
        "name_for_reservation": "София",
        "phone_number": "+79702050009",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-03T22:33:00+10:00",
        "end_time": "2026-06-04T01:41:00+10:00"
      },
      {
        "id": 209,
        "name_for_reservation": "Илья",
        "phone_number": "+79595793218",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T12:55:00+10:00",
        "end_time": "2026-06-03T16:08:00+10:00"
      },
      {
        "id": 210,
        "name_for_reservation": "Илья",
        "phone_number": "+79238139988",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-04T21:03:00+10:00",
        "end_time": "2026-06-05T00:27:00+10:00"
      },
      {
        "id": 211,
        "name_for_reservation": "Мария",
        "phone_number": "+79662969459",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-05T09:16:00+10:00",
        "end_time": "2026-06-05T11:20:00+10:00"
      },
      {
        "id": 212,
        "name_for_reservation": "Олег",
        "phone_number": "+79686248987",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-06T22:13:00+10:00",
        "end_time": "2026-06-06T23:58:00+10:00"
      }
    ]
  }, {
    "id": "tbl-305",
    "number": "305",
    "zone": "3 Этаж",
    "capacity": 8,
    "orders": [
      {
        "id": "ord-tbl-305-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T19:13:00+10:00",
        "end_time": "2026-06-01T19:47:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-01T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-01T14:46:00+10:00",
        "end_time": "2026-06-01T15:18:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T12:39:00+10:00",
        "end_time": "2026-06-01T13:03:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-01T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-01T11:11:00+10:00",
        "end_time": "2026-06-01T11:35:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-01T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-01T17:38:00+10:00",
        "end_time": "2026-06-01T18:05:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-01T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-01T20:51:00+10:00",
        "end_time": "2026-06-01T22:23:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-01T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-01T12:52:00+10:00",
        "end_time": "2026-06-01T13:43:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-01T04:00:00+10:00-7",
        "status": "New",
        "start_time": "2026-06-01T19:59:00+10:00",
        "end_time": "2026-06-01T20:49:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-02T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-02T13:19:00+10:00",
        "end_time": "2026-06-02T15:14:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T12:33:00+10:00",
        "end_time": "2026-06-02T14:20:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-02T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-02T21:49:00+10:00",
        "end_time": "2026-06-02T22:44:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-02T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-02T13:50:00+10:00",
        "end_time": "2026-06-02T14:57:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-02T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-02T10:22:00+10:00",
        "end_time": "2026-06-02T11:29:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-02T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-02T10:46:00+10:00",
        "end_time": "2026-06-02T12:27:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-02T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-02T14:35:00+10:00",
        "end_time": "2026-06-02T16:30:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-02T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-02T12:56:00+10:00",
        "end_time": "2026-06-02T13:55:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T17:31:00+10:00",
        "end_time": "2026-06-03T19:19:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-03T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-03T13:21:00+10:00",
        "end_time": "2026-06-03T14:49:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-03T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-03T17:14:00+10:00",
        "end_time": "2026-06-03T17:37:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T13:08:00+10:00",
        "end_time": "2026-06-04T15:08:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-04T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-04T13:50:00+10:00",
        "end_time": "2026-06-04T14:59:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-04T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-04T18:49:00+10:00",
        "end_time": "2026-06-04T20:46:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-04T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-04T18:09:00+10:00",
        "end_time": "2026-06-04T20:04:00+10:00"
      },
      {
        "id": "ord-tbl-305-2026-06-05T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-05T13:56:00+10:00",
        "end_time": "2026-06-05T15:14:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 213,
        "name_for_reservation": "Елена",
        "phone_number": "+79839804294",
        "num_people": 6,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T21:31:00+10:00",
        "end_time": "2026-06-02T01:01:00+10:00"
      },
      {
        "id": 214,
        "name_for_reservation": "София",
        "phone_number": "+79702909605",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-01T21:12:00+10:00",
        "end_time": "2026-06-01T22:56:00+10:00"
      },
      {
        "id": 215,
        "name_for_reservation": "Павел",
        "phone_number": "+79989100012",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-01T18:57:00+10:00",
        "end_time": "2026-06-01T22:21:00+10:00"
      },
      {
        "id": 216,
        "name_for_reservation": "Илья",
        "phone_number": "+79258293142",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T20:11:00+10:00",
        "end_time": "2026-06-01T23:22:00+10:00"
      },
      {
        "id": 217,
        "name_for_reservation": "Олег",
        "phone_number": "+79616091181",
        "num_people": 5,
        "status": "Заявка",
        "seating_time": "2026-06-01T10:09:00+10:00",
        "end_time": "2026-06-01T11:37:00+10:00"
      },
      {
        "id": 218,
        "name_for_reservation": "Анна",
        "phone_number": "+79403961273",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-02T18:34:00+10:00",
        "end_time": "2026-06-02T20:18:00+10:00"
      },
      {
        "id": 219,
        "name_for_reservation": "Илья",
        "phone_number": "+79739419905",
        "num_people": 2,
        "status": "Новая",
        "seating_time": "2026-06-04T18:32:00+10:00",
        "end_time": "2026-06-04T21:32:00+10:00"
      },
      {
        "id": 220,
        "name_for_reservation": "Мария",
        "phone_number": "+79386695268",
        "num_people": 1,
        "status": "Открыт",
        "seating_time": "2026-06-06T11:20:00+10:00",
        "end_time": "2026-06-06T13:01:00+10:00"
      }
    ]
  }, {
    "id": "tbl-306",
    "number": "306",
    "zone": "3 Этаж",
    "capacity": 4,
    "orders": [
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T13:00:00+10:00",
        "end_time": "2026-06-01T14:05:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T13:37:00+10:00",
        "end_time": "2026-06-01T14:11:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-01T09:28:00+10:00",
        "end_time": "2026-06-01T10:58:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-01T14:15:00+10:00",
        "end_time": "2026-06-01T15:37:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-01T12:48:00+10:00",
        "end_time": "2026-06-01T14:35:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-01T17:22:00+10:00",
        "end_time": "2026-06-01T17:54:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-01T16:10:00+10:00",
        "end_time": "2026-06-01T16:43:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-7",
        "status": "Bill",
        "start_time": "2026-06-01T20:46:00+10:00",
        "end_time": "2026-06-01T22:32:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-8",
        "status": "Closed",
        "start_time": "2026-06-01T18:59:00+10:00",
        "end_time": "2026-06-01T20:43:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-9",
        "status": "Closed",
        "start_time": "2026-06-01T19:37:00+10:00",
        "end_time": "2026-06-01T21:29:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-10",
        "status": "New",
        "start_time": "2026-06-01T19:40:00+10:00",
        "end_time": "2026-06-01T20:21:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-01T04:00:00+10:00-11",
        "status": "Closed",
        "start_time": "2026-06-01T20:27:00+10:00",
        "end_time": "2026-06-01T21:03:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T17:15:00+10:00",
        "end_time": "2026-06-02T17:42:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-02T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-02T09:07:00+10:00",
        "end_time": "2026-06-02T09:34:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-02T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-02T17:24:00+10:00",
        "end_time": "2026-06-02T18:58:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-02T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-02T21:27:00+10:00",
        "end_time": "2026-06-02T21:48:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T10:49:00+10:00",
        "end_time": "2026-06-04T11:15:00+10:00"
      },
      {
        "id": "ord-tbl-306-2026-06-04T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-04T16:22:00+10:00",
        "end_time": "2026-06-04T17:10:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 221,
        "name_for_reservation": "Илья",
        "phone_number": "+79989206099",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T19:03:00+10:00",
        "end_time": "2026-06-01T21:09:00+10:00"
      },
      {
        "id": 222,
        "name_for_reservation": "Олег",
        "phone_number": "+79583736388",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T20:56:00+10:00",
        "end_time": "2026-06-01T23:44:00+10:00"
      },
      {
        "id": 223,
        "name_for_reservation": "Елена",
        "phone_number": "+79371432908",
        "num_people": 3,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T15:57:00+10:00",
        "end_time": "2026-06-01T19:34:00+10:00"
      },
      {
        "id": 224,
        "name_for_reservation": "Елена",
        "phone_number": "+79630650126",
        "num_people": 5,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T20:27:00+10:00",
        "end_time": "2026-06-02T22:49:00+10:00"
      },
      {
        "id": 225,
        "name_for_reservation": "Мария",
        "phone_number": "+79995246226",
        "num_people": 5,
        "status": "Заявка",
        "seating_time": "2026-06-02T21:11:00+10:00",
        "end_time": "2026-06-02T23:59:00+10:00"
      },
      {
        "id": 226,
        "name_for_reservation": "Илья",
        "phone_number": "+79914204172",
        "num_people": 1,
        "status": "Заявка",
        "seating_time": "2026-06-02T22:56:00+10:00",
        "end_time": "2026-06-03T02:46:00+10:00"
      },
      {
        "id": 227,
        "name_for_reservation": "Павел",
        "phone_number": "+79419105580",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-02T18:13:00+10:00",
        "end_time": "2026-06-02T21:25:00+10:00"
      },
      {
        "id": 228,
        "name_for_reservation": "Олег",
        "phone_number": "+79899277601",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-04T11:06:00+10:00",
        "end_time": "2026-06-04T13:53:00+10:00"
      },
      {
        "id": 229,
        "name_for_reservation": "Павел",
        "phone_number": "+79434011196",
        "num_people": 6,
        "status": "Открыт",
        "seating_time": "2026-06-04T18:08:00+10:00",
        "end_time": "2026-06-04T19:20:00+10:00"
      },
      {
        "id": 230,
        "name_for_reservation": "Игорь",
        "phone_number": "+79266370137",
        "num_people": 5,
        "status": "Живая очередь",
        "seating_time": "2026-06-04T12:19:00+10:00",
        "end_time": "2026-06-04T13:13:00+10:00"
      },
      {
        "id": 231,
        "name_for_reservation": "Максим",
        "phone_number": "+79967282045",
        "num_people": 1,
        "status": "Новая",
        "seating_time": "2026-06-05T10:49:00+10:00",
        "end_time": "2026-06-05T13:21:00+10:00"
      },
      {
        "id": 232,
        "name_for_reservation": "София",
        "phone_number": "+79671113731",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-06T09:44:00+10:00",
        "end_time": "2026-06-06T13:16:00+10:00"
      }
    ]
  }, {
    "id": "tbl-307",
    "number": "307",
    "zone": "3 Этаж",
    "capacity": 6,
    "orders": [
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-01T15:59:00+10:00",
        "end_time": "2026-06-01T16:22:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-01T11:54:00+10:00",
        "end_time": "2026-06-01T12:23:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-01T13:59:00+10:00",
        "end_time": "2026-06-01T14:48:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-01T19:10:00+10:00",
        "end_time": "2026-06-01T21:08:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T17:26:00+10:00",
        "end_time": "2026-06-01T18:36:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-01T19:30:00+10:00",
        "end_time": "2026-06-01T21:29:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-01T19:49:00+10:00",
        "end_time": "2026-06-01T20:12:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-7",
        "status": "New",
        "start_time": "2026-06-01T14:03:00+10:00",
        "end_time": "2026-06-01T14:30:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-01T15:12:00+10:00",
        "end_time": "2026-06-01T16:08:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-9",
        "status": "New",
        "start_time": "2026-06-01T12:07:00+10:00",
        "end_time": "2026-06-01T13:43:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-10",
        "status": "New",
        "start_time": "2026-06-01T14:37:00+10:00",
        "end_time": "2026-06-01T16:01:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-01T04:00:00+10:00-11",
        "status": "Closed",
        "start_time": "2026-06-01T10:48:00+10:00",
        "end_time": "2026-06-01T11:54:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-02T15:42:00+10:00",
        "end_time": "2026-06-02T17:14:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-02T21:03:00+10:00",
        "end_time": "2026-06-02T22:02:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-02T21:50:00+10:00",
        "end_time": "2026-06-02T22:17:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-02T10:34:00+10:00",
        "end_time": "2026-06-02T12:11:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-02T10:12:00+10:00",
        "end_time": "2026-06-02T12:07:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-02T13:35:00+10:00",
        "end_time": "2026-06-02T14:58:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-02T18:32:00+10:00",
        "end_time": "2026-06-02T19:03:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-7",
        "status": "New",
        "start_time": "2026-06-02T14:53:00+10:00",
        "end_time": "2026-06-02T15:32:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-02T21:26:00+10:00",
        "end_time": "2026-06-02T22:25:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-02T04:00:00+10:00-9",
        "status": "Bill",
        "start_time": "2026-06-02T19:02:00+10:00",
        "end_time": "2026-06-02T20:18:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-05T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-05T16:34:00+10:00",
        "end_time": "2026-06-05T17:56:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-05T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-05T19:09:00+10:00",
        "end_time": "2026-06-05T19:53:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-05T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-05T17:31:00+10:00",
        "end_time": "2026-06-05T18:44:00+10:00"
      },
      {
        "id": "ord-tbl-307-2026-06-05T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-05T18:05:00+10:00",
        "end_time": "2026-06-05T18:48:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 233,
        "name_for_reservation": "Максим",
        "phone_number": "+79147547291",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-01T11:41:00+10:00",
        "end_time": "2026-06-01T12:58:00+10:00"
      },
      {
        "id": 234,
        "name_for_reservation": "Павел",
        "phone_number": "+79340155138",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-01T17:13:00+10:00",
        "end_time": "2026-06-01T20:55:00+10:00"
      },
      {
        "id": 235,
        "name_for_reservation": "Елена",
        "phone_number": "+79761263023",
        "num_people": 1,
        "status": "Новая",
        "seating_time": "2026-06-02T11:50:00+10:00",
        "end_time": "2026-06-02T14:20:00+10:00"
      },
      {
        "id": 236,
        "name_for_reservation": "Олег",
        "phone_number": "+79164420946",
        "num_people": 5,
        "status": "Открыт",
        "seating_time": "2026-06-02T15:37:00+10:00",
        "end_time": "2026-06-02T16:12:00+10:00"
      },
      {
        "id": 237,
        "name_for_reservation": "Илья",
        "phone_number": "+79293901815",
        "num_people": 1,
        "status": "Открыт",
        "seating_time": "2026-06-02T20:14:00+10:00",
        "end_time": "2026-06-02T23:06:00+10:00"
      },
      {
        "id": 238,
        "name_for_reservation": "София",
        "phone_number": "+79136125042",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-02T19:18:00+10:00",
        "end_time": "2026-06-02T22:21:00+10:00"
      },
      {
        "id": 239,
        "name_for_reservation": "Максим",
        "phone_number": "+79264772930",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-02T18:50:00+10:00",
        "end_time": "2026-06-02T22:22:00+10:00"
      },
      {
        "id": 240,
        "name_for_reservation": "Максим",
        "phone_number": "+79669098946",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-03T16:40:00+10:00",
        "end_time": "2026-06-03T20:17:00+10:00"
      },
      {
        "id": 241,
        "name_for_reservation": "Павел",
        "phone_number": "+79186781878",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-04T20:31:00+10:00",
        "end_time": "2026-06-04T21:37:00+10:00"
      },
      {
        "id": 242,
        "name_for_reservation": "Олег",
        "phone_number": "+79676536175",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-04T15:03:00+10:00",
        "end_time": "2026-06-04T18:43:00+10:00"
      },
      {
        "id": 243,
        "name_for_reservation": "Олег",
        "phone_number": "+79172759470",
        "num_people": 1,
        "status": "Открыт",
        "seating_time": "2026-06-04T22:33:00+10:00",
        "end_time": "2026-06-05T02:20:00+10:00"
      },
      {
        "id": 244,
        "name_for_reservation": "Дарья",
        "phone_number": "+79300815499",
        "num_people": 2,
        "status": "Новая",
        "seating_time": "2026-06-05T21:33:00+10:00",
        "end_time": "2026-06-06T00:03:00+10:00"
      },
      {
        "id": 245,
        "name_for_reservation": "Павел",
        "phone_number": "+79405055596",
        "num_people": 1,
        "status": "Новая",
        "seating_time": "2026-06-06T14:20:00+10:00",
        "end_time": "2026-06-06T16:34:00+10:00"
      }
    ]
  }, {
    "id": "tbl-308",
    "number": "308",
    "zone": "3 Этаж",
    "capacity": 2,
    "orders": [
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-01T12:20:00+10:00",
        "end_time": "2026-06-01T13:16:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T15:49:00+10:00",
        "end_time": "2026-06-01T17:18:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T10:16:00+10:00",
        "end_time": "2026-06-01T12:16:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-01T11:15:00+10:00",
        "end_time": "2026-06-01T12:24:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-01T11:39:00+10:00",
        "end_time": "2026-06-01T13:14:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-01T09:27:00+10:00",
        "end_time": "2026-06-01T10:11:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-01T17:29:00+10:00",
        "end_time": "2026-06-01T18:36:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-01T09:36:00+10:00",
        "end_time": "2026-06-01T11:02:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-01T14:29:00+10:00",
        "end_time": "2026-06-01T15:31:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-9",
        "status": "Bill",
        "start_time": "2026-06-01T14:03:00+10:00",
        "end_time": "2026-06-01T14:49:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-01T04:00:00+10:00-10",
        "status": "New",
        "start_time": "2026-06-01T11:27:00+10:00",
        "end_time": "2026-06-01T12:23:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-02T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-02T09:33:00+10:00",
        "end_time": "2026-06-02T11:13:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-02T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-02T15:46:00+10:00",
        "end_time": "2026-06-02T16:38:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-02T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-02T12:56:00+10:00",
        "end_time": "2026-06-02T14:10:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-02T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-02T14:38:00+10:00",
        "end_time": "2026-06-02T15:03:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-02T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-02T19:40:00+10:00",
        "end_time": "2026-06-02T21:07:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-02T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-02T17:06:00+10:00",
        "end_time": "2026-06-02T19:04:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-03T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-03T13:02:00+10:00",
        "end_time": "2026-06-03T14:00:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-03T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-03T09:27:00+10:00",
        "end_time": "2026-06-03T10:36:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-03T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-03T10:48:00+10:00",
        "end_time": "2026-06-03T12:19:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-03T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-03T21:17:00+10:00",
        "end_time": "2026-06-03T22:10:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-03T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-03T11:29:00+10:00",
        "end_time": "2026-06-03T12:41:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-04T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-04T10:23:00+10:00",
        "end_time": "2026-06-04T12:13:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-04T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-04T12:48:00+10:00",
        "end_time": "2026-06-04T13:44:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-04T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-04T17:45:00+10:00",
        "end_time": "2026-06-04T19:20:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-04T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-04T18:31:00+10:00",
        "end_time": "2026-06-04T19:08:00+10:00"
      },
      {
        "id": "ord-tbl-308-2026-06-04T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-04T21:10:00+10:00",
        "end_time": "2026-06-04T22:51:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 246,
        "name_for_reservation": "Мария",
        "phone_number": "+79254919971",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-01T15:06:00+10:00",
        "end_time": "2026-06-01T18:19:00+10:00"
      },
      {
        "id": 247,
        "name_for_reservation": "Елена",
        "phone_number": "+79783378325",
        "num_people": 5,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T13:04:00+10:00",
        "end_time": "2026-06-01T13:58:00+10:00"
      },
      {
        "id": 248,
        "name_for_reservation": "Анна",
        "phone_number": "+79193076291",
        "num_people": 1,
        "status": "Заявка",
        "seating_time": "2026-06-02T13:45:00+10:00",
        "end_time": "2026-06-02T17:30:00+10:00"
      }
    ]
  }, {
    "id": "tbl-banquet-1",
    "number": "B-1",
    "zone": "Банкетный Зал",
    "capacity": 12,
    "orders": [
      {
        "id": "ord-tbl-banquet-1-2026-06-01T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-01T21:21:00+10:00",
        "end_time": "2026-06-01T22:55:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T14:35:00+10:00",
        "end_time": "2026-06-01T15:18:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T19:24:00+10:00",
        "end_time": "2026-06-02T21:10:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-02T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-02T10:55:00+10:00",
        "end_time": "2026-06-02T11:46:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-03T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-03T19:25:00+10:00",
        "end_time": "2026-06-03T20:09:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T10:01:00+10:00",
        "end_time": "2026-06-03T10:48:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-03T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-03T15:47:00+10:00",
        "end_time": "2026-06-03T17:26:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-03T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-03T11:08:00+10:00",
        "end_time": "2026-06-03T13:04:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-03T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-03T12:08:00+10:00",
        "end_time": "2026-06-03T13:37:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T18:14:00+10:00",
        "end_time": "2026-06-05T20:06:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-06T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-06T11:46:00+10:00",
        "end_time": "2026-06-06T12:25:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-1-2026-06-06T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-06T11:23:00+10:00",
        "end_time": "2026-06-06T12:12:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 249,
        "name_for_reservation": "Максим",
        "phone_number": "+79118770240",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-02T15:14:00+10:00",
        "end_time": "2026-06-02T18:46:00+10:00"
      },
      {
        "id": 250,
        "name_for_reservation": "Анна",
        "phone_number": "+79794888024",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-02T15:28:00+10:00",
        "end_time": "2026-06-02T17:08:00+10:00"
      },
      {
        "id": 251,
        "name_for_reservation": "Мария",
        "phone_number": "+79989278440",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-02T11:22:00+10:00",
        "end_time": "2026-06-02T15:18:00+10:00"
      },
      {
        "id": 252,
        "name_for_reservation": "Дарья",
        "phone_number": "+79546952039",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-02T21:17:00+10:00",
        "end_time": "2026-06-02T22:24:00+10:00"
      },
      {
        "id": 253,
        "name_for_reservation": "Максим",
        "phone_number": "+79981220178",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-02T20:15:00+10:00",
        "end_time": "2026-06-02T21:45:00+10:00"
      },
      {
        "id": 254,
        "name_for_reservation": "Анна",
        "phone_number": "+79940045186",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-03T13:58:00+10:00",
        "end_time": "2026-06-03T16:17:00+10:00"
      },
      {
        "id": 255,
        "name_for_reservation": "Павел",
        "phone_number": "+79973807979",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-04T14:00:00+10:00",
        "end_time": "2026-06-04T17:32:00+10:00"
      },
      {
        "id": 256,
        "name_for_reservation": "София",
        "phone_number": "+79558613955",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-04T10:35:00+10:00",
        "end_time": "2026-06-04T14:02:00+10:00"
      }
    ]
  }, {
    "id": "tbl-banquet-2",
    "number": "B-2",
    "zone": "Банкетный Зал",
    "capacity": 16,
    "orders": [
      {
        "id": "ord-tbl-banquet-2-2026-06-01T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-01T19:42:00+10:00",
        "end_time": "2026-06-01T20:09:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-01T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-01T19:39:00+10:00",
        "end_time": "2026-06-01T20:52:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-02T18:03:00+10:00",
        "end_time": "2026-06-02T18:28:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T13:57:00+10:00",
        "end_time": "2026-06-02T14:35:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-02T16:21:00+10:00",
        "end_time": "2026-06-02T17:10:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-02T18:34:00+10:00",
        "end_time": "2026-06-02T19:32:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-02T10:48:00+10:00",
        "end_time": "2026-06-02T11:18:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-02T16:59:00+10:00",
        "end_time": "2026-06-02T18:05:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-6",
        "status": "New",
        "start_time": "2026-06-02T12:56:00+10:00",
        "end_time": "2026-06-02T14:23:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-02T14:47:00+10:00",
        "end_time": "2026-06-02T15:37:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-02T15:01:00+10:00",
        "end_time": "2026-06-02T16:54:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-02T04:00:00+10:00-9",
        "status": "Bill",
        "start_time": "2026-06-02T13:02:00+10:00",
        "end_time": "2026-06-02T14:11:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-03T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-03T11:42:00+10:00",
        "end_time": "2026-06-03T12:18:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-03T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-03T20:14:00+10:00",
        "end_time": "2026-06-03T21:12:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-03T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-03T13:40:00+10:00",
        "end_time": "2026-06-03T14:25:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-03T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-03T09:41:00+10:00",
        "end_time": "2026-06-03T10:19:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-03T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-03T18:30:00+10:00",
        "end_time": "2026-06-03T19:36:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-03T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-03T09:02:00+10:00",
        "end_time": "2026-06-03T10:05:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-03T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-03T12:37:00+10:00",
        "end_time": "2026-06-03T14:12:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-03T04:00:00+10:00-7",
        "status": "New",
        "start_time": "2026-06-03T13:41:00+10:00",
        "end_time": "2026-06-03T15:41:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T20:54:00+10:00",
        "end_time": "2026-06-05T21:34:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-05T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-05T19:37:00+10:00",
        "end_time": "2026-06-05T20:40:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-05T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-05T18:03:00+10:00",
        "end_time": "2026-06-05T19:57:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-2-2026-06-06T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-06T14:11:00+10:00",
        "end_time": "2026-06-06T15:44:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 257,
        "name_for_reservation": "София",
        "phone_number": "+79320095500",
        "num_people": 6,
        "status": "Живая очередь",
        "seating_time": "2026-06-01T12:42:00+10:00",
        "end_time": "2026-06-01T14:11:00+10:00"
      },
      {
        "id": 258,
        "name_for_reservation": "Елена",
        "phone_number": "+79798671280",
        "num_people": 2,
        "status": "Закрыт",
        "seating_time": "2026-06-02T19:19:00+10:00",
        "end_time": "2026-06-02T21:08:00+10:00"
      },
      {
        "id": 259,
        "name_for_reservation": "Илья",
        "phone_number": "+79304567741",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-02T11:15:00+10:00",
        "end_time": "2026-06-02T12:31:00+10:00"
      },
      {
        "id": 260,
        "name_for_reservation": "Мария",
        "phone_number": "+79865761050",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-03T18:00:00+10:00",
        "end_time": "2026-06-03T20:39:00+10:00"
      },
      {
        "id": 261,
        "name_for_reservation": "София",
        "phone_number": "+79454961542",
        "num_people": 3,
        "status": "Открыт",
        "seating_time": "2026-06-03T14:30:00+10:00",
        "end_time": "2026-06-03T15:03:00+10:00"
      },
      {
        "id": 262,
        "name_for_reservation": "Мария",
        "phone_number": "+79974964712",
        "num_people": 2,
        "status": "Новая",
        "seating_time": "2026-06-03T16:30:00+10:00",
        "end_time": "2026-06-03T18:51:00+10:00"
      },
      {
        "id": 263,
        "name_for_reservation": "Анна",
        "phone_number": "+79912546380",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-04T10:38:00+10:00",
        "end_time": "2026-06-04T14:05:00+10:00"
      },
      {
        "id": 264,
        "name_for_reservation": "София",
        "phone_number": "+79579829143",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-05T10:40:00+10:00",
        "end_time": "2026-06-05T14:07:00+10:00"
      }
    ]
  }, {
    "id": "tbl-banquet-3",
    "number": "B-3",
    "zone": "Банкетный Зал",
    "capacity": 20,
    "orders": [
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T09:09:00+10:00",
        "end_time": "2026-06-01T10:43:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-01T17:34:00+10:00",
        "end_time": "2026-06-01T19:22:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-01T13:55:00+10:00",
        "end_time": "2026-06-01T15:44:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-01T11:14:00+10:00",
        "end_time": "2026-06-01T13:05:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-01T21:04:00+10:00",
        "end_time": "2026-06-01T22:17:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-01T10:55:00+10:00",
        "end_time": "2026-06-01T11:39:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-6",
        "status": "Bill",
        "start_time": "2026-06-01T15:36:00+10:00",
        "end_time": "2026-06-01T17:25:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-7",
        "status": "New",
        "start_time": "2026-06-01T09:06:00+10:00",
        "end_time": "2026-06-01T10:05:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-01T12:39:00+10:00",
        "end_time": "2026-06-01T14:31:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-01T04:00:00+10:00-9",
        "status": "Bill",
        "start_time": "2026-06-01T18:05:00+10:00",
        "end_time": "2026-06-01T18:53:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T19:19:00+10:00",
        "end_time": "2026-06-04T20:08:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-04T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-04T10:37:00+10:00",
        "end_time": "2026-06-04T11:18:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-04T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-04T10:25:00+10:00",
        "end_time": "2026-06-04T11:31:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-04T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-04T20:16:00+10:00",
        "end_time": "2026-06-04T20:51:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-04T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-04T18:42:00+10:00",
        "end_time": "2026-06-04T20:25:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-05T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-05T20:00:00+10:00",
        "end_time": "2026-06-05T21:14:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-05T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-05T15:02:00+10:00",
        "end_time": "2026-06-05T16:50:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-05T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-05T12:00:00+10:00",
        "end_time": "2026-06-05T13:24:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-06T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-06T15:42:00+10:00",
        "end_time": "2026-06-06T17:29:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-3-2026-06-06T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-06T12:53:00+10:00",
        "end_time": "2026-06-06T14:29:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 265,
        "name_for_reservation": "Елена",
        "phone_number": "+79604842690",
        "num_people": 6,
        "status": "Закрыт",
        "seating_time": "2026-06-01T20:24:00+10:00",
        "end_time": "2026-06-01T21:05:00+10:00"
      },
      {
        "id": 266,
        "name_for_reservation": "Илья",
        "phone_number": "+79915690457",
        "num_people": 3,
        "status": "Открыт",
        "seating_time": "2026-06-01T13:46:00+10:00",
        "end_time": "2026-06-01T16:45:00+10:00"
      },
      {
        "id": 267,
        "name_for_reservation": "Максим",
        "phone_number": "+79813588320",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-02T09:21:00+10:00",
        "end_time": "2026-06-02T10:58:00+10:00"
      },
      {
        "id": 268,
        "name_for_reservation": "Илья",
        "phone_number": "+79572185359",
        "num_people": 4,
        "status": "Заявка",
        "seating_time": "2026-06-02T13:42:00+10:00",
        "end_time": "2026-06-02T17:41:00+10:00"
      },
      {
        "id": 269,
        "name_for_reservation": "Максим",
        "phone_number": "+79598662198",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-02T11:46:00+10:00",
        "end_time": "2026-06-02T15:26:00+10:00"
      },
      {
        "id": 270,
        "name_for_reservation": "Максим",
        "phone_number": "+79325693250",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T17:26:00+10:00",
        "end_time": "2026-06-02T18:09:00+10:00"
      },
      {
        "id": 271,
        "name_for_reservation": "Мария",
        "phone_number": "+79916845209",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-03T22:42:00+10:00",
        "end_time": "2026-06-04T01:29:00+10:00"
      },
      {
        "id": 272,
        "name_for_reservation": "Анна",
        "phone_number": "+79939824975",
        "num_people": 1,
        "status": "Открыт",
        "seating_time": "2026-06-03T12:28:00+10:00",
        "end_time": "2026-06-03T16:27:00+10:00"
      },
      {
        "id": 273,
        "name_for_reservation": "Дарья",
        "phone_number": "+79226131780",
        "num_people": 5,
        "status": "Заявка",
        "seating_time": "2026-06-03T15:03:00+10:00",
        "end_time": "2026-06-03T17:55:00+10:00"
      },
      {
        "id": 274,
        "name_for_reservation": "Елена",
        "phone_number": "+79614258739",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-03T09:28:00+10:00",
        "end_time": "2026-06-03T10:48:00+10:00"
      },
      {
        "id": 275,
        "name_for_reservation": "София",
        "phone_number": "+79874849026",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-04T15:47:00+10:00",
        "end_time": "2026-06-04T18:13:00+10:00"
      },
      {
        "id": 276,
        "name_for_reservation": "Елена",
        "phone_number": "+79992393337",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-04T12:15:00+10:00",
        "end_time": "2026-06-04T15:26:00+10:00"
      },
      {
        "id": 277,
        "name_for_reservation": "София",
        "phone_number": "+79936591130",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-05T10:58:00+10:00",
        "end_time": "2026-06-05T12:33:00+10:00"
      },
      {
        "id": 278,
        "name_for_reservation": "Павел",
        "phone_number": "+79887821257",
        "num_people": 2,
        "status": "Заявка",
        "seating_time": "2026-06-05T19:39:00+10:00",
        "end_time": "2026-06-05T20:14:00+10:00"
      }
    ]
  }, {
    "id": "tbl-banquet-4",
    "number": "B-4",
    "zone": "Банкетный Зал",
    "capacity": 10,
    "orders": [
      {
        "id": "ord-tbl-banquet-4-2026-06-01T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-01T21:11:00+10:00",
        "end_time": "2026-06-01T22:02:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-01T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-01T16:44:00+10:00",
        "end_time": "2026-06-01T17:35:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-01T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-01T14:10:00+10:00",
        "end_time": "2026-06-01T15:11:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-01T04:00:00+10:00-3",
        "status": "Closed",
        "start_time": "2026-06-01T11:02:00+10:00",
        "end_time": "2026-06-01T11:56:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-01T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-01T19:13:00+10:00",
        "end_time": "2026-06-01T21:09:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-01T04:00:00+10:00-5",
        "status": "Bill",
        "start_time": "2026-06-01T14:32:00+10:00",
        "end_time": "2026-06-01T15:03:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-01T04:00:00+10:00-6",
        "status": "Closed",
        "start_time": "2026-06-01T12:59:00+10:00",
        "end_time": "2026-06-01T14:25:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-01T04:00:00+10:00-7",
        "status": "New",
        "start_time": "2026-06-01T09:50:00+10:00",
        "end_time": "2026-06-01T11:48:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-01T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-01T19:17:00+10:00",
        "end_time": "2026-06-01T19:43:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T13:41:00+10:00",
        "end_time": "2026-06-02T15:07:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-02T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-02T19:40:00+10:00",
        "end_time": "2026-06-02T20:08:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-02T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-02T12:10:00+10:00",
        "end_time": "2026-06-02T13:35:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-02T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-02T15:27:00+10:00",
        "end_time": "2026-06-02T15:58:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-02T04:00:00+10:00-4",
        "status": "Closed",
        "start_time": "2026-06-02T21:11:00+10:00",
        "end_time": "2026-06-02T22:59:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-02T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-02T17:12:00+10:00",
        "end_time": "2026-06-02T19:12:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-02T04:00:00+10:00-6",
        "status": "Bill",
        "start_time": "2026-06-02T17:06:00+10:00",
        "end_time": "2026-06-02T18:03:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-02T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-02T11:36:00+10:00",
        "end_time": "2026-06-02T13:15:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T13:33:00+10:00",
        "end_time": "2026-06-03T15:27:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-03T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-03T17:08:00+10:00",
        "end_time": "2026-06-03T18:49:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-03T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-03T11:07:00+10:00",
        "end_time": "2026-06-03T12:52:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-03T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-03T18:31:00+10:00",
        "end_time": "2026-06-03T20:19:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-03T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-03T15:36:00+10:00",
        "end_time": "2026-06-03T16:42:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-03T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-03T18:52:00+10:00",
        "end_time": "2026-06-03T20:35:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-03T04:00:00+10:00-6",
        "status": "Bill",
        "start_time": "2026-06-03T12:36:00+10:00",
        "end_time": "2026-06-03T14:33:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-03T04:00:00+10:00-7",
        "status": "Closed",
        "start_time": "2026-06-03T15:24:00+10:00",
        "end_time": "2026-06-03T16:07:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T19:54:00+10:00",
        "end_time": "2026-06-04T20:51:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-04T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-04T17:36:00+10:00",
        "end_time": "2026-06-04T18:59:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-04T04:00:00+10:00-2",
        "status": "Closed",
        "start_time": "2026-06-04T15:34:00+10:00",
        "end_time": "2026-06-04T16:34:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-04T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-04T12:59:00+10:00",
        "end_time": "2026-06-04T14:00:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-04T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-04T12:50:00+10:00",
        "end_time": "2026-06-04T13:45:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-04T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-04T15:14:00+10:00",
        "end_time": "2026-06-04T16:30:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-05T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-05T18:20:00+10:00",
        "end_time": "2026-06-05T20:11:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-06T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-06T20:41:00+10:00",
        "end_time": "2026-06-06T21:27:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-4-2026-06-06T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-06T20:34:00+10:00",
        "end_time": "2026-06-06T21:55:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 279,
        "name_for_reservation": "Павел",
        "phone_number": "+79115428695",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-01T15:12:00+10:00",
        "end_time": "2026-06-01T19:00:00+10:00"
      },
      {
        "id": 280,
        "name_for_reservation": "Максим",
        "phone_number": "+79221902505",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-02T15:58:00+10:00",
        "end_time": "2026-06-02T17:42:00+10:00"
      },
      {
        "id": 281,
        "name_for_reservation": "Дарья",
        "phone_number": "+79575203135",
        "num_people": 3,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T22:51:00+10:00",
        "end_time": "2026-06-03T00:42:00+10:00"
      },
      {
        "id": 282,
        "name_for_reservation": "Мария",
        "phone_number": "+79881313266",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-02T16:47:00+10:00",
        "end_time": "2026-06-02T19:49:00+10:00"
      },
      {
        "id": 283,
        "name_for_reservation": "Илья",
        "phone_number": "+79191057314",
        "num_people": 4,
        "status": "Открыт",
        "seating_time": "2026-06-02T18:56:00+10:00",
        "end_time": "2026-06-02T21:26:00+10:00"
      },
      {
        "id": 284,
        "name_for_reservation": "Игорь",
        "phone_number": "+79139547439",
        "num_people": 6,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T12:07:00+10:00",
        "end_time": "2026-06-03T15:51:00+10:00"
      },
      {
        "id": 285,
        "name_for_reservation": "Илья",
        "phone_number": "+79579228863",
        "num_people": 2,
        "status": "Новая",
        "seating_time": "2026-06-04T09:31:00+10:00",
        "end_time": "2026-06-04T12:27:00+10:00"
      },
      {
        "id": 286,
        "name_for_reservation": "Мария",
        "phone_number": "+79754204211",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-04T14:38:00+10:00",
        "end_time": "2026-06-04T16:28:00+10:00"
      },
      {
        "id": 287,
        "name_for_reservation": "Олег",
        "phone_number": "+79630179600",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-06T09:56:00+10:00",
        "end_time": "2026-06-06T13:19:00+10:00"
      }
    ]
  }, {
    "id": "tbl-banquet-5",
    "number": "B-5",
    "zone": "Банкетный Зал",
    "capacity": 14,
    "orders": [
      {
        "id": "ord-tbl-banquet-5-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T19:51:00+10:00",
        "end_time": "2026-06-01T21:31:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-01T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-01T21:23:00+10:00",
        "end_time": "2026-06-01T23:15:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T18:48:00+10:00",
        "end_time": "2026-06-01T19:28:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-01T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-01T20:38:00+10:00",
        "end_time": "2026-06-01T21:07:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-01T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-01T12:12:00+10:00",
        "end_time": "2026-06-01T12:34:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-02T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-02T11:13:00+10:00",
        "end_time": "2026-06-02T12:10:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-02T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-02T09:47:00+10:00",
        "end_time": "2026-06-02T10:58:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-02T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-02T21:33:00+10:00",
        "end_time": "2026-06-02T22:25:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-02T04:00:00+10:00-3",
        "status": "Bill",
        "start_time": "2026-06-02T10:56:00+10:00",
        "end_time": "2026-06-02T12:32:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-03T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-03T16:18:00+10:00",
        "end_time": "2026-06-03T18:06:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-03T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-03T09:23:00+10:00",
        "end_time": "2026-06-03T10:09:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-03T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-03T09:44:00+10:00",
        "end_time": "2026-06-03T10:33:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-03T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-03T20:33:00+10:00",
        "end_time": "2026-06-03T22:00:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-03T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-03T20:46:00+10:00",
        "end_time": "2026-06-03T21:44:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T20:44:00+10:00",
        "end_time": "2026-06-04T21:28:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-04T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-04T13:09:00+10:00",
        "end_time": "2026-06-04T13:57:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-04T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-04T21:25:00+10:00",
        "end_time": "2026-06-04T21:58:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-05T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-05T17:24:00+10:00",
        "end_time": "2026-06-05T18:23:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-05T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-05T13:04:00+10:00",
        "end_time": "2026-06-05T14:09:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-06T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-06T09:08:00+10:00",
        "end_time": "2026-06-06T09:59:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-5-2026-06-06T04:00:00+10:00-1",
        "status": "New",
        "start_time": "2026-06-06T17:45:00+10:00",
        "end_time": "2026-06-06T18:12:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 288,
        "name_for_reservation": "София",
        "phone_number": "+79526233457",
        "num_people": 5,
        "status": "Новая",
        "seating_time": "2026-06-01T22:48:00+10:00",
        "end_time": "2026-06-01T23:20:00+10:00"
      },
      {
        "id": 289,
        "name_for_reservation": "Елена",
        "phone_number": "+79526026378",
        "num_people": 1,
        "status": "Закрыт",
        "seating_time": "2026-06-01T21:50:00+10:00",
        "end_time": "2026-06-01T22:40:00+10:00"
      },
      {
        "id": 290,
        "name_for_reservation": "София",
        "phone_number": "+79921946756",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-02T09:59:00+10:00",
        "end_time": "2026-06-02T13:08:00+10:00"
      },
      {
        "id": 291,
        "name_for_reservation": "Илья",
        "phone_number": "+79260827143",
        "num_people": 3,
        "status": "Закрыт",
        "seating_time": "2026-06-02T14:59:00+10:00",
        "end_time": "2026-06-02T18:59:00+10:00"
      },
      {
        "id": 292,
        "name_for_reservation": "Елена",
        "phone_number": "+79803464863",
        "num_people": 2,
        "status": "Живая очередь",
        "seating_time": "2026-06-02T10:57:00+10:00",
        "end_time": "2026-06-02T12:50:00+10:00"
      },
      {
        "id": 293,
        "name_for_reservation": "Анна",
        "phone_number": "+79178991811",
        "num_people": 3,
        "status": "Заявка",
        "seating_time": "2026-06-04T14:31:00+10:00",
        "end_time": "2026-06-04T17:36:00+10:00"
      },
      {
        "id": 294,
        "name_for_reservation": "Анна",
        "phone_number": "+79792114692",
        "num_people": 5,
        "status": "Закрыт",
        "seating_time": "2026-06-04T14:18:00+10:00",
        "end_time": "2026-06-04T17:34:00+10:00"
      },
      {
        "id": 295,
        "name_for_reservation": "Илья",
        "phone_number": "+79800171226",
        "num_people": 6,
        "status": "Новая",
        "seating_time": "2026-06-05T19:12:00+10:00",
        "end_time": "2026-06-05T21:04:00+10:00"
      },
      {
        "id": 296,
        "name_for_reservation": "Павел",
        "phone_number": "+79946269745",
        "num_people": 4,
        "status": "Живая очередь",
        "seating_time": "2026-06-06T10:17:00+10:00",
        "end_time": "2026-06-06T14:01:00+10:00"
      }
    ]
  }, {
    "id": "tbl-banquet-6",
    "number": "B-6",
    "zone": "Банкетный Зал",
    "capacity": 18,
    "orders": [
      {
        "id": "ord-tbl-banquet-6-2026-06-01T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-01T13:18:00+10:00",
        "end_time": "2026-06-01T14:19:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-01T04:00:00+10:00-1",
        "status": "Bill",
        "start_time": "2026-06-01T09:50:00+10:00",
        "end_time": "2026-06-01T11:12:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-01T04:00:00+10:00-2",
        "status": "New",
        "start_time": "2026-06-01T13:51:00+10:00",
        "end_time": "2026-06-01T14:57:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-01T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-01T19:54:00+10:00",
        "end_time": "2026-06-01T21:13:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-01T04:00:00+10:00-4",
        "status": "Bill",
        "start_time": "2026-06-01T20:54:00+10:00",
        "end_time": "2026-06-01T22:29:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-01T04:00:00+10:00-5",
        "status": "Closed",
        "start_time": "2026-06-01T21:47:00+10:00",
        "end_time": "2026-06-01T22:30:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-01T04:00:00+10:00-6",
        "status": "Bill",
        "start_time": "2026-06-01T12:33:00+10:00",
        "end_time": "2026-06-01T14:21:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-01T04:00:00+10:00-7",
        "status": "Bill",
        "start_time": "2026-06-01T19:15:00+10:00",
        "end_time": "2026-06-01T20:17:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-01T04:00:00+10:00-8",
        "status": "Bill",
        "start_time": "2026-06-01T21:45:00+10:00",
        "end_time": "2026-06-01T23:12:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-02T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-02T18:53:00+10:00",
        "end_time": "2026-06-02T19:59:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-02T04:00:00+10:00-1",
        "status": "Closed",
        "start_time": "2026-06-02T11:50:00+10:00",
        "end_time": "2026-06-02T12:18:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-02T04:00:00+10:00-2",
        "status": "Bill",
        "start_time": "2026-06-02T20:38:00+10:00",
        "end_time": "2026-06-02T22:14:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-02T04:00:00+10:00-3",
        "status": "New",
        "start_time": "2026-06-02T11:50:00+10:00",
        "end_time": "2026-06-02T12:58:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-02T04:00:00+10:00-4",
        "status": "New",
        "start_time": "2026-06-02T11:20:00+10:00",
        "end_time": "2026-06-02T11:52:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-02T04:00:00+10:00-5",
        "status": "New",
        "start_time": "2026-06-02T12:00:00+10:00",
        "end_time": "2026-06-02T13:04:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-04T04:00:00+10:00-0",
        "status": "New",
        "start_time": "2026-06-04T13:47:00+10:00",
        "end_time": "2026-06-04T14:08:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-05T04:00:00+10:00-0",
        "status": "Closed",
        "start_time": "2026-06-05T13:19:00+10:00",
        "end_time": "2026-06-05T14:05:00+10:00"
      },
      {
        "id": "ord-tbl-banquet-6-2026-06-06T04:00:00+10:00-0",
        "status": "Bill",
        "start_time": "2026-06-06T10:58:00+10:00",
        "end_time": "2026-06-06T11:24:00+10:00"
      }
    ],
    "reservations": [
      {
        "id": 297,
        "name_for_reservation": "Дарья",
        "phone_number": "+79590653913",
        "num_people": 3,
        "status": "Новая",
        "seating_time": "2026-06-03T17:20:00+10:00",
        "end_time": "2026-06-03T18:35:00+10:00"
      },
      {
        "id": 298,
        "name_for_reservation": "Павел",
        "phone_number": "+79582548598",
        "num_people": 5,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T11:20:00+10:00",
        "end_time": "2026-06-03T12:06:00+10:00"
      },
      {
        "id": 299,
        "name_for_reservation": "Елена",
        "phone_number": "+79985619645",
        "num_people": 5,
        "status": "Живая очередь",
        "seating_time": "2026-06-03T22:46:00+10:00",
        "end_time": "2026-06-03T23:37:00+10:00"
      },
      {
        "id": 300,
        "name_for_reservation": "Елена",
        "phone_number": "+79982427548",
        "num_people": 1,
        "status": "Живая очередь",
        "seating_time": "2026-06-04T17:42:00+10:00",
        "end_time": "2026-06-04T21:01:00+10:00"
      },
      {
        "id": 301,
        "name_for_reservation": "Анна",
        "phone_number": "+79435586090",
        "num_people": 2,
        "status": "Закрыт",
        "seating_time": "2026-06-04T13:32:00+10:00",
        "end_time": "2026-06-04T15:58:00+10:00"
      },
      {
        "id": 302,
        "name_for_reservation": "Игорь",
        "phone_number": "+79139214362",
        "num_people": 4,
        "status": "Закрыт",
        "seating_time": "2026-06-04T19:48:00+10:00",
        "end_time": "2026-06-04T22:00:00+10:00"
      },
      {
        "id": 303,
        "name_for_reservation": "Илья",
        "phone_number": "+79582337384",
        "num_people": 2,
        "status": "Открыт",
        "seating_time": "2026-06-05T14:31:00+10:00",
        "end_time": "2026-06-05T17:19:00+10:00"
      },
      {
        "id": 304,
        "name_for_reservation": "Елена",
        "phone_number": "+79353452380",
        "num_people": 6,
        "status": "Заявка",
        "seating_time": "2026-06-06T11:26:00+10:00",
        "end_time": "2026-06-06T14:59:00+10:00"
      }
    ]
  }],
}
