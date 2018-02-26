export const otherAttributes = [
  { title: 'Mobile', value: 'mobile', type: 'phoneNumber' },
  { title: 'Home', value: 'home', type: 'phoneNumber' },
  { title: 'Company', value: 'company', type: 'company' },
  { title: 'Work', value: 'work', type: 'phoneNumber' },
  { title: 'Notes', value: 'note', type: 'paragraph' }
];

const contactList = JSON.parse(
  `[{
    "id": 1,
    "avatar": "http://www.timhuffdesigns.com/DD/arnieadams.jpg",
    "license": "09341111",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Arnie",
    "lastName": "Adams",
    "name": "Arnie Adams",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },
  {
    "id": 2,
    "avatar": "http://www.timhuffdesigns.com/DD/AdnanAziz.png",
    "license": "09345667",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Adnan",
    "lastName": "Aziz",
    "name": "Adnan Aziz",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },
  {
    "id": 3,
    "avatar": "http://www.timhuffdesigns.com/DD/Casey.png",
    "license": "09345677",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Casey",
    "lastName": "Holland",
    "name": "Casey Holland",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },
  {
    "id": 4,
    "avatar": "http://www.timhuffdesigns.com/DD/Chris.png",
    "license": "093456874",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Chris",
    "lastName": "Calversbert",
    "name": "Chris Calversbert",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },
  {
    "id": 5,
    "avatar": "http://www.timhuffdesigns.com/DD/DanKim-1.jpg",
    "license": "04345656",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Dan",
    "lastName": "Kim",
    "name": "Dan Kim",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },
  {
    "id": 6,
    "avatar": "http://www.timhuffdesigns.com/DD/joeMader.jpg",
    "license": "04345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Joe",
    "lastName": "Mader",
    "name": "Joe Mader",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },
  {
    "id": 7,
    "avatar": "http://www.timhuffdesigns.com/DD/JohnBono.png",
    "license": "03345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "John",
    "lastName": "Bono",
    "name": "John Bono",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },
  {
    "id": 8,
    "avatar": "http://www.timhuffdesigns.com/DD/JohnBowman.png",
    "license": "02345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "John",
    "lastName": "Bowman",
    "name": "John Bowman",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },
  {
    "id": 9,
    "avatar": "http://www.timhuffdesigns.com/DD/Ray.png",
    "license": "01345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Ray",
    "lastName": "Daley",
    "name": "Ray Daley",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },
  {
    "id": 10,
    "avatar": "http://www.timhuffdesigns.com/DD/Tim.png",
    "license": "09345601",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Tim",
    "lastName": "Huff",
    "name": "Tim Huff",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "R3PI Trucking",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
  },{
    "id": 11,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-1.jpg",
    "license": "09345678",
    "state": "Va",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Donald",
    "lastName": "Trump",
    "name": "Donald Trump",
    "mobile": "(023) 302-3161 x60451",
    "home": "(136) 403-0476 x8388",
    "company": "Casper Trucking",
    "work": "(399) 506-9438",
    "note": "Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis. Quisquam doloremque error praesentium sapiente et vitae. Omnis facere sint nulla similique vel voluptatem officia deleniti."
    }, {
    "id": 12,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-3.jpg",
    "license": "09345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Christina",
    "lastName": "Hahn",
    "name": "Christina Hahn",
    "mobile": "686.292.3548 x7219",
    "home": "447-343-4864 x414",
    "company": "Casper Trucking",
    "work": "299-721-6828 x856",
    "note": "Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint. Odit sit labore quia. Perferendis iure eos qui tempore ex saepe consequuntur accusamus ipsa. Eius consectetur nam quas. Laborum aperiam hic dolorum quae autem consequatur."
    }, {
    "id": 13,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-11.jpg",
    "license": "09345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Clinton",
    "lastName": "Goyette",
    "name": "Clinton Goyette",
    "mobile": "(913) 127-1563 x082",
    "home": "(843) 501-8804",
    "company": "Feil - Goodwin",
    "work": "732.111.8883",
    "note": "Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut fugit sit ab blanditiis ab occaecati soluta quis."
    }, {
    "id": 14,
     "avatar": "http://www.timhuffdesigns.com/DD/Driver-5.jpg",
    "license": "09345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Forrest",
    "lastName": "Klein",
    "name": "Forrest Klein",
    "mobile": "174-628-5802 x8324",
    "home": "(047) 141-0247",
    "company": "Wilkinson - Howe",
    "work": "1-624-238-9252",
    "note": "Sit et non debitis. Quis atque facilis et sed. Illum adipisci deserunt corporis modi necessitatibus at numquam neque sint."
    }, {
    "id": 15,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-4.jpg",
    "license": "09345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "General",
    "lastName": "Kub",
    "name": "General Kub",
    "mobile": "779.482.9824",
    "home": "(698) 858-0337 x3273",
    "company": "Moen Group",
    "work": "881.768.7522",
    "note": "Quibusdam dolorem minima ea enim nostrum eos. Corrupti dolore velit molestiae nostrum error qui. Sit qui maxime sed quisquam rem cupiditate. Iste ex quidem. Ipsam et quia omnis facere blanditiis."
    }, {
    "id": 16,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-6.jpg",
    "license": "09345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Lon",
    "lastName": "Wunsch",
    "name": "Lon Wunsch",
    "mobile": "(792) 607-6366 x88975",
    "home": "447.683.3799 x38668",
    "company": "Johns, Gibson and Schinner",
    "work": "(735) 859-7674",
    "note": "Velit non voluptas sed sit pariatur earum unde neque. Incidunt nam reprehenderit non mollitia. Incidunt quo illum modi ex eos consequuntur eius nihil itaque. Quis tenetur ratione repudiandae ea et architecto dolorem porro. Rem non consectetur ea iste."
    }, {
    "id": 17,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-8.jpg",
    "license": "09345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Mabelle",
    "lastName": "Kling",
    "name": "Mabelle Kling",
    "mobile": "499-736-0779 x2409",
    "home": "1-910-529-7393 x222",
    "company": "Bins, Murray and Ryan",
    "work": "905.098.6372",
    "note": "Et et rerum placeat beatae doloribus earum et reiciendis. Nisi suscipit ad dolor. Tenetur hic quia nihil deleniti inventore. Blanditiis aliquam ea ea. Omnis consequatur itaque est rerum sed reiciendis laboriosam reiciendis. Consectetur ullam et laudantium at itaque aut qui et molestiae."
    }, {
    "id": 18,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-12.jpg",
    "license": "09345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Maryse",
    "lastName": "Koss",
    "name": "Maryse Koss",
    "mobile": "668-920-9662 x610",
    "home": "075.864.1819 x8265",
    "company": "Smitham Inc",
    "work": "468.534.0931",
    "note": "Libero perferendis aut repudiandae quas. Omnis aut enim voluptas magnam harum quisquam illo aliquid aliquam. Dolor et et vel nihil quibusdam fugit facere adipisci aut. Repellat quia est beatae animi ipsa. Ad sit eligendi pariatur quia illo atque qui voluptatem excepturi."
    }, {
    "id": 18,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-7.jpg",
    "license": "09345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Maude",
    "lastName": "Grant",
    "name": "Maude Grant",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "Thiel, Bauch and Mosciski",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
    }, {
    "id": 20,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-9.jpg",
    "license": "09345555",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Maude",
    "lastName": "Grant",
    "name": "Maude Grant",
    "mobile": "1-077-505-0657",
    "home": "062.968.4841 x62748",
    "company": "Thiel, Bauch and Mosciski",
    "work": "1-318-593-2619 x206",
    "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
    },{
    "id": 21,
    "avatar": "http://www.timhuffdesigns.com/DD/Driver-2.jpg",
    "license": "09345678",
    "state": "Tx",
    "manager1": "THH",
    "manager2": "AA",
    "hiredate": "11/1/2016",
    "firstName": "Kate",
    "lastName": "Harris",
    "name": "Kate Harris",
    "mobile": "871.567.4877",
    "home": "(466) 574-3352",
    "company": "Haag Group",
    "work": "1-908-422-4964",
    "note": "Aut sequi quae omnis ut qui quaerat. Dolor et fugit blanditiis laudantium. Libero modi officiis consequatur corrupti reiciendis aut qui nemo doloribus. Consequatur voluptatibus quis vero numquam aspernatur a sit laborum voluptates."
}]`
);

export default class fakeData {
  constructor(size = 21) {
    this.size = size;
    this.datas = [];
  }
  dataModel(index) {
    return contactList[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas
      .slice()
      .sort(
        (contact1, contact2) =>
          `${contact1.firstName}${contact1.LastName}`.toUpperCase() >
          `${contact2.firstName}${contact2.LastName}`.toUpperCase()
      );
  }

  getSize() {
    return this.size;
  }
}
