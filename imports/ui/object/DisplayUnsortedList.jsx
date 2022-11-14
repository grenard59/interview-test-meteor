import React from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { UnSortedObjectCollection } from "/imports/db/UnSortedObjectCollection";
import { Space, Table } from "antd";

import { SortObject } from "./sort/SortObject";
import { SortAllObjects } from "./sort/SortAllObjects";

function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const DisplayUnsortedList = () => {
  const { unSortedObject, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe("unSortedObject");
    return {
      unSortedObject: UnSortedObjectCollection.find().fetch(),
      isLoading: !subscription.ready(),
    };
  });

  const columns = [
    {
      title: "keyCount",
      dataIndex: "keyCount",
      key: "keyCount",
      sorter: (a, b) => a.keyCount - b.keyCount,
    },
    {
      title: "depth",
      dataIndex: "depth",
      key: "depth",
      sorter: (a, b) => a.depth - b.depth,
    },
    {
      title: "generationTime",
      dataIndex: "generationTime",
      key: "generationTime",
      sorter: (a, b) => a.generationTime - b.generationTime,
      render: (_, { generationTime }) => <span>{generationTime} ms</span>,
    },
    {
      title: "size",
      dataIndex: "size",
      key: "size",
      sorter: (a, b) => a.size - b.size,
      render: (_, { size }) => <span>{formatBytes(size)}</span>,
    },
    {
      title: "Sort Object",
      key: "sortObject",
      render: (_, { object, _id }) => <SortObject object={object} id={_id} />,
    },
  ];

  return (
    <Space
      style={{ margin: "10px 0" }}
      display="flex"
      size={20}
      direction="vertical"
      align="center"
    >
      <SortAllObjects shouldBeDisable={isLoading} objects={unSortedObject} />
      <Table
        rowKey="_id"
        dataSource={unSortedObject}
        loading={isLoading}
        columns={columns}
      />
    </Space>
  );
};
