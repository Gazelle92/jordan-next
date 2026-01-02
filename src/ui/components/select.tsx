"use client";

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";
import ArrowBottom from "@/ui/svg/arrow_bottom.svg";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  value: Option;
  onChange: (value: Option) => void;
  className?: string;
};

export const Select = ({ options, value, onChange, className }: SelectProps) => {
  return (
    <Listbox value={value} onChange={onChange} >
      <div className={clsx("relative", className)}>
        <ListboxButton className="outline-none focus:outline-none focus:ring-0 border w-27 text-start flex justify-between items-center px-2 h-6 text-[13px]">
          {value.label}
          <ArrowBottom className="size-2" />
        </ListboxButton>
        <ListboxOptions className="absolute top-[100%] outline-none focus:outline-none focus:ring-0 border border-t-0 w-27 text-start text-[13px] p-0">
          {options.map((option) => option.value === value.value ? null : (
            <ListboxOption as={Fragment} key={option.value} value={option}>
              <li
                style={{ listStyle: "none" }}
                className={clsx(
                  "cursor-pointer px-2 h-6 flex items-center bg-foreground text-background",
                )}
              >
                {option.label}
              </li>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};
