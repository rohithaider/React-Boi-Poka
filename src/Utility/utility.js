//get local storage
//get the item
const getStoredList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

//add new item

const addToReadList = (id) => {
  const storedList = getStoredList();
  if (storedList.includes(id)) {
    console.log(id,"already exist");
  } else {
    storedList.push(id);
    const storedStrList = JSON.stringify(storedList)
    localStorage.setItem('read-list',storedStrList)
  }
};


export {addToReadList}