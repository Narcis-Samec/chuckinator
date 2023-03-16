import { mount } from "@vue/test-utils";
import CatSelector from "@/components/atoms/CatSelector";
import Vuex from "vuex";

describe("CatSelector", () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      fetchCategories: jest.fn(),
      changeCat: jest.fn(),
    };

    store = new Vuex.Store({
      state: {
        categories: ["Category 1", "Category 2"],
      },
      actions,
    });
  });

  it("dispatches the fetchCategories action on mount", () => {
    mount(CatSelector, {
      global: {
        plugins: [store],
      },
    });

    expect(actions.fetchCategories).toHaveBeenCalled();
  });

  it("maps the categories state to a computed property", () => {
    const wrapper = mount(CatSelector, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.vm.categories).toEqual(["Category 1", "Category 2"]);
  });
});
