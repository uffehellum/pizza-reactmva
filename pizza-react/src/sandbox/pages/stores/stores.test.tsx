import React, { Component } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("../../../data", () => ({
  __esModule: true,
  default: {
    stores: {
      AAA: {
        orders: []
      },
      BBB: {
        orders: []
      }
    }
  }
}));


jest.mock("../../../components/StorePane", () => ({
  __esModule: true,
  default: ({stores}:{stores:any[]}) => 
  (<div className='StorePane'>storepane goes here</div>),
}));

import Stores from "./stores";

describe("stores", () => {
  let wrapper: Enzyme.ShallowWrapper;

  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
    wrapper = shallow(<Stores />);
  });
 
  it("header matches", () => {
    expect(wrapper.find("h1").text()).toEqual("Sample Store Pane");
  });

  it("includes storepane", () => {
    const storepane = wrapper.find("default")
    expect(storepane.name()).toEqual("default");
    expect(storepane.text()).toEqual('<default />') // shallow
  });

  it("snapshot", () => {
    expect(wrapper).toMatchInlineSnapshot(`
ShallowWrapper {
  Symbol(enzyme.__root__): [Circular],
  Symbol(enzyme.__unrendered__): <stores />,
  Symbol(enzyme.__renderer__): Object {
    "batchedUpdates": [Function],
    "getNode": [Function],
    "render": [Function],
    "simulateError": [Function],
    "simulateEvent": [Function],
    "unmount": [Function],
  },
  Symbol(enzyme.__node__): Object {
    "instance": null,
    "key": undefined,
    "nodeType": "host",
    "props": Object {
      "children": Array [
        <h1>
          Sample Store Pane
        </h1>,
        <default
          stores={
            Object {
              "AAA": Object {
                "orders": Array [],
              },
              "BBB": Object {
                "orders": Array [],
              },
            }
          }
        />,
      ],
    },
    "ref": null,
    "rendered": Array [
      Object {
        "instance": null,
        "key": undefined,
        "nodeType": "host",
        "props": Object {
          "children": "Sample Store Pane",
        },
        "ref": null,
        "rendered": "Sample Store Pane",
        "type": "h1",
      },
      Object {
        "instance": null,
        "key": undefined,
        "nodeType": "function",
        "props": Object {
          "stores": Object {
            "AAA": Object {
              "orders": Array [],
            },
            "BBB": Object {
              "orders": Array [],
            },
          },
        },
        "ref": null,
        "rendered": null,
        "type": [Function],
      },
    ],
    "type": "div",
  },
  Symbol(enzyme.__nodes__): Array [
    Object {
      "instance": null,
      "key": undefined,
      "nodeType": "host",
      "props": Object {
        "children": Array [
          <h1>
            Sample Store Pane
          </h1>,
          <default
            stores={
              Object {
                "AAA": Object {
                  "orders": Array [],
                },
                "BBB": Object {
                  "orders": Array [],
                },
              }
            }
          />,
        ],
      },
      "ref": null,
      "rendered": Array [
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "host",
          "props": Object {
            "children": "Sample Store Pane",
          },
          "ref": null,
          "rendered": "Sample Store Pane",
          "type": "h1",
        },
        Object {
          "instance": null,
          "key": undefined,
          "nodeType": "function",
          "props": Object {
            "stores": Object {
              "AAA": Object {
                "orders": Array [],
              },
              "BBB": Object {
                "orders": Array [],
              },
            },
          },
          "ref": null,
          "rendered": null,
          "type": [Function],
        },
      ],
      "type": "div",
    },
  ],
  Symbol(enzyme.__options__): Object {
    "adapter": ReactSixteenAdapter {
      "options": Object {
        "enableComponentDidUpdateOnSetState": true,
        "lifecycles": Object {
          "componentDidUpdate": Object {
            "onSetState": true,
          },
          "getDerivedStateFromProps": true,
          "getSnapshotBeforeUpdate": true,
          "setState": Object {
            "skipsComponentDidUpdateOnNullish": true,
          },
        },
      },
    },
  },
}
`);
  });
});
