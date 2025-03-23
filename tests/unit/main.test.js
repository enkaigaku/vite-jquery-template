import { describe, test, expect, beforeEach, vi } from "vitest";
import $ from "jquery";
import { init } from "../../src/assets/js/main.js";

describe("Test entry page", () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="content"></div>`;
    window.alert = vi.fn();
    init();
  });

  test("should render content correctly", () => {
    init();
    expect($("#content").find("p").length).toBe(1);
    expect($("#content p").text()).toBe(
      "This is the content inserted by jQuery"
    );
    expect($("#clickMe").length).toBe(1);
  });

  test("should show alert when button is clicked", () => {
    $("#clickMe").trigger("click");

    expect(window.alert).toHaveBeenCalledWith("you clicked me!");
  });
});
