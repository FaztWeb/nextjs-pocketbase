/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x4my92yyu0dn4yc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f9mqanuo",
    "name": "imagen",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x4my92yyu0dn4yc")

  // remove
  collection.schema.removeField("f9mqanuo")

  return dao.saveCollection(collection)
})
