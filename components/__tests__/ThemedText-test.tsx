import * as React from "react";
import renderer from "react-test-renderer";

import { ThemedText } from "../Component_de_base/ThemedText";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<ThemedText>Snapshot test!</ThemedText>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
