class Boat {
  color: string = "red";

  @logError
  pilot(): void {
    throw new Error();
    console.log("swoosh");
  }

  get formattedColor(): string {
    return `This boat's color is ${this.color}`;
  }
}

function logError(_target: any, _key: string, propertyDescriptor: PropertyDescriptor): void {
  const method = propertyDescriptor.value;

  propertyDescriptor.value = () => {
    try {
      method();
    } catch (e) {
      console.log("Oops the boat has sunk");
    }
  };
}

// testDecorator(Boat.prototype,'pilot')

new Boat().pilot();