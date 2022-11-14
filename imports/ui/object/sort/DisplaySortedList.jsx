import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { List } from "antd";
import PropTypes from "prop-types";

import { SortedObjectCollection } from "/imports/db/SortedObjectCollection";

export const DisplaySortedList = ({ id }) => {
  const { trees } = useTracker(() => {
    return {
      trees: SortedObjectCollection.find({ objectId: id }).fetch(),
    };
  });

  if (!trees) {
    return <span>Loading</span>;
  }

  return (
    <List
      dataSource={trees}
      renderItem={(item) => (
        <List.Item>{`Duration time : ${item.durationTime}`}</List.Item>
      )}
    ></List>
  );
};

DisplaySortedList.propTypes = {
  id: PropTypes.string.isRequired,
};
