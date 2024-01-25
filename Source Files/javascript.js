async function fetchData() {
  const url = 'https://community-rate-checker-by-wubook.p.rapidapi.com/user?token=YOUR_API_KEY&user_id=auto&format=json';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8b959f0c3emsh703a876ade8b8c0p106686jsne9118b770d6b',
      'X-RapidAPI-Host': 'community-rate-checker-by-wubook.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();

    document.getElementById('api-response').innerHTML = result;
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
fetchData();
