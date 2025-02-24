import Component from "./component";
import Group from "./group";

const PastTimeTrigger = Component as typeof Component & {
  Group: typeof Group;
};
PastTimeTrigger.Group = Group;

export default PastTimeTrigger;
