/** @format */
"use client";
import { useState } from "react";
import { AccordionProps } from "./accordion.types";
import { IconChevronDown, IconChevronUp } from "../icons/icons";

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion !== index ? index : null);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={`accordion-${item.id}`} className="accordion-item">
          <div className="flex justify-between">
            <div className="accordion-title">
              <button
                onClick={() => toggleAccordion(index)}
                type="button"
                className="inline-flex w-full justify-between items-center pointer"
              >
                <span>{item.title}</span>
                {activeAccordion === index ? (
                  <IconChevronUp width={18} />
                ) : (
                  <IconChevronDown width={18} />
                )}
              </button>
            </div>
          </div>
          {activeAccordion === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
