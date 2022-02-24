const loadFood = () => {
    const seachFiel = document.getElementById('search-field');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${seachFiel.value}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResult(data.meals))
    // console.log(url);
    seachFiel.value = '';
}
