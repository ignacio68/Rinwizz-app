import PouchDB from 'pouchdb-browser'

/**
 * Create database
 *
 * @param nameDb { String } - nombre de la base de datos
 * @param config { Object } - parametros opcionales para crear la base de datos
 */

export const createDb = (nameDb, options) =>
  new Promise((resolve, reject) => {
    // let db = PouchDB(nameDb, options)
    const db =
      options !== void 0 ? new PouchDB(nameDb, options) : new PouchDB(name)
    if (db) {
      console.log('Creada la base de datos')
      resolve(db)
    } else {
      reject(console.log('No se ha podido crear la db'))
    }
  })

/**
 * Replicate and sync with the remote dataBase
 * @param remote { String } - remote database URL
 * @param options { Object }
 */

export async function replyDb(replyData) {
  console.log('Estoy en replyDb')
  const db = replyData.db
  const remote = replyData.config.remote
  const options = replyData.options
  return new Promise((resolve, reject) => {
    db.replicate
      .from(remote, { doc_ids: options.doc_ids })
      .on('complete', info => resolve(info))
      .on('error', error => reject(error))
  })
  // try {
  //   console.log('db: ' + db)
  //   console.log('remote: ' + remote)
  //   await db.replicate
  //     .from(remote, { doc_ids: options.doc_ids })
  //     .on('change', info => {
  //       console.log('reply is changed: ' + JSON.stringify(info))
  //     })
  //     .on('complete', info => onComplete(info))

  //     // {
  //     //   console.log('reply is completed: ' + JSON.stringify(info))
  //     // }

  //     .on('paused', err => {
  //       console.log('reply is paused: ' + JSON.stringify(err))
  //     })
  //     .on('active', () => {
  //       console.log('reply is working')
  //     })
  //     .on('denied', err => {
  //       console.log('reply denied: ' + JSON.stringify(err))
  //     })
  //     .on('error', err => {
  //       console.log('peply error: ' + JSON.stringify(err))
  //     })
  // } catch (error) {
  //   console.log('replyDb error: ' + error)
  // }
}

/**
 * Sync remote and local database
 *
 * @param {String} remote - Remote database to sync
 * @param {syncData} options - Options
 */
export function syncDb(syncData) {
  console.log('syncDb:')
  const db = syncData.db
  console.log('db: ' + db)
  const remote = syncData.config.remote
  console.log('remote: ' + JSON.stringify(remote))
  const options = syncData.options
  console.log('option: ' + JSON.stringify(options))
  return new Promise((resolve, reject) => {
    db.sync(remote, options)
      .on('change', info => {
        console.log('syncDb change: ' + JSON.stringify(info))
        resolve()
      })
      .on('error', error => reject(error))
  })
  // try {
  //   console.log('syncDb: ')
  //   db.sync(remote, options)
  //     .on('change', info => {
  //       console.log('sync is changed: ' + JSON.stringify(info))
  //     })
  //     .on('complete', info => {
  //       console.log('sync is completed: ' + JSON.stringify(info))
  //     })
  //     .on('paused', err => {
  //       console.log('sync is paused: ' + JSON.stringify(err))
  //     })
  //     .on('active', () => {
  //       console.log('sync is working')
  //     })
  //     .on('denied', err => {
  //       console.log('sync denied: ' + JSON.stringify(err))
  //     })
  //     .on('error', err => {
  //       console.log('sync error: ' + JSON.stringify(err))
  //     })
  // } catch (error) {
  //   console.log('syncDb error: ' + error)
  // }
}

/**
 * Detect changes in local database
 *
 * @param changeData { Object } - local database name & options
 */
export const changeDb = changeData => {
  const db = changeData.db
  const options = changeData.options
  return new Promise((resolve, reject) => {
    db.changes(options)
      .on('change', change => {
        console.log('changeDb is changed: ' + JSON.stringify(change))
        resolve(change)
      })
      .on('error', error => reject(error))
  })
}

