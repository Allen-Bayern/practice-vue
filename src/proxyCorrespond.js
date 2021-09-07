const reactive = (obj) => {
  const handler = {
    get(target, prop, receiver) {
      track(target, prop);
      const value = Reflect.get(...arguments);
      if (typeof value === 'object') {
        return reactive(value);
      } else {
        return value;
      }
    },

    set(target, key, value, receiver) {
      trigger(target, key, value);
      return Reflect.set(...arguments);
    }
  };
  
  return new Proxy(obj, handler);
};

const track = (data, key) => {
  console.log('get data', key);
};

const trigger = (data, key, value) => {
  console.log('set data', key, ': ', value);
};

const dinner = {
  meal: 'Yangzhou Hongshaorou',
};

const proxy = reactive(dinner);
proxy.meal = 'apple';
proxy.list = new Array();
proxy.list.push(1);