const obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };
for (const key in obj) {
    console.log(Object.values(obj[key]));

        
    }
