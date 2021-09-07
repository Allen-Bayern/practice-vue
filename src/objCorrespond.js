function observe(data) {
  if(!data || typeof data !== 'object')
    return;
  
    for(let key in data){
      let val = data[key];
      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function(){
          track(data, key);
          return val;
        },
        set: function(newVal){
          trigger(data, key, newVal);
          val = newVal;
        },
      });
      if (typeof val === 'object'){
        observe(val);
      }
    }
};

let track = (data, key) => {
  console.log('get data', key);
};

let trigger = (data, key, value) => {
  console.log('set data', key, ':', value);
};

let data = {
  name: 'hunger',
  friends: [1, 2, 3],
};
observe(data);

console.log(data.name);
data.name = 'valley';
data.friends[0] = 4;
data.friends[3] = 5;
data.age = 6;