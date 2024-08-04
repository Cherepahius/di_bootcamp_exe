import React from 'react';

const App = () => {
  const postData = async () => {
    const url = 'https://webhook.site/f5ca0196-a05a-478f-9e51-ac652e9650af';
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Response:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={postData}>Send Data</button>
    </div>
  );
};

export default App;
