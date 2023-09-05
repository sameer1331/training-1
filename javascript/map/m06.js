//function to group objects by year using map :
function groupByYear(objects) {
    const groupedObjects = new Map();
  
    for (const object of objects) {
      const date = object.date;
      const year = date.getFullYear();
  
      if (!groupedObjects.has(year)) {
        groupedObjects.set(year, []);
      }
  
      groupedObjects.get(year).push(object);
    }
  
    return groupedObjects;
  }
  const objects = [{ date: new Date("2023-03-08") }, { date: new Date("2022-04-15") }, { date: new Date("2023-07-22") }, { date: new Date("2022-06-10") }];

  const groupedObjects = groupByYear(objects);
  
  console.log(groupedObjects);
    