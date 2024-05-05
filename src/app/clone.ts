/*
* DeepCopy class helps to copy an Original Array or an Object without impacting on original data
*/

export class DeepCopy {
    static copy(data: any, objMap?: WeakMap<any, any>) : any{
      if (!objMap) {
        // Map for handle recursive objects
        objMap = new WeakMap();
      }
  
      // recursion wrapper
      const deeper = (value:any) => {
        if (value && typeof value === 'object') {
          return DeepCopy.copy(value, objMap);
        }
        return value;
      };
  
      // Array value
      if (Array.isArray(data)) return data.map(deeper);
  
      // Object value
      if (data && typeof data === 'object') {
        // Same object seen earlier
        if (objMap.has(data)) return objMap.get(data);
        // Date object
        if (data instanceof Date) {
          const result = new Date(data.valueOf());
          objMap.set(data, result);
          return result;
        }
        // Use original prototype
        const node = Object.create(Object.getPrototypeOf(data));
        // Save object to map before recursion
        objMap.set(data, node);
        for (const [key, value] of Object.entries(data)) {
          node[key] = deeper(value);
        }
        return node;
      }
      // Scalar value
      return data;
    }
  }