import { type EntryEvaluatorType } from "../../utils/types";
import { StringModifier } from "./StringModifier";

export class EntryEvaluator implements EntryEvaluatorType {
  modifierString: StringModifier;

  constructor(modifier: StringModifier) {
    this.modifierString = modifier;
  }

  evaluateEntry(lastWord: string, userEntry: string): string {
    switch (userEntry) {
      case "square":
        return this.modifierString.addSquare(lastWord);

      case "pow":
        return this.modifierString.addPow(lastWord);

      case "e":
        return this.modifierString.addE(lastWord);

      case "pi":
        return this.modifierString.addPi(lastWord);

      case "%":
        return this.modifierString.addPercent(lastWord);

      case ".":
        return this.modifierString.addDot(lastWord);

      case "(":
        return this.modifierString.addOpenParentesis(lastWord);

      case ")":
        return this.modifierString.addCloseParentesis(lastWord);

      case "()":
        return this.modifierString.addParentesis(lastWord);

      default:
        break;
    }

    if (["sin", "cos", "tan", "log", "abs", "√"].includes(userEntry))
      return this.modifierString.addProperty(lastWord, userEntry);

    //Add the signs
    if ([...this.modifierString.signs, "!"].includes(userEntry))
      return this.modifierString.addSigns(lastWord, userEntry);

    if ([...this.modifierString.specialSigns, ")"].includes(lastWord))
      return this.modifierString.addMultiplyNumber(userEntry);

    return this.modifierString.addNumber(userEntry);
  }
}