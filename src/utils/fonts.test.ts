jest.mock("next/font/google");

import { rubik, notoSansJp, inter } from "./fonts";

describe("Google Fonts configuration", () => {
  test("rubik font is defined and has className", () => {
    expect(rubik).toBeDefined();
    expect(rubik.className).toBeDefined();
    expect(typeof rubik.className).toBe("string");
  });

  test("notoSansJp font is defined and has className", () => {
    expect(notoSansJp).toBeDefined();
    expect(notoSansJp.className).toBeDefined();
    expect(typeof notoSansJp.className).toBe("string");
  });

  test("inter font is defined and has className", () => {
    expect(inter).toBeDefined();
    expect(inter.className).toBeDefined();
    expect(typeof inter.className).toBe("string");
  });
});