// export async function changeDb(changeData) {
//   const db = changeData.db
//   const options = changeData.options
//   try {
//     await db.changes(options).on('change', result => {
//       return result
//     })
//   } catch (error) {
//     console.log('changeDb error: ' + error)
//   }
// }

/**
 * Delete local database
 * @param db { String } - local database name
 *
 * TODO: Evitar utilizar esta función
 */
export async function deleteLocalDb(db) {
  try {
    const response = await db.destroy()
    console.log('Local database destroy: ' + JSON.stringify(response))
  } catch (error) {
    console.log('deleteLocalDb error: ' + error)
  }
}

/**
 * Create a document
 * @param db { String } - local database name
 * @param doc { String } - new document
 */
export async function createDoc(db, doc) {
  console.log('Estoy en createDoc')
  try {
    const response = await db.put(doc)
    console.log('document create' + JSON.stringify(response))
    return response
  } catch (error) {
    console.log('createDoc error: ' + error)
  }
}

/**
 * TODO: Revisar para subir solo los datos a cambiar
 * Update a document
 * @param db { String } - local database
 * @param docId { String } - document id
 * @param data { Object } - data to update
 */
export function updateDoc(db, docId, data) {
  db.get(docId)
    .then(doc => {
      data._rev = doc._rev
      return db.put(data)
    })
    .then(() => {
      console.log('document updated')
      return db.get(docId)
    })
    .then(doc => {
      console.log('updateDoc: ' + JSON.stringify(doc))
    })
    .catch(err => {
      console.log('updateDoc error: ' + err)
    })
}

/**
 * Fetch a document - Async
 * @param db { String } - local database name
 * @param docId { String } - document id
 */
export function fetchDoc(db, docId) {
  console.log('Estoy en fetchDoc')
  try {
    const doc = db.get(docId)
    console.log('documento recuperado: ' + JSON.stringify(doc))
    return doc
  } catch (error) {
    console.log('fetchDoc error: ' + error)
  }
}

// /**
//  * Fetch a document - Promesa
//  * @param db { String } - local database name
//  * @param docId { String } - document id
//  */
// export const fetchDoc = (db, docId) =>
//   new Promise((resolve, reject) => {
//     console.log('Estoy en fetchDoc')
//     db.get(docId)
//       .then(doc => {
//         console.log('recuperado el usuario: ' + JSON.stringify(doc))
//         resolve(doc)
//       })
//       .catch(error => {
//         reject(error)
//       })
//   })

/**
 * Delete document
 * @param db { String } - local database name
 * @param docId { String } - document id
 */
export function deleteDoc(db, docId) {
  db.get(docId)
    .then(doc => {
      doc._deleted = true
      return db.put(doc)
    })
    .then(result => {
      console.log('Documento eliminado' + JSON.stringify(result))
    })
    .catch(err => {
      console.log('deleteDoc error: ' + err)
    })
}

/**
 * Fetch a batch of documents
 *
 * @param db { String } - local database name
 * @param options { Array } - options
 */
// export async function fetchAllDocs(db, options) {
//   console.log('fetchAllDocs db: ' + JSON.stringify(db))
//   try {
//     const docs = await db.allDocs(options)
//     console.log('fetchAllDocs: ' + JSON.stringify(docs))
//   } catch (error) {
//     console.log('fetchAllDocs error: ' + error)
//   }
// }
export const fetchAllDocs = (db, options) => {
  console.log('fetchAllDocs options: ' + JSON.stringify(options))
  let data = []
  return new Promise(resolve => {
    db.allDocs(options)
      .then(result => {
        // console.log('fetchAllDocs: ' + JSON.stringify(result))
        let docs = result.rows.map(row => {
          data.push(row.doc)
          return docs
        })
        // console.log('data: ' + JSON.stringify(data))
        resolve(data)
      })
      .catch(error => console.log(error))
  })
}

// return new Promise((resolve, reject) => {
//   db.allDocs(options)
//     .then(results => {
//       resolve(results)
//       console.log('fetchAllDocs: ' + JSON.stringify(results))
//     })
//     .catch(error => reject(error))
// })
