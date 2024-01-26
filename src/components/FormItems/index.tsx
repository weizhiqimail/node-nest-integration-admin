import { Field, Form } from '@alifd/next';

import { createFormItem } from '@/components/FormItems/render';
import { ItemProps } from '@/components/FormItems/types';

interface Props {
  itemList: Array<ItemProps>;
  field?: Field;
}
function FormItems(props: Props) {
  const { itemList } = props;
  return itemList.map((item) => {
    return (
      <Form.Item
        key={`${item.name}_${item.label}`}
        name={item.name}
        label={item.label}
        colon
        {...(item.formItemProps || {})}
      >
        {createFormItem(item)}
      </Form.Item>
    );
  });
}

export default FormItems;
