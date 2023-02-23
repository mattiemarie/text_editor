import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//Method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log('PUT to database')
console.error('putDb not implemented');

const jateDb = await open('jate', 1);

const tx = jateDb.transaction('jate', 'readonly');

const store = tx.objectStore('jate');

const request = store.put();

const result = await request;
console.log('result.value', result);
return result;
};

//Method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  console.error('getDb not implemented');

  const jateDb = await open('jate', 1);

  const tx = jateDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result;
};

//Start the Database
initdb();