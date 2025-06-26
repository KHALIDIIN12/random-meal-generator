fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => {
    console.log("Fetched response:", response);
    return response.json();
  })
  .then((data) => {
    console.log("Fetched data:", data);
    const meal = data.meals[0];
    const mealHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
    `;
    const bring = document.getElementById("your-meal");
    bring.innerHTML = mealHTML;
  });