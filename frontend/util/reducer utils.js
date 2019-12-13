// convert array to object
// sort alphabetically by attribute_item name, menu_item name, business_name
// in serach utils- write b-search algorithm

const arrayToObject = ( array ) =>{
  let newObj = {}
  for(i=0; i < array.length; i++){
    let el = arr.pop();
    newObj.shift(el);
  }
  return newObj;
};

export const extractAsObj = ( Obj, key ) =>{
  let extracted = Obj.key;
  delete Obj.key;s
  extracted = arrayToObject(extracted);
  return extracted
};