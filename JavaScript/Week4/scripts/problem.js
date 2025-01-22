/*
1.	Split the string into an Array of separate rows (i.e., an Array with rows separated by \n). Bonus: how could we deal with data that includes both Unix (\n) and Windows (\r\n) line endings?
2.	Each row contains information user info: ID, Name, Phone Number, and Height info all separated by commas. Split each row into an Array with all of its different fields. You need to deal with extra and/or no whitespace between the commas.
3.	Get rid of any extra spaces around the Name field
4.	Using a RegExp, extract the Area Code from the Phone Number field. All Phone Numbers are in one of two formats: "555-555-5555" or "5555555555".
5.	Check if the Height field has "cm" at the end. If it does, strip that out, convert the number to inches, and turn it into a String in the form "xx inches". For example: "152 cm" should become "59 inches".
6.	After doing all of the above steps, create a new record with ID, Name, Area Code, Height In Inches and separate them with commas
7.	Combine all these processed records into a new CSV formatted string, with rows separated by \n.

*/

var csvData = `0134138,Alan Smith,333-580-2254,70 inches
0134139   ,    Christina    Lee    ,  123            4126347 ,        130 cm
0134140,       Doug         Thomas       , 532           4126347, 158cm`;

function splitIntoRows(s) {
  return s.split(/\r?\n/);
}

function removeExtraWhiteSpace(s) {
  return s.replace(/\s+/, " ");
}

function extractAreaCode(phoneNumber) {
  let matches = phoneNumber.match(/(\(?\d{3}\)?)[-\s]*?\d{3}[-\s]*\d{4}/);
  if (matches) {
    // fields[2] = `(${matches[1]})-123456`;
    return matches[1];
  }
  return phoneNumber;
}

function rowToFields(row) {
  let fields = row.split(/\s*,\s*/);

  //   Remove extra whitespace from name
  //   fields[1] = fields[1].replace(/\s+/, " ");
  fields[1] = removeExtraWhiteSpace(fields[1]);
  //   Extra Area code from phone number
  fields[2] = extractAreaCode(fields[2]);
  return fields;
}

function processCSV(csv) {
  // TODO: Perform steps 1-7
  //   Step1: break the csv into rows
  let rows = splitIntoRows(csv);

  // Step2: split all rows into array of fields
  //   let data = [];

  let data = rows.map(rowToFields);
  //   for (let i = 0; i < rows.length; i++) {
  //     let row = rows[i];
  //     let fields = rowToFields(row);
  //     // data.push(fields);
  //     // console.log(fields);
  //     data.push(fields);

  //   for (let row of rows) {
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }
  console.log(data);
  //   return csv;
}

// Log output of processing
let processed = processCSV(csvData);
console.log(processed);
