window.MOCK_DATA = {
  "currentEmployeeId": 1,
  "employees": [
    {
      "id": 1,
      "name": "Ola Nordmann",
      "active": true
    },
    {
      "id": 2,
      "name": "Kari Nordmann",
      "active": true
    },
    {
      "id": 3,
      "name": "Peder Ås",
      "active": true
    },
    {
      "id": 4,
      "name": "Jan Johansen",
      "active": false
    }
  ],
  "tickets": [
    {
      "id": 201,
      "version": 3,
      "customerName": "Ingrid Larsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 15 Pro",
      "newDeviceModel": "iPhone 17 Pro",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Flytt bilder, meldinger og BankID til kundens nye iPhone.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "IN_PROGRESS",
      "urgent": false,
      "createdMinutesAgo": 12,
      "updatedMinutesAgo": 5,
      "comments": [
        {
          "id": 1,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Sikkerhetskopien er ferdig. Starter overføring til ny telefon.",
          "minutesAgo": 5
        }
      ],
      "history": [
        {
          "id": 1,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 12
        },
        {
          "id": 2,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "STATUS",
          "summary": "Status satt til Pågår",
          "minutesAgo": 12
        },
        {
          "id": 3,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 5
        }
      ]
    },
    {
      "id": 202,
      "version": 3,
      "customerName": "Thomas Berg",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S24",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden kommer ikke inn på Google-kontoen etter passordbytte.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "WAITING",
      "urgent": false,
      "createdMinutesAgo": 43,
      "updatedMinutesAgo": 8,
      "comments": [
        {
          "id": 2,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Venter på at kunden finner gjenopprettingskoden hjemme.",
          "minutesAgo": 8
        }
      ],
      "history": [
        {
          "id": 4,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 43
        },
        {
          "id": 5,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Venter",
          "minutesAgo": 10
        },
        {
          "id": 6,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 8
        }
      ]
    },
    {
      "id": 203,
      "version": 3,
      "customerName": "Mona Eriksen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 9",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "App-problemer",
      "description": "BankID stopper under aktivering og viser en ukjent feilkode.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "ESCALATED",
      "urgent": true,
      "createdMinutesAgo": 78,
      "updatedMinutesAgo": 3,
      "comments": [],
      "history": [
        {
          "id": 7,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 78
        },
        {
          "id": 8,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 4
        },
        {
          "id": 9,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "URGENT",
          "summary": "Markert som haster",
          "minutesAgo": 3
        }
      ]
    },
    {
      "id": 204,
      "version": 3,
      "customerName": "Ahmed Ali",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "E-post",
      "description": "Outlook mottar e-post, men sender ikke fra butikkens nettverk.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "IN_PROGRESS",
      "urgent": false,
      "createdMinutesAgo": 25,
      "updatedMinutesAgo": 10,
      "comments": [
        {
          "id": 3,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Kontrollerer SMTP-innstillinger og tester på mobilnett.",
          "minutesAgo": 10
        }
      ],
      "history": [
        {
          "id": 10,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 25
        },
        {
          "id": 11,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "ASSIGNED",
          "summary": "Tildelt endret: Peder Ås → Kari Nordmann",
          "minutesAgo": 18
        },
        {
          "id": 12,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 10
        }
      ]
    },
    {
      "id": 205,
      "version": 2,
      "customerName": "Solveig Nilsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Doro",
      "deviceModel": "Doro Smartphone",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 8717,
      "updatedMinutesAgo": 8677,
      "closedMinutesAgo": 8677,
      "comments": [
        {
          "id": 4,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 8679
        }
      ],
      "history": [
        {
          "id": 13,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 8717
        },
        {
          "id": 14,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 8677
        }
      ]
    },
    {
      "id": 206,
      "version": 2,
      "customerName": "Eirik Moen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "E-post",
      "description": "E-post synkroniseres ikke på enheten.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 13054,
      "updatedMinutesAgo": 13021,
      "closedMinutesAgo": 13021,
      "comments": [],
      "history": [
        {
          "id": 15,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 13054
        },
        {
          "id": 16,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 13021
        }
      ]
    },
    {
      "id": 207,
      "version": 3,
      "customerName": "Anne Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "IN_PROGRESS",
      "urgent": false,
      "createdMinutesAgo": 18,
      "updatedMinutesAgo": 8,
      "comments": [
        {
          "id": 5,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Feilsøking startet. Følger opp med kunden.",
          "minutesAgo": 9
        }
      ],
      "history": [
        {
          "id": 17,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 18
        },
        {
          "id": 18,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 9
        },
        {
          "id": 19,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Pågår",
          "minutesAgo": 8
        }
      ]
    },
    {
      "id": 208,
      "version": 3,
      "customerName": "Bjørn Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "TABLET",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy Tab S9",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Nettbrettet mister forbindelsen til trådløst nettverk.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "WAITING",
      "urgent": false,
      "createdMinutesAgo": 36,
      "updatedMinutesAgo": 22,
      "comments": [
        {
          "id": 6,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Feilsøking startet. Følger opp med kunden.",
          "minutesAgo": 23
        }
      ],
      "history": [
        {
          "id": 20,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 36
        },
        {
          "id": 21,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 23
        },
        {
          "id": 22,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Venter",
          "minutesAgo": 22
        }
      ]
    },
    {
      "id": 209,
      "version": 4,
      "customerName": "Camilla Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "ESCALATED",
      "urgent": true,
      "createdMinutesAgo": 95,
      "updatedMinutesAgo": 77,
      "comments": [
        {
          "id": 7,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Feilsøking startet. Følger opp med kunden.",
          "minutesAgo": 78
        }
      ],
      "history": [
        {
          "id": 23,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 95
        },
        {
          "id": 24,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 78
        },
        {
          "id": 25,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 77
        },
        {
          "id": 26,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "URGENT",
          "summary": "Markert som haster",
          "minutesAgo": 77
        }
      ]
    },
    {
      "id": 210,
      "version": 3,
      "customerName": "Daniel Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "E-post",
      "description": "E-post synkroniseres ikke på datamaskinen.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "IN_PROGRESS",
      "urgent": false,
      "createdMinutesAgo": 185,
      "updatedMinutesAgo": 163,
      "comments": [
        {
          "id": 8,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Feilsøking startet. Følger opp med kunden.",
          "minutesAgo": 164
        }
      ],
      "history": [
        {
          "id": 27,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 185
        },
        {
          "id": 28,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 164
        },
        {
          "id": 29,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Pågår",
          "minutesAgo": 163
        }
      ]
    },
    {
      "id": 211,
      "version": 3,
      "customerName": "Elise Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "HP",
      "deviceModel": "HP Pavilion 15",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Virus / skadevare",
      "description": "Nettleseren viser uønskede varsler og reklame.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "WAITING",
      "urgent": false,
      "createdMinutesAgo": 1520,
      "updatedMinutesAgo": 1494,
      "comments": [
        {
          "id": 9,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Feilsøking startet. Følger opp med kunden.",
          "minutesAgo": 1495
        }
      ],
      "history": [
        {
          "id": 30,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 1520
        },
        {
          "id": 31,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 1495
        },
        {
          "id": 32,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Venter",
          "minutesAgo": 1494
        }
      ]
    },
    {
      "id": 212,
      "version": 3,
      "customerName": "Fredrik Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "SMARTWATCH",
      "manufacturer": "Apple",
      "deviceModel": "Apple Watch Series 8",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Annet",
      "description": "Kunden ønsker hjelp med innstillinger på klokken.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 4380,
      "updatedMinutesAgo": 4362,
      "closedMinutesAgo": 4362,
      "comments": [
        {
          "id": 10,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Innstillinger gjennomgått og tilpasset med kunden.",
          "minutesAgo": 4362
        }
      ],
      "history": [
        {
          "id": 33,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 4380
        },
        {
          "id": 34,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 4362
        },
        {
          "id": 35,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 4362
        }
      ]
    },
    {
      "id": 213,
      "version": 3,
      "customerName": "Grete Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 17391,
      "updatedMinutesAgo": 17343,
      "closedMinutesAgo": 17343,
      "comments": [
        {
          "id": 11,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 17343
        }
      ],
      "history": [
        {
          "id": 36,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 17391
        },
        {
          "id": 37,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 17343
        },
        {
          "id": 38,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 17343
        }
      ]
    },
    {
      "id": 214,
      "version": 4,
      "customerName": "Henrik Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 21728,
      "updatedMinutesAgo": 21655,
      "closedMinutesAgo": 21655,
      "comments": [
        {
          "id": 12,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 21655
        }
      ],
      "history": [
        {
          "id": 39,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 21728
        },
        {
          "id": 40,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 21728
        },
        {
          "id": 41,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 21655
        },
        {
          "id": 42,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 21655
        }
      ]
    },
    {
      "id": 215,
      "version": 3,
      "customerName": "Ida Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "TABLET",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy Tab S9",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 26065,
      "updatedMinutesAgo": 26047,
      "closedMinutesAgo": 26047,
      "comments": [
        {
          "id": 13,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 26048
        }
      ],
      "history": [
        {
          "id": 43,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 26065
        },
        {
          "id": 44,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 26048
        },
        {
          "id": 45,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 26047
        }
      ]
    },
    {
      "id": 216,
      "version": 3,
      "customerName": "Jonas Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "HP",
      "deviceModel": "HP Pavilion 15",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Virus / skadevare",
      "description": "Nettleseren viser uønskede varsler og reklame.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 30402,
      "updatedMinutesAgo": 30362,
      "closedMinutesAgo": 30362,
      "comments": [
        {
          "id": 14,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Uønskede utvidelser fjernet og sikkerhetsskann fullført.",
          "minutesAgo": 30364
        }
      ],
      "history": [
        {
          "id": 46,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 30402
        },
        {
          "id": 47,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 30364
        },
        {
          "id": 48,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 30362
        }
      ]
    },
    {
      "id": 217,
      "version": 3,
      "customerName": "Kristin Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 34739,
      "updatedMinutesAgo": 34706,
      "closedMinutesAgo": 34706,
      "comments": [
        {
          "id": 15,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Kontotilgang gjenopprettet og bekreftet av kunden.",
          "minutesAgo": 34707
        }
      ],
      "history": [
        {
          "id": 49,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 34739
        },
        {
          "id": 50,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 34707
        },
        {
          "id": 51,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 34706
        }
      ]
    },
    {
      "id": 218,
      "version": 3,
      "customerName": "Lars Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 39076,
      "updatedMinutesAgo": 39028,
      "closedMinutesAgo": 39028,
      "comments": [
        {
          "id": 16,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 39029
        }
      ],
      "history": [
        {
          "id": 52,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 39076
        },
        {
          "id": 53,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 39029
        },
        {
          "id": 54,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 39028
        }
      ]
    },
    {
      "id": 219,
      "version": 3,
      "customerName": "Maria Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 49020,
      "updatedMinutesAgo": 48997,
      "closedMinutesAgo": 48997,
      "comments": [
        {
          "id": 17,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 48997
        }
      ],
      "history": [
        {
          "id": 55,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 49020
        },
        {
          "id": 56,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 48997
        },
        {
          "id": 57,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 48997
        }
      ]
    },
    {
      "id": 220,
      "version": 3,
      "customerName": "Nora Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 54797,
      "updatedMinutesAgo": 54767,
      "closedMinutesAgo": 54767,
      "comments": [
        {
          "id": 18,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 54767
        }
      ],
      "history": [
        {
          "id": 58,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 54797
        },
        {
          "id": 59,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 54767
        },
        {
          "id": 60,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 54767
        }
      ]
    },
    {
      "id": 221,
      "version": 4,
      "customerName": "Oskar Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 60574,
      "updatedMinutesAgo": 60536,
      "closedMinutesAgo": 60536,
      "comments": [
        {
          "id": 19,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 60536
        }
      ],
      "history": [
        {
          "id": 61,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 60574
        },
        {
          "id": 62,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 60573
        },
        {
          "id": 63,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 60536
        },
        {
          "id": 64,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 60536
        }
      ]
    },
    {
      "id": 222,
      "version": 3,
      "customerName": "Petter Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "HP",
      "deviceModel": "HP Pavilion 15",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Virus / skadevare",
      "description": "Nettleseren viser uønskede varsler og reklame.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 66351,
      "updatedMinutesAgo": 66266,
      "closedMinutesAgo": 66266,
      "comments": [
        {
          "id": 20,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Uønskede utvidelser fjernet og sikkerhetsskann fullført.",
          "minutesAgo": 66266
        }
      ],
      "history": [
        {
          "id": 65,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 66351
        },
        {
          "id": 66,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 66266
        },
        {
          "id": 67,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 66266
        }
      ]
    },
    {
      "id": 223,
      "version": 3,
      "customerName": "Randi Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 70688,
      "updatedMinutesAgo": 70610,
      "closedMinutesAgo": 70610,
      "comments": [
        {
          "id": 21,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 70614
        }
      ],
      "history": [
        {
          "id": 68,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 70688
        },
        {
          "id": 69,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 70614
        },
        {
          "id": 70,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 70610
        }
      ]
    },
    {
      "id": 224,
      "version": 3,
      "customerName": "Sofie Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 76465,
      "updatedMinutesAgo": 76442,
      "closedMinutesAgo": 76442,
      "comments": [
        {
          "id": 22,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 76443
        }
      ],
      "history": [
        {
          "id": 71,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 76465
        },
        {
          "id": 72,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 76443
        },
        {
          "id": 73,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 76442
        }
      ]
    },
    {
      "id": 225,
      "version": 3,
      "customerName": "Terje Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Doro",
      "deviceModel": "Doro Smartphone",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 82242,
      "updatedMinutesAgo": 82212,
      "closedMinutesAgo": 82212,
      "comments": [
        {
          "id": 23,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Kontotilgang gjenopprettet og bekreftet av kunden.",
          "minutesAgo": 82213
        }
      ],
      "history": [
        {
          "id": 74,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 82242
        },
        {
          "id": 75,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 82213
        },
        {
          "id": 76,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 82212
        }
      ]
    },
    {
      "id": 226,
      "version": 3,
      "customerName": "Vilde Hansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "E-post",
      "description": "E-post synkroniseres ikke på enheten.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 96540,
      "updatedMinutesAgo": 96512,
      "closedMinutesAgo": 96512,
      "comments": [
        {
          "id": 24,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "E-postkonto satt opp på nytt og sending testet.",
          "minutesAgo": 96512
        }
      ],
      "history": [
        {
          "id": 77,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 96540
        },
        {
          "id": 78,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 96512
        },
        {
          "id": 79,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 96512
        }
      ]
    },
    {
      "id": 227,
      "version": 3,
      "customerName": "Anne Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 103757,
      "updatedMinutesAgo": 103722,
      "closedMinutesAgo": 103722,
      "comments": [
        {
          "id": 25,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Kontotilgang gjenopprettet og bekreftet av kunden.",
          "minutesAgo": 103722
        }
      ],
      "history": [
        {
          "id": 80,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 103757
        },
        {
          "id": 81,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 103722
        },
        {
          "id": 82,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 103722
        }
      ]
    },
    {
      "id": 228,
      "version": 4,
      "customerName": "Bjørn Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 110974,
      "updatedMinutesAgo": 110931,
      "closedMinutesAgo": 110931,
      "comments": [
        {
          "id": 26,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 110931
        }
      ],
      "history": [
        {
          "id": 83,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 110974
        },
        {
          "id": 84,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 110972
        },
        {
          "id": 85,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 110931
        },
        {
          "id": 86,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 110931
        }
      ]
    },
    {
      "id": 229,
      "version": 3,
      "customerName": "Camilla Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "TABLET",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy Tab S9",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 118191,
      "updatedMinutesAgo": 118133,
      "closedMinutesAgo": 118133,
      "comments": [
        {
          "id": 27,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 118133
        }
      ],
      "history": [
        {
          "id": 87,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 118191
        },
        {
          "id": 88,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 118133
        },
        {
          "id": 89,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 118133
        }
      ]
    },
    {
      "id": 230,
      "version": 3,
      "customerName": "Daniel Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 125408,
      "updatedMinutesAgo": 125325,
      "closedMinutesAgo": 125325,
      "comments": [
        {
          "id": 28,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Kontotilgang gjenopprettet og bekreftet av kunden.",
          "minutesAgo": 125325
        }
      ],
      "history": [
        {
          "id": 90,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 125408
        },
        {
          "id": 91,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 125325
        },
        {
          "id": 92,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 125325
        }
      ]
    },
    {
      "id": 231,
      "version": 3,
      "customerName": "Elise Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 142620,
      "updatedMinutesAgo": 142587,
      "closedMinutesAgo": 142587,
      "comments": [
        {
          "id": 29,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 142589
        }
      ],
      "history": [
        {
          "id": 93,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 142620
        },
        {
          "id": 94,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 142589
        },
        {
          "id": 95,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 142587
        }
      ]
    },
    {
      "id": 232,
      "version": 3,
      "customerName": "Fredrik Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 151277,
      "updatedMinutesAgo": 151237,
      "closedMinutesAgo": 151237,
      "comments": [
        {
          "id": 30,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 151239
        }
      ],
      "history": [
        {
          "id": 96,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 151277
        },
        {
          "id": 97,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 151239
        },
        {
          "id": 98,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 151237
        }
      ]
    },
    {
      "id": 233,
      "version": 3,
      "customerName": "Grete Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 159934,
      "updatedMinutesAgo": 159886,
      "closedMinutesAgo": 159886,
      "comments": [
        {
          "id": 31,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 159887
        }
      ],
      "history": [
        {
          "id": 99,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 159934
        },
        {
          "id": 100,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 159887
        },
        {
          "id": 101,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 159886
        }
      ]
    },
    {
      "id": 234,
      "version": 3,
      "customerName": "Henrik Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Doro",
      "deviceModel": "Doro Smartphone",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 168591,
      "updatedMinutesAgo": 168490,
      "closedMinutesAgo": 168490,
      "comments": [
        {
          "id": 32,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 168492
        }
      ],
      "history": [
        {
          "id": 102,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 168591
        },
        {
          "id": 103,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 168492
        },
        {
          "id": 104,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 168490
        }
      ]
    },
    {
      "id": 235,
      "version": 4,
      "customerName": "Ida Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 182940,
      "updatedMinutesAgo": 182812,
      "closedMinutesAgo": 182812,
      "comments": [
        {
          "id": 33,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 182814
        }
      ],
      "history": [
        {
          "id": 105,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 182940
        },
        {
          "id": 106,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 182931
        },
        {
          "id": 107,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 182814
        },
        {
          "id": 108,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 182812
        }
      ]
    },
    {
      "id": 236,
      "version": 3,
      "customerName": "Jonas Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 187277,
      "updatedMinutesAgo": 187142,
      "closedMinutesAgo": 187142,
      "comments": [
        {
          "id": 34,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 187143
        }
      ],
      "history": [
        {
          "id": 109,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 187277
        },
        {
          "id": 110,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 187143
        },
        {
          "id": 111,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 187142
        }
      ]
    },
    {
      "id": 237,
      "version": 3,
      "customerName": "Kristin Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 193054,
      "updatedMinutesAgo": 192911,
      "closedMinutesAgo": 192911,
      "comments": [
        {
          "id": 35,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 192912
        }
      ],
      "history": [
        {
          "id": 112,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 193054
        },
        {
          "id": 113,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 192912
        },
        {
          "id": 114,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 192911
        }
      ]
    },
    {
      "id": 238,
      "version": 3,
      "customerName": "Lars Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 197391,
      "updatedMinutesAgo": 197233,
      "closedMinutesAgo": 197233,
      "comments": [
        {
          "id": 36,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 197233
        }
      ],
      "history": [
        {
          "id": 115,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 197391
        },
        {
          "id": 116,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 197233
        },
        {
          "id": 117,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 197233
        }
      ]
    },
    {
      "id": 239,
      "version": 3,
      "customerName": "Maria Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "TABLET",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy Tab S9",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 201728,
      "updatedMinutesAgo": 201545,
      "closedMinutesAgo": 201545,
      "comments": [
        {
          "id": 37,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 201555
        }
      ],
      "history": [
        {
          "id": 118,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 201728
        },
        {
          "id": 119,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 201555
        },
        {
          "id": 120,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 201545
        }
      ]
    },
    {
      "id": 240,
      "version": 3,
      "customerName": "Nora Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 207505,
      "updatedMinutesAgo": 207377,
      "closedMinutesAgo": 207377,
      "comments": [
        {
          "id": 38,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 207382
        }
      ],
      "history": [
        {
          "id": 121,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 207505
        },
        {
          "id": 122,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 207382
        },
        {
          "id": 123,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 207377
        }
      ]
    },
    {
      "id": 241,
      "version": 3,
      "customerName": "Oskar Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Doro",
      "deviceModel": "Doro Smartphone",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 211842,
      "updatedMinutesAgo": 211626,
      "closedMinutesAgo": 211626,
      "comments": [
        {
          "id": 39,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 211631
        }
      ],
      "history": [
        {
          "id": 124,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 211842
        },
        {
          "id": 125,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 211631
        },
        {
          "id": 126,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 211626
        }
      ]
    },
    {
      "id": 242,
      "version": 4,
      "customerName": "Petter Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "HP",
      "deviceModel": "HP Pavilion 15",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 216179,
      "updatedMinutesAgo": 216036,
      "closedMinutesAgo": 216036,
      "comments": [
        {
          "id": 40,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 216038
        }
      ],
      "history": [
        {
          "id": 127,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 216179
        },
        {
          "id": 128,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 216167
        },
        {
          "id": 129,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 216038
        },
        {
          "id": 130,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 216036
        }
      ]
    },
    {
      "id": 243,
      "version": 3,
      "customerName": "Randi Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 230460,
      "updatedMinutesAgo": 230417,
      "closedMinutesAgo": 230417,
      "comments": [
        {
          "id": 41,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 230418
        }
      ],
      "history": [
        {
          "id": 131,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 230460
        },
        {
          "id": 132,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 230418
        },
        {
          "id": 133,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 230417
        }
      ]
    },
    {
      "id": 244,
      "version": 3,
      "customerName": "Sofie Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "E-post",
      "description": "E-post synkroniseres ikke på enheten.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 237677,
      "updatedMinutesAgo": 237627,
      "closedMinutesAgo": 237627,
      "comments": [
        {
          "id": 42,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "E-postkonto satt opp på nytt og sending testet.",
          "minutesAgo": 237627
        }
      ],
      "history": [
        {
          "id": 134,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 237677
        },
        {
          "id": 135,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 237627
        },
        {
          "id": 136,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 237627
        }
      ]
    },
    {
      "id": 245,
      "version": 3,
      "customerName": "Terje Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "HP",
      "deviceModel": "HP Pavilion 15",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "E-post",
      "description": "E-post synkroniseres ikke på enheten.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 244894,
      "updatedMinutesAgo": 244836,
      "closedMinutesAgo": 244836,
      "comments": [
        {
          "id": 43,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "E-postkonto satt opp på nytt og sending testet.",
          "minutesAgo": 244836
        }
      ],
      "history": [
        {
          "id": 137,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 244894
        },
        {
          "id": 138,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 244836
        },
        {
          "id": 139,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 244836
        }
      ]
    },
    {
      "id": 246,
      "version": 3,
      "customerName": "Vilde Johansen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 252111,
      "updatedMinutesAgo": 252038,
      "closedMinutesAgo": 252038,
      "comments": [
        {
          "id": 44,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 252038
        }
      ],
      "history": [
        {
          "id": 140,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 252111
        },
        {
          "id": 141,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 252038
        },
        {
          "id": 142,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 252038
        }
      ]
    },
    {
      "id": 247,
      "version": 3,
      "customerName": "Anne Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "HP",
      "deviceModel": "HP Pavilion 15",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Virus / skadevare",
      "description": "Nettleseren viser uønskede varsler og reklame.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 259328,
      "updatedMinutesAgo": 259171,
      "closedMinutesAgo": 259171,
      "comments": [
        {
          "id": 45,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Uønskede utvidelser fjernet og sikkerhetsskann fullført.",
          "minutesAgo": 259179
        }
      ],
      "history": [
        {
          "id": 143,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 259328
        },
        {
          "id": 144,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 259179
        },
        {
          "id": 145,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 259171
        }
      ]
    },
    {
      "id": 248,
      "version": 3,
      "customerName": "Bjørn Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Doro",
      "deviceModel": "Doro Smartphone",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 276540,
      "updatedMinutesAgo": 276463,
      "closedMinutesAgo": 276463,
      "comments": [
        {
          "id": 46,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 276466
        }
      ],
      "history": [
        {
          "id": 146,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 276540
        },
        {
          "id": 147,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 276466
        },
        {
          "id": 148,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 276463
        }
      ]
    },
    {
      "id": 249,
      "version": 4,
      "customerName": "Camilla Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "HP",
      "deviceModel": "HP Pavilion 15",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Virus / skadevare",
      "description": "Nettleseren viser uønskede varsler og reklame.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 285197,
      "updatedMinutesAgo": 285109,
      "closedMinutesAgo": 285109,
      "comments": [
        {
          "id": 47,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Uønskede utvidelser fjernet og sikkerhetsskann fullført.",
          "minutesAgo": 285111
        }
      ],
      "history": [
        {
          "id": 149,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 285197
        },
        {
          "id": 150,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 285186
        },
        {
          "id": 151,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 285111
        },
        {
          "id": 152,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 285109
        }
      ]
    },
    {
      "id": 250,
      "version": 3,
      "customerName": "Daniel Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 293854,
      "updatedMinutesAgo": 293791,
      "closedMinutesAgo": 293791,
      "comments": [
        {
          "id": 48,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 293792
        }
      ],
      "history": [
        {
          "id": 153,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 293854
        },
        {
          "id": 154,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 293792
        },
        {
          "id": 155,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 293791
        }
      ]
    },
    {
      "id": 251,
      "version": 3,
      "customerName": "Elise Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 302511,
      "updatedMinutesAgo": 302433,
      "closedMinutesAgo": 302433,
      "comments": [
        {
          "id": 49,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 302434
        }
      ],
      "history": [
        {
          "id": 156,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 302511
        },
        {
          "id": 157,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 302434
        },
        {
          "id": 158,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 302433
        }
      ]
    },
    {
      "id": 252,
      "version": 3,
      "customerName": "Fredrik Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 322620,
      "updatedMinutesAgo": 322567,
      "closedMinutesAgo": 322567,
      "comments": [
        {
          "id": 50,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 322567
        }
      ],
      "history": [
        {
          "id": 159,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 322620
        },
        {
          "id": 160,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 322567
        },
        {
          "id": 161,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 322567
        }
      ]
    },
    {
      "id": 253,
      "version": 3,
      "customerName": "Grete Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 334157,
      "updatedMinutesAgo": 334097,
      "closedMinutesAgo": 334097,
      "comments": [
        {
          "id": 51,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 334097
        }
      ],
      "history": [
        {
          "id": 162,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 334157
        },
        {
          "id": 163,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 334097
        },
        {
          "id": 164,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 334097
        }
      ]
    },
    {
      "id": 254,
      "version": 3,
      "customerName": "Henrik Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 344254,
      "updatedMinutesAgo": 344186,
      "closedMinutesAgo": 344186,
      "comments": [
        {
          "id": 52,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 344186
        }
      ],
      "history": [
        {
          "id": 165,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 344254
        },
        {
          "id": 166,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 344186
        },
        {
          "id": 167,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 344186
        }
      ]
    },
    {
      "id": 255,
      "version": 3,
      "customerName": "Ida Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 367260,
      "updatedMinutesAgo": 367202,
      "closedMinutesAgo": 367202,
      "comments": [
        {
          "id": 53,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 367205
        }
      ],
      "history": [
        {
          "id": 168,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 367260
        },
        {
          "id": 169,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 367205
        },
        {
          "id": 170,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 367202
        }
      ]
    },
    {
      "id": 256,
      "version": 4,
      "customerName": "Jonas Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 378797,
      "updatedMinutesAgo": 378732,
      "closedMinutesAgo": 378732,
      "comments": [
        {
          "id": 54,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 378735
        }
      ],
      "history": [
        {
          "id": 171,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 378797
        },
        {
          "id": 172,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 378784
        },
        {
          "id": 173,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 378735
        },
        {
          "id": 174,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 378732
        }
      ]
    },
    {
      "id": 257,
      "version": 3,
      "customerName": "Kristin Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 388894,
      "updatedMinutesAgo": 388821,
      "closedMinutesAgo": 388821,
      "comments": [
        {
          "id": 55,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 388823
        }
      ],
      "history": [
        {
          "id": 175,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 388894
        },
        {
          "id": 176,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 388823
        },
        {
          "id": 177,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 388821
        }
      ]
    },
    {
      "id": 258,
      "version": 3,
      "customerName": "Lars Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "E-post",
      "description": "E-post synkroniseres ikke på enheten.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 411900,
      "updatedMinutesAgo": 411837,
      "closedMinutesAgo": 411837,
      "comments": [
        {
          "id": 56,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "E-postkonto satt opp på nytt og sending testet.",
          "minutesAgo": 411838
        }
      ],
      "history": [
        {
          "id": 178,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 411900
        },
        {
          "id": 179,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 411838
        },
        {
          "id": 180,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 411837
        }
      ]
    },
    {
      "id": 259,
      "version": 3,
      "customerName": "Maria Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 423437,
      "updatedMinutesAgo": 423367,
      "closedMinutesAgo": 423367,
      "comments": [
        {
          "id": 57,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 423368
        }
      ],
      "history": [
        {
          "id": 181,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 423437
        },
        {
          "id": 182,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 423368
        },
        {
          "id": 183,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 423367
        }
      ]
    },
    {
      "id": 260,
      "version": 3,
      "customerName": "Nora Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 433534,
      "updatedMinutesAgo": 433456,
      "closedMinutesAgo": 433456,
      "comments": [
        {
          "id": 58,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 433457
        }
      ],
      "history": [
        {
          "id": 184,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 433534
        },
        {
          "id": 185,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 433457
        },
        {
          "id": 186,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 433456
        }
      ]
    },
    {
      "id": 261,
      "version": 3,
      "customerName": "Oskar Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "HP",
      "deviceModel": "HP Pavilion 15",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Virus / skadevare",
      "description": "Nettleseren viser uønskede varsler og reklame.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 460860,
      "updatedMinutesAgo": 460751,
      "closedMinutesAgo": 460751,
      "comments": [
        {
          "id": 59,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Uønskede utvidelser fjernet og sikkerhetsskann fullført.",
          "minutesAgo": 460751
        }
      ],
      "history": [
        {
          "id": 187,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 460860
        },
        {
          "id": 188,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 460751
        },
        {
          "id": 189,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 460751
        }
      ]
    },
    {
      "id": 262,
      "version": 3,
      "customerName": "Petter Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Doro",
      "deviceModel": "Doro Smartphone",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 475277,
      "updatedMinutesAgo": 475202,
      "closedMinutesAgo": 475202,
      "comments": [
        {
          "id": 60,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Kontotilgang gjenopprettet og bekreftet av kunden.",
          "minutesAgo": 475202
        }
      ],
      "history": [
        {
          "id": 190,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 475277
        },
        {
          "id": 191,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 475202
        },
        {
          "id": 192,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 475202
        }
      ]
    },
    {
      "id": 263,
      "version": 4,
      "customerName": "Randi Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Google",
      "deviceModel": "Google Pixel 7",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 505500,
      "updatedMinutesAgo": 505427,
      "closedMinutesAgo": 505427,
      "comments": [
        {
          "id": 61,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 505431
        }
      ],
      "history": [
        {
          "id": 193,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 505500
        },
        {
          "id": 194,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 505480
        },
        {
          "id": 195,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 505431
        },
        {
          "id": 196,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 505427
        }
      ]
    },
    {
      "id": 264,
      "version": 3,
      "customerName": "Sofie Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "App-problemer",
      "description": "En app avsluttes ved oppstart.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 519917,
      "updatedMinutesAgo": 519837,
      "closedMinutesAgo": 519837,
      "comments": [
        {
          "id": 62,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Appen oppdatert og funksjonen testet sammen med kunden.",
          "minutesAgo": 519840
        }
      ],
      "history": [
        {
          "id": 197,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 519917
        },
        {
          "id": 198,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 519840
        },
        {
          "id": 199,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 519837
        }
      ]
    },
    {
      "id": 265,
      "version": 3,
      "customerName": "Terje Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 550140,
      "updatedMinutesAgo": 550062,
      "closedMinutesAgo": 550062,
      "comments": [
        {
          "id": 63,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Kontotilgang gjenopprettet og bekreftet av kunden.",
          "minutesAgo": 550064
        }
      ],
      "history": [
        {
          "id": 200,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 550140
        },
        {
          "id": 201,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 550064
        },
        {
          "id": 202,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 550062
        }
      ]
    },
    {
      "id": 266,
      "version": 3,
      "customerName": "Vilde Olsen",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "HP",
      "deviceModel": "HP Pavilion 15",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 564557,
      "updatedMinutesAgo": 564472,
      "closedMinutesAgo": 564472,
      "comments": [
        {
          "id": 64,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 564473
        }
      ],
      "history": [
        {
          "id": 203,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 564557
        },
        {
          "id": 204,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 564473
        },
        {
          "id": 205,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 564472
        }
      ]
    },
    {
      "id": 267,
      "version": 3,
      "customerName": "Anne Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Nokia",
      "deviceModel": "Nokia Button Phone",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 594780,
      "updatedMinutesAgo": 594697,
      "closedMinutesAgo": 594697,
      "comments": [
        {
          "id": 65,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 594698
        }
      ],
      "history": [
        {
          "id": 206,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 594780
        },
        {
          "id": 207,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 594698
        },
        {
          "id": 208,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 594697
        }
      ]
    },
    {
      "id": 268,
      "version": 3,
      "customerName": "Bjørn Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "COMPUTER",
      "manufacturer": "Lenovo",
      "deviceModel": "Lenovo ThinkPad T14",
      "newDeviceModel": "",
      "operatingSystem": "OTHER",
      "category": "E-post",
      "description": "E-post synkroniseres ikke på enheten.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 609197,
      "updatedMinutesAgo": 609107,
      "closedMinutesAgo": 609107,
      "comments": [
        {
          "id": 66,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "E-postkonto satt opp på nytt og sending testet.",
          "minutesAgo": 609108
        }
      ],
      "history": [
        {
          "id": 209,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 609197
        },
        {
          "id": 210,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 609108
        },
        {
          "id": 211,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 609107
        }
      ]
    },
    {
      "id": 269,
      "version": 3,
      "customerName": "Camilla Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Doro",
      "deviceModel": "Doro Smartphone",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 639420,
      "updatedMinutesAgo": 639332,
      "closedMinutesAgo": 639332,
      "comments": [
        {
          "id": 67,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 639332
        }
      ],
      "history": [
        {
          "id": 212,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 639420
        },
        {
          "id": 213,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 639332
        },
        {
          "id": 214,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 639332
        }
      ]
    },
    {
      "id": 270,
      "version": 4,
      "customerName": "Daniel Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Doro",
      "deviceModel": "Doro Smartphone",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 653837,
      "updatedMinutesAgo": 653685,
      "closedMinutesAgo": 653685,
      "comments": [
        {
          "id": 68,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 653685
        }
      ],
      "history": [
        {
          "id": 215,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 653837
        },
        {
          "id": 216,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 653837
        },
        {
          "id": 217,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 653685
        },
        {
          "id": 218,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 653685
        }
      ]
    },
    {
      "id": 271,
      "version": 3,
      "customerName": "Elise Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 684060,
      "updatedMinutesAgo": 683967,
      "closedMinutesAgo": 683967,
      "comments": [
        {
          "id": 69,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 683972
        }
      ],
      "history": [
        {
          "id": 219,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 684060
        },
        {
          "id": 220,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 683972
        },
        {
          "id": 221,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 683967
        }
      ]
    },
    {
      "id": 272,
      "version": 3,
      "customerName": "Fredrik Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 698477,
      "updatedMinutesAgo": 698377,
      "closedMinutesAgo": 698377,
      "comments": [
        {
          "id": 70,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 698381
        }
      ],
      "history": [
        {
          "id": 222,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 698477
        },
        {
          "id": 223,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 698381
        },
        {
          "id": 224,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 698377
        }
      ]
    },
    {
      "id": 273,
      "version": 3,
      "customerName": "Grete Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Nettverk / tilkobling",
      "description": "Enheten mister nettverkstilkoblingen under bruk.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 735900,
      "updatedMinutesAgo": 735802,
      "closedMinutesAgo": 735802,
      "comments": [
        {
          "id": 71,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Tilkoblingsinnstillinger kontrollert og stabil forbindelse bekreftet.",
          "minutesAgo": 735804
        }
      ],
      "history": [
        {
          "id": 225,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 735900
        },
        {
          "id": 226,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 735804
        },
        {
          "id": 227,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 735802
        }
      ]
    },
    {
      "id": 274,
      "version": 3,
      "customerName": "Henrik Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 780540,
      "updatedMinutesAgo": 780437,
      "closedMinutesAgo": 780437,
      "comments": [
        {
          "id": 72,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 780439
        }
      ],
      "history": [
        {
          "id": 228,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 780540
        },
        {
          "id": 229,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 780439
        },
        {
          "id": 230,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 780437
        }
      ]
    },
    {
      "id": 275,
      "version": 3,
      "customerName": "Ida Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 825180,
      "updatedMinutesAgo": 825072,
      "closedMinutesAgo": 825072,
      "comments": [
        {
          "id": 73,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Kontotilgang gjenopprettet og bekreftet av kunden.",
          "minutesAgo": 825073
        }
      ],
      "history": [
        {
          "id": 231,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 825180
        },
        {
          "id": 232,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 825073
        },
        {
          "id": 233,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 825072
        }
      ]
    },
    {
      "id": 276,
      "version": 3,
      "customerName": "Jonas Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Dataoverføring / sikkerhetskopi / oppsett",
      "description": "Kunden trenger hjelp med sikkerhetskopi og oppsett.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 869820,
      "updatedMinutesAgo": 869707,
      "closedMinutesAgo": 869707,
      "comments": [
        {
          "id": 74,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Sikkerhetskopi kontrollert og oppsett fullført.",
          "minutesAgo": 869708
        }
      ],
      "history": [
        {
          "id": 234,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 869820
        },
        {
          "id": 235,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 869708
        },
        {
          "id": 236,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 869707
        }
      ]
    },
    {
      "id": 277,
      "version": 4,
      "customerName": "Kristin Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 4,
      "createdByName": "Jan Johansen",
      "assignedToId": 4,
      "assignedToName": "Jan Johansen",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 914460,
      "updatedMinutesAgo": 914342,
      "closedMinutesAgo": 914342,
      "comments": [
        {
          "id": 75,
          "employeeId": 4,
          "employeeName": "Jan Johansen",
          "text": "Kontotilgang gjenopprettet og bekreftet av kunden.",
          "minutesAgo": 914342
        }
      ],
      "history": [
        {
          "id": 237,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 914460
        },
        {
          "id": 238,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "STATUS",
          "summary": "Pågår → Eskalert",
          "minutesAgo": 914458
        },
        {
          "id": 239,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 914342
        },
        {
          "id": 240,
          "actorEmployeeId": 4,
          "actorName": "Jan Johansen",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 914342
        }
      ]
    },
    {
      "id": 278,
      "version": 3,
      "customerName": "Lars Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Doro",
      "deviceModel": "Doro Smartphone",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 1,
      "createdByName": "Ola Nordmann",
      "assignedToId": 1,
      "assignedToName": "Ola Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 959100,
      "updatedMinutesAgo": 958903,
      "closedMinutesAgo": 958903,
      "comments": [
        {
          "id": 76,
          "employeeId": 1,
          "employeeName": "Ola Nordmann",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 958903
        }
      ],
      "history": [
        {
          "id": 241,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 959100
        },
        {
          "id": 242,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 958903
        },
        {
          "id": 243,
          "actorEmployeeId": 1,
          "actorName": "Ola Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 958903
        }
      ]
    },
    {
      "id": 279,
      "version": 3,
      "customerName": "Maria Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Apple",
      "deviceModel": "iPhone 13",
      "newDeviceModel": "",
      "operatingSystem": "IOS",
      "category": "Konto / brukernavn / passord",
      "description": "Kunden trenger hjelp med gjenoppretting av konto.",
      "createdById": 2,
      "createdByName": "Kari Nordmann",
      "assignedToId": 2,
      "assignedToName": "Kari Nordmann",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 1003740,
      "updatedMinutesAgo": 1003612,
      "closedMinutesAgo": 1003612,
      "comments": [
        {
          "id": 77,
          "employeeId": 2,
          "employeeName": "Kari Nordmann",
          "text": "Kontotilgang gjenopprettet og bekreftet av kunden.",
          "minutesAgo": 1003619
        }
      ],
      "history": [
        {
          "id": 244,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 1003740
        },
        {
          "id": 245,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 1003619
        },
        {
          "id": 246,
          "actorEmployeeId": 2,
          "actorName": "Kari Nordmann",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 1003612
        }
      ]
    },
    {
      "id": 280,
      "version": 3,
      "customerName": "Nora Bakken",
      "customerPhone": "99999999",
      "customerPhoneNormalized": "99999999",
      "deviceType": "PHONE",
      "manufacturer": "Samsung",
      "deviceModel": "Samsung Galaxy S23",
      "newDeviceModel": "",
      "operatingSystem": "ANDROID",
      "category": "Systemproblemer",
      "description": "Enheten er treg og har lite ledig lagringsplass.",
      "createdById": 3,
      "createdByName": "Peder Ås",
      "assignedToId": 3,
      "assignedToName": "Peder Ås",
      "status": "CLOSED",
      "urgent": false,
      "createdMinutesAgo": 1067100,
      "updatedMinutesAgo": 1066967,
      "closedMinutesAgo": 1066967,
      "comments": [
        {
          "id": 78,
          "employeeId": 3,
          "employeeName": "Peder Ås",
          "text": "Lagring ryddet og systemoppdatering fullført.",
          "minutesAgo": 1066972
        }
      ],
      "history": [
        {
          "id": 247,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CREATED",
          "summary": "Saken ble opprettet",
          "minutesAgo": 1067100
        },
        {
          "id": 248,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "COMMENT",
          "summary": "Kommentar lagt til",
          "minutesAgo": 1066972
        },
        {
          "id": 249,
          "actorEmployeeId": 3,
          "actorName": "Peder Ås",
          "eventType": "CLOSED",
          "summary": "Pågår → Lukket",
          "minutesAgo": 1066967
        }
      ]
    }
  ]
};
