
const postData = async ( url = '/add', data = {})=>{

    const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

    try {
      const newData = await res.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

const postDatatwo = async ( url = '/addweatherdata', data = {})=>{

  const res = await fetch(url, {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header
});

  try {
    const newData = await res.json();
    return newData;
  }catch(error) {
  console.log("error", error);
  }
};

const postDatathree = async ( url = '/Pixdata', data = {})=>{

  const res = await fetch(url, {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header
});

  try {
    const newData = await res.json();
    return newData;
  }catch(error) {
  console.log("error", error);
  }
};


export {   
   postData,postDatatwo,postDatathree
 }
