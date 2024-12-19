import { Button, Form, Select, Input, InputNumber, Modal} from 'antd';
import { useEffect } from 'react';

export default function EditItem(props) {
    const [form] = Form.useForm();
    useEffect(() => {
        if (props.IsOpen && props.item) {
            form.setFieldsValue(props.Item)
        }
    });
    const handleformSubmit = () => {
        form.validateFields().then(formData => {
            props.onEditItem(formData);
            props.onClose();
        })
    }
    return (
    <Form layout="inline" onFinish={props.onEditItem}>
      <Form.Item
        name="type"
        label="ชนิด"
        rules={[{ required: true }]}
      >
        <Select
          allowClear
          style={{ width: "100px" }}
          options={[
            {
              value: 'income',
              label: 'รายรับ',
            },
            {
              value: 'expense',
              label: 'รายจ่าย',
            },
          ]}
        />
      </Form.Item>

      <Form.Item
        name="amount"
        label="จำนวนเงิน"
        rules={[{ required: true }]}>
        <InputNumber placeholder="จำนวนเงิน" />
      </Form.Item>

      <Form.Item
        name="note"
        label="หมายเหตุ"
        rules={[{ required: true }]}>
        <Input placeholder="Note" />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit">Edit</Button>
      </Form.Item>
    </Form>
    )
}

