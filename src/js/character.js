// const counterFunction = () => {
//   let counter = 0;
//   return () => {
//     counter++;
//     return counter;
//   };
// };
// const incrementer = counterFunction();

export const storeState = (name) => {
  let currentState = { name: name };
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

export const stateControl = storeState();

const incrementState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

export const incLevel = incrementState("level");
export const incMaxHealth = incrementState("maxHealth");
export const incHealth = incrementState("health");
export const incAttack = incrementState("attack");
export const incMagic = incrementState("magic");
export const incMaxMana = incrementState("maxMana");
export const incMana = incrementState("mana");
export const incExp = incrementState("exp");

const decrementState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) - value
    });
  };
};

export const decHealth = decrementState("health");
export const decAttack = decrementState("attack");
export const decMagic = decrementState("magic");
export const decMana = decrementState("mana");