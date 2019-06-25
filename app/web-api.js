import { formatDate } from './utils';

let latency = 200;
let id = 0;

function getId() {
  return ++id;
}

let entries = [
  {
    id: getId(),
    title: 'John',
    content: 'Tolkien',
    date: '2019-06-21T14:07:28.243Z'
  },
  {
    id: getId(),
    title: 'Clive',
    content: 'Lewis',
    date: '2019-06-21T14:07:28.243Z'
  },
  {
    id: getId(),
    title: 'Owen',
    content: 'Barfield',
    date: '2019-06-21T14:07:28.243Z'
  },
  {
    id: getId(),
    title: 'Charles',
    content: 'Williams',
    date: '2019-06-21T14:07:28.243Z'
  },
  {
    id: getId(),
    title: 'Roger',
    content: 'Green',
    date: '2019-06-21T14:07:28.243Z'
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
            title: x.title,
            firstLetter: x.title.slice(0, 1),
            date: formatDate(x.date),
            content: x.content,
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
