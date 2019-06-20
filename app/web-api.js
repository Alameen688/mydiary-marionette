let latency = 200;
let id = 0;

function getId() {
  return ++id;
}

let entries = [
  {
    id: getId(),
    firstName: 'John',
    lastName: 'Tolkien',
    email: 'tolkien@inklings.com',
    phoneNumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Clive',
    lastName: 'Lewis',
    email: 'lewis@inklings.com',
    phoneNumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Owen',
    lastName: 'Barfield',
    email: 'barfield@inklings.com',
    phoneNumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Charles',
    lastName: 'Williams',
    email: 'williams@inklings.com',
    phoneNumber: '867-5309'
  },
  {
    id: getId(),
    firstName: 'Roger',
    lastName: 'Green',
    email: 'green@inklings.com',
    phoneNumber: '867-5309'
  }
];

export class WebAPI {

  getEntryList() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = entries.map(x =>  {
          return {
            id: x.id,
            firstName: x.firstName,
            lastName: x.lastName,
            email: x.email
          }
        });
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getEntryDetails(cid) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = entries.filter(x => x.id === cid)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveEntry(entry) {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(entry));
        let found = entries.filter(x => x.id === entry.id)[0];

        if (found) {
          let index = entries.indexOf(found);
          entries[index] = instance;
        } else {
          instance.id = getId();
          entries.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}

WebAPI.prototype.isRequesting = false;
