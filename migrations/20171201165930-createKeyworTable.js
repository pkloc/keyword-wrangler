'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('keyword', {
    id: { type: 'int', primaryKey: true, notNull: true, autoIncrement: true },
    value: { type: 'string', length: '128', notNull: true, unique: true },
    categoryID: { type: 'int', notNull: true }
  });
};

exports.down = function(db) {
  return db.dropTable.bind(db, 'keyword');
};

exports._meta = {
  "version": 1
};
