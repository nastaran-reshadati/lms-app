/** @format */

"use client";
import { useState } from "react";
import { TabsProps } from "./tabs.types";

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activaTab, setActivaTab] = useState<number>(0);

  const handleActiveTab = (index: number) => {
    setActivaTab(index);
  };

  return (
    <>
      <div className="tabs">
        <div className="tab-labels">
          {tabs?.map((tab, index) => (
            <a
              key={`tab-${index}`}
              className={`tab-label ${index === activaTab ? "active-tab" : ""}`}
              onClick={() => handleActiveTab(index)}
            >
              {tab.label}
            </a>
          ))}
        </div>
        {tabs?.map((tab, index) => (
          <div
            key={`tab-${tab.content}`}
            className="tab-content"
            style={{ display: activaTab !== index ? "none" : "block" }}
          >
            {typeof tab.content === "string" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: tab.content as TrustedHTML,
                }}
              ></div>
            ) : (
              <div>{tab.content}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
