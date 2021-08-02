// Class Decorator https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
@classDecorator
class Boat {

  @testDecorator
  color: string = "red";

  @logError("Something bad")
  // Parameter Decorators https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators
  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
    console.log(generateWake);
    if (speed === "fast") console.log("swoosh");
    else console.log("nothing");
  }

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(_target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log("TARGET: ", target, "KEY: ", key);
}

// This wrap around is a decoratory factory
function logError(errorMessage: string) {
  // This function is the actual decorator
  return function(_target: any, _key: string, propertyDescriptor: PropertyDescriptor): void {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = () => {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// testDecorator(Boat.prototype,'pilot')
// new Boat().pilot();
