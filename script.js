// Fetch data from the API using promises
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the API response and display necessary information
        displayMeal(data.meals[0]);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

// Function to display meal information on the webpage
function displayMeal(meal) {
    const mealListDiv = document.getElementById('meal-list');
    const mealCard = document.createElement('div');
    mealCard.className = 'col-md-4';
    mealCard.innerHTML = `
        <div class="card mb-4 shadow-sm">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
            </div>
        </div>
    `;
    mealListDiv.appendChild(mealCard);
}
