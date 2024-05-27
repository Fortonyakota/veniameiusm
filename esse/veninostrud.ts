class ResourceContainer {
  private _resources: any; // The type 'any' can be replaced with a more specific type for resources

  constructor(resources: any) {
    this._resources = resources;
  }

  // Getter method to provide read-only access to resources
  public get resources(): any {
    return this._resources;
  }
}

// Usage
const container = new ResourceContainer(someResourceData);
console.log(container.resources);
