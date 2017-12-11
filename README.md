# learn-javascript
Learn about Javascript(es6, es7) and future versions

# LINKS
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
- http://exploringjs.com/es6/ch_modules.html
- https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.b592lxm37

# Promise
- Resolve all promises
```javascript
Promise.all([]);
```
- Return the first promisse in any romises
```javascript
Promise.race([]);
```

# Symbol
> This is new type, are **immutable** and **unique**

- **Creating** symbol

```javascript
const foo = Symbol('name');
const bar = Symbol('name');
foo == bar // return FALSE
```

- **Get** propertySymbols
```javascript
Object.getOwnPropertySymbol(obj);
```

# Iterators and Iterable
> Return `{value: any, done: boolean}`
> Element can be iterator
```javascript
const example = "example";
const it = example[Sysmbol.iterator]();
it.next();
```

# Generators
> Run function in steps
- **Creating** add * in function name 
  - **Yield** is **equal return** but is possible continue the function after the **yield** 
  - **Call** the interator use **.next()**
```javascript
function* getNames(){
  yield 'Lukete';
  yield 'Henrique';
}
const names = getNames();
names.next();
```

# Proxy
- **Creating** proxy
  - params: obj, handler
```javascript
const obj = {
  name: 'Lukete',
  age: 25
}
const proxy = new Proxy(obj, {
  get(target, name){
    console.log('Request name');
  },
  set(target, name, value){
    console.log('Request name');
  }
})
```

# SET
> Is iterables

- Use **size**
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.size;
```

- **Add** element _ignore equals values_
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.add('souza');
```

- **Delete** element
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.delete('henrique');
```

- **Verify if exists** element
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.has('henrique');
```

- **Get itarables** element
```javascript
let mySet = new Set(['lukete', 'henrique']);
mySet.values();
```

# WeakSet and WeakMap
> Only accept object, have equals functions in **SET** BUT weakset doesnt are **iterable**

- **Creating** weakset
```javascript
let obj1 = {
  name: 'lukete',
  age: 25,
};
let obj2 = {
  name: 'henrique',
  age: 22,
};

let ws = new WeakSet([ob1, obj2]);
```

# MAP
> Key and Value, equal **SET** are iterable
- **Creating** 
```javascript
let m = new Map();
m.set('lukete', 25);
```

# MODULES
> Small, one function. Helpt with manutenabilit. Namespacing local. Reusability

## IMPORT
- Structure `import method from library;
- Forms to use import
  - ```*``` call all methods
  - ```methodName```  or ```{ methodName }``` call specific method
    - use without **{ }** IF export is UNIQUE.
  - ```as``` define alias 
  - Using **alias**
```javascript
import * as Alias from lib;
Alias.method();

import { methodName } from lib;
methodName();
```

## EXPORT
- Any *export** pear file
  - import with **same name**
  - import required use **{}**
```javascript
export function name1(){};
export function name2(){};
function name3(){};
function name4(){};
export { name3, name4 }
```
- Only _ONE_ export **default** pear file
  - import with any name
  - import without use **{}**
```javascript
export default name;
```




# Observations
- **Style Guide** is **very** important
-  **Husky**
  - _Only run_ in **changed** files
- **WeakMap**
  - garbacolletion delete automatic 
- **EXPORT**
  - **Alias** are optional.
