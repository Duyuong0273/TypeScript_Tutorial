const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("duy"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Duy" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return {arg, is: !!arg };
};


interface BoolCheck<T> {
  value: T,
  is: boolean,
}


const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return {value: arg, is: false };
  }
  return {value: arg, is: !!arg };
};

interface HasID{
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  //process the user with logic here
  return user
}

console.log({id: 1, name: "Duy"});
console.log({ name: "Duy"});