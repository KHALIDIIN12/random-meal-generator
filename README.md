# 🍽️ Random Meal Generator

This is a simple single-page application  built with HTML, CSS, and JavaScript that fetches a random meal from an external API and displays it with all its details. The goal was to practice DOM manipulation, event handling, and API integration using beginner-friendly techniques.

## how it works

- Click a button to generate a new random meal
- Displays:
  - Meal name
  - Category and area 
  - Image of the meal
  - List of ingredients and their measurements
  - Cooking instructions
- Clean and responsive layout
- Minimal, readable code structure

## 🛠️what i  Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- [TheMealDB API](https://www.themealdb.com/api.php)

## 📂 File Structure

```
random-meal-generator/
│
├── index.html        # Main HTML structure
├── style.css         # Styling for layout and components
└── script.js         # JavaScript logic for fetching and displaying meals
```

## 🔧 How It Works

1. When the user clicks the "Get Random Meal" button, a `fetch()` call is made to TheMealDB API.
2. The API returns a JSON object with detailed meal data.
3. The DOM is updated dynamically to show:
   - The meal name
   - Image
   - Ingredients + measures
   - Instructions




## 💡 Lessons Learned

- Learned how to structure API responses and display them dynamically
- Practiced JavaScript DOM manipulation
- Improved understanding of loops, conditionals, and string interpolation

## author

Made by Khalid 


---

