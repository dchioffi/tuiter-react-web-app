import VariablesAndConstants from "./variables-and-constants";
import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import WorkingWithFunctions from "./working-with-functions";
import WorkingWithArrays from "./working-with-arrays";
import TemplateLiterals from "./template-literals";
import House from "./House";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";

function JavaScript() {
   console.log('Hello World!');
   return(
      <div>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperator/>
         <WorkingWithFunctions/>
         <WorkingWithArrays/>
         <TemplateLiterals/>
         <House/>
         <Spread/>   
         <Destructing/>
         <FunctionDestructing/>
      </div>
   );
}

export default JavaScript