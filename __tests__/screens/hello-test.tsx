interface Hello {
  name: string;
}

const me: Hello = {
  name: "me",
};

describe("Render all tests", () => {
  it("Should render to be me", () => {
    expect(me.name).toBe("me");
  });
});
