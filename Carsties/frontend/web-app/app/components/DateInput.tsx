import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useController, UseControllerProps } from "react-hook-form";
import DatePicker, { DatePickerProps } from "react-datepicker";

type Props = {
  label: string;
  type?: string;
  showLabel?: boolean;
} & UseControllerProps &
  DatePickerProps;

export default function DateInput(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });

  return (
    <div className="mb-3">
      {props.showLabel && (
        <div className="mb-2 block">
          <label
            htmlFor={field.name}
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            {props.label}
          </label>
        </div>
      )}
      <div>
        <DatePicker
          {...props}
          {...field}
          placeholderText={props.label}
          selected={field.value}
          className={`border text-sm rounded-lg block w-full p-2.5 flex-col ${
            fieldState.error
              ? "bg-red-50 border-red-500 text-red-900"
              : !fieldState.invalid && fieldState.isDirty
              ? "bg-green-50 border-green-500 text-green-900"
              : ""
          }`}
        />
        {fieldState.error && (
          <div className="text-red-500 text-sm">{fieldState.error.message}</div>
        )}
      </div>
    </div>
  );
}
