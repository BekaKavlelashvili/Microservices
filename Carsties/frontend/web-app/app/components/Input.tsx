import React from "react";
import { useController, UseControllerProps } from "react-hook-form";

type Props = {
  label: string;
  type?: string;
  showLabel?: string;
} & UseControllerProps;

export default function Input(props: Props) {
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
        <input
          placeholder={props.label}
          type={props.type}
          {...props}
          {...field}
          color={
            fieldState.error ? "failure" : !fieldState.isDirty ? "" : "success"
          }
          className={`border text-sm rounded-lg block w-full p-2.5 ${
            fieldState.error
              ? "border-red-500 text-red-900 placeholder-red-700 bg-red-50"
              : "border-green-300"
          }`}
        />
        {fieldState.error && (
          <p className="mt-1 text-sm text-red-600">
            {fieldState.error?.message}
          </p>
        )}
      </div>
    </div>
  );
}
