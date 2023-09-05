//function to group objects by category using map :
function groupByCategory(objects) {
    const groupedObjects = new Map();
  
    for (const object of objects) {
      const category = object.category;
  
      if (!groupedObjects.has(category)) {
        groupedObjects.set(category, []);
      }
  
      groupedObjects.get(category).push(object);
    }
  
    return groupedObjects;
  }
  const objects = [{ category: "sports" }, { category: "music" }, { category: "movies" }, { category: "sports" }];

  const groupedObjects = groupByCategory(objects);
  
  console.log(groupedObjects);
    