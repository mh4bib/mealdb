const loadFood = () => {
    const seachFiel = document.getElementById('search-field');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${seachFiel.value}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data.meals))
    // console.log(url);
    seachFiel.value = '';
}
const displayResult = meals => {
    const resulDiv = document.getElementById('result-div');
    resulDiv.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text text-justify">${meal.strMeal} is a/an ${meal.strArea} ${meal.strCategory}. Ingredients used to prapare this item is ${meal.strIngredient1}, ${meal.strIngredient2}, ${meal.strIngredient3}, ${meal.strIngredient4}, ${meal.strIngredient5}, ${meal.strIngredient6}, ${meal.strIngredient7}, ${meal.strIngredient8}, ${meal.strIngredient9}, ${meal.strIngredient10} & etc. </p>
                <p class="card-text">Watch more about the food on <a href="${meal.strYoutube}" target="_blank" class="text-decoration-none">youtube</a></p>
            </div>
        </div>
        `
        resulDiv.appendChild(div);
        console.log(meal);
    });
}