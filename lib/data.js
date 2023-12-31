import got from 'got';

const dataURL = "https://dev-luisagraycs5513.pantheonsite.io";

export async function getAllIds() {
  let jsonString;
  try {
  
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  });

}

export async function getSortedList() {
  let jsonString;
  try {
   
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }

 
  const jsonObj = JSON.parse(jsonString.body);

  jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.post_title);
  });

  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}

export async function getData(idRequested) {
  let jsonString;
  try {

    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });

  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
 
  return objReturned;
}