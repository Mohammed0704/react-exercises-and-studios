//import logo from './logo.svg';
import './App.css';
import RecipeDescription  from './components/RecipeDescription';
import  RecipeIngredients from './components/ingredients';
import  RecipePhoto  from './components/Photo';

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
      <RecipePhoto />
      </div>
      <div>
        <RecipeDescription />
        <RecipeIngredients />
      </div>
    </div>
   );
}

export default App;
