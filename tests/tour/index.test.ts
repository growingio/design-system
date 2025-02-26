import { test, expect } from "bun:test";
import { fireEvent, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "../../stories/data-display/tour/index.stories";

const { Basic } = composeStories(stories);

test("should render the tour component", async () => {
  await Basic.run();

  const beginTourButton = screen.getByText("Begin Tour");
  fireEvent.click(beginTourButton);
  expect(screen.getByText("The title of step 1")).toBeInTheDocument();

  // find the next step button
  const nextStepButton = screen.getByText("Next");
  fireEvent.click(nextStepButton);
  expect(screen.getByText("The title of step 2")).toBeInTheDocument();
  expect(screen.getByText("Previous")).toBeInTheDocument();

  // click next and find step 3
  fireEvent.click(nextStepButton);
  expect(screen.getByText("The title of step 3")).toBeInTheDocument();

  // click previous and find step 2
  fireEvent.click(screen.getByText("Previous"));
  expect(screen.getByText("The title of step 2")).toBeInTheDocument();

  // double click next and finish
  fireEvent.click(nextStepButton);
  fireEvent.click(nextStepButton);
  expect(screen.queryByText("The title of step 3")).not.toBeInTheDocument();
});
