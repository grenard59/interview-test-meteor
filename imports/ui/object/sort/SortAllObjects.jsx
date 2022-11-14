import React, { useState, useCallback } from "react";
import { Button } from "antd";
import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

import PropTypes from "prop-types";
import sortTree from "../algo/sortTree";

export const createWorker = createWorkerFactory(() => sortTree);

export const SortAllObjects = ({ objects, shouldBeDisable }) => {
  const [isSorting, setIsSorting] = useState(false);
  const [elapsedTime, setElapsedTime] = useState();
  const worker = useWorker(createWorker);

  const sortObjects = useCallback(() => {
    (async () => {
      setIsSorting(true);
      const time = await Promise.all(
        objects.map((obj) => worker.generateSortObject(obj.object))
      );
      setElapsedTime(time.reduce((prev, current) => (current += prev), 0));
      setIsSorting(false);
    })();
  }, [objects]);

  return (
    <Button
      style={{ width: "100%" }}
      type="primary"
      loading={isSorting}
      disabled={shouldBeDisable}
      onClick={sortObjects}
    >
      {elapsedTime !== undefined
        ? `Sorting time : ${elapsedTime} ms`
        : "Sort everything"}
    </Button>
  );
};

SortAllObjects.propTypes = {
  objects: PropTypes.arrayOf(PropTypes.object),
  shouldBeDisable: PropTypes.bool,
};
