class Boat {
  color: string = "red";

  @logError("Something bad")
  pilot(): void {
    throw new Error();
    console.log("swoosh");
  }

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }
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

new Boat().pilot();