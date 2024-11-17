export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
if (isNaN(initialNumber)) {
      throw new Error("initialNumber must be a valid number");
  }

  return initialNumber + expansion1989 + expansion2019;
}
