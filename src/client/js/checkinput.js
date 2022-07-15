function checkinput(string){
      console.log("::: Running checkForName :::", string);

  var res =String(string).match(/^[A-Za-z]+$/);
  if (res == "") {
  }
  return (res !== null)
}


export { checkinput }
