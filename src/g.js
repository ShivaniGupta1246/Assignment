const fs = require('fs');

// Read input from hello.json
fs.readFile('hello.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading hello.json:', err);
    return;
  }
  
  // Parse the JSON data
  const inputData = JSON.parse(data);

  // Function to recursively create the hierarchy
  function buildHierarchy(items, managerId = null) {
    const children = items.filter(item => item.managerId === managerId)
                           .map(item => ({
                             name: `${item.firstName} ${item.lastName}`,
                             id: item.id,
                             imageUrl: item.imageUrl,
                             email: item.email,
                             contactNumber: item.contactNumber,
                             age: item.age,
                             dob: item.dob,
                             address: item.address,
                             designation: item.designation,
                             children: buildHierarchy(items, item.id)
                           }));
    return children.length ? children : undefined;
  }
  
  // Building the hierarchical structure with all information
  const hierarchyWithInfo = buildHierarchy(inputData, null);
  
  // Wrapping the hierarchical structure into the desired format
  const resultWithInfo = hierarchyWithInfo;
  
  // Convert the result to JSON
  const outputJson = JSON.stringify(resultWithInfo, null, 2);

  // Write the output to output.json
  fs.writeFile('output.json', outputJson, 'utf8', err => {
    if (err) {
      console.error('Error writing output.json:', err);
      return;
    }
    console.log('Output has been written to output.json');
  });
});
