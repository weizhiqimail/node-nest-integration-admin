import React from 'react';
import { ItemProps as FormItemProps } from '@alifd/next/types/form';

export enum FormItemsType {
  input,
  inputPassword,
  inputTextArea,
  inputGroup,

  select,
  radio,
  radioGroup,
  check,
  checkGroup,
  cascaderSelect,
  numberPicker,
  switch,

  datePicker,
  datePickerMonthPicker,
  datePickerRangePicker,
  datePickerWeekPicker,
  datePickerYearPicker,

  datePicker2,
  datePicker2YearPicker,
  datePicker2MonthPicker,
  datePicker2WeekPicker,
  datePicker2QuarterPicker,
  datePicker2RangePicker,

  timePicker,
  timePicker2,
  timePicker2RangePicker,
  treeSelect,

  upload,
  uploadCard,
  uploadDragger,
  uploadSelecter,

  transform,
  rating,
  search,
  range,
}

export interface ItemProps {
  type: FormItemsType;
  label?: React.ReactNode;
  name: string;
  componentProps?: Record<any, any>;
  formItemProps?: FormItemProps;
}
