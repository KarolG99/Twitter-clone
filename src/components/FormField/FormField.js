import React from "react";

const FormField = React.forwardRef(({
  label,
  id,
  name,
  type,
  accept,
  value,
  onChange,
  rows,
  isTextArea,
  placeholder,
  hidden
}, ref) => {
  return (
    <div className="flex flex-col">
      <label className=" text-sm ml-[4%] cursor-pointer" htmlFor={id}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          // className="border-[1px] border-black rounded-md my-1 w-[95%] self-center p-1.5 text-sm"
          className=" border-none overflow-auto outline-none resize-none text-sm my-4 bg-navy text-white"
          id={id}
          name={name}
          type={type}
          accept={accept}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
        />
      ) : (
        <>
        <input
        className="border-none overflow-auto outline-none resize-none text-sm my-4 bg-navy text-white"
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          hidden={hidden}
          ref={ref}
          placeholder={placeholder}
        />
      </>
      )}
    </div>
  );
});

export default FormField;
