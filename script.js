const apiKey = "GO TO OPENAI AND GET YOUR API KEY";
// how to get the api key: https://openai.com/blog/openai-api/


async function planTrip() {
  const destination = document.getElementById("destination-input").value;
  // const prompt = `I'm planning a trip to ${destination} and need some recommendations for things to do. can you return the response in a ol list html formatted string?`;
    const prompt = `I'm planning a trip to ${destination} and need some recommendations for things to do.`;
  const tripDetails = await getCompletion(prompt);
  document.getElementById("trip-details").innerHTML = tripDetails;
}

async function getCompletion(prompt) {
  console.log("Started ChatGPt API call");

  const text = await hardtoexplainfunc(prompt);
  return text;
}

async function hardtoexplainfunc(prompt) {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 500,
      n: 1,
      model: "text-davinci-003",
    }),
  });
  console.log("Finished ChatGPt API call");
  const data = await response.json();
  return data.choices[0].text;
}
