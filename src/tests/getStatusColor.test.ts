import { getStatusColor } from "../shared/lib/getStatusColor";

describe("getStatusColor", () => {
  test("should return green for Alive status", () => {
    expect(getStatusColor("Alive")).toBe("green");
  });

  test("should return red for Dead status", () => {
    expect(getStatusColor("Dead")).toBe("red");
  });

  test("should return gray for unknown status", () => {
    expect(getStatusColor("Unknown")).toBe("gray");
  });

  test("should return gray for empty status", () => {
    expect(getStatusColor("")).toBe("gray");
  });

  test("should return gray for random status", () => {
    expect(getStatusColor("RandomStatus")).toBe("gray");
  });
});
