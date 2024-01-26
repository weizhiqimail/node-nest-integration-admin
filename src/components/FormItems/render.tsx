import { ItemProps, FormItemsType } from '@/components/FormItems/types';
import {
  Input,
  Select,
  Radio,
  Checkbox,
  CascaderSelect,
  NumberPicker,
  Switch,
  DatePicker,
  TimePicker,
  TreeSelect,
  Upload,
  DatePicker2,
  TimePicker2,
  Transfer,
  Rating,
  Search,
  Range,
} from '@alifd/next';
import React from 'react';

export function createFormItem(item: ItemProps) {
  let jsx: null | React.ReactNode = null;
  const componentProps = item.componentProps || {};
  switch (item.type) {
    case FormItemsType.input:
      jsx = <Input {...componentProps} />;
      break;
    case FormItemsType.inputPassword:
      jsx = <Input.Password {...componentProps} />;
      break;
    case FormItemsType.inputTextArea:
      jsx = <Input.TextArea {...componentProps} />;
      break;
    case FormItemsType.inputGroup:
      jsx = <Input.Group {...componentProps} />;
      break;
    case FormItemsType.select:
      jsx = <Select {...componentProps}></Select>;
      break;
    case FormItemsType.radio:
      jsx = <Radio {...componentProps}></Radio>;
      break;
    case FormItemsType.radioGroup:
      jsx = <Radio.Group {...componentProps}></Radio.Group>;
      break;
    case FormItemsType.check:
      jsx = <Checkbox {...componentProps}></Checkbox>;
      break;
    case FormItemsType.checkGroup:
      jsx = <Checkbox.Group {...componentProps}></Checkbox.Group>;
      break;
    case FormItemsType.cascaderSelect:
      jsx = <CascaderSelect {...componentProps}></CascaderSelect>;
      break;

    case FormItemsType.numberPicker:
      jsx = <NumberPicker {...componentProps}></NumberPicker>;
      break;

    case FormItemsType.switch:
      jsx = <Switch {...componentProps}></Switch>;
      break;

    case FormItemsType.datePicker:
      jsx = <DatePicker {...componentProps}></DatePicker>;
      break;
    case FormItemsType.datePickerYearPicker:
      jsx = <DatePicker.YearPicker {...componentProps}></DatePicker.YearPicker>;
      break;
    case FormItemsType.datePickerMonthPicker:
      jsx = (
        <DatePicker.MonthPicker {...componentProps}></DatePicker.MonthPicker>
      );
      break;
    case FormItemsType.datePickerWeekPicker:
      jsx = <DatePicker.WeekPicker {...componentProps}></DatePicker.WeekPicker>;
      break;
    case FormItemsType.datePickerRangePicker:
      jsx = (
        <DatePicker.RangePicker {...componentProps}></DatePicker.RangePicker>
      );
      break;

    case FormItemsType.datePicker2:
      jsx = <DatePicker2 {...componentProps}></DatePicker2>;
      break;
    case FormItemsType.datePicker2YearPicker:
      jsx = (
        <DatePicker2.YearPicker {...componentProps}></DatePicker2.YearPicker>
      );
      break;
    case FormItemsType.datePicker2MonthPicker:
      jsx = (
        <DatePicker2.MonthPicker {...componentProps}></DatePicker2.MonthPicker>
      );
      break;
    case FormItemsType.datePicker2WeekPicker:
      jsx = (
        <DatePicker2.WeekPicker {...componentProps}></DatePicker2.WeekPicker>
      );
      break;
    case FormItemsType.datePicker2QuarterPicker:
      jsx = (
        <DatePicker2.QuarterPicker
          {...componentProps}
        ></DatePicker2.QuarterPicker>
      );
      break;
    case FormItemsType.datePicker2RangePicker:
      jsx = (
        <DatePicker2.RangePicker {...componentProps}></DatePicker2.RangePicker>
      );
      break;

    case FormItemsType.timePicker:
      jsx = <TimePicker {...componentProps}></TimePicker>;
      break;
    case FormItemsType.timePicker2:
      jsx = <TimePicker2 {...componentProps}></TimePicker2>;
      break;
    case FormItemsType.timePicker2RangePicker:
      jsx = (
        <TimePicker2.RangePicker {...componentProps}></TimePicker2.RangePicker>
      );
      break;
    case FormItemsType.treeSelect:
      jsx = <TreeSelect {...componentProps}></TreeSelect>;
      break;

    case FormItemsType.upload:
      jsx = <Upload {...componentProps}></Upload>;
      break;
    case FormItemsType.uploadCard:
      jsx = <Upload.Card {...componentProps}></Upload.Card>;
      break;
    case FormItemsType.uploadDragger:
      jsx = <Upload.Dragger {...componentProps}></Upload.Dragger>;
      break;
    case FormItemsType.uploadSelecter:
      jsx = <Upload.Selecter {...componentProps}></Upload.Selecter>;
      break;

    case FormItemsType.transform:
      jsx = <Transfer {...componentProps}></Transfer>;
      break;
    case FormItemsType.rating:
      jsx = <Rating {...componentProps}></Rating>;
      break;
    case FormItemsType.search:
      jsx = <Search {...componentProps}></Search>;
      break;
    case FormItemsType.range:
      jsx = <Range {...componentProps}></Range>;
      break;
  }

  return jsx;
}
