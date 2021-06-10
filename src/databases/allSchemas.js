import Realm from 'realm';
export const REPERTORIO_SCHEMA = 'RepertorioList';
export const CATEGORY_SCHEMA = 'CategoryList';

export const RepertorioListSchema = {
  name: REPERTORIO_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: {type: 'int'},
    title: {type: 'string'},
    artista: {type: 'string'},
    tom: {type: 'string'},
    link: {type: 'string', optional: true},
    idCategory: {type: 'int'},
  },
};

export const CategoryListSchema = {
  name: CATEGORY_SCHEMA,
  primaryKey: 'id',
  properties: {
    id: {type: 'int'},
    title: {type: 'string'},
  },
};

const databaseOptions = {
  path: 'listRepertorio.realm',
  schema: [RepertorioListSchema, CategoryListSchema],
  schemaVersion: 1,
};

export const allRepertoriosList = idCategory =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allList = realm
            .objects(REPERTORIO_SCHEMA)
            .filtered('idCategory =' + idCategory);
          resolve(allList);
        });
      })
      .catch(error => {
        reject(error);
      });
  });

export const insertNewRepertorio = newRepertorioList =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(REPERTORIO_SCHEMA, newRepertorioList);
          resolve(newRepertorioList);
        });
      })
      .catch(error => reject(error));
  });

export const musicId = idMusica =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let musica = realm
            .objects(REPERTORIO_SCHEMA)
            .filtered('id =' + idMusica);
          resolve(musica);
        });
      })
      .catch(error => {
        reject(error);
      });
  });
export const musicForCategory = idCategory =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let musica = realm
            .objects(REPERTORIO_SCHEMA)
            .filtered('id =' + idCategory);
          resolve(musica);
        });
      })
      .catch(error => {
        reject(error);
      });
  });
export const deleteItemRepertorio = itemId =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingItem = realm.objectForPrimaryKey(
            REPERTORIO_SCHEMA,
            itemId,
          );
          realm.delete(deletingItem);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const updateItemMusic = music =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let updatingMusic = realm.objectForPrimaryKey(
            REPERTORIO_SCHEMA,
            music.id,
          );
          updatingMusic.title = music.title;
          updatingMusic.artista = music.artista;
          updatingMusic.artista = music.artista;
          updatingMusic.tom = music.tom;
          updatingMusic.link = music.link;
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const removeAllMusic = idCategory =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let musics = realm
            .objects(REPERTORIO_SCHEMA)
            .filtered('idCategory =' + idCategory);
          realm.delete(musics);
          resolve();
        });
      })
      .catch(error => {
        reject(error);
      });
  });

//CATEGORY ---------------------------------------------------------------
export const insertNewCategory = newCategoryList =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          realm.create(CATEGORY_SCHEMA, newCategoryList);
          resolve(newCategoryList);
        });
      })
      .catch(error => reject(error));
  });

export const allCategoryList = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let allList = realm.objects(CATEGORY_SCHEMA);
          resolve(allList);
        });
      })
      .catch(error => {
        reject(error);
      });
  });

export const deleteItemCategory = itemId =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let deletingItem = realm.objectForPrimaryKey(CATEGORY_SCHEMA, itemId);
          realm.delete(deletingItem);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const categoryForId = idCategory =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let category = realm
            .objects(CATEGORY_SCHEMA)
            .filtered('id =' + idCategory);
          resolve(category);
        });
      })
      .catch(error => {
        reject(error);
      });
  });

export const updateItemCategory = category =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then(realm => {
        realm.write(() => {
          let updatingCategory = realm.objectForPrimaryKey(
            CATEGORY_SCHEMA,
            category.id,
          );
          updatingCategory.title = category.title;
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export default new Realm(databaseOptions);
