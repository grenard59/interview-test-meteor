import React, { useState, useCallback } from "react";
import { Button, Popover } from "antd";
import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

import PropTypes from "prop-types";
import sortTree from "../algo/sortTree";

import { DisplaySortedList } from "./DisplaySortedList";

import { SortedObjectCollection } from "/imports/db/SortedObjectCollection";

export const createWorker = createWorkerFactory(() => sortTree);

export const SortObject = ({ id, object }) => {
  const [isSorting, setIsSorting] = useState(false);
  const [elapsedTime, setElapsedTime] = useState();
  const worker = useWorker(createWorker);

  const sortObject = useCallback(() => {
    setIsSorting(true);
    (async () => {
      const time = await worker.generateSortObject(object);
      SortedObjectCollection.insert({
        objectId: id,
        durationTime: time,
      });
      setElapsedTime(time);
      setIsSorting(false);
    })();
  }, [object]);

  return (
    <Popover
      placement="top"
      title={<DisplaySortedList id={id} />}
      trigger="hover"
    >
      <Button
        style={{ width: "100%" }}
        type="primary"
        loading={isSorting}
        onClick={sortObject}
      >
        {elapsedTime !== undefined ? `${elapsedTime} ms` : "Sort me"}
      </Button>
    </Popover>
  );
};

SortObject.propTypes = {
  id: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
};
