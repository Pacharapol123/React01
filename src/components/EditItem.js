import { Form, Select, Input, InputNumber, Modal } from 'antd';
import { useEffect } from 'react';

export default function EditItem({ isOpen, item, onClose, onItemEdited }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isOpen && item) {
      form.setFieldsValue(item)
    }
  }, [isOpen, item, form]);

  const handleFormSubmit = () => {
    form.validateFields().then(formData => {
      onItemEdited({ ...item, ...formData });
      onClose();
    })
  }

  return (
    <Modal
      title="แก้ไขรายการ"
      open={isOpen}
      onOk={handleFormSubmit}
      onCancel={onClose}
      okText="บันทึก"
      cancelText="ยกเลิก"
    >
      <Form
        form={form}
        layout="horizontal"
        labelAlign='left'
      >
        <Form.Item
          name="type"
          label="ชนิด"
          rules={[{ required: true }]}
        >
          <Select
            allowClear
            style={{ width: "25%" }}
            options={[
              { value: 'income', label: 'รายรับ' },
              { value: 'expense', label: 'รายจ่าย' }
            ]}
          />
        </Form.Item>

        <Form.Item
          name="amount"
          label="จำนวนเงิน"
          rules={[{ required: true }]}
        >
          <InputNumber
            placeholder="จำนวนเงิน"
            style={{ width: "20%" }}
          />
        </Form.Item>

        <Form.Item
          name="note"
          label="หมายเหตุ"
          rules={[{ required: true }]}
        >
          <Input placeholder="หมายเหตุ" />
        </Form.Item>
      </Form>
    </Modal>
  )
}