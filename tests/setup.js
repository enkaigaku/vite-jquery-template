import $ from "jquery";
import { vi, beforeAll, afterEach } from "vitest";

global.$ = $;
global.jQuery = $;

beforeAll(() => {
  console.log("Test started");
});

afterEach(() => {
  document.body.innerHTML = "";
  vi.clearAllMocks();
});
