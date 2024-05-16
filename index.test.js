const { error } = require("./src/constants")
const File = require("./src/file")
const assert = require("assert")

;(async () => {  
  {
    const filePath = './mocks/empty-file-invalid.csv'
    const expected =  new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }   

  {
    const filePath = './mocks/invalid-header.csv'
    const expected =  new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  } 

  {
    const filePath = './mocks/five-items-invalid.csv'
    const expected =  new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  } 

  {
    const filePath = './mocks/three-items-valid.csv'
    const expected =  [
      {
        id: 1,
        name: "John",
        profession: "Engineer",
        age: 25
      },
      {
        id: 2,
        name: "Smith",
        profession: "Doctor",
        age: 30
      },
      {
        id: 3,
        name: "David",
        profession: "Artist",
        age: 35
      }
    ]
    const result = await File.csvToJSON(filePath)
    assert.deepEqual(result, expected)
  } 
})()