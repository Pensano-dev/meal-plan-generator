import { EggIcon, FishIcon, MilkIcon, PeanutIcon, SoyaIcon, MolluscIcon, NutsIcon, GlutenIcon } from "react-allergens";

export const foodAllergies = ["Eggs", "Fish", "Gluten", "Milk", "Peanuts", "Shellfish", "Soy", "Tree nuts"];

const size = 100;
const iconColor = "rgb(157, 183, 175)";
const radius = "50px";
const border = "1px solid rgb(74, 84, 81)"

export const foodAllergyIcons = [
  <EggIcon width={size} height={size} outerColor={iconColor} wrapperStyle={{ borderRadius: radius, border: border}} />,
  <FishIcon width={size} height={size} outerColor={iconColor} wrapperStyle={{ borderRadius: radius, border: border}} />,
  <GlutenIcon width={size} height={size} outerColor={iconColor} wrapperStyle={{ borderRadius: radius, border: border}} />,
  <MilkIcon width={size} height={size} outerColor={iconColor} wrapperStyle={{ borderRadius: radius, border: border}} />,
  <PeanutIcon width={size} height={size} outerColor={iconColor} wrapperStyle={{ borderRadius: radius, border: border}} />,
  <MolluscIcon width={size} height={size} outerColor={iconColor} wrapperStyle={{ borderRadius: radius, border: border}} />,
  <SoyaIcon width={size} height={size} outerColor={iconColor} wrapperStyle={{ borderRadius: radius, border: border}} />,
  <NutsIcon width={size} height={size} outerColor={iconColor} wrapperStyle={{ borderRadius: radius, border: border}} />
];
  
export const ageGroups = ["6-24", "3-12", "12+"];

export const ageGroupNames = ["Infant", "Child", "Adult"];
  
export const currentDiets = ["Mixed food diet (animal and vegetable sources)", "Pescetarian", "Low carb", "Vegan", "Vegetarian", "Paleo"];
  
export const currentDietValues = ["mixed", "pescatarian", "starch", "vegan", "vegetarian", "paleo"];