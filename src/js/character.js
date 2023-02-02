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

export const createWizard = (character) => {
  character(incLevel(1));
  character(incMaxHealth(20));
  character(incHealth(20));
  character(incAttack(4));
  character(incMagic(8));
  character(incMaxMana(20));
  character(incMana(20));
  character(incExp(0));
};

export const createWarrior = (character) => {
  character(incLevel(1));
  character(incMaxHealth(15));
  character(incHealth(15));
  character(incAttack(9));
  character(incMagic(2));
  character(incMaxMana(5));
  character(incMana(5));
  character(incExp(0));
};

export const createThief = (character) => {
  character(incLevel(1));
  character(incMaxHealth(25));
  character(incHealth(25));
  character(incAttack(5));
  character(incMagic(5));
  character(incMaxMana(10));
  character(incMana(10));
  character(incExp(0));
};

export const createOctoSlash = (character) => {
  character(incHealth(12));
  character(incAttack(3));
  character(incExp(10));
};

export const createNyteRat = (character) => {
  character(incHealth(12));
  character(incAttack(4));
  character(incExp(15));
};

export const createGargoyle = (character) => {
  character(incHealth(20));
  character(incAttack(4));
  character(incExp(20));
};

export const createUnholyPriest = (character) => {
  character(incHealth(25));
  character(incAttack(5));
  character(incExp(30));
};

export const chance = () => {
  return Math.floor(Math.random() * 100) + 1;
};