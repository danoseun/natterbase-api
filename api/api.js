/**
 * @param {object} - The object argument
 * @returns {array} - An array of object keys to lowercase
 */
 function convertObjectKeysToLowerCase(object) {
     let result = Object.keys(object).map((key) => {
         return key.toLowerCase();
     });
     return result;
 }

/**
      * @param {object} req.body - The request object
      * @param {object} rules - Array of rules to check for (default params)
      * @returns {object} array representing list of missing properties or a string
*/
export function inputValidation(req) {
    let rules = ['color','crux','title','type'];
    const keys = convertObjectKeysToLowerCase(req.body).sort();
    let returnedArray = [];
    returnedArray = rules.filter(value => !keys.includes(value));
    return returnedArray.length === 0 ? 'valid': returnedArray;
}




/**
      * @param {object} data - The object to be removed from
      * @param {object} item - The name of the attribute to be removed from the object
      * @returns {object} new object without deleted property or string if property is not available
*/
export function deleteAttribute(data, item) {
    if (typeof item !== 'string') {
        return 'Test item should be a string';
    }
    if (typeof data !== 'object' || !(data instanceof Object) || data instanceof Array) {
        return 'data argument should be an object'
    }
    const prop = item;
    const objectKeys = convertObjectKeysToLowerCase(data);
    if (!objectKeys.includes(prop)) {
        return 'attribute not found'
    }
    const newRes = Object.keys(data).reduce((object, key) => {
        if (key !== prop) {
            object[key] = data[key]
        }
        return object
    }, {});
    return newRes;
}

/**
 * 
 * @param {Array} - array
 * @returns {Boolean} - Repewsenting true/false
 */
export function checkNumber(array){
    let result;
	if(!Array.isArray(array)){
		return 'Expected array argument';
	}
	else{
        let res = array.every(x => typeof x === 'number');
    }
    return res;
}

/**
      * @param {object} array a  - An array representing magic
      * @param {object} array b - An array representing distance
      * @returns {Number} Number representing index
*/
export function optimalFunction(a, b) {
    let resA, resB, difference, result;
	if(!Array.isArray(a) || !Array.isArray(b)){
		return 'This function takes in only arrays';
	}
	if(!checkNumber(a) || !checkNumber(b)) {
		return 'Only numbers are allowed in the array';
    }
    resA = a.reduce((acc, element) => acc + element, 0);
    resB = b.reduce((acc, currentValue) => acc + currentValue, 0);
    if(resB > resA) {
        return -1
    }
    else {
        difference = resA - resB
        result = a.indexOf(difference);
    }
    return result;
}