/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x4my92yyu0dn4yc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdu1iabs",
    "name": "stars",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x4my92yyu0dn4yc")

  // remove
  collection.schema.removeField("pdu1iabs")

  return dao.saveCollection(collection)
})
