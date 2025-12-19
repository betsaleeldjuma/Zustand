import { useStore } from "zustand"
import { useState } from "react"

interface Recipe {
    id: number,
    name: string;
    ingredients: string[],
    instructions: string,
}

const RecipeApp = () => {
    const {recipes, addRecipe, removeRecipe} = useStore()
    const [name, setName] = useState<string>('')
    const [ingredients, setIngredients] = useState<string>('')
    const [instructions, setInstructions] = useState<string>('')
    const [editiongRecipe, setEditingRecipe] = useState<Recipe | null>(null)

  return (
    <div>RecipeApp</div>
  )
}

export default RecipeApp