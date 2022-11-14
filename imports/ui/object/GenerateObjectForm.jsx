import React, { useState } from "react";
import { Button, Form, InputNumber } from "antd";
import sizeof from "object-sizeof";
import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

import { UnSortedObjectCollection } from "/imports/db/UnSortedObjectCollection";

import generateTree from "./algo/generateTree";
export const createWorker = createWorkerFactory(() => generateTree);

export const GenerateObjectForm = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const worker = useWorker(createWorker);

  const onFinish = ({ rootKeyCount, maxDepth }) => {
    (async () => {
      setIsGenerating(true);
      const start = Date.now();
      const tree = await worker.generateUnsortedObject(
        rootKeyCount,
        maxDepth,
        {}
      );
      const end = Date.now();
      const timeDiff = end - start;
      UnSortedObjectCollection.insert({
        depth: maxDepth,
        keyCount: rootKeyCount,
        size: sizeof(tree),
        generationTime: timeDiff,
        object: tree,
      });
      setIsGenerating(false);
    })();
  };

  return (
    <Form
      name="basic"
      initialValues={{ rootKeyCount: 1, maxDepth: 1 }}
      onFinish={onFinish}
      layout={"inline"}
    >
      <Form.Item
        label="rootKeyCount"
        name="rootKeyCount"
        rules={[{ required: true }]}
      >
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item label="maxDepth" name="maxDepth" rules={[{ required: true }]}>
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isGenerating}>
          Generate
        </Button>
      </Form.Item>
    </Form>
  );
};
