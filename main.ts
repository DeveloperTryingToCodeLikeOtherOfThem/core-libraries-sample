/**
 * An namespace for an example everything private for stuff behind the scenes privately for only people wanting to add more stuff for the runtime engine
 */
//% block="core"
namespace std {
    export import __math = Math // just gets the standard library imported 
 
    let _args = 1; // for changing argrument controls for function inputs 
    // not supported for now

    export const enum __corePropertyMethods {
     // expose them here example preview  
     //% block="Add"
     Add, // use a comma and then after add more property constants for library
     //% block="Subtract"
     Subtract
    }  

   //% blockId="propert_core" block="property core %core"
    export function __propertyCore(core: __corePropertyMethods) {
        return core;
    }

    // changing enum checks if add is to for example round with from 2 parameters to 1 parameter is not supported for now
    // not exposed because it is not meant for public
     function setPropertyCore(core: __corePropertyMethods, a: number, b: number) {
        if (core === __corePropertyMethods.Add) return a + b;
        else if (core === __corePropertyMethods.Subtract) return a - b;
        // add more properties here for working too if you want
        return __propertyCore(core); // returns back as a property core enum for the drop down menu to get the library of the properties in a row
    }

    // create more here
} 
