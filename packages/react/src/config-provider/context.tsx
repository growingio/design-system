import React, { createContext } from "react";
import useMergeProps from "@arco-design/web-react/es/_util/hooks/useMergeProps";
import { ConfigProviderProps } from "./interface";
import defaultLocale from "../locale/default";
import { Empty } from "..";

function renderEmpty(componentName?: string) {
  switch (componentName) {
    default:
      return <Empty />;
  }
}

export const DefaultConfigProviderProps: ConfigProviderProps = {
  locale: defaultLocale,
  prefixCls: "arco",
  getPopupContainer: () => document.body,
  size: "default",
  renderEmpty,
  focusLock: {
    modal: { autoFocus: true },
    drawer: { autoFocus: true },
  },
};

export const ConfigContext = createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || "arco"}-${componentName}`,
  ...DefaultConfigProviderProps,
});

export default function ConfigProvider(baseProps: ConfigProviderProps) {
  const props = useMergeProps(baseProps, DefaultConfigProviderProps, {});
  const { children, ...restProps } = props;

  return (
    <ConfigContext.Provider
      value={{
        ...restProps,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
