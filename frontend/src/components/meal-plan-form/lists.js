import { EggIcon, FishIcon, MilkIcon, PeanutIcon, SoyaIcon, MolluscIcon, NutsIcon, GlutenIcon } from "react-allergens";

export const foodAllergies = ["Eggs", "Fish", "Gluten", "Milk", "Peanuts", "Shellfish", "Soy", "Tree nuts"];

const size = 100;

export const foodAllergyIcons = [
  <EggIcon width={size} height={size} />,
  <FishIcon width={size} height={size} />,
  <GlutenIcon width={size} height={size} />,
  <MilkIcon width={size} height={size} />,
  <PeanutIcon width={size} height={size} />,
  <MolluscIcon width={size} height={size} />,
  <SoyaIcon width={size} height={size} />,
  <NutsIcon width={size} height={size} />
];
  
export const ageGroups = ["6-24", "3-12", "12+"];
  
export const currentDiets = ["Mixed food diet (animal and vegetable sources)", "Pescetarian", "Low carb", "Vegan", "Vegetarian", "Paleo"];
  
export const currentDietValues = ["mixed", "pescatarian", "starch", "vegan", "vegetarian", "paleo"];